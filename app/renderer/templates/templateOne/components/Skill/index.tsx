/**
 * @desc 技能
 */
import React, { useContext } from 'react';
import { FullWidthWrap, SkillItemWrap, SkillLableWrap, SkillListWrap } from '@src/templates/styles/template-one';
import { InterviewInfoContext } from '@src/components/ResumeContent';

function Skill() {
  const { skillList } = useContext(InterviewInfoContext);
  return (
    <FullWidthWrap>
      <SkillLableWrap>技能证书 Skill</SkillLableWrap>
      <SkillListWrap>
        {skillList.map((item) => (
          <SkillItemWrap key={item}>{item}</SkillItemWrap>
        ))}
      </SkillListWrap>
    </FullWidthWrap>
  );
}

export default Skill;
