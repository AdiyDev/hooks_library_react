import { useRef } from 'react'

export const useFullScreen = callback => {
  const element = useRef()

  const runCallB = isFull => {
    if (callback && typeof callback === 'function') {
      callback(isFull)
    }
  }
  // all browsers
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen()
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen()
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen()
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen()
      }

      runCallB(true)
    }
  }

  const exitFull = () => {
    document.exitFullscreen()

    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }

    runCallB(false)
  }

  return { element, triggerFull, exitFull }
}
