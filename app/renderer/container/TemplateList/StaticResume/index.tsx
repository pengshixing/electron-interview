/*
 * @Description:
 */
import React from 'react';
import './index.less';
import * as UseTemplateList from '@src/templates';
import Footer from '../Footer';
import ScrollBox from '@common/components/ScrollBox';
import useResumeModel from '@src/store/resumeModel';
import { InterviewInfoContext } from '../../../components/ResumeContent';

function StaticResume() {
  const store = useResumeModel();
  /**
   * TODO: 以更新store的形式更新简历模板
   * 后续更改为接口的形式处理
   */
  return (
    <div styleName="container">
      <ScrollBox>
        <InterviewInfoContext.Provider value={store}>
          <UseTemplateList.TemplateOne />
        </InterviewInfoContext.Provider>
        <Footer />
      </ScrollBox>
    </div>
  );
}

export default StaticResume;
