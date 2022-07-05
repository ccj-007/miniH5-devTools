/**
 * @description toolbar component
 */

import { $, checkType, handleCircularJson } from "@/utils";
import clipboardIcon from '@/svg/clipboard.svg'
import binIcon from '@/svg/bin.svg'
import filterIcon from '@/svg/filter.svg'
import { clearModule } from '../devTools'
import { createToast, createToastText } from './toast'

let curDialogWidth = 0

/**
 * 创建toolbar
 */
export const createToolbar = (dialogDOM, module, data) => {
  curDialogWidth = dialogDOM.offsetWidth
  let toolbarDOM = document.createElement('div')
  toolbarDOM.className = 'toolbar-warp'

  toolbarDOM.innerHTML += clipboardIcon
  toolbarDOM.innerHTML += binIcon

  if (module === 'storage') {
    toolbarDOM.innerHTML += filterIcon

    loadCookieTools(toolbarDOM)
    loadSessionTools(toolbarDOM, data)
  }

  setTimeout(() => {
    dialogDOM.appendChild(toolbarDOM)
    watchBtn(dialogDOM, module, data)
  }, 0);
}

/**
 * 监听btn
 */
export const watchBtn = (dialogDOM, module, data) => {
  let clipDOM = $('.toolbar-clip')
  let clearDOM = $('.toolbar-bin')
  let filterDOM = $('.toolbar-filter')

  //清理
  clearDOM.onclick = () => {
    dialogDOM.removeChild($(`.envBox-${module}`))
    dialogDOM.style.width = curDialogWidth + 'px'
    clearModule(module)
    createToast('清理成功')
  }

  //一键复制
  clipDOM.onclick = () => {
    let dom = $(`.envBox-${module}`)
    if (!dom) {
      createToast('无数据可复制')
      return
    }
    let clipText = getText(dom)

    if (navigator.clipboard) {
      navigator.clipboard.writeText(clipText);
      createToast('复制成功')
    }
  }

  //过滤
  filterDOM.onclick = () => {
    if (module === 'storage') {
      let name = prompt("输入查询的KEY: ")
      let needList = ['localStorageList', 'sessionStorageList']
      let result = ''
      needList.forEach(list => {
        data[list].findIndex(item => {
          if (item[0] === name) {
            result = item
          }
        })
      })
      if (result && checkType(result) === 'array') {
        createToast(`key: ${result[0]} val: ${result[1]} type: ${checkType(result)}`)
      } else {
        createToast('不存在')
      }
    } else {
      createToast('该模块暂不支持过滤')
    }
  }
}

/**
 * 获取文本内容
 * @param {*} dom 
 */
const getText = function (dom) {
  let allText = dom.innerHTML

  allText = allText.replace(/<\/?.+?\/?>/g, '')//去除标签
  allText = allText.replace(/\s+/g, '');//去除空格
  if (allText == "") return;
  return allText;
}
/**
 * 加载session
 */
const loadSessionTools = (toolbarDOM, data) => {
  let sessionDOM = document.createElement('span')
  sessionDOM.className = 'toolbar-session'
  sessionDOM.innerText = 'session'
  toolbarDOM.appendChild(sessionDOM)
  sessionDOM.onclick = () => {
    let storageInfoStr = ''
    data.sessionStorageList.forEach((storage, index) => {
      let k = storage[0]
      let v = JSON.parse(handleCircularJson(storage[1]))
      let type = checkType(v)
      let str = `<div><span class='storage-key'>key： </span><span >${k}</span> <span class='storage-key'>val：</span><span >${v}</span> <span class='storage-key'>type：</span><span >${type}</span> <br></div>`
      storageInfoStr += str
    })
    createToastText(storageInfoStr)
  }
}

/**
 * 加载cookie
 */
const loadCookieTools = (toolbarDOM) => {
  let cookieDOM = document.createElement('span')
  cookieDOM.className = 'toolbar-cookie'
  cookieDOM.innerText = 'cookie'
  toolbarDOM.appendChild(cookieDOM)
  cookieDOM.onclick = () => {
    getCookie()
  }
}
/**
 * 获取cookie
 */
const getCookie = function () {
  let strCookie = document.cookie;
  let arrCookie = strCookie.split("; ");
  let cookieSum = 'cookie：<br>'
  for (let i = 0; i < arrCookie.length; i++) {
    let arr = arrCookie[i].split("=");
    cookieSum += `${arr[0]}-${arr[1]}<br>`
  }
  createToastText(cookieSum)
}
