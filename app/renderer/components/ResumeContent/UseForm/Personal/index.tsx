/**
 * @description 个人信息Form
 */
import React from 'react';
import './index.less';
import Modal from '@common/components/Modal';
import Input from '@common/components/Input';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}
function Personal({ onClose }: IProps) {
  const store = useResumeModel();
  const { base, hobby, updateStore } = store;

  const submitHandle = () => {
    onClose();
  };

  return (
    <Modal.Dialog
      title="个人信息"
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
            <span styleName="require">*</span>姓 名 ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('base', { ...base, username: e.target?.value || '' });
              }}
              value={base?.username || ''}
              placeholder="请输入姓名"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>籍 贯 ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('base', { ...base, hometown: e.target?.value || '' });
              }}
              value={base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            爱 好 ：
          </div>
          <div styleName="right">
            <Input
              type="textarea"
              onChange={(e) => {
                updateStore('hobby', e.target?.value || '');
              }}
              rows={5}
              value={hobby || ''}
              placeholder="你有什么特长爱好呢"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Personal;
