```js
  npm i mini-h5-tools  //安装依赖
```

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
    //通过手势解锁
    h5tools.gesture()
  </script>
</body>

</html>
```

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
    //通过手势解锁，第一个参数dom范围，第二个参数z字形手势解锁
    h5tools.gesture(document.documentElement, 'z', options)

    //直接打开
    h5tools.start(options)

    //手动数据上报, obj上报数据对象，type可传入 'err' | 'pv'， myMethods(通过网络信标或gif方案上报数据) 可传入 'beacon' | 'gif' 
    h5tools.send(obj, type, myMthods)

```