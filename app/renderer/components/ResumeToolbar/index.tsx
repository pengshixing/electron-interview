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
    <div styleName="slider" className="w-full p-4 bg-white text-sm rounded-md">
      <ScrollBox style={{ height: '70vh', maxHeight: '75vh' }}>
        <div styleName="modules">
          <div styleName="title" className="relative pl-3 mb-4">
            <span styleName="line" className="absolute left-0 h-3.5" />
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
                  <div styleName="info" className="flex">
                    <i styleName="icon" className="w-4 h-4 mt-0.5 mr-2" />
                    <div styleName="text">
                      <div styleName="name">{toolbar.name}</div>
                      <div styleName="summary" className="truncate text-xs mt-1 break-keep">
                        {toolbar.summary}
                      </div>
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
