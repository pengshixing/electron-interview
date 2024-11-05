/**
 * @desc electron 主入口
 */
import path from 'path';
import fs from 'fs/promises';
import { app, BrowserWindow, globalShortcut, ipcMain, dialog } from 'electron';
import type { ExportPdfResType } from './types';

function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';
}

const devLoadPath = `http://127.0.0.1:7001/`;

function loadURL() {
  if (isDev()) {
    return devLoadPath;
  }
  return `file://${path.join(__dirname, '../dist/index.html')}`;
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1200,
    minHeight: 800,
    webPreferences: {
      devTools: true,
      // 👇 nodeIntegration contextIsolation 配置之后才能调用node模块
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(loadURL());
  // 事件: 进入全屏模式
  mainWindow.on('enter-full-screen', () => {
    // 在窗口进入全屏模式时执行操作
    console.log('进入全屏模式');
  });

  // 事件: 离开全屏模式
  mainWindow.on('leave-full-screen', () => {
    // 在窗口离开全屏模式时执行操作
    console.log('离开全屏模式');
  });

  mainWindow.webContents.on('unresponsive', async () => {
    // 运行时卡死
    const { response } = await dialog.showMessageBox({
      message: 'App X has become unresponsive',
      title: 'Do you want to try forcefully reloading the app?',
      buttons: ['OK', 'Cancel'],
      cancelId: 1
    })
    if (response === 0) {
      mainWindow.webContents.forcefullyCrashRenderer()
      mainWindow.webContents.reload()
    }
  })
  mainWindow.webContents.on('did-start-navigation', (event) => {
    // 在运行时报错找不到页面
    if (event.isMainFrame && !event.isSameDocument && isDev()) {
      event.frame.executeJavaScript(`location.href='/'`)
    }
  });
  return mainWindow;
}
let mainWindow: BrowserWindow;
app.whenReady().then(() => {
  mainWindow = createWindow();
  app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Shift+i', function () {
      // 判断现在控制台是否处于打开状态
      if (mainWindow.webContents.isDevToolsOpened()) {
        // 如果被打开，则关闭
        mainWindow.webContents.closeDevTools();
      } else {
        // 如果没有被打开，则调起
        mainWindow.webContents.openDevTools();
      }
    });
  });
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

const ROOT_PATH = path.join(app.getAppPath(), '../');

ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH);
});

let pdfWindow: BrowserWindow | null = null;
ipcMain.on('export-pdf', async (_event, obj) => {
  pdfWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
    show: false, // 如果不想显示窗口可以改为false
    width: 800,
    height: 600,
    fullscreenable: true,
    minimizable: false
  });

  pdfWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(obj.html)}`);
  pdfWindow.webContents.on('did-finish-load', () => {
    // Use default printing options
    const fileName = `resume-${Date.now()}.pdf`;
    const pdfPath = obj.filePath || path.resolve(`.`, fileName);
    pdfWindow?.webContents.printToPDF({ printBackground: true, landscape: true }).then(data => {
      console.log('=============', pdfPath);

      const filters = [{ name: '', extensions: ['pdf'] }];
      // 第一种方法 它会弹出一个系统级的文件保存对话框，让用户选择文件保存的位置。这个方法不会直接触发文件下载，而是让用户主动选择保存路径。
      // dialog.showSaveDialog适用于需要用户参与决定文件保存位置的场景
      // 通常用于下载本地资源
      dialog.showSaveDialog(mainWindow, {
        title: '另存为',
        filters,
        defaultPath: fileName
      })
        .then(result => {
          if (result.canceled) return false
          return result.filePath
        })
        .then(async filePath => {
          if (!filePath) return
          await fs.writeFile(filePath, data)
          mainWindow.webContents.send('export-pdf-res', { success: true, filePath } as ExportPdfResType);
        })
        .finally(() => {
          pdfWindow?.close(); // 保存pdf过后关闭该窗口
          pdfWindow = null;
        });

      // 第二种方法 它允许开发者直接从主进程中触发文件下载，而无需通过渲染进程。
      // 这个方法会忽略HTTP响应头中的Content-Disposition字段，直接将指定URL指向的文件下载到用户的默认下载目录或者用户指定的目录。
      // webContents.downloadURL支持暂停、恢复、取消下载等功能，适合处理需要这些功能的下载场景
      // 一般用于下载远程资源
      // mainWindow.webContents.downloadURL(pdfPath)
      // pdfWindow?.close(); // 保存pdf过后关闭该窗口
      // pdfWindow = null;

      // 第三种方法 静默下载，通常是配置文件之类，无需提示用户
      // fs.writeFile(pdfPath, data).then(() => {
      //   console.log('导出成功，路径：');
      //   mainWindow.webContents.send('export-pdf-res', { success: `导出成功，路径：${pdfPath}` });
      //   pdfWindow?.close(); // 保存pdf过后关闭该窗口
      //   pdfWindow = null;
      // }).catch((error) => {
      //   throw error;
      // })
    }).catch(error => {
      mainWindow.webContents.send('export-pdf-res', { failed: `导出失败，路径：${JSON.stringify(error)}` });
    });
  });
});