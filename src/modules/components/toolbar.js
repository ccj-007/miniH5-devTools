/**
 * @description toolbar component
 */

import { $ } from "@/utils";
import clipboardIcon from '@/svg/clipboard.svg'
import binIcon from '@/svg/bin.svg'
import { clearModule } from '../devTools'
import { createToast } from './toast'

let curDialogWidth = 0

/**
 * 创建toolbar
 */
export const createToolbar = (dialogDOM, module) => {
  curDialogWidth = dialogDOM.offsetWidth
  let toolbarDOM = document.createElement('div')
  toolbarDOM.className = 'toolbar-warp'

  toolbarDOM.innerHTML += clipboardIcon
  toolbarDOM.innerHTML += binIcon

  setTimeout(() => {
    dialogDOM.appendChild(toolbarDOM)
    watchBtn(dialogDOM, module)
  }, 0);
}

/**
 * 监听btn
 */
export const watchBtn = (dialogDOM, module) => {
  let clipDOM = $('.toolbar-clip')
  let clearDOM = $('.toolbar-bin')

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
}

/**
 * 获取文本内容
 * @param {*} dom 
 */
var getText = function (dom) {
  let allText = dom.innerHTML

  allText = allText.replace(/<\/?.+?\/?>/g, '')//去除标签
  allText = allText.replace(/\s+/g, '');//去除空格
  if (allText == "") return;
  return allText;
}
