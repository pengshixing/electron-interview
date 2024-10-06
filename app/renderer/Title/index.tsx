import React from 'react';

import './index.less';
import styles from './index.module.less';

console.log(styles, 'classNames');

interface IProps {
  /**
   * @description 标题
   */
  text: string;
  /**
   * @description 样式
   */
  styles?: React.CSSProperties;
}

function Title({ text, styles = {} }: IProps) {
  return (
    <div style={styles} className="title" styleName="styles.title">
      {text}
    </div>
  );
}

export default Title;
