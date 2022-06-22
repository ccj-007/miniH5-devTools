/**
 * @description toast components
 */

/**
 * 创建toast
 *
 * @param {*} contentStr
 */
export const createToast = (content, wait = 2000) => {
  let toastDOM = document.createElement('div')
  toastDOM.id = 'envBox-toast'
  toastDOM.className = 'slide-in-blurred-top'
  toastDOM.innerText = content

  document.body.appendChild(toastDOM)
  setTimeout(() => {
    document.body.removeChild(toastDOM)
  }, wait);
}
