/**
 * @description 荣誉证书Form
 */
import React from 'react';
import './index.less';
import Modal from '@common/components/Modal';
import Input from '@common/components/Input';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}

function Certificate({ onClose }: IProps) {
  const store = useResumeModel();
  const { certificate, updateStore } = store;

  const submitHandle = () => {
    onClose();
  };

  return (
    <Modal.Dialog
      title="荣誉证书"
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
            <span styleName="require">*</span>证 书 ：
          </div>
          <div styleName="right">
            <Input
              type="textarea"
              onChange={(e) => {
                updateStore('certificate', e.target.value.split('|'));
              }}
              rows={5}
              value={certificate?.join('|') || ''}
              placeholder="互联网+大赛一等奖|掘金大学骰王|互联网喝酒大赛进步奖"
              allowClear={true}
            />

            <div styleName="tips"> * 多个证书以 | 分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Certificate;
