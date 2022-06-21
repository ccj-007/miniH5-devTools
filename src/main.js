import h5Tools from '@/envDevTools.js'
import { startGesture } from '@/touch.js'
import { isMobileFn } from '@/utils.js'

let isMobile = isMobileFn()

if (!window) throw new Error('it is must be brower environment')
if (!isMobile) throw new Error('it is must be mobile H5 environment')

Object.prototype.h5tools = {
  gesture: startGesture,
  start: h5Tools.startdevTools,
  send: h5Tools.sendMsg
}