/**
 * @desc 简单介绍
 */
import React, { useContext } from 'react';
import {
  SynopsisJobWrap,
  SynopsisNameWrap,
  SynopsisSummaryWrap,
  SynopsisWrap,
} from '@src/templates/styles/template-one';
import { InterviewInfoContext } from '@src/components/ResumeContent';

function Synopsis() {
  const { base, work, evaluationList } = useContext(InterviewInfoContext);
  return (
    <SynopsisWrap>
      <SynopsisNameWrap>{base.username}</SynopsisNameWrap>
      <SynopsisJobWrap>{work.job}</SynopsisJobWrap>
      <SynopsisSummaryWrap>{evaluationList.join('，')}</SynopsisSummaryWrap>
    </SynopsisWrap>
  );
}

export default Synopsis;
