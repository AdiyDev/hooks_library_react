import { useEffect, useState } from 'react'

export const usePagePercent = () => {
  const [scrollPercent, setScrollPercent] = useState<Number>(0)

  const handleScroll = () => {
    const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    setScrollPercent(percent)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return setScrollPercent
}
