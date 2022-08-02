const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const mode = process.argv[2]
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  //判断是否是开发模式 
  if(mode === 'dev') { 
    win.loadURL("http://localhost:3000/")
  } else { 
    win.loadFile(path.join(__dirname, '/../build/index.html'))
  }
  ipcMain.handle('ping', () => 'pong')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
