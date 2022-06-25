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

/**
 * 获取DOM
 * @param {*} params
 */
export const $ = (params) => {
  return document.querySelector(params)
}

/**
 * 处理循环引用的json
 * @param {*} data
 */
export const handleCircularJson = (data) => {
  const seen = new WeakSet();
  return JSON.stringify(data, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  })
}

/**
 * 转为时间格式
 */
export const toDate = () => {
  var nowDay = new Date()
  return `${nowDay.getFullYear()}年${nowDay.getMonth() + 1}月${nowDay.getDate()}日${nowDay.getHours()}时${nowDay.getMinutes()}分${nowDay.getSeconds()}秒`
}

/**
 * ajax封装
 * @param {*} method 
 * @param {*} url 
 */
export const $http = (method, url) => {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open(method, url);
  xmlhttp.send();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4) {
      console.log("responseText", xmlhttp.responseText);
      return xmlhttp.responseText
    }
  }
}