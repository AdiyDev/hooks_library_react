import { useCallback, useRef } from 'react'

export const useThrottle = (callback, delay) => {
  const isThrottled = useRef()

  const throttledCallback = useCallback(
    (...args) => {
      if (isThrottled.current) {
        return
      }

      callback(args)

      isThrottled.current = true

      setTimeout(() => (isThrottled.current = false), delay)
    },
    [callback, delay]
  )

  return throttledCallback
}

// example const callback(()=> console.log('действие'))
// example const throttleMouseMove = useThrottle(callback, 1000)
//  document.addEventListener('any event', throttleMouseMove)
