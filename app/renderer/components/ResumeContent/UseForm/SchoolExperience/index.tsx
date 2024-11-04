/**
 * @description 在校经历Form
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
function SchoolExperience({ onClose }: IProps) {
  const store = useResumeModel();
  const { schoolExperience, updateStore } = store;

  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateStore<'schoolExperience', AdapterExperienceType[]>('schoolExperience', newDataList);
  };

  const submitHandle = () => {
    onClose();
  };

  return (
    <Modal.Dialog
      title="在校经历"
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
      <Wrapper dataList={AdapterExperience.school(schoolExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </Modal.Dialog>
  );
}

export default SchoolExperience;
