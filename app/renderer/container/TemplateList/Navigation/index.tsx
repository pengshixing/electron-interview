/*
 * @Description: 模版列表侧边栏
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import UseIcon from '@assets/icon/use.png';
import ScrollBox from '@common/components/ScrollBox';
import Button from '@common/components/Button';
import useTemplateModel from '@src/store/templateModel';

function Navigation() {
  const { templateList, selectTemplate } = useTemplateModel();

  return (
    <div styleName="navigation" className="absolute bg-white mt-4">
      <ScrollBox>
        {templateList?.length > 0 &&
          templateList.map((template: TSTemplate.Item) => {
            return (
              <div styleName="template" key={template?.templateId}>
                <img styleName="cover" src={template?.templateCover} />
                <div styleName="mask">
                  {selectTemplate?.templateId === template?.templateId && <img styleName="use" src={UseIcon} />}
                  {selectTemplate?.templateId !== template?.templateId && (
                    <Button
                      size="middle"
                      className="view-btn"
                      onClick={() => {
                        console.log(1);
                      }}
                    >
                      预览模版
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
      </ScrollBox>
    </div>
  );
}

export default Navigation;
