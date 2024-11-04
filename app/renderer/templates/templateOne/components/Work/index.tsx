/**
 * @desc 工作经历
 */
import { InterviewInfoContext } from '@src/components/ResumeContent';
import {
  CommonContent,
  FullWidthWrap,
  ProjectComponentFlexWrap,
  ProjectComponentLabel,
  ProjectComponentLeftContent,
  ProjectComponentList,
  ProjectComponentRightContent,
} from '@src/templates/styles/template-one';
import React, { useContext } from 'react';

function Work() {
  const { workExperience } = useContext(InterviewInfoContext);
  return (
    <FullWidthWrap>
      <ProjectComponentLabel>工作经历 Post</ProjectComponentLabel>
      <ProjectComponentList>
        {workExperience.map((item) => (
          <ProjectComponentFlexWrap key={item.department}>
            <ProjectComponentLeftContent>
              <CommonContent>
                {item.beginTime}-{item.endTime}
              </CommonContent>
              <CommonContent>{item.post}</CommonContent>
            </ProjectComponentLeftContent>
            <ProjectComponentRightContent>
              <CommonContent>{item.department}</CommonContent>
              <CommonContent>{item.parseContent.join('，')}</CommonContent>
            </ProjectComponentRightContent>
          </ProjectComponentFlexWrap>
        ))}
      </ProjectComponentList>
    </FullWidthWrap>
  );
}

export default Work;
