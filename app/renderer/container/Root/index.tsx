import React from 'react';
import { shell } from 'electron';
import Logo from '@assets/logo.png';
import { useNavigate } from 'react-router';
import { ROUTER_ENTRY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';
import { useGlobalStore } from '../../store/global';

import './index.less';

function Root() {
  const navigate = useNavigate();
  const { appName } = useGlobalStore();

  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      navigate(router.url);
    }
  };
  return (
    <div className="w-screen h-screen text-center bg-base">
      <div className="w-full text-center text-white pt-24">
        <img className="w-28 h-28" src={Logo} alt="" />
        <div className="text-2xl">{appName}</div>
        <div className="text-base mt-6">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div className="w-80 flex items-center justify-center mx-auto mt-6">
          {ROUTER_ENTRY.map((router) => {
            return (
              <div key={router.key} className="w-1/4 cursor-pointer" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div className="fixed bottom-0 w-full">
          <div className="py-4">
            <p className="w-full text-center opacity-60 text-sm">
              Copyright © 2024-{new Date().getFullYear()} All Rights Reserved. Copyright By pengshixing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Root;
