import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Root from './container/Root';
import Resume from './container/Resume';
import TemplateList from '@src/container/TemplateList';
import ROUTER from './common/constants/router';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';

function AppRouter() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();

  useEffect(() => {
    readDirAssetsTemplateHooks();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/resume" element={<Resume />} />
          <Route path={ROUTER.template} element={<TemplateList />} />
          {/* 添加一个 catch-all 路由来重定向到首页 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
