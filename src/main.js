import h5Tools from '@/devTools.js'
import { startGesture } from '@/touch.js'
import { isMobileFn } from '@/utils.js'
import { createErrorToast } from '@/components/toast'

let isMobile = isMobileFn()

if (!window) {
  createErrorToast('it is must be brower environment')
}
if (!isMobile) {
  createErrorToast('it is must be mobile H5 environment')
}

Object.prototype.h5tools = {
  gesture: startGesture,
  start: h5Tools.startdevTools,
  send: h5Tools.sendMsg
}