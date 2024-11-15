import React from 'react';
import './index.less';
import { useNavigate } from 'react-router';
import BackIcon from '@assets/icon/back.png';

function Header() {
  const navigate = useNavigate();
  const goBack = () => navigate('/');
  return (
    <div className="flex items-center h-16 text-white bg-base px-6">
      <div className="flex items-center cursor-pointer" onClick={goBack}>
        <div className="mr-1">
          <img className="w-3.5 h-3.5" src={BackIcon} alt="" />
        </div>
        返回
      </div>
      <p className="flex-1 text-center">简历模版仓库</p>
    </div>
  );
}
export default Header;
