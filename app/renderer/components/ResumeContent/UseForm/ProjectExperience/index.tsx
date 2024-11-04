/**
 * @description 项目经验Form
 */
import React from 'react';
import Modal from '@common/components/Modal';
import Form from './Form';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import useResumeModel from '@src/store/resumeModel';

interface IProps {
  onClose: () => void;
}
function ProjectExperience({ onClose }: IProps) {
  const store = useResumeModel();
  const { projectExperience, updateStore } = store;

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateStore<'projectExperience', AdapterExperienceType[]>('projectExperience', newDataList);
  };

  const submitHandle = () => {
    onClose();
  };

  return (
    <Modal.Dialog
      title="项目经验"
      showFooter
      config={{
        cancelBtn: {
          callback: onClose,
        },
        submitBtn: {
          callback: submitHandle,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.project(projectExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </Modal.Dialog>
  );
}

export default ProjectExperience;
