/**
 * @desc 求职意向
 */
import React, { useContext } from 'react';
import { Container, Title, Content } from '@src/templates/styles/template-one';
import { InterviewInfoContext } from '@src/components/ResumeContent';

function Job() {
  const { work } = useContext(InterviewInfoContext);
  const workList = [
    { label: '职位', value: work.job },
    { label: '城市', value: work.city },
  ];
  return (
    <Container>
      <Title>求职意向 Work</Title>
      <Content>
        {workList.map((item) => (
          <li key={item.label}>
            {item.label}：{item.value}
          </li>
        ))}
      </Content>
    </Container>
  );
}

export default Job;
