/**
 *检查是否是移动端
 *
 * @return {boolean} 
 */
export const isMobileFn = () => {
  const machineType = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
  if (machineType === 'Mobile') {
    return true
  } else {
    return false
  }
}


/**
 * localStorage 封装
 *
 * @return {boolean} 
 */
export const Storage = {
  get (key) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      console.log(error);
    }
  },
  set (key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  },
  remove (key) {
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clearItem()
  }
}

/**
 * 检查数据类型工具
 * @param {*} params
 * @return {string} 数据类型
 */
export const checkType = (params) => {
  return Object.prototype.toString.call(params).slice(8, -1).toLowerCase()
}
