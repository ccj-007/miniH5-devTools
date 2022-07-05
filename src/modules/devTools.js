/**
 * @description  用于在非打包后线上环境的环境切换，以及性能、异常、行为监控及上报
 */
import './style/animate.css'
import './style/tools.css'
import './style/component.css'
import './style/global.css'
import { enableGesture } from "./touch.js";
import { createDialog, updateDialog } from './components/dialog'
import { createToast, createErrorToast, createToastText } from './components/toast'
import { Storage, checkType, handleCircularJson, $, toDate } from "@/utils";
import { proxy } from "ajax-hook";

const insertDOM = document.body
let expandUI = false  //是否已经展示按钮

// 配置项
const newOptions = {
  insertDOM: insertDOM, //插入的envTools的容器
  wait: 1000, //等待时间
  needSleep: false, //是否要延迟加载 
  envBoxIdName: 'envBox',  //未展开DOM，必须是id选择器
  envBoxExpandIdName: 'envBox-expand', //延展后的DOM，必须是id选择器
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

//异常数据采集
const errorData = {
  errorCount: 0,
  errorSum: '',
  errorList: []
}
//性能标准
const performaceData = {
  FP: [30, 100],
  DCL: [500, 1200],
  L: [600, 2000]
}

//路由数据采集
const routesData = {
  //用于当前页面展示
  routeInfo: {
    newURL: '',  //当前页面url
    oldURL: '', // 上级页面
    title: '', //页面标题
    routeType: '', //路由类型
    refreshNums: Storage.get('global_refreshNums') || 0, //存在刷新次数
    changeTime: '', //路由改变时间
  },
  routesList: [] // 采集pv数据的列表
}
//缓存数据采集
const storageData = {
  localStorageList: [],
  maxLen: 5,
  sessionStorageList: []
}
//系统数据采集
const systemData = {

}
//console采集
const consoleData = {
  consoleList: [],
  info: [],
  error: [],
  log: [],
  warn: []
}
//http请求采集
const httpData = {
  httpList: [],
  urlList: []
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
  newOptions.watchConsole && preWatchConsole()
  newOptions.watchHttp && preWatchHttp()

  let { needSleep, wait } = newOptions

  //延迟加载
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
  let { envBoxIdName, envBoxExpandIdName, insertDOM, watchHttp, watchSystem, watchEnv, watchPerformance, watchError, watchRoutes, watchStorage, watchConsole } = options
  const envBox = document.createElement('div')

  envBox.id = envBoxIdName
  insertDOM.appendChild(envBox)

  handleDrag(envBox) //处理手势

  envBox.addEventListener('click', (e) => {
    if (Storage.get('global_forbid') === true) return
    expandUI = true
    envBox.id = envBoxExpandIdName
    envBox.className = 'slide-in-right'
    // 在打开tabbar栏后监听
    watchEnv && loadEnvModule(envBox)
    watchPerformance && loadPerformanceModule(envBox)
    watchError && loadErrorModule(envBox)
    watchRoutes && loadRoutesModule(envBox)
    watchStorage && loadStorageModule(envBox)
    watchSystem && loadSystemModule(envBox)
    watchConsole && loadConsoleModule(envBox)
    watchHttp && loadHttpModule(envBox)
    loadVersionModule(envBox)
    loadClearModule(envBox)

    loadBaseModule(envBox)

    //处理通用样式
    const envBoxBtnList = document.querySelectorAll('#envBox-expand button')
    envBoxBtnList.forEach(btn => {
      btn.ontouchstart = () => {
        btn.style.background = '#26699c'
      }
      btn.ontouchend = () => {
        btn.style.background = '#194769'
      }
    })
  }, false)
  document.addEventListener('click', (e) => {
    if (e.target.id === envBox.id) return
    if (expandUI) {
      envBox.id = envBoxIdName
      envBox.innerHTML = ''
      expandUI = false
      envBox.className = ''
    }
  }, false)
}

/**
 * 加载基础模块
 */
const loadBaseModule = (envBox) => {
  let moduleList = ['watchEnv', 'watchPerformance', 'watchError', 'watchRoutes', 'watchStorage', 'watchSystem', 'watchConsole', 'watchHttp']

  moduleList.forEach(module => {
    if (!newOptions[module]) {
      console.log("asdasdasdasdasd");
      let btn = document.createElement('button')
      envBox.appendChild(btn)
      btn.innerText = '....'
    }
  })
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
  let isTouchDrag = false

  document.documentElement.addEventListener('panstart', (e) => {
    if ((el - 10 < e.clientX && e.clientX < (el + ew + 10)) && (et - 10 < e.clientY && e.clientY < (et + eh + 10))) {
      isTouchDrag = true
    } else {
      isTouchDrag = false
    }

  })
  document.documentElement.addEventListener('panend', (e) => {
    if (isTouchDrag) {
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
  //自定义数据不能为空
  for (const key in options) {
    const val = options[key];
    if (val == null) {
      createErrorToast("options exist null or undefined----" + key)
    }
  }
}

/**
 * 前置监听处理error
 */
const preWatchError = () => {
  window.addEventListener('error', (e) => {
    handleError("global error" + e.message)
    updateDialog(`<div class='envBox-error'>${errorData.errorSum}</div>`, 'error')
  }, false)
  window.addEventListener('unhandledrejection', (e) => {
    handleError("promise error" + e.reason)
    updateDialog(`<div class='envBox-error'>${errorData.errorSum}</div>`, 'error')
  }, false)
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
  const info = routesData.routeInfo
  info.newURL = window.location.href
  info.oldURL = window.location.href
  info.title = document.title
  info.routeType = window.location.href.includes('/#/') ? 'hash' : 'history'
  info.changeTime = toDate()

  window.onload = () => {
    info.refreshNums += 1
    Storage.set('global_refreshNums', info.refreshNums)
  }
  window.addEventListener('popstate', function (event) {
    info.changeTime = toDate()
    if (info.routeType === 'history') {
      createToast('back：' + window.location.href)
    }
  })
  window.addEventListener('hashchange', function (event) {
    info.newURL = event.newURL
    info.oldURL = event.oldURL
    info.routeType = 'hash'
    info.changeTime = toDate()
    info.routesList.push(event.newURL)
    createToast('back：' + event.newURL)
  })
  window.addHistoryListener('history', function () {
    info.newURL = window.location.href
    info.routeType = 'history'
    info.changeTime = toDate()
    createToast('enter：' + window.location.href)
  })
}

/**
 * 前置监听Storage事件
 */
const preWatchStorage = () => {
  function initStorage (dataName, eventName) {
    let origin = eventName.setItem
    //自定义分发事件
    eventName.setItem = function (key, val) {
      val = JSON.parse((handleCircularJson(val)))
      let event = new Event("setItem", { key: val });
      event.key = key
      event.val = val
      let index = storageData[dataName].findIndex(item => item[0] === key)
      if (index > -1) {
        //如果已经存在置于顶部
        storageData[dataName].splice(index, 1)
        storageData[dataName].unshift([key, val])
      } else {
        storageData[dataName].push([key, val]) //挂载到Storage对象上
      }

      window.dispatchEvent(event);
      origin.apply(this, arguments);
    }
  }
  initStorage('localStorageList', localStorage)
  initStorage('sessionStorageList', sessionStorage)
}

/**
 * 前置监听系统数据
 */
const preWatchSystem = async () => {
  //通过第三方sdk获取
  try {
    if (returnCitySN) {
      systemData['IP'] = returnCitySN['cip']
      systemData['地区代码'] = returnCitySN['cid']
      systemData['城市'] = returnCitySN['cname']
    }
  } catch (e) {
    if (!Storage.get('global_refreshNums')) {
      createErrorToast('SDK请求失败')
    }
  }

  //原生设备数据
  if (!window.plus) {
    systemData.userAgent = navigator.userAgent
    systemData.appName = navigator.appName
    systemData.appCodeName = navigator.appCodeName
    systemData.appVersion = navigator.appVersion
    systemData.appMinorVersion = navigator.appMinorVersion
    systemData.platform = navigator.platform
    systemData.language = navigator.language
    systemData.width = window.screen.width
    systemData.height = window.screen.height
    systemData.pixelDepth = window.screen.pixelDepth
  }

  //webview
  function plusReady () {
    plus.geolocation.getCurrentPosition(function (p) {
      systemData.latitude = p.coords.latitude
      systemData.longitude = p.coords.longitude
      systemData.altitude = p.coords.altitude
      systemData.accuracy = p.coords.accuracy

      systemData.country = p.address.country
      systemData.city = p.address.city
      systemData.district = p.address.district
      systemData.street = p.address.street
      systemData.streetNum = p.address.streetNum
      systemData.poiName = p.address.poiName
      systemData.postalCode = p.address.postalCode
      systemData.cityCode = p.address.cityCode
      systemData.addresses = p.addresses
    }, function (e) {
      alert('Geolocation error: ' + e.message);
    });

    //获取H5的app 设备信息
    plus.device.getInfo({
      success (deviceInfo) {
        systemData = {
          IMEI: deviceInfo.imei,
          IMSI: deviceInfo.imsi,
          uuid: deviceInfo.uuid,
          Model: plus.device.model,
          vendor: plus.device.vendor,
          dpiX: plus.screen.dpiX,
          dpiY: plus.screen.dpiY,
          height: plus.screen.height,
          width: plus.screen.width,
          resolutionHeight: plus.screen.resolutionHeight,
          resolutionWidth: plus.screen.resolutionWidth,
          scale: plus.screen.scale,
          CONNECTION_NONE: plus.networkinfo.CONNECTION_NONE,
          CONNECTION_ETHERNET: plus.networkinfo.CONNECTION_ETHERNET,
          CONNECTION_WIFI: plus.networkinfo.CONNECTION_WIFI,
          language: plus.os.language,
          name: plus.os.name,
          vendor: plus.os.vendor,
          version: plus.os.version,
          language: plus.os.language,
        }
      }
    });
  }
  if (window.plus) {
    plusReady();
  } else {
    document.addEventListener("plusready", plusReady, false);
  }
}

/**
 * 前置监听console日志
 */
const preWatchConsole = () => {
  function watchLog (type) {
    let oldLog = console[type]
    console[type] = function () {
      consoleData.consoleList.push({ data: arguments[0], type })
      oldLog.call(console, ...arguments);
    }
  }

  let logList = ['info', 'error', 'log', 'warn']
  logList.forEach(type => {
    watchLog(type)
  })
}

/**
 * 前置监听http请求
 */
const preWatchHttp = () => {
  proxy({
    //请求发起前进入
    onRequest: (config, handler) => {
      console.log("preWatchHttp----start", config)

      let sendObj = {
        method: config.method,
        headers: config['content-type'],
        url: config.url,
        body: config.body || ''
      }
      httpData.httpList.push(sendObj)
      httpData.urlList.push({ url: config.url, type: 'send' })
      handler.next(config);
    },
    //请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
    onError: (err, handler) => {
      console.log("preWatch----error", err)

      let errObj = {
        method: err.config.method,
        headers: err.config['content-type'],
        url: err.config.url,
      }
      httpData.httpList.push(errObj)
      httpData.urlList.push({ url: err.config.url, type: 'err' })
      handler.next(err)
    },
    //请求成功后进入
    onResponse: (res, handler) => {
      console.log("preWatch----success", res)
      let sucObj = {
        method: res.config.method,
        headers: res.headers['content-type'],
        url: res.config.url,
        status: res.status,
        response: res.response,
      }
      httpData.httpList.push(sucObj)
      httpData.urlList.push({ url: res.config.url, type: 'suc' })
      handler.next(res)
    }
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
    createDialog(contentStr, 'env')

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

  //测试网速
  let netWork = navigator.connection.downlink * 1024 / 8
  let netWorkType = navigator.connection.effectiveType
  console.log(navigator.connection);
  function getPerformaceStyle (type, data) {
    let standard = performaceData[type]
    return data < standard[0] ? 'xn-quick xn' : (
      data > standard[1] ? 'xn-low xn' : 'xn-mid xn'
    )
  }

  let content = `<div>首屏渲染：<span class=${getPerformaceStyle('FP', FP)}>${FP}ms</span></div><br><div>DOM加载完毕： <span class=${getPerformaceStyle('DCL', DCL)}>${DCL}ms</span></div><br><div>图片、样式等外链资源加载完成：<span class=${getPerformaceStyle('L', L)}>${L}ms</span></div><br><div>网速：<span>${netWork}kb/s</span></div><br><div>网络类型：<span>${netWorkType}</span></div>`


  button.onclick = () => {
    createDialog(content, 'performance')
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
      createToast('no error')
      return
    }
    createDialog(`<div class='envBox-error'>${errorSum}</div>`, 'error')
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
      let str = `<div class='envBox-textline router'>${key + '：' + val}</div>`
      routerInfoStr += str
    }
    routerInfoStr += `<div class='envBox-inlineText envBox-textline router-log router'>routesList: ${routesData.routesList}</div>`

    createDialog(routerInfoStr, 'route')

    $('.router-log').onclick = () => {
      createToastText(JSON.stringify(routesData.routesList))
    }
  }
}

/**
 * Storage模块
 * @param {DOM} envBox
 */
const loadStorageModule = (envBox) => {
  const { isNewStorage } = newOptions
  const { maxLen, localStorageList } = storageData
  let storageBtn = document.createElement('button')
  envBox.appendChild(storageBtn)
  storageBtn.innerText = 'storage'

  storageBtn.onclick = () => {
    let storageInfoStr = ''
    let storageList = []
    //展示前几
    let len = storageData.localStorageList?.length
    if (isNewStorage && maxLen < len) {
      storageData.localStorageList.splice(maxLen, len)
    }
    if (!storageData.localStorageList.length) {
      createToast('no storage')
      return
    }

    storageData.localStorageList.forEach((storage, index) => {
      let k = storage[0]
      let v = JSON.parse(handleCircularJson(storage[1]))
      let type = checkType(v)
      let str = `<div class='envBox-inlineText storage-box'><span class='storage-key'>key： </span><span >${k}</span> <span class='storage-key'>val：</span><span >${v}</span> <span class='storage-key'>type：</span><span >${type}</span> <br></div>`
      storageInfoStr += str

      let strAll = str.replace('envBox-inlineText', '')
      storageList.push(strAll)
    })
    createDialog(`<div class='envBox-storage'>${storageInfoStr}</div>`, 'storage', storageData)
    storageInfoStr = ''

    //开始监听url点击，展示详情
    let storageDOM = document.querySelectorAll('.storage-box')
    storageDOM.forEach((dom, index) => {
      dom.addEventListener('click', () => {
        createToastText(storageList[index], 5000)
      }, false)
    })
  }
}

/**
 * System模块
 * @param {DOM} envBox
 */
const loadSystemModule = (envBox) => {
  let systemBtn = document.createElement('button')
  envBox.appendChild(systemBtn)
  systemBtn.innerText = 'system'

  systemBtn.onclick = () => {
    if (!window.plus) {
      createToast('在真机webview中可以获取更多设备数据')
    }
    if (JSON.stringify(systemData) !== '{}') {
      let contents = ''
      for (const [k, v] of Object.entries(systemData)) {
        contents += `<div>${k}: ${v}</div>`
      }
      createDialog(contents, 'system')
    } else {
      createErrorToast('设备数据获取异常')
    }
  }
}

/**
 * Console模块
 * @param {DOM} envBox
 */
const loadConsoleModule = (envBox) => {
  let consoleBtn = document.createElement('button')
  envBox.appendChild(consoleBtn)
  consoleBtn.innerText = 'log'

  consoleBtn.onclick = () => {
    let sumContent = ''

    if (!consoleData.consoleList.length) {
      createToast('no log')
      return
    }
    consoleData.consoleList.forEach(content => {
      let { data, type } = content
      if (typeof data === 'object') {
        let newObj = handleCircularJson(data)
        sumContent += `<div class='console console-${type}'>${newObj}</div>`
      } else {
        sumContent += `<div class='console console-${type}'>${data}</div>`
      }
    })

    createDialog(`<div class='envBox-log'>${sumContent}</div>`, 'log')

    //开始监听log点击，展示详情
    let logDOM = document.querySelectorAll('.console')
    logDOM.forEach((dom, index) => {
      dom.addEventListener('click', () => {
        const data = consoleData.consoleList[index].data
        let allContent = typeof data === 'object' ? handleCircularJson(data) : data
        createToastText(allContent, 5000)
      }, false)
    })
  }
}

/**
 * Http模块
 * @param {DOM} envBox
 */
const loadHttpModule = (envBox) => {
  let httpBtn = document.createElement('button')
  envBox.appendChild(httpBtn)
  httpBtn.innerText = 'http'

  httpBtn.onclick = () => {
    let urlContents = ''
    if (!httpData.urlList.length) {
      createToast('no http data')
      return
    }
    httpData.urlList.forEach((content, index) => {
      urlContents += `<div class='http http-${content.type}'>${content.url}</div>`
    })
    createDialog(`<div class='envBox-http'>${urlContents}</div>`, 'http')

    //开始监听url点击，展示详情
    let urlDOM = document.querySelectorAll('.http')
    urlDOM.forEach((dom, index) => {
      dom.addEventListener('click', () => {
        let allContent = ''
        for (const [k, v] of Object.entries(httpData.httpList[index])) {
          allContent += `<div>${k}: ${v}</div> `
        }
        createToastText(allContent, 5000)
      }, false)
    })
  }
}

/**
 * 版本模块
 * @param {DOM} envBox
 */
const loadVersionModule = (envBox) => {
  let versionBtn = document.createElement('button')
  envBox.appendChild(versionBtn)
  versionBtn.innerText = 'version'

  versionBtn.onclick = () => {
    createToast(`当前版本${newOptions.version}`)
  }
}

/**
 * 清除缓存模块
 * @param {DOM} envBox
 */
const loadClearModule = (envBox) => {
  let clearBtn = document.createElement('button')
  envBox.appendChild(clearBtn)
  clearBtn.innerText = 'clear'

  clearBtn.onclick = () => {
    clearModule('error')
    clearModule('storage')
    clearModule('log')
    clearModule('http')
    routesData.routesList = []
    routesData.routeInfo.refreshNums = 0

    createToast('cache cleared successfully')
  }
}

export const clearModule = (type) => {
  switch (type) {
    case 'error':
      errorData.errorList = []
      errorData.errorSum = ''
      break;
    case 'http':
      httpData.urlList = []
      break;
    case 'storage':
      storageData.localStorageList = []
      break;
    case 'log':
      consoleData.consoleList = []
      break;
  }
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
    createErrorToast('do not input object or type')
  }

  const { sendOptions: { baseURL, commonInfo, method } } = newOptions
  let submitObj = Object.assign({}, obj, commonInfo)
  let queryStr = Object.entries(submitObj).map(([key, val]) => `${key}=${val}`).join('&')

  //gif图片发送方式
  if (myMethods === 'gif' || method === 'gif') {
    let img = new Image();
    img.src = `${baseURL}?` + encodeURIComponent(queryStr)
  }
  if (myMethods === 'beacon' || method === 'beacon') {
    navigator.sendBeacon(baseURL, submitObj)
  }
}

export default {
  startdevTools,
  sendMsg
}