# Electron Basics

## What Is Electron?

ElectronJS is a framework for making desktop applications with webdev tools - Javascript, HTML, and CSS. It provides a bunch of cool functionality that you wouldn't have on a webapp, like offline functionality, dynamic windows, access to some of your system's tools, and more!

## Requirements

Electron runs on Node, which you can download [here](https://nodejs.org/en/). 

You'll also need a code text editor, I recommend [Brackets](http://brackets.io/) or [Atom](https://atom.io/). 

Last but not least, you need access to your command line. 

## Step 1: Setting Up Our Project

First, we need to set up a folder to do our project. Open up the terminal, navigate to where you want the project, and type: 

`mkdir my-electron-project` -- or whatever you want to call your project

`cd my-electron-project` to go into the folder

`npm init` to initialize it as a node project. 

You should then be prompted for your node settings -- if you get an error, make sure you have node installed. You can just press enter through the entire thing, if you want.

Now, enter `npm install electron --save`.  We only installed Node, so now we're installing Electron via the Node Package Manager (NPM).

Next, open up the folder we just made -- `my-electron-project` -- in your favorite text editor!

## Step 2: Configuring Node

NPM gave us three things: `package.json`, `package-lock.json`, and a folder called `node_modules`. The only one we'll be looking at is `package.json` -- open that file up!

The two main things we have to look at are the value for `"main"`, which might be `index.js` by default, and the `"scripts"` object.

Change the `"main"` value to `"main.js"`. This means we're going to need to make a new file called main.js, and that's where Node will look as the default file to run when we run the program.

Next, find the `"scripts"` object and add `"start": "electron ."`. This will let us run our electron app with the command `npm start`.

Your package.json should look like this: 

```
{
  "name": "my-electron-project",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "electron": "^1.8.3"
  }
}
```

## Step 3: Launching our App

Here's where we can finally code our app!

We need two new files: first, `index.html`, which is going to store the html for our app. Inside our index.html, we're going to write this:

```
<html>
  <head>
    <title>Slack-a-mole!</title>
    <!--
    The below tags are references to a css file and a js file we haven't made yet.
    Uncomment this and delete this text once you have those two files!
    <link href="style.css" rel="stylesheet">
    <script src="functions.js"></script>
    -->
  </head>
  <body>
  <!-- We might use this later
    <div id="sidebar">
      <div class="sidebarHead">Slack Channel</div>
      <div class="opt"># bread</div>
      <div class="opt"># pond</div>
      <div class="opt"># general</div>
      <div class="opt"># random</div>
    </div> -->
    <div id="mainContent">
      <h1>Wow! Welcome to my first spankin app!</h1>
      <p>Thanks for droppin by!</p>
      <button onclick="newWindow()">New Window</button>
    </div>
  </body>
</html>

```

Save that sucker. We'll play with it later.

Next, make `main.js`. This is going to have the code to start our application. Here's what will be inside our main.js:

```
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600});
  
  win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
  
  win.on('closed', () => {
      win = null
    })
}
  
app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })

```

Finally, go back to our command line, and type `npm start`. Hopefully, we should have our app pop up now!




