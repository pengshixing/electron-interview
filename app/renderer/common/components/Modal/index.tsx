/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import Modal from '@components/Modal';
 * <Modal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/Modal';
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
