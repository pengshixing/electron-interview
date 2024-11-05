/**
 * @description 个人评价Form
 */
import React from 'react';
import './index.less';
import Modal from '@common/components/Modal';
import Input from '@common/components/Input';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}

function Evaluation({ onClose }: IProps) {
  const store = useResumeModel();
  const { evaluation, updateStore } = store;

  const submitHandle = () => {
    onClose();
  };

  return (
    <Modal.Dialog
      title="个人评价"
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
      <div className="text-sm">
        <div className="flex mb-3">
          <div className="w-20 mt-3 text-black text-opacity-60">
            <span className="mr-1.5 text-warning">*</span>评 价 ：
          </div>
          <div className="flex-1">
            <Input
              type="textarea"
              onChange={(e) => {
                updateStore('evaluation', e.target.value);
              }}
              rows={5}
              value={evaluation || ''}
              placeholder="夸一夸自己有什么亮点"
              allowClear
            />
            <div className="text-warning mt-2 text-xs"> * 可通过 | 分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Evaluation;
