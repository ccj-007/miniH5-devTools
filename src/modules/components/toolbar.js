/**
 * @description toolbar component
 */

import { $ } from "@/utils";
import clipboardIcon from '@/svg/clipboard.svg'
import binIcon from '@/svg/bin.svg'
import { clearModule } from '../devTools'
import { createToast } from "./toast";

let curDialogWidth = 0
/**
 * 创建toolbar
 */
export const createToolbar = (dialogDOM, module) => {
  curDialogWidth = dialogDOM.offsetWidth
  console.log("dialogDOM", dialogDOM.offsetWidth);
  let toolbarDOM = document.createElement('div')
  toolbarDOM.className = 'toolbar-warp'

  toolbarDOM.innerHTML += clipboardIcon
  toolbarDOM.innerHTML += binIcon

  console.log(dialogDOM.innerHTML);

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

  /**
   * 清理
   */
  clearDOM.onclick = () => {
    dialogDOM.removeChild($(`.envBox-${module}`))
    dialogDOM.style.width = curDialogWidth + 'px'
    clearModule(module)
  }
  /**
   * 一键复制
   */
  clipDOM.onclick = () => {
    createToast('未开放....')
  }
}
