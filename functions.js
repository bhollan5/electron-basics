function myFunction() {
  alert("quack");
}

var myVar = new Date();

function newWindow() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;
  var win2 = new BrowserWindow({ width: 400, 
                                height: 300,
                               frame: false});
  win2.loadURL('http://celebriducks.com/');
  win2.setPosition(0, 0)
  win2.show();
}