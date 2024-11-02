/**
 * @description 弹窗组件
 */
import React from 'react';
import './index.less';
import Button from '@src/common/components/Button';
import { IDialogModal } from '../types';

function MyDialog({
  title,
  width,
  className,
  showFooter: _showFooter,
  renderFooter,
  config = {},
  eleRef,
  children,
  childStyle,
}: IDialogModal) {
  const { cancelBtn: _cancelBtn, submitBtn: _submitBtn } = config;
  const cancelBtn = { isShow: true, text: '取消', ..._cancelBtn }
  const submitBtn = { isShow: true, text: '确定', ..._submitBtn }
  const showFooter = _showFooter === undefined ? true : _showFooter;
  return (
    <div styleName="vis-mask">
      <div styleName="center">
        <div styleName="vis-dialog-box" className={className} style={{ width: width || 760 }} ref={eleRef}>
          <div styleName="vis-dialog-header">{title || 'VisResumeMook 提示您'}</div>
          <div
            styleName="vis-dialog-close"
            onClick={() => {
              cancelBtn?.callback && cancelBtn.callback();
            }}
          />
          <div styleName="vis-dialog-content" style={childStyle}>
            {children}
          </div>
          {showFooter &&
            (renderFooter || (
              <div styleName="vis-dialog-footer">
                {cancelBtn?.isShow && (
                  <Button
                    size="middle"
                    className="vis-dialog-footer-btn vis-dialog-footer-cancel-btn"
                    onClick={() => {
                      cancelBtn?.callback && cancelBtn.callback();
                    }}
                  >
                    {cancelBtn?.text || '取消'}
                  </Button>
                )}
                {submitBtn?.isShow && (
                  <Button
                    size="middle"
                    className="vis-dialog-footer-btn vis-dialog-footer-submit-btn"
                    onClick={() => {
                      submitBtn?.callback && submitBtn.callback();
                    }}
                  >
                    {submitBtn?.text || '确定'}
                  </Button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyDialog;
