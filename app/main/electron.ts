/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';

function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      // 👇 nodeIntegration contextIsolation 配置之后才能调用node模块
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
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
  return mainWindow;
}

app.whenReady().then(() => {
  const mainWindow = createWindow();
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
