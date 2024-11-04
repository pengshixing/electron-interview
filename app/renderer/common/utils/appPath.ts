// 监听主进程与渲染进程通信
import type { ExportPdfResType } from 'app/main/types';
import { ipcRenderer } from 'electron';

/**
 * @description 获取项目绝对路径
 * @returns {Promise<string>}
 */
export function getAppPath(): Promise<string> {
  return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
    ipcRenderer.send('get-root-path', '');
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('项目路径错误'));
      }
    });
  });
}

export const exportStrToPDF = (htmlStr: string) => {
  return new Promise((resolve: (value: ExportPdfResType) => void, reject: (value: Error) => void) => {
    ipcRenderer.send('export-pdf', { html: htmlStr });
    ipcRenderer.on('export-pdf-res', (event, arg) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('导出错误'));
      }
    });
  });
}