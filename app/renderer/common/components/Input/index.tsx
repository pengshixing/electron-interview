import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import './index.less';
import classnames from 'classnames';

const TYPE = {
  text: 'text',
  textarea: 'textarea',
};

export type SizeType = 'normal' | 'large';
export type Type = 'text' | 'textarea' | '';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * @description 自动获取焦点
   */
  autoFocus?: boolean;
  /**
   * @description 控件类型
   */
  type?: Type;
  /**
   * @description 控件大小
   */
  size?: SizeType;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 设置前置标签
   */
  addonBefore?: React.ReactNode;
  /**
   * @description 设置后置标签
   */
  addonAfter?: React.ReactNode;
  /**
   * @description 可以计数
   */
  allowCount?: boolean;
  /**
   * @description 可以点击清除图标删除内容
   */
  allowClear?: boolean;
  /**
   * @description textarea行数，默认3
   */
  rows?: number;
  /**
   * @description 动态样式
   */
  style?: React.CSSProperties;
  /**
   * @description 输入框内容
   */
  value?: string | number | undefined;
  /**
   * @description 输入框占位符
   */
  placeholder?: string;
  /**
   * @description 输入框id
   */
  id?: string;
  /**
   * @description 最大长度
   */
  maxLength?: number;
  /**
   * @description 是否背景透明
   */
  bgTransparent?: boolean;
  /**
   * @description 毁掉函数
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

type Ref = React.ForwardedRef<{
  focus: () => void;
  blur: () => void;
}>;

const Input = forwardRef((props: InputProps, ref: Ref) => {
  const {
    value,
    onChange,
    addonBefore,
    addonAfter,
    allowClear,
    placeholder,
    size = 'normal',
    maxLength,
    id,
    disabled,
    autoFocus,
    rows,
    allowCount,
    style,
    bgTransparent = false,
    type,
  } = props;

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = useState<InputProps['value']>('');
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const focusHandle = () => {
    inputRef.current?.focus();
  };

  const blurHandle = () => {
    inputRef.current?.blur();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: focusHandle,
      blur: blurHandle,
    };
  });

  // 模拟change事件
  const actionChange = (e: any) => {
    const target = inputRef.current!;
    const event = Object.create(e);
    // 如果是点击清除按钮，则需要改target指向input，value清空
    if (e.type === 'click') {
      target.value = '';
      event.target = target;
      event.currentTarget = target;
    }
    onChange?.(event);
  };
  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  const onInput = (e: any) => {
    setInputValue(e.target.value);
    actionChange(e);
  };

  const onClear = (e: any) => {
    setInputValue('');
    actionChange(e);
  };

  const renderBefore = useMemo(() => {
    return !!addonBefore && <div styleName="my-input-center">{addonBefore}</div>;
  }, [addonBefore]);

  const renderAfter = useMemo(() => {
    return !!addonAfter && <div styleName="my-input-center">{addonAfter}</div>;
  }, [addonAfter]);

  const renderClear = useMemo(() => {
    return !!allowClear && inputValue && <i styleName="my-input-clear" onClick={onClear} />;
  }, [allowClear, inputValue]);

  const renderInput = () => {
    return (
      <div
        styleName={classnames(`my-input-input`, {
          [`${size}`]: true,
        })}
      >
        <input
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          value={inputValue}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          ref={inputRef as React.MutableRefObject<HTMLInputElement>}
        />
        {renderClear}
      </div>
    );
  };
  const renderTextarea = () => {
    const _rows = rows || 3;
    const text = inputValue;
    return (
      <div styleName="my-input-textarea" style={{ height: 24 * _rows }}>
        <textarea
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          rows={_rows}
          value={text}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          ref={inputRef as React.MutableRefObject<HTMLTextAreaElement>}
        />
        {renderClear}
        {allowCount && (
          <div styleName="my-input-textarea-footer">
            <span
              styleName={classnames({
                'max-length-text': !!maxLength && text && String(text).length >= maxLength,
              })}
            >
              {String(text).length}
            </span>
            {!!maxLength && (
              <>
                <span>/</span>
                <span>{maxLength}</span>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={style}
      styleName={classnames('my-input', {
        normal: !bgTransparent,
        focus,
        'allow-clear': allowClear,
      })}
    >
      {renderBefore}
      {TYPE.textarea === type ? renderTextarea() : renderInput()}
      {renderAfter}
    </div>
  );
});

export default Input;
