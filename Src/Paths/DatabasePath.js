const { app } = require("electron")
const path = require("path")
const fs = require("fs")

/**
 * This method returns the path to a file in the the apps folder in the userDatas folder
 * @param {string} filename is the name of the file
 * @returns complete path of the file
 */
function databasePath (dir="", filename="") {
    let fullDir = path.join(app.getPath("userData"), "SaveFiles", dir)
    let fullPath = path.join(fullDir, filename)

    if (fs.existsSync(fullDir)) {
        return fullPath
    } else {
        fs.mkdirSync(fullDir, { recursive: true });
        return fullPath
    }

}

module.exports = databasePath