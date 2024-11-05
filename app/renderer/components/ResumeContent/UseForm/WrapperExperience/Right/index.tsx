import React from 'react';
import './index.less';
import ScrollBox from '@src/common/components/ScrollBox';

interface IProps {
  children: React.ReactNode;
}
function Right({ children }: IProps) {
  const getChild = () => {
    const menuElement = (children as any)[0];
    const formElement = (children as any)[1][0];

    return [
      React.cloneElement(menuElement, {
        ...(children as any)[0],
        key: 'menuElement',
      }),
      React.cloneElement(formElement, {
        ...(children as any)[0],
        key: 'formElement',
      }),
    ];
  };
  return (
    <>
      <div className="h-16 px-3">{getChild()[0]}</div>
      <div className="pt-6 px-3">
        <ScrollBox>{getChild()[1]}</ScrollBox>
      </div>
    </>
  );
}

export default Right;
