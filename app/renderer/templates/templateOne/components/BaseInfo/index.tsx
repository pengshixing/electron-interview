/**
 * @desc 基本信息
 */
import React, { useContext } from 'react';
import { Container, Title, Content } from '@src/templates/styles/template-one';
import { InterviewInfoContext } from '@src/components/ResumeContent';

function BaseInfo() {
  const { base } = useContext(InterviewInfoContext);
  const baseInfoList = [
    { label: '院校', value: base.school },
    { label: '专业', value: base.major },
    { label: '学历', value: base.degree },
    { label: '学年', value: base.onSchoolTime.beginTime + ' - ' + base.onSchoolTime.endTime },
    { label: '籍贯', value: base.area },
  ];

  return (
    <Container>
      <Title>基本信息 Basic</Title>
      <Content>
        {baseInfoList.map((item) => {
          return (
            <li key={item.label}>
              {item.label}：{item.value || ''}
            </li>
          );
        })}
      </Content>
    </Container>
  );
}

export default BaseInfo;
