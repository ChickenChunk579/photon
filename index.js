import { appWindow } from '@tauri-apps/api/window'

document.body.onload = function () {
    document
        .getElementById('titlebar-minimize')
        .addEventListener('click', () => appWindow.minimize())
    document
        .getElementById('titlebar-maximize')
        .addEventListener('click', () => appWindow.toggleMaximize())
    document
        .getElementById('titlebar-close')
        .addEventListener('click', () => appWindow.close())
}