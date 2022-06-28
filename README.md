# **前提**

## **这是个啥？**  

🔨 H5移动端的开发调试工具，支持处理异常、性能、行为、路由、缓存、环境、设备信息、版本、日志、手势解锁等。（大小只有20kb）

## **为啥要做这个，有啥意义么？**

你是否在做H5活动页面的时候，每次真机测试时，各种环境切换而头疼的情况？出现报错无法调试频繁alert的情况？ 想要数据上报没有统一的模块封装？大量缓存Storage无法快速定位key？ 无法获取页面性能关键数据而头疼？ 那么你可以试一试这工具。相信你会喜欢的！😏 

## **这玩意有啥优势呢 ?**  

 **对比vConsole调试工具优势**   

 ⚡  快 (rollup打包压缩后只有20kb)  
 📄  纯 (js原生，无任何生产环境依赖)  
 👽  DIY (支持多样化配置)  
 💛  美 (莫兰迪主题配色 UI 全新升级)  
 🍉  全 (小功能齐全)  

 **功能层面**    

 ☀️  支持环境切换  
 ⚡  性能监控  
 😈  异常捕获  
 🍜  行为监控  
 📈  数据上报  
 📜  缓存监控  
 ✈️  路由监控  
 👆  一键手势解锁  
 🌊  支持任意拖拽  
 📲  webview获取设备信息(经纬度、网络状态、屏幕、手机型号等)  
 📫  console日志调试   
 💌  ajax请求拦截    
 💍  检测版本是否更新  
 🍏  新增原生ui组件  
 🛁   一键清除缓存 

**目前存在问题以及未来方向**    
 
1. 某些业务需求经常会扫码获取数据，那么在webview中需要增加一个scan扫码功能模块 ！

2. 实现工具条的一键复制功能

---

# **体验一把 ！！！**

**扫码下载教学视频**  

![img](https://chen-1305792286.cos.ap-shanghai.myqcloud.com/%E4%B8%8B%E8%BD%BD.png)

**线上链接**
[http://run.www.cclibs.cn:7000]

**github地址**
[https://github.com/ccj-007/miniH5-devTools]

(如果觉得不错 👍，给个star ⭐吧，你的认可是我最大的动力 ！)

# **快速开始**

---
**方法1**

```js
  npm i mini-h5-tools  //安装依赖
```
**方法2**

直接在项目根目录的dist文件夹内直接复制bundle.build.js文件，在html中引入


# **目录结构**

---

````
├── dist                     # 打包文件
│   ├── bundle.build.js      # 压缩后的生产环境sdk
│   ├── bundle.dev.js        # 未压缩开发环境sdk
├── examples                 # 示例文件 
├── node_modules             # 依赖文件 
├── src
│   ├── modules              # 核心文件 
│   │   ├── components       # 组件
│   │   ├── style            # 样式
│   │   ├── svg              # svg图标
│   │   ├── devTools         # devtools核心文件
│   │   ├── touch            # 手势库
│   │   ├── utils            # js 工具
│   ├── .babelrc             # babelrc 配置
│   ├── main                 # 入口文件
├── .gitgnore                # git忽略文件
├── .npmignore               # npm忽略文件
└── index.html               # index本地调试
├── package.json             # npm包配置
├── package.lock.json        # npm锁版本缓存文件
├── README.md                # 文档
├── rollup.config.build.js   # rollup生产环境配置
└── rollup.config.dev.js     # rollup开发环境配置
````

# **示例**

---

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- 引入后可获取设备的ip，地区代码，城市 -->
    <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>  
</head>

<body>
  <!-- 需要一个id为app的dom元素，也可以通过options配置 -->
  <div id="app">  
  </div>
  <script src="./dist/bundle.dev.js">  //注意引入路径
  </script>
  <script>
    //通过手势解锁（注意使用的时候请区分环境变量）
    h5tools.gesture()
  </script>
</body>

</html>
```

### **使用细节**

---

```js
//配置
let options = {
  insertDOM: insertDOM, //插入的envTools的容器
  wait: 1000, //等待时间
  needSleep: false, //是否要延迟加载 
  envBoxIdName: 'envBox',  //未展开DOM
  envBoxExpandIdName: 'envBox-expand', //延展后的DOM
  envList: ['test', 'dev', 'prebrand'],  //环境列表
  watchEnv: true, //是否监听环境
  watchPerformance: true, //是否监听性能
  watchError: true, //是否监听性能
  watchRoutes: true, //是否监听性能
  watchActions: true, //是否监听行为
  watchStorage: true, //是否监听storage
  watchSystem: true, //是否监听手机系统数据
  watchConsole: true, //是否监听console.log日志
  watchHttp: true, //是否监听ajax请求
  isNewStorage: true, //默认展示前5个更新的storage，false将展示所有
  watchActionDOMList: [{ eventType: 'click', domId: '.test1', eventId: '001' }], //监听数组内的DOM
  sendOptions: {
    commonInfo: {
      pid: '', //项目id
      mid: '', //模块id
      uid: '', //用户id
      did: '', //设备id
    },
    method: 'gif', //是否通过sendBeacon发送埋点数据 'beacon' | 'gif' 
    baseURL: 'http://localhost:8000'  //请求的根路径
  },
  version: '1.0.0', //版本信息
  maxLimit: 5,  //最大缓存限制
  asyncTime: 5000, //默认延迟时间
  endTime: 10000, //监听手势结束时间
}
//通过手势解锁，第一个参数dom范围，第二个参数z字形手势解锁(目前只支持Z)
h5tools.gesture(document.documentElement, 'z', options)
//直接打开
h5tools.start(options)
//手动数据上报, obj上报数据对象，type可传入 'err' | 'pv'， myMethods(通过网络信标或gif方案上报数据) 可传入 'beacon' | 'gif' 
h5tools.send(obj, type, myMthods)
```


### **注意**

---
1. **环境变量切换后，如果使用？**

    默认在切换后会在localStorage存储key为global_env的属性，只需要获取对应的val修改http请求的域名即可

