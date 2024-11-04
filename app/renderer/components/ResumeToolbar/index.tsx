import React, { useEffect, useState } from 'react';
import './index.less';
import ScrollBox from '@common/components/ScrollBox';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';

function ResumeToolbar() {
  const [maxHeight, setMaxHeight] = useState(600);
  useEffect(() => {
    const height = document.body.clientHeight;
    setMaxHeight(height - 180);
  }, []);
  return (
    <div styleName="slider">
      <ScrollBox maxHeight={maxHeight}>
        <div styleName="modules">
          <div styleName="title">
            <span styleName="line" />
            全部模块
          </div>
          <div styleName="content">
            {RESUME_TOOLBAR_LIST.map((toolbar) => {
              return (
                <div
                  styleName="box"
                  key={toolbar.key}
                  onClick={() => {
                    Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                      form_name: toolbar.key,
                    });
                  }}
                >
                  <div styleName="info">
                    <i styleName="icon" />
                    <div styleName="text">
                      <div styleName="name">{toolbar.name}</div>
                      <div styleName="summary">{toolbar.summary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollBox>
    </div>
  );
}
export default ResumeToolbar;
