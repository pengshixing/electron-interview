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
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>电 话 ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('contact', { ...contact, phone: e.target.value });
              }}
              value={contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>邮 箱 ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('contact', { ...contact, email: e.target.value });
              }}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Github ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('contact', { ...contact, github: e.target.value });
              }}
              value={contact?.github || ''}
              placeholder="Github 地址"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Juejin ：
          </div>
          <div styleName="right">
            <Input
              onChange={(e) => {
                updateStore('contact', { ...contact, juejin: e.target.value });
              }}
              value={contact?.juejin || ''}
              placeholder="掘金地址"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Contact;
