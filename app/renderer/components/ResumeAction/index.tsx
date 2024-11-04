// app/renderer/container/resume/ResumeAction/index.tsx
import React from 'react';
import './index.less';
import { useNavigate } from 'react-router';
import ROUTER from '@common/constants/router';

import Button from '@common/components/Button';

function ResumeAction(props: { exportHandle: () => void }) {
  const navigate = useNavigate();
  // 返回首页
  const onBack = () => navigate(ROUTER.root);
  // TODO: 利用electron webContents.printToPDF 导出PDF
  const onExport = () => {
    props?.exportHandle();
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <Button size="middle" className="export-btn" onClick={onExport}>
        导出PDF
      </Button>
    </div>
  );
}

export default ResumeAction;
