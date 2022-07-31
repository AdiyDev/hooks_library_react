import { useEffect, useRef } from 'react'

export const useScrollIntersection = (parentRef, childRef, callback) => {
  const observer = useRef()
  //доработать хук с колбэк-ом
  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: '0px',
      threshold: 0
    }

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log('intersected')
        callback()
      }
    }, options)

    observer.current.observe(childRef.current)

    return () => {
      observer.current.unobserve(childRef.current)
    }
  }, [callback])
}
