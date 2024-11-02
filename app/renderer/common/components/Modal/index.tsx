/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import MyModal from '@components/MyModal';
 * <MyModal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/MyModal';
 * <Confirm />
 */
import MyDialog from './Dialog';
import MyConfirm from './Confirm';

export const Dialog = MyDialog;
export const Confirm = MyConfirm;

export default {
  Dialog: MyDialog,
  Confirm: MyConfirm,
};
