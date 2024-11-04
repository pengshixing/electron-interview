import React, { useContext } from 'react';
import { 
  FullWidthWrap,
  ProjectComponentLabel,
  ProjectComponentList,
  ProjectComponentItemBox,
  ProjectComponentItemContent,
  ProjectComponentFlexWrap,
  ProjectComponentLeftContent,
  ProjectComponentRightContent,
  CommonContent
 } from '@src/templates/styles/template-one';
import { InterviewInfoContext } from '@src/components/ResumeContent';


function Project() {
  const {projectExperience} = useContext(InterviewInfoContext);
  return (
    <FullWidthWrap>
      <ProjectComponentLabel>项目经历 Project</ProjectComponentLabel>
      <ProjectComponentList>
        {
          projectExperience.map(item=><ProjectComponentFlexWrap key={item.projectName}>
            <ProjectComponentLeftContent>
              <CommonContent>
                <span>{item.beginTime} - {item.endTime}</span>
              </CommonContent>
            </ProjectComponentLeftContent>
            <ProjectComponentRightContent>
            <CommonContent>
              <span>{item.projectName} -{item.post}</span>
            </CommonContent>
          </ProjectComponentRightContent>
          <FullWidthWrap>
            <ProjectComponentItemBox>
              {
                item?.parseContent?.map(content=>{
                    return <ProjectComponentItemContent key={content}>{content}</ProjectComponentItemContent>
                })
              }
            </ProjectComponentItemBox>
          </FullWidthWrap>
          </ProjectComponentFlexWrap>)
        }
      </ProjectComponentList>
    </FullWidthWrap>
  );
}

export default Project;
