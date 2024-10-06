import React from 'react';
import { shell } from 'electron';
import Logo from '@assets/logo.png';
import { useNavigate } from 'react-router';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';

import './index.less';

function Root() {
  const navigate = useNavigate();

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      navigate(router.url);
    }
  };
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">electron interview</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2024-{new Date().getFullYear()} All Rights Reserved. Copyright By pengshixing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
