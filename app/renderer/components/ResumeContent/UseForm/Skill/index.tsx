/**
 * @description 技能清单Form
 */
import React from 'react';
import './index.less';
import Modal from '@common/components/Modal';
import Input from '@common/components/Input';
import RecommendSkill from '@common/constants/skill';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}
function Skill({ onClose }: IProps) {
  const store = useResumeModel();
  const { skill, updateStore } = store;

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
            <span className="mr-1.5 text-warning" style={{ opacity: 0 }}>
              *
            </span>
            技 能 ：
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center text-black text-opacity-60">
              {RecommendSkill.map((recommend) => {
                return (
                  <div
                    className="py-1 px-2 rounded-s mr-2 mb-3 cursor-pointer border border-solid hover:opacity-80"
                    key={recommend.uid}
                    style={{
                      color: recommend?.styles?.font,
                      borderColor: recommend?.styles?.font,
                      backgroundColor: recommend?.styles?.bg,
                    }}
                    onClick={() => {
                      const value = `${skill}${skill ? '｜' : ''}${recommend.label}`;
                      updateStore('skill', value);
                    }}
                  >
                    {recommend.label}
                  </div>
                );
              })}
            </div>
            <Input
              type="textarea"
              onChange={(e) => {
                updateStore('skill', e.target.value);
              }}
              rows={5}
              value={skill}
              placeholder="例如 Vue、React"
              allowClear
            />
            <div className="text-warning mt-2"> * 多个技能以 | 分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Skill;
