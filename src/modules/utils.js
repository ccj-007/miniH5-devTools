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