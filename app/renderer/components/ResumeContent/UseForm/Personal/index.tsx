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
      <div className="text-sm">
        <div className="flex mb-3">
          <div className="w-20 mt-3 text-black text-opacity-60">
            <span className="mr-1.5 text-warning">*</span>姓 名 ：
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) => {
                updateStore('base', { ...base, username: e.target?.value || '' });
              }}
              value={base?.username || ''}
              placeholder="请输入姓名"
              allowClear
            />
          </div>
        </div>
        <div className="flex mb-3">
          <div className="w-20 mt-3 text-black text-opacity-60">
            <span className="mr-1.5 text-warning">*</span>籍 贯 ：
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) => {
                updateStore('base', { ...base, hometown: e.target?.value || '' });
              }}
              value={base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear
            />
          </div>
        </div>
        <div className="flex mb-3">
          <div className="w-20 mt-3 text-black text-opacity-60">
            <span className="mr-1.5 text-warning" style={{ opacity: 0 }}>
              *
            </span>
            爱 好 ：
          </div>
          <div className="flex-1">
            <Input
              type="textarea"
              onChange={(e) => {
                updateStore('hobby', e.target?.value || '');
              }}
              rows={5}
              value={hobby || ''}
              placeholder="你有什么特长爱好呢"
              allowClear
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Personal;
