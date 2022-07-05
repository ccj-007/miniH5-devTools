<br>

<h1 align="center">Welcome to miniH5-devTools 👋</h1>

<br>

# **Premise**

Simplified Chinese | [English](./zh.md)

## **What is this? **

🔨 A development and debugging tool for H5 mobile terminal, which supports handling exceptions, performance, behavior, routing, cache, environment, device information, version, log, gesture unlocking, etc. (only 20kb in size)

## **Why do this, what's the point? **

When you are working on the H5 activity page, every time you test the real machine, you have a headache when you switch between various environments? There is an error and cannot debug frequent alerts? Want data reporting without a unified module encapsulation? A large number of cached Storage cannot quickly locate the key? Troubled by not being able to obtain key data on page performance? Then you can try this tool. I believe you will like it! 😏

## **What's the advantage of this thing?**

 **Compare the advantages of vConsole debugging tool**

 - ⚡ Fast (only 20kb after rollup is compressed)
 - 📄 Pure (js native, no production dependencies)
 - 👽 DIY (supports various configurations)
 - 💛 Beauty (Morandi theme color matching UI brand new upgrade)
 - 🍉 Full (small function complete)

 **Functional level**

 - [x] ☀️ Support environment switching
 - [x] ⚡ performance monitoring
 - [x] 😈 Exception catch
 - [x] 🍜 Behavior Monitoring
 - [x] 📈 Data report
 - [x] 📜 Cache monitoring (localStorage, sessionStorage, cookies)
 - [x] ✈️ Route monitoring
 - [x] 👆 One touch gesture unlock
 - [x] 🌊 Support arbitrary drag and drop
 - [x] 📲 webview to get device information (latitude and longitude, network status, screen, phone model, etc.)
 - [x] 📫 console log debugging
 - [x] 💌 ajax request interception
 - [x] 💍 Check if the version is updated
 - [x] 🍏 Added native ui components
 - [x] 🛁 Clear cache with one click
 - [x] 🛁 Implement toolbar (one-click copy, trash, filter)

**Current issues and future directions**
 
1. Some business requirements often scan codes to obtain data, so a scan code function module needs to be added to the webview!
2. Toolbar added 1. Filter corresponding data
3. Routing needs to determine the source of the entry, such as webview, H5, WeChat applet, PC
4. Subsequent support for cicd automated deployment
---

# **Try it out! ! ! **

**Scan the code to download the teaching video**

![img](https://chen-1305792286.cos.ap-shanghai.myqcloud.com/%E4%B8%8B%E8%BD%BD.png)

**Online link**
[http://run.www.cclibs.cn:7000]

**github address**
[https://github.com/ccj-007/miniH5-devTools]

(If you feel good 👍, give a star ⭐, your approval is my biggest motivation!)

# **Quick Start**

---
**method 1**

````js
  npm i mini-h5-tools //Install dependencies

  //Introduced in main.js
  import h5tools from 'mini-h5-tools'
  
  h5tools.start()
  // h5tools.gesture() gesture unlock
````
**Method 2**
````js
  npm i mini-h5-tools //Install dependencies
````

Copy the bundle.build.js file directly in the dist folder of the project root directory and import it in html


# **Directory Structure**

---

````
├── dist # package file
│ ├── bundle.build.js # Compressed production environment sdk
│ ├── bundle.dev.js # Uncompressed development environment sdk
├── examples # example file
├── node_modules # Dependency files
├── src
│ ├── modules # core file
│ │ ├── components # components
│ │ ├── style # style
│ │ ├── svg # svg icon
│ │ ├── devTools # devtools core file
│ │ ├── touch # gesture library
│ │ ├── utils # js tools
│ ├── .babelrc # babelrc configuration
│ ├── main # entry file
├── .gitgnore # git ignore files
├── .npmignore # npm ignore files
└── index.html # index local debugging
├── package.json # npm package configuration
├── package.lock.json # npm lock version cache file
├── README.md # Documentation
├── rollup.config.build.js # rollup production environment configuration
└── rollup.config.dev.js # rollup development environment configuration
````

# **Example**

---

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- After the introduction, you can get the ip, area code, city of the device -->
    <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
</head>

<body>
  <!-- A dom element with an id of app is required, which can also be configured through options -->
  <div id="app">
  </div>
  <script src="./dist/bundle.dev.js"> //Note the import path
  </script>
  <script>
    //Unlock by gesture (please distinguish environment variables when using)
    h5tools.gesture()
  </script>
</body>

</html>
````

### **Usage Details**

---

````js
//configure
let options = {
  insertDOM: insertDOM, //The container of the inserted envTools
  wait: 1000, //waiting time
  needSleep: false, //Whether to delay loading
  envBoxIdName: 'envBox', //The DOM is not expanded, it must be an id selector
  envBoxExpandIdName: 'envBox-expand', //The expanded DOM must be an id selector
  envList: ['test', 'dev', 'prebrand'], //environment list
  watchEnv: true, //whether to monitor the environment
  watchPerformance: true, //Whether to monitor performance
  watchError: true, //whether to monitor performance
  watchRoutes: true, //Whether to monitor performance
  watchActions: true, //Whether to monitor actions
  watchStorage: true, //whether to monitor storage
  watchSystem: true, //Whether to monitor mobile phone system data
  watchConsole: true, //Whether to monitor console.log log
  watchHttp: true, //whether to monitor ajax requests
  isNewStorage: true, //The first 5 updated storages are displayed by default, false will display all
  watchActionDOMList: [{ eventType: 'click', domId: '.test1', eventId: '001' }], //Monitor the DOM in the array
  sendOptions: {
    commonInfo: {
      pid: '', //project id
      mid: '', //module id
      uid: '', //user id
      did: '', //device id
    },
    method: 'gif', //whether to send buried point data through sendBeacon 'beacon' | 'gif'
    baseURL: 'http://localhost:8000' //The root path of the request
  },
  version: '1.0.0', //version information
  maxLimit: 5, //Maximum cache limit
  asyncTime: 5000, //default delay time
  endTime: 10000, //Monitor gesture end time
}
//Unlock by gesture, the first parameter is the dom range, and the second parameter is Z-shaped gesture unlock (currently only supports Z)
h5tools.gesture(document.documentElement, 'z', options)
// open directly
h5tools.start(options)
//Manual data reporting, obj reporting data object, type can be passed in 'err' | 'pv', myMethods (report data through web beacon or gif scheme) can be passed in 'beacon' | 'gif'
h5tools.send(obj, type, myMthods)
````


### **Notice**

---
1. **After the environment variable is switched, if use? **

    By default, the property with the key of global_env will be stored in localStorage after the switch. You only need to obtain the corresponding val to modify the domain name of the http request.

2. **Why can't I display it after I import it, or the ui component is covered? **
    
    In some cases, there may be problems with the DOM of your inserted container after modification. It is best to insert it in document.body by default. Some frameworks such as uniapp's navigation bar will cover the popup component. Because the z-index has been adjusted to the maximum, please lower the value yourself