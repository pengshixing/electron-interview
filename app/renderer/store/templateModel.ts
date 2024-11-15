import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer'
import { set as lodashSet } from 'lodash/fp'

export interface TStore {
  /**
   * @description 选中工具条模块的keys
   */
  resumeToolbarKeys: string[];
  /**
   * @description 模块列表
   */
  templateList: TSTemplate.Item[];
  /**
   * @description 当前选中的模版
   */
  selectTemplate: TSTemplate.Item;
}

const state: TStore = {
  resumeToolbarKeys: [],
  templateList: [],
  selectTemplate: {
    templateId: '',
    templateName: '',
    templateCover: '',
  },
}

export type Action = {
  updateStore: <K extends keyof TStore, ValueType>(key: K, value: ValueType | TStore[K]) => void;
};
const useTemplateModel = create(
  immer<TStore & Action>(set => ({
    ...state,
    updateStore: (key, value) => set(state => lodashSet(key, value)(state)),
  }))
);

export default useTemplateModel;
