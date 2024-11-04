/**
 * @desc 模板1
 */
import React from 'react';
import './index.less';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
// import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';
import {
  A4BoxContainLeftWrap,
  A4BoxContainWrap,
  A4BoxWrap,
  A4BoxContainLeftAvatarWrap,
  A4BoxContainLeftFillColor,
  A4BoxContainBaseDataWrap,
  A4BoxContainListWrap,
  A4BoxContainMainWrap,
} from '../styles/template-one';

function TemplateOne() {
  return (
    <A4BoxWrap>
      <A4BoxContainWrap>
        {/* 左侧 */}
        <A4BoxContainLeftWrap>
          <A4BoxContainLeftAvatarWrap>
            <Avatar />
          </A4BoxContainLeftAvatarWrap>
          <A4BoxContainLeftFillColor />
          <A4BoxContainBaseDataWrap>
            <BaseInfo />
            <Contact />
            <Job />
            <Certificate />
          </A4BoxContainBaseDataWrap>
        </A4BoxContainLeftWrap>
        {/* 内容 */}
        <A4BoxContainMainWrap>
          <Synopsis />
          <A4BoxContainListWrap>
            <Skill />
            <Project />
            <Work />
          </A4BoxContainListWrap>
        </A4BoxContainMainWrap>
      </A4BoxContainWrap>
    </A4BoxWrap>
  );
}

export default TemplateOne;
