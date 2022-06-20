/**
 * @description  用于在非打包后线上环境的环境切换，以及性能、异常、行为监控及上报
 */

import './env.css'

const curEnv = window.localStorage.getItem('global_env') || 'dev'  //当前环境
let expandUI = false  //是否已经展示按钮
const insertDOM = document.querySelector('#app')

//配置项
const newOptions = {
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
  watchActionDOMList: [{ eventType: 'click', domId: '.test1' }], //监听数组内的DOM
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
}
//异常数据采集
const errorData = {
  errorCount: 0,
  errorSum: '',
  errorList: []
}
//路由数据采集
const routesData = {
  //用于当前页面展示
  routeInfo: {
    url: '',  //当前页面url
    referer: '', // 上级页面
    title: '', //页面标题
    action: '', //页面加载来源
    sendTime: '', //发送时间
    triggerTime: '', //事件发送时间
  },
  routesList: [] // 采集pv数据的列表
}

/**
 * envTools开始入口
 * @param {Object} options 配置项
 */
const startdevTools = (options = newOptions) => {
  Object.assign(newOptions, options)  //覆盖配置
  checkOptions(newOptions)  //校验options

  //前置监听
  newOptions.watchError && preWatchError()
  newOptions.watchActions && preWatchActions()
  newOptions.watchRoutes && preWatchRoutes()

  let { needSleep, wait } = newOptions

  //如果需要延迟加载
  if (needSleep) {
    setTimeout(() => {
      createEnvDevTools(newOptions)
    }, wait)
    return
  }
  createEnvDevTools(newOptions)
}

/**
 * 校验
 * @param {*} options 
 */
const checkOptions = (options) => {
  console.log(options);

  //自定义数据不能为空
  for (const key in options) {
    const val = options[key];
    if (val == null) {
      throw new Error("options exist null or undefined----" + key)
    }
  }
}

/**
 * 前置监听处理error
 */
const preWatchError = () => {
  window.addEventListener('error', (e) => {
    handleError("global error" + e.message)
  })
  window.addEventListener('unhandledrejection', (e) => {
    handleError("promise error" + e.reason)
  })
}


/**
 * 前置监听处理actions
 */
const preWatchActions = () => {
  let { watchActionDOMList } = newOptions
  watchActionDOMList.forEach(item => {
    let domList = item.domId && document.querySelectorAll(item.domId)
    if (domList) {
      domList.forEach(dom => {
        dom.addEventListener(item.eventType, () => {
          sendMsg({ type: item.eventType, DOM: item.domId }, 'action')
        })
      })
    }
  })
}

/**
 * 前置监听处理routes
 */
const preWatchRoutes = () => {
  routesData.routeInfo.url = window.location.href
  routesData.routeInfo.title = document.title

  console.log(routesData);
  window.addEventListener('popstate', function (event) {
    console.log('路由变化', event);
  })
}

/**
 *处理错误
 */
const handleError = (msg) => {
  let { errorList } = errorData
  let { maxLimit, asyncTime } = newOptions
  if (!msg) return

  errorList.push(msg)
  errorData.errorCount += 1
  if (checkType(errorList) === 'array') {
    errorData.errorSum += `${errorData.errorCount}: ` + msg + '\n'
    let errorObj = { errorSum: errorData.errorSum }
    //如果超过阈值上报错误数据
    if (errorData.errorCount >= newOptions.maxLimit) {
      sendMsg(errorObj, 'err')
      errorData.errorList = []
    } else {
      //默认延迟5s, 如果没有达到上限就发送
      if (!errorData.errorList.length) return
      setTimeout(() => {
        if (errorData.errorCount < newOptions.maxLimit) {
          sendMsg(errorObj, 'err')
          errorData.errorList = []
        }
      }, asyncTime)
    }
  }
}

/**
 * 创建env环境切换工具
 * @param  {Object} options 
 */
