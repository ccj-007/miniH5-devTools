import h5Tools from '@/envDevTools.js'
import { watchGestureZ } from '@/touch.js'

function startTools (element, endTime = 10000) {
  //开启手势控制
  watchGestureZ(element = document.documentElement, h5Tools.startdevTools, endTime)
}

if (window) {
  window.startTools = startTools
}


export default startTools