const videoObserver = new IntersectionObserver(
  ([entry]) => {
    console.log(entry)

    const video = entry.target || {}

    // проверяем, что видео в принципе запускалось
    if (video.currentTime !== 0) {
      // Если видео вне viewport или видимо только на 20%
      if (!entry.isIntersecting || entry.intersectionRatio <= 0.2) {
        // жмем паузу
        video.pause()
      } else {
        // иначе воспроизводим
        video.play()
      }
    }
  },
  {
    // Трригер сработает при выходе как верхней, так и нижней границы
    threshold: [0.2, 0.8]
  }
)

document.querySelectorAll('video').forEach(video => videoObserver.observe(video))
