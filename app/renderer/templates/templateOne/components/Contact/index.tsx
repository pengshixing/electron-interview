/**
 * @desc 联系方式
 */
import React, { useContext } from 'react';
import { Container, Title, Content } from '@src/templates/styles/template-one';
import { InterviewInfoContext } from '@src/components/ResumeContent';

function Contact() {
  const { contact } = useContext(InterviewInfoContext);
  const contactList = [
    { label: '电话', value: contact.phone },
    { label: '邮箱', value: contact.email },
  ];
  return (
    <Container>
      <Title>联系方式 Contact</Title>
      <Content>
        {contactList.map((item) => (
          <li key={item.label}>
            {item.label}：{item.value}
          </li>
        ))}
      </Content>
    </Container>
  );
}

export default Contact;
