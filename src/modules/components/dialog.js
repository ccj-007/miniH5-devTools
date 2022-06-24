/**
 * @description dialog components
 */
import { Storage, $ } from "@/utils";
import closeIconSrc from '@/svg/close.svg'

/**
 * 创建dialog
 *
 * @param {*} contentStr
 */
export const createDialog = (contentStr) => {
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
  dialogDOM.innerHTML += closeIconSrc  //close icon

  //监听点击关闭dialog
  let closeDOM = document.querySelector('.env-close')
  closeDOM.addEventListener('click', () => {
    clearDialog()
  }, false)

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
export const updateDialog = (contentStr) => {
  if (!$('.envBox-error')) return

  let dialogDOM = document.querySelector('#envBox-dialog')
  if (!dialogDOM) return
  if (dialogDOM.innerHTML) dialogDOM.innerHTML = ''
  dialogDOM.innerHTML += contentStr
  dialogDOM.innerHTML += closeIconSrc  //close icon
  //监听点击关闭dialog
  let closeDOM = document.querySelector('.env-close')
  closeDOM.addEventListener('click', () => {
    clearDialog()
  }, false)
}
