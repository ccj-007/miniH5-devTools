/**
 * @description toast component
 */
import { $ } from "@/utils";
import clipboardIcon from '@/svg/clipboard.svg'
import binIcon from '@/svg/bin.svg'

/**
 * 创建toolbar
 */
export const createToolbar = () => {
  console.log("create toolbar");

  let dialogDOM = $('#envBox-dialog')
  let toolbarDOM = document.createElement('div')
  toolbarDOM.className = 'toolbar-warp'

  toolbarDOM.innerHTML += clipboardIcon
  toolbarDOM.innerHTML += binIcon
  dialogDOM.appendChild(toolbarDOM)
}

