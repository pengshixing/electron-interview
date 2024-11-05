import React from 'react';
import './index.less';
import Input from '@common/components/Input';
import { AdapterExperienceType } from '../WrapperExperience/adapter';

interface IProps {
  isDisable?: boolean;
  currentItem?: AdapterExperienceType;
  onChangeCurrentItem?: (newItem: AdapterExperienceType) => void;
}
function Form({ isDisable, currentItem, onChangeCurrentItem }: IProps) {
  const onChangeValue = (key: string, value: string) => {
    let newItem = { ...currentItem, [key]: value };
    onChangeCurrentItem && onChangeCurrentItem(newItem);
  };

  return (
    <div className="text-sm">
      <div className="flex mb-3">
        <div className="w-20 mt-3 text-black text-opacity-60">
          <span className="mr-1.5 text-warning">*</span>部门 ：
        </div>
        <div className="flex-1">
          <Input
            onChange={(e) => onChangeValue('title', e.target.value)}
            value={currentItem?.title}
            placeholder="请输入在校时的部门"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className="flex mb-3">
        <div className="w-20 mt-3 text-black text-opacity-60">
          <span className="mr-1.5 text-warning">*</span>职 位 ：
        </div>
        <div className="flex-1">
          <Input
            onChange={(e) => onChangeValue('post', e.target.value)}
            value={currentItem?.post}
            placeholder="在部门中担任什么职位"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className="flex mb-3">
        <div className="w-20 mt-3 text-black text-opacity-60">
          <span className="mr-1.5 text-warning">*</span>时 间 ：
        </div>
        <div className="flex-1">
          <Input
            onChange={(e) => onChangeValue('beginTime', e.target.value)}
            value={currentItem?.beginTime}
            placeholder="2015.09.01"
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
          <span className="mx-2 text-black text-opacity-60">-</span>
          <Input
            onChange={(e) => onChangeValue('endTime', e.target.value)}
            value={currentItem?.endTime}
            placeholder="2015.09.01"
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
        </div>
      </div>
      <div className="flex mb-3">
        <div className="w-20 mt-3 text-black text-opacity-60">
          <span className="mr-1.5 text-warning">*</span>内 容 ：
        </div>
        <div className="flex-1">
          <Input
            type="textarea"
            onChange={(e) => onChangeValue('content', e.target.value)}
            rows={5}
            value={currentItem?.content}
            placeholder="任职期间主要工作是什么呢？"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
    </div>
  );
}
export default Form;
