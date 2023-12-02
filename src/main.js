// Importa las clases 'app' y 'BrowserWindow' desde el módulo 'electron'
const { app, BrowserWindow } = require('electron')

// Incluye el módulo 'path' de Node.js al principio de tu archivo
const path = require('node:path')
// Función para crear una nueva ventana
const createWindow = () => {
    // Crea una nueva instancia de BrowserWindow
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth: 800, 
      minHeight: 600, 
      webPreferences: {
    // Especifica el script de preload para configurar el entorno de ejecución del navegador
        preload: path.join(__dirname, 'src/preload.js')

      }
    })

    // Carga el archivo 'index.html' en la ventana
    win.loadFile('src/views/index.html');

    // Oculta la barra de menú
    win.removeMenu();
  }

// Ejecuta la función createWindow cuando la aplicación está lista
  app.whenReady().then(() => {
    createWindow()
    // Maneja el evento 'activate', que se dispara cuando se activa la aplicación
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
        
      })
  })
  // Maneja el evento 'window-all-closed', que se dispara cuando todas las ventanas están cerradas
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
