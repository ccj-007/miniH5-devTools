/**
 * @description toast component
 */
import { $ } from "@/utils";

const toastType = {
  'info': 'envBox-toast-info',
  'error': 'envBox-toast-error',
  'warn': 'envBox-toast-warn'
}

/**
 * 创建toast
 * @param {string} content  
 * @param {number} wait 
 * @param {string} type 
 * @param {style} dialogStyle 
 */
export const addToastDOM = (content, wait, type, dialogStyle) => {
  //去除全局重复
  if ($('#envBox-toast')) {
    document.body.removeChild($('#envBox-toast'))
  }

  let toastDOM = document.createElement('div')
  toastDOM.id = 'envBox-toast'
  toastDOM.className = `slide-in-blurred-top ${toastType[type]}`

  if (dialogStyle === 'textDialog') {
    toastDOM.style.borderRadius = '5px'
    toastDOM.style.borderRadius = '5px'
  }
  toastDOM.innerHTML = content

  document.body.appendChild(toastDOM)
  setTimeout(() => {
    if ($('#envBox-toast')) {
      document.body.removeChild(toastDOM)
    }
  }, wait);
}

export const createToastText = function (content, wait = 2000) {
  addToastDOM(content, wait, 'info', 'textDialog')
}

export const createToast = function (content, wait = 2000) {
  addToastDOM(content, wait, 'info')
}

export const createErrorToast = function (content, wait = 2000) {
  addToastDOM(content, wait, 'error')
}

export const createWarnToast = function (content, wait = 2000) {
  addToastDOM(content, wait, 'warn')
}