const createEnvDevTools = (options) => {
  let { envBoxIdName, envBoxExpandIdName, insertDOM, watchPerformance, watchError, watchRoutes } = options
  const envBox = document.createElement('div')

  envBox.id = envBoxIdName
  insertDOM.appendChild(envBox)
  envBox.addEventListener('click', (e) => {
    envBox.id = envBoxExpandIdName
    expandUI = true
    handleUI(envBox)
    watchPerformance && loadPerformanceModule(envBox)
    watchError && loadErrorModule(envBox)
    watchRoutes && loadRoutesModule(envBox)
  }, false)
  document.addEventListener('click', (e) => {
    if (e.target.id === envBox.id) return
    if (expandUI) {
      envBox.id = envBoxIdName
      envBox.innerHTML = ''
      expandUI = false
    }
  }, false)
}

/**
 * 处理ui界面
 * @param {DOM} envBox  devTools DOM
 */
const handleUI = (envBox) => {
  let envList = ['test', 'dev', 'prebrand']
  let content = `<span>now: ${curEnv}</span>`
  envList.forEach(item => {
    content += `<button>${item}</button>`
  })
  envBox.innerHTML = content
  //此时按钮已渲染
  const buttonList = document.querySelectorAll('#envBox, button')
  buttonList.forEach(btn => {
    btn.addEventListener('click', (e) => {
      expandUI = false
      let env = e.target.textContent
      window.localStorage.setItem('global_env', env)
      btn.innerText = env
      window.localStorage.setItem('global_url', `https://${env}.zzss.com`)
      alert('已成功修改' + env + '环境')
    }, false)
  })
}

/**
 * 加载性能监控模块
 * @param {DOM} envBox  devTools DOM
 */
const loadPerformanceModule = (envBox) => {
  console.log(envBox);
  let button = document.createElement('button')
  envBox.appendChild(button)

  let FP, DCL, L = 0
  let { domLoading, navigationStart, domContentLoadedEventEnd, loadEventEnd } = window.performance.timing
  FP = domLoading - navigationStart
  DCL = domContentLoadedEventEnd - navigationStart
  L = loadEventEnd - navigationStart

  button.innerText = 'performance'
  button.onclick = () => {
    alert(`FP:${FP}ms----DCL:${DCL}ms---L:${L}ms`)
  }
}

/**
 * 异常捕获模块
 * @param {DOM} envBox
 */
const loadErrorModule = (envBox) => {
  const { errorSum } = errorData
  let errorBtn = document.createElement('button')
  envBox.appendChild(errorBtn)
  errorBtn.innerText = 'error'

  errorBtn.onclick = () => {

    alert(errorSum)
  }
}

/**
 * routes模块
 * @param {DOM} envBox
 */
const loadRoutesModule = (envBox) => {
  const { routeInfo } = routesData
  let routesBtn = document.createElement('button')
  envBox.appendChild(routesBtn)
  routesBtn.innerText = 'route'

  routesBtn.onclick = () => {
    let routerInfoStr = ''
    for (const [key, val] of Object.entries(routeInfo)) {
      let str = key + '-----' + val + '\n'
      routerInfoStr += str
    }
    alert(routerInfoStr)
  }
}

/**
 * 数据上报
 * @param {Object} obj 上报的对象
 * @param {'err' | 'pv'} type 上传类型
 * @param {'beacon' | 'gif'} myMthods 自定义方法 
 */
const sendMsg = (obj, type, myMthods) => {
  //校验
  if (checkType(obj) !== 'object' && !type) {
    throw new Error('do not input object or type')
  }

  const { sendOptions: { baseURL, commonInfo, method } } = newOptions
  let submitObj = Object.assign({}, obj, commonInfo)
  let queryStr = Object.entries(submitObj).map(([key, val]) => `${key}=${val}`).join('&')

  //gif图片发送方式
  if (myMthods === 'gif' || method === 'gif') {
    let img = new Image();
    img.src = `${baseURL}?` + encodeURIComponent(queryStr)
    console.log("上传信息", decodeURIComponent(img.src));
  }
  if (myMthods === 'beacon' || method === 'beacon') {
    navigator.sendBeacon(baseURL, submitObj)
  }
}

/**
 * 检查数据类型工具
 * @param {*} params
 * @return {string} 数据类型
 */
const checkType = (params) => {
  return params && Object.prototype.toString.call(params).slice(8, -1).toLowerCase()
}

export default {
  startdevTools,
  sendMsg
}