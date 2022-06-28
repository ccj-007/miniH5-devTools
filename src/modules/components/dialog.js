/**
 * @description dialog components
 */
import { Storage, $ } from "@/utils";
import closeIconSrc from '@/svg/close.svg'
import { createToolbar } from './toolbar'
import clipboardIcon from '@/svg/clipboard.svg'
import binIcon from '@/svg/bin.svg'

let contentX, contentY
let isDragDialog = false

/**
 * 创建dialog
 *
 * @param {*} contentStr
 * @param {string} module
 */
export const createDialog = (contentStr, module) => {
  Storage.set('global_forbid', true)
  let dialogDOM = document.querySelector('#envBox-dialog')
  if (!dialogDOM) {
    dialogDOM = document.createElement('div')
    dialogDOM.id = 'envBox-dialog'
    dialogDOM.className = 'jello-horizontal'
    document.body.appendChild(dialogDOM)
  }

  //如果已存在就展示及更新数据
  dialogDOM.style.display = 'block'
  if (dialogDOM.innerHTML) dialogDOM.innerHTML = ''  //一次性更新
  dialogDOM.innerHTML = contentStr
  dialogDOM.innerHTML += closeIconSrc
  checkCreateToolbar(dialogDOM, module)

  //监听拖拽
  initDialogPosition(dialogDOM)
  watchDragDialog()

  //监听点击关闭dialog
  let closeDOM = document.querySelector('.env-close')
  closeDOM.addEventListener('click', () => {
    clearDialog()
  }, false)
}


/**
 * 校验并生成toolbar
 */
export const checkCreateToolbar = (dialogDOM, module) => {
  if (module === 'error' || module === 'http' || module === 'log' || module === 'storage') {
    createToolbar(dialogDOM, module)
  }
}

/**
 * 清除dialog
 */
export const clearDialog = () => {
  let dialogDOM = document.querySelector('#envBox-dialog')
  dialogDOM.innerHTML = ''
  dialogDOM.style.display = 'none'
  Storage.set('global_forbid', false)
}

/**
 * 更新dialog(支持 error)
 *
 * @param {*} contentStr
 */
export const updateDialog = (contentStr, module) => {
  if (!$('.envBox-error')) return

  let dialogDOM = document.querySelector('#envBox-dialog')
  if (!dialogDOM) return
  if (dialogDOM.innerHTML) dialogDOM.innerHTML = ''
  dialogDOM.innerHTML += contentStr
  dialogDOM.innerHTML += closeIconSrc

  checkCreateToolbar(dialogDOM, module)
  //监听点击关闭dialog
  let closeDOM = document.querySelector('.env-close')
  closeDOM.addEventListener('click', () => {
    clearDialog()
  }, false)
}

/**
 * 监听dialog的drag
 */
export const watchDragDialog = () => {
  document.documentElement.addEventListener('panstart', (e) => {
    const dialogDOM = $('#envBox-dialog')
    contentX = e.clientX - dialogDOM.offsetLeft
    contentY = e.clientY - dialogDOM.offsetTop
    if (isContentTouch(dialogDOM, e.startX, e.startY)) {
      isDragDialog = true
    }
  }, false)

  document.documentElement.addEventListener('pan', (e) => {
    const dialogDOM = $('#envBox-dialog')
    moveDialog(dialogDOM, e)
  }, false)

  document.documentElement.addEventListener('panend', (e) => {
    const dialogDOM = $('#envBox-dialog')
    moveDialog(dialogDOM, e)
    isDragDialog = false
  }, false)
}

/**
 * 移动位置
 * @param {DOM} dom 
 * @param {Object} e 
 */
const moveDialog = (dom, e) => {
  if (isDragDialog) {
    dom.style.left = (e.clientX - contentX) + 'px'
    dom.style.top = (e.clientY - contentY) + 'px'
  }
}

/**
 * 重置位置
 * @param {DOM} dom 
 */
const initDialogPosition = (dom) => {
  dom.style.left = ((window.innerWidth / 2) - (dom.offsetWidth / 2)) + 'px'
  dom.style.top = ((window.innerHeight / 2) - (dom.offsetHeight / 2)) + 'px'
}

const isContentTouch = (dom, x, y) => {
  let l = dom.offsetLeft
  let r = dom.offsetLeft + dom.offsetWidth
  let t = dom.offsetTop
  let b = dom.offsetTop + dom.offsetHeight
  return l < x && x < r && t < y && y < b
}