/**
 * @desc 头像
 */
import React from 'react';
import AvatarImage from '@assets/avatar.png';
import { AvatarBox, AvatarImgWrap } from '@src/templates/styles/template-one';

function Avatar() {
  return (
    <AvatarBox>
      <AvatarImgWrap>
        <img src={AvatarImage} />
      </AvatarImgWrap>
    </AvatarBox>
  );
}

export default Avatar;
