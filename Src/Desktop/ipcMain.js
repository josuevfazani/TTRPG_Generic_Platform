//This file handles the events between the main and renderer process of electron

const { ipcMain } = require('electron')

module.exports = () => {

    ipcMain.on("test", (event, data) => {

        console.log(data);
        event.reply("test", "General Kenobi")

    })
}