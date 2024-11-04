/**
 * @description 教育信息Form
 */
import React from 'react';
import './index.less';
import Modal from '@common/components/Modal';
import Input from '@common/components/Input';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}
function Education({ onClose }: IProps) {
  const store = useResumeModel();
  const { base, updateStore } = store;

  const submitHandle = () => {
    onClose();
  };

  return (
    <Modal.Dialog
      title="教育信息"
      showFooter
      config={{
        cancelBtn: {
          callback: onClose,
        },
        submitBtn: {
          callback: submitHandle,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学 校 ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('base', { ...base, school: e.target?.value || '' });
              }}
              value={base?.school || ''}
              placeholder="请输入贵校"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>专 业 ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('base', { ...base, major: e.target?.value || '' });
              }}
              value={base?.major || ''}
              placeholder="请输入专业"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学 位 ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('base', { ...base, degree: e.target?.value || '' });
              }}
              value={base?.degree || ''}
              placeholder="学士？硕士？博士？"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>学 年 ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  beginTime: e.target.value,
                };
                updateStore('base', { ...base, onSchoolTime: nextTime });
              }}
              value={base?.onSchoolTime?.beginTime || ''}
              placeholder="2013.09.01"
              allowClear={true}
              style={{ width: 300 }}
            />
            <span styleName="line">-</span>
            <Input
              onChange={(e) => {
                const nextTime = {
                  ...base?.onSchoolTime,
                  endTime: e.target.value,
                };
                updateStore('base', { ...base, onSchoolTime: nextTime });
              }}
              value={base?.onSchoolTime?.endTime || ''}
              placeholder="2017.06.30"
              style={{ width: 300 }}
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Education;
