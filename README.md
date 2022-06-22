### **前提**

**这是个啥？**  

🔨 H5移动端的开发调试工具，支持处理异常、性能、行为、路由、缓存、环境等。（大小只有10kb）


**为啥要做这个，有啥意义么？**

你是否在做H5活动页面的时候，每次真机测试时，各种环境切换而头疼的情况？出现报错无法调试频繁alert的情况？ 想要数据上报没有统一的模块封装？大量缓存Storage无法快速定位key？ 无法获取页面性能关键数据而头疼？ 那么你可以试一试这工具。相信你会喜欢的！😏

**这玩意有啥优势呢 ?**  

 **工具优势**  
 ⚡  快 (rollup打包压缩后只有10kb)  
 📄  纯 (js原生，无任何生产环境依赖)  
 👽  DIY (支持多样化配置)  
 💛  美 (UI界面良心打造)  
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
 🌊  工具拖拽  
 📲  检测设备信息  
 📫   console日志调试   
 💌  ajax请求检查    
 💍  检测版本是否更新  
 🍏  新增原生ui组件  

---


### **准备**

---

```js
  npm i mini-h5-tools  //安装依赖
```

### **示例**

---

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
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
  envBoxIdName: 'envBox',
  envBoxExpandIdName: 'envBox-expand',
  envList: ['test', 'dev', 'prebrand'],  //环境列表
  watchPerformance: true, //是否监听性能
  watchError: true, //是否监听性能
  watchRoutes: true, //是否监听性能
  watchActions: true, //是否监听行为
  watchActionDOMList: [{ eventType: 'click', domId: '.test1' }], //监听数组内的DOM原生事件
  watchStorage: true, //是否监听storage，需要自定义分发事件
  isNewStorage: true, //默认展示前5个更新的storage，false将展示所有
  sendOptions: {
    commonInfo: {
      pid: '', //项目id
      mid: '', //模块id
      uid: '', //用户id
      did: '', //设备id
    },
    method: 'gif', //是否通过sendBeacon发送埋点数据 'beacon' | 'gif' 
    baseURL: 'http://localhost:8000'
  },
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

