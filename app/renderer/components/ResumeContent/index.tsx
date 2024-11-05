import React, { useEffect, useState } from 'react';
import './index.less';
import ScrollBox from '@common/components/ScrollBox';
import * as UseTemplateList from '@src/templates';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';
import CertificateForm from './UseForm/Certificate';
import ContactForm from './UseForm/Contact';
import EducationForm from './UseForm/Education';
import EvaluationForm from './UseForm/Evaluation';
import PersonalForm from './UseForm/Personal';
import SkillForm from './UseForm/Skill';
import WorkForm from './UseForm/Work';
import ProjectExperience from './UseForm/ProjectExperience';
import SchoolExperience from './UseForm/SchoolExperience';
import WorkExperience from './UseForm/WorkExperience';
import useResumeModel, { type State } from '@src/store/resumeModel';

export const InterviewInfoContext = React.createContext<State>({} as State);

function ResumeContent() {
  const store = useResumeModel();

  const [formName, setFormName] = useState<keyof typeof RESUME_TOOLBAR_MAPS | ''>('');
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);
  /**
   * @description 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  };

  const renderModal = (key: keyof typeof RESUME_TOOLBAR_MAPS) => {
    const ModalMap = {
      certificate: <CertificateForm onClose={onClose} />,
      contact: <ContactForm onClose={onClose} />,
      education: <EducationForm onClose={onClose} />,
      evaluation: <EvaluationForm onClose={onClose} />,
      personal: <PersonalForm onClose={onClose} />,
      skill: <SkillForm onClose={onClose} />,
      workPrefer: <WorkForm onClose={onClose} />,
      projectExperience: <ProjectExperience onClose={onClose} />,
      schoolExperience: <SchoolExperience onClose={onClose} />,
      workExperience: <WorkExperience onClose={onClose} />,
    };
    return ModalMap[key];
  };

  return (
    <ScrollBox>
      <InterviewInfoContext.Provider value={store}>
        <UseTemplateList.TemplateOne />
      </InterviewInfoContext.Provider>
      {showFormModal && formName && renderModal(formName)}
    </ScrollBox>
  );
}
export default ResumeContent;
