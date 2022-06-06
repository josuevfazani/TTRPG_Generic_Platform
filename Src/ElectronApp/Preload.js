const { contextBridge, ipcRenderer } = require('electron')

//Exposes ipcRenderer on and send to renderer process, but limits the channels that are allowed
contextBridge.exposeInMainWorld('electron', {
    on: (channel, exec) => {

        const allowedChannels = ["test"]

        if (allowedChannels.includes(channel)) {
            ipcRenderer.on(channel, exec)
        } else {
            err = new Error("On channel not allowed")
            console.error(err);
        }

    },
    send: (channel, data) => {
        const allowedChannels = ["test"]

        if (allowedChannels.includes(channel)) {
            ipcRenderer.send(channel, data)
        } else {
            err = new Error("Send channel not allowed")
            console.error(err);
        }
    }
})