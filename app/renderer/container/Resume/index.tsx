import React from 'react';
import ResumeAction from '../../components/ResumeAction';
import ResumeContent from '../../components/ResumeContent';
import ResumeToolbar from '../../components/ResumeToolbar';
import './index.less';
import ReactDOMServer from 'react-dom/server';
import { exportStrToPDF } from '@src/common/utils/appPath';

const exportToStr = () => {
  const htmlString = ReactDOMServer.renderToString(<ResumeContent />);
  // FIX: 获取html中的style的dateset为emotion的内容，并放到html，用以解决html样式丢失的问题
  const styles = Array.from(document.querySelectorAll('style'))
    .filter((item) => item.getAttribute('data-emotion') === 'css')
    .map((item) => `${item.innerHTML}`);

  exportStrToPDF(`<style>${styles.join('')}</style>${htmlString}`).then((res) => {
    console.log('下载成功了！！！');
    console.log('文件地址----------->', res.filePath);
  });
};

function Resume() {
  return (
    <div className="w-full h-screen flex flex-col bg-base">
      <div className="w-7/10 h-16 pl-8 pt-4">
        <ResumeAction exportHandle={exportToStr} />
      </div>
      <div className="w-7/10 flex-1 overflow-hidden pt-4 pl-8">
        <ResumeContent />
      </div>
      <div className="w-1/4 absolute top-3/20 right-2 rounded-md bg-white">
        <ResumeToolbar />
      </div>
    </div>
  );
}
export default Resume;
