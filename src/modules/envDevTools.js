/**
 * @description  用于在非打包后线上环境的环境切换，以及性能、异常、行为监控及上报
 */

import './env.css'
import { enableGesture } from "./touch.js";
import { createDialog, updateDialog } from './components/dialog'
import { createToast } from './components/toast'
import { Storage, checkType } from "@/utils";

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
  watchEnv: true, //是否监听环境
  watchPerformance: true, //是否监听性能
  watchError: true, //是否监听性能
  watchRoutes: true, //是否监听性能
  watchActions: true, //是否监听行为
  watchStorage: true, //是否监听storage
  watchSystem: true, //是否监听手机系统数据
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
    baseURL: 'http://localhost:8000'
  },
  maxLimit: 5,  //最大缓存限制
  asyncTime: 5000, //默认延迟时间
  endTime: 10000, //监听手势结束时间
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

//最新缓存的采集
const storageData = {
  newStorageList: [],
  maxLen: 5
}

//手势数据
const touchData = {
  envBoxInfo: {
    ew: 0,
    eh: 0,
    el: 0,
    et: 0
  }
}

/**
 * 初始化
 */
const init = () => {
  Storage.set('global_forbid', false)
}
/**
 * envTools开始入口
 * @param {Object} options 配置项
 */
const startdevTools = (options = newOptions) => {
  init()
  Object.assign(newOptions, options)  //覆盖配置
  checkOptions(newOptions)  //校验options

  //前置监听
  newOptions.watchError && preWatchError()
  newOptions.watchActions && preWatchActions()
  newOptions.watchRoutes && preWatchRoutes()
  newOptions.watchStorage && preWatchStorage()
  newOptions.watchSystem && preWatchSystem()


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
 * 创建env环境切换工具
 * @param  {Object} options 
 */
const createEnvDevTools = (options) => {
  let { envBoxIdName, envBoxExpandIdName, insertDOM, watchSystem, watchEnv, watchPerformance, watchError, watchRoutes, watchStorage } = options
  const envBox = document.createElement('div')

  envBox.id = envBoxIdName
  insertDOM.appendChild(envBox)

  handleDrag(envBox) //处理手势

  envBox.addEventListener('click', (e) => {
    if (Storage.get('global_forbid') === true) return
    envBox.id = envBoxExpandIdName
    expandUI = true
    watchEnv && loadEnvModule(envBox)
    watchPerformance && loadPerformanceModule(envBox)
    watchError && loadErrorModule(envBox)
    watchRoutes && loadRoutesModule(envBox)
    watchStorage && loadStorageModule(envBox)
    watchSystem && loadSystemModule()


    //处理通用样式
    const envBoxBtnList = document.querySelectorAll('#envBox-expand button')
    console.log(envBoxBtnList);
    envBoxBtnList.forEach(btn => {
      btn.ontouchstart = () => {
        btn.style.background = '#40a9ff'
      }
      btn.ontouchend = () => {
        btn.style.background = '#0987ee'
      }
    })
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
 * 处理拖拽
 */
const handleDrag = (envBox) => {
  enableGesture()  //监听手势
  let ew = envBox.offsetWidth
  let eh = envBox.offsetHeight
  let el = envBox.offsetLeft
  let et = envBox.offsetTop
  let isDrag = false
  document.documentElement.addEventListener('panstart', (e) => {
    if ((el - 10 < e.clientX && e.clientX < (el + ew + 10)) && (et - 10 < e.clientY && e.clientY < (et + eh + 10))) {
      console.log('darg');
      isDrag = true
    } else {
      isDrag = false
    }
  })
  document.documentElement.addEventListener('panend', (e) => {
    if (isDrag) {
      envBox.style.top = e.clientY + 'px'
      et = e.clientY
    }
  })
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
    updateDialog(`<div>${errorData.errorSum}</div>`)
  })
  window.addEventListener('unhandledrejection', (e) => {
    handleError("promise error" + e.reason)
    updateDialog(`<div>${errorData.errorSum}</div>`)
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
    console.log('routes change', event);
  })
}

/**
 * 前置监听Storage事件
 */
const preWatchStorage = () => {
  const { isNewStorage } = newOptions
  const { maxLen } = storageData

  let originSetItem = localStorage.setItem
  //自定义分发事件
  localStorage.setItem = function (key, val) {
    val = JSON.parse(val)

    let event = new Event("setItem", { key: val });
    event.key = key
    event.val = val
    let index = storageData.newStorageList.findIndex(item => item[0] === key)
    if (index > -1) {
      //如果已经存在置于顶部
      storageData.newStorageList.splice(index, 1)
      storageData.newStorageList.unshift([key, val])
    } else {
      storageData.newStorageList.push([key, val]) //挂载到Storage对象上
    }

    window.dispatchEvent(event);
    originSetItem.apply(this, arguments);
  }
}

/**
 * 系统数据
 */
const preWatchSystem = () => {
  console.log(window.plus);

  document.addEventListener("plusready", (e) => {
    console.log('getDeviceInfo success: ' + JSON.stringify(e));
  }, false)
  // plus.device.getInfo({
  //   success (e) {
  //     console.log('getDeviceInfo success: ' + JSON.stringify(e));
  //   }
  // })
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
    errorData.errorSum += `${errorData.errorCount}: ` + msg + '<br>'
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
 * 环境模块
 * @param {DOM} envBox  devTools DOM
 */
const loadEnvModule = (envBox) => {
  let { envList } = newOptions

  let envBtnDOM = document.createElement('button')
  envBtnDOM.innerText = Storage.get('global_env') || 'env'
  envBtnDOM.className = 'envBtn'
  envBox.appendChild(envBtnDOM)

  envBtnDOM.addEventListener('click', () => {
    let contentStr = `<div class='dialog-detail'>当前环境: ${Storage.get('global_env') || 'env'}</div>`
    envList.forEach(item => {
      contentStr += `<button class='env-btn'>${item}</button>`
    })

    //创建弹窗
    createDialog(contentStr)

    const buttonList = document.querySelectorAll('.env-btn')
    buttonList.forEach(btn => {
      btn.addEventListener('click', (e) => {
        expandUI = false
        let env = e.target.textContent
        Storage.set('global_env', env)
        btn.innerText = env
        envBtnDOM.innerText = Storage.get('global_env') || 'env'
        Storage.set('global_url', `https://${env}.zzss.com`)
        createToast('已成功修改' + env + '环境')
      }, false)
    })
  }, false)

}

/**
 * 加载性能监控模块
 * @param {DOM} envBox  devTools DOM
 */
const loadPerformanceModule = (envBox) => {
  let button = document.createElement('button')
  envBox.appendChild(button)
  button.innerText = 'performance'

  let FP, DCL, L = 0
  let { domLoading, navigationStart, domContentLoadedEventEnd, loadEventEnd } = window.performance.timing
  FP = domLoading - navigationStart
  DCL = domContentLoadedEventEnd - navigationStart
  L = loadEventEnd - navigationStart

  button.onclick = () => {
    createDialog(`<div>FP:${FP}ms----DCL:${DCL}ms---L:${L}ms</div>`)
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
    if (!errorSum) {
      createDialog(`<div>no error</div>`)
      return
    }
    createDialog(`<div>${errorSum}</div>`)
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
      let str = `<div>${key + '-----' + val}</div><br>`
      routerInfoStr += str
    }
    createDialog(routerInfoStr)
  }
}

/**
 * Storage模块
 * @param {DOM} envBox
 */
const loadStorageModule = (envBox) => {
  const { isNewStorage } = newOptions
  const { maxLen, newStorageList } = storageData
  let storageBtn = document.createElement('button')
  envBox.appendChild(storageBtn)
  storageBtn.innerText = 'storage'

  storageBtn.onclick = () => {
    let storageInfoStr = ''

    //展示前几
    let len = storageData.newStorageList?.length
    if (isNewStorage && maxLen < len) {
      storageData.newStorageList.splice(maxLen, len)
    }

    storageData.newStorageList.forEach(storage => {
      let k = storage[0]
      let v = JSON.parse(storage[1])
      let type = checkType(v)
      console.log('type', type)
      let str = `<div>key: ${k} val: ${v} type: ${type} <br></div>`
      storageInfoStr += str
    })
    createDialog(storageInfoStr)
  }
}

const loadSystemModule = () => {

}

/**
 * 数据上报
 * @param {Object} obj 上报的对象
 * @param {'err' | 'pv'} type 上传类型
 * @param {'beacon' | 'gif'} myMethods 自定义方法 
 */
const sendMsg = (obj, type, myMethods) => {
  //校验
  if (checkType(obj) !== 'object' && !type) {
    throw new Error('do not input object or type')
  }

  const { sendOptions: { baseURL, commonInfo, method } } = newOptions
  let submitObj = Object.assign({}, obj, commonInfo)
  let queryStr = Object.entries(submitObj).map(([key, val]) => `${key}=${val}`).join('&')

  //gif图片发送方式
  if (myMethods === 'gif' || method === 'gif') {
    let img = new Image();
    img.src = `${baseURL}?` + encodeURIComponent(queryStr)
    console.log("上传信息", decodeURIComponent(img.src));
  }
  if (myMethods === 'beacon' || method === 'beacon') {
    navigator.sendBeacon(baseURL, submitObj)
  }
}

export default {
  startdevTools,
  sendMsg
}