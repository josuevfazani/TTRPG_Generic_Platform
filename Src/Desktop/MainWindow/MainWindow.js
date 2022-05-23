//Adding shortcut to functions exposed by context-bridge
listenTo = window.electron.on
sendTo = window.electron.send
importFrom = window.electron.import

listenTo("test", (event, data) => {
    console.log(data);
})

sendTo("test", "Hello There")