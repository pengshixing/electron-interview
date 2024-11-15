import React from 'react';
import classnames from 'classnames';
import { reducePX, transformStringToNumber } from '@common/utils';
import BackIcon from '@assets/icon/back_blank.png';

type IProps = React.PropsWithChildren<{
  /**
   * @description 自定义样式
   */
  style?: React.CSSProperties;
  boxRef?: any;
  key?: string;
}>;

interface IState {
  /**
   * @description 是否显示Menu控件
   */
  showMenu: boolean;
  /**
   * @description 左侧组件DOM宽度
   */
  width: number;
}

class LeftComponent extends React.Component<IProps, IState> {
  isTransition: boolean;
  defaultRef = React.createRef();

  constructor(props: IProps) {
    super(props);
    this.state = {
      showMenu: true,
      width: 0,
    };
    this.isTransition = false; // 只有点击的时候才加上动画
  }

  componentDidMount() {
    if (
      this.boxRef.current &&
      this.boxRef.current.children &&
      this.boxRef.current.children.length > 0 &&
      this.boxRef.current.children[0].clientWidth
    ) {
      this.setState({ width: this.boxRef.current.children[0].clientWidth });
    }
  }
  onChangeMenu = () => {
    this.setState((prev) => {
      return {
        showMenu: !prev.showMenu,
      };
    });
  };
  get boxRef() {
    return this.props.boxRef || this.defaultRef;
  }

  render() {
    const { showMenu, width } = this.state;
    const { style = {}, children } = this.props;
    return (
      <>
        <div
          ref={this.boxRef}
          className="left-box transition-all duration-500"
          style={{ width, ...style, left: showMenu ? style?.left : -width }}
        >
          {children}
        </div>
        <div
          className="rect-menu w-8 h-16 fixed top-1/2 -translate-y-1/2 z-50 bg-white cursor-pointer text-center transition-all duration-500"
          style={{
            left: showMenu ? width + (transformStringToNumber(reducePX(style?.left)) || 0) : 0,
            transition: this.isTransition ? 'all 0.5s' : 'none',
          }}
          onClick={() => {
            this.onChangeMenu();
            this.isTransition = true;
          }}
        >
          <img
            className={classnames('w-4 h-4 absolute top-1/2 left-1/2 transition-all duration-500 rect-icon', {
              'rect-icon-hidden': !showMenu,
            })}
            src={BackIcon}
            alt=""
          />
        </div>
      </>
    );
  }
}

export default LeftComponent;
