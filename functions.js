const electron = require('electron');
const path = require('path');
const url = require('url');

function myFunction() {
  alert("quack");
}

var myVar = new Date();

var windows = [[null,null,null],[null,null,null],[null,null,null]];

function newWindow() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;
  var win2 = new BrowserWindow({ width: 400, 
                                height: 300,
                               frame: false});
  win2.setPosition(0, 0)
  win2.show();
}

var screenElectron = electron.screen;
var mainScreen = screenElectron.getPrimaryDisplay();
var width = mainScreen.bounds.width;
var height = mainScreen.bounds.height;
var BrowserWindow = electron.remote.BrowserWindow;

function newGame() {
  for (var i in windows) {
    for (var j in windows[i]) {
      windows[i][j] = new BrowserWindow({
        width: (width / 3), 
        height: (height/3)
      });
      windows[i][j].setPosition(( (j / 3) * width), ( (i / 3) * height));
      
      windows[i][j].loadURL(url.format({
        pathname: path.join(__dirname, 'slacka.html'),
        protocol: 'file:',
        slashes: true
      }));
      
      
    }
  }
  setInterval(click, 100);
}


var count = 0;
function click() {
  count++;
  if (count % 100) {
    for (var i in windows) {
      for (var j in windows[i]) {
        if (Math.random() > .99) {
          windows[i][j].webContents.send('index', j);
        }
      }
    }
  }
}


