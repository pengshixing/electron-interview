/*
 * @Description:
 */
import React from 'react';
import './index.less';
import Header from './Header';
import Navigation from './Navigation';
import StaticResume from './StaticResume';
import RectSize from '@common/components/RectSize';

function TemplateList() {
  return (
    <div styleName="container" className="w-screen h-screen">
      <Header />
      <div styleName="content">
        <RectSize>
          <RectSize.Left>
            <Navigation />
          </RectSize.Left>
          <RectSize.Right>
            <StaticResume />
          </RectSize.Right>
        </RectSize>
      </div>
    </div>
  );
}
export default TemplateList;
