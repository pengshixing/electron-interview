/**
 * @description 工作期望Form
 */
import React from 'react';
import './index.less';
import Modal from '@common/components/Modal';
import Input from '@common/components/Input';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}
function Work({ onClose }: IProps) {
  const store = useResumeModel();
  const { work, updateStore } = store;

  const submitHandle = () => {
    onClose();
  };

  return (
    <Modal.Dialog
      title="工作期望"
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
            <span className="mr-1.5 text-warning">*</span>职 位 ：
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) => {
                updateStore('work', { ...work, job: e.target.value });
              }}
              value={work?.job || ''}
              placeholder="求职岗位"
              allowClear
            />
          </div>
        </div>
        <div className="flex mb-3">
          <div className="w-20 mt-3 text-black text-opacity-60">
            <span className="mr-1.5 text-warning">*</span>城 市 ：
          </div>
          <div className="flex-1">
            <Input
              onChange={(e) => {
                updateStore('work', { ...work, city: e.target.value });
              }}
              value={work?.city || ''}
              placeholder="请输入意愿城市"
              allowClear
            />
            <div className="text-warning mt-2"> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Work;
