/**
 * @description 专门服务于经验弹窗左侧
 */
import React from 'react';
import './index.less';
import Button from '@common/components/Button';
import ScrollBox from '@common/components/ScrollBox';
import List, { IListProps } from './List';

interface IProps extends IListProps {
  onAdd: () => void;
}

function Left({ index, experienceList = [], onDelete, onAdd, onChange }: IProps) {
  return (
    <>
      {experienceList.length > 0 && (
        <>
          <ScrollBox>
            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete} />
            <div className="h-8"></div>
          </ScrollBox>
          <div
            className="absolute bottom-0 w-full h-8 flex justify-center items-center bg-white border-0 border-t border-solid border-black border-opacity-10 cursor-pointer text-xs"
            onClick={onAdd}
          >
            添加条目
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div className="text-center">
          <div className="text-black text-opacity-40 mt-32">还没有内容，快添加一下吧～</div>
          <div className="mt-3">
            <Button width={112} size="middle" onClick={onAdd}>
              添加条目
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Left;
