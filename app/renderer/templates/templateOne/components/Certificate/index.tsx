/**
 * @desc 荣誉奖励
 */
import React, { useContext } from 'react';
import { Container, Title, Content } from '@src/templates/styles/template-one';
import { InterviewInfoContext } from '@src/components/ResumeContent';

function Certificate() {
  const { certificate } = useContext(InterviewInfoContext);
  return (
    <Container>
      <Title>荣誉奖励 Certificate</Title>
      <Content>
        {certificate.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Content>
    </Container>
  );
}

export default Certificate;
