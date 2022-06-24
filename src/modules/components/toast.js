/**
 * @description toast component
 */

const toastType = {
  'info': 'envBox-toast-info',
  'error': 'envBox-toast-error',
  'warn': 'envBox-toast-warn'
}

/**
 * 创建toast
 * @param {*} content  
 * @param {*} wait 
 * @param {*} type 
 */
export const addToastDOM = (content, wait, type) => {
  let toastDOM = document.createElement('div')
  toastDOM.id = 'envBox-toast'
  toastDOM.className = `slide-in-blurred-top ${toastType[type]}`
  toastDOM.innerText = content

  document.body.appendChild(toastDOM)
  setTimeout(() => {
    document.body.removeChild(toastDOM)
  }, wait);
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