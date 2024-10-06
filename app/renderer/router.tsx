import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Root from './container/Root';
import Resume from './container/Resume';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/resume" element={<Resume />} />
        {/* 添加一个 catch-all 路由来重定向到首页 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
