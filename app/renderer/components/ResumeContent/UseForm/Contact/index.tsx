/**
 * @description 联系方式Form
 */
import React from 'react';
import './index.less';
import Modal from '@common/components/Modal';
import Input from '@common/components/Input';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}
function Contact({ onClose }: IProps) {
  const store = useResumeModel();
  const { contact, updateStore } = store;

  const submitHandle = () => {
    onClose();
  };

  return (
    <Modal.Dialog
      title="联系方式"
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
            <span className="mr-1.5 text-warning">*</span>电 话 ：
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) => {
                updateStore('contact', { ...contact, phone: e.target.value });
              }}
              value={contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear
            />
          </div>
        </div>
        <div className="flex mb-3">
          <div className="w-20 mt-3 text-black text-opacity-60">
            <span className="mr-1.5 text-warning">*</span>邮 箱 ：
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) => {
                updateStore('contact', { ...contact, email: e.target.value });
              }}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear
            />
          </div>
        </div>
        <div className="flex mb-3">
          <div className="w-20 mt-3 text-black text-opacity-60">
            <span className="mr-1.5 text-warning" style={{ opacity: 0 }}>
              *
            </span>
            Github ：
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) => {
                updateStore('contact', { ...contact, github: e.target.value });
              }}
              value={contact?.github || ''}
              placeholder="Github 地址"
              allowClear
            />
          </div>
        </div>
        <div className="flex mb-3">
          <div className="w-20 mt-3 text-black text-opacity-60">
            <span className="mr-1.5 text-warning" style={{ opacity: 0 }}>
              *
            </span>
            Juejin ：
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) => {
                updateStore('contact', { ...contact, juejin: e.target.value });
              }}
              value={contact?.juejin || ''}
              placeholder="掘金地址"
              allowClear
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Contact;
