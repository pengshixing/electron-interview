import React from 'react';
import './index.less';
import { formatToString } from '@common/utils/time';
import DeleteIcon from '@assets/icon/delete.png';
import { AdapterExperienceType } from '../../adapter';

export interface IListProps {
  /**
   * @description 当前操作索引下标
   */
  index: number;
  /**
   * @description 条目列表
   */
  experienceList: AdapterExperienceType[];
  /**
   * @description 删除回调
   */
  onDelete: (index: number) => void;
  /**
   * @description 选择条目回调
   */
  onChange: (index: number) => void;
}

function List({ index, experienceList, onDelete, onChange }: IListProps) {
  return (
    <div styleName="experience-list" className="w-full overflow-hidden relative bg-white transition-all duration-500">
      {experienceList &&
        experienceList.length > 0 &&
        experienceList.map((item: AdapterExperienceType, i: number) => {
          return (
            <div
              styleName={`experience-item ${i === index ? 'is-select' : ''} `}
              className="h-16 relative group"
              key={i}
              onClick={() => {
                onChange(i);
              }}
            >
              <div styleName="experience-item-box" className="cursor-pointer h-full truncate font-bold text-sm">
                <div className="h-6 text-black text-opacity-60 text-left">{item.title || '未命名条目'}</div>
                <div className="relative w-full text-black text-opacity-40 text-xs mr-4">
                  {formatToString(item?.date)}
                </div>
              </div>
              <div className="absolute right-0 bottom-4 w-8 text-right hidden group-hover:block">
                <div
                  className="cursor-pointer"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation?.();
                    onDelete(i);
                  }}
                >
                  <img className="w-4 h-4" src={DeleteIcon} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      {!experienceList ||
        (!experienceList.length && (
          <div className="text-center">
            <div className="text-black text-opacity-40 mt-32">你还没有条目内容，快添加一条吧～</div>
          </div>
        ))}
    </div>
  );
}

export default List;
