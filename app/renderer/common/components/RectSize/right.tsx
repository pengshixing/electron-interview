import React from 'react';

interface IProps {
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  key?: string;
}

class RightComponent extends React.PureComponent<IProps> {
  render() {
    const { style = {}, children } = this.props;
    return (
      <div className="right-box" style={style}>
        {children}
      </div>
    );
  }
}

export default RightComponent;
