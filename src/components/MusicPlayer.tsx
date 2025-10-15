import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayer, setShowPlayer] = useState(true)
  const audioRef = useRef<HTMLVideoElement>(null)

  // Canción: Lasso - Hasta Ese Día
  const musicUrl = '/music/hasta-ese-dia.mp4'

  useEffect(() => {
    // Intentar reproducir automáticamente después de 1 segundo
    const timer = setTimeout(() => {
      handlePlay()
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('Autoplay bloqueado por el navegador')
      }
    }
  }

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  return (
    <>
      <video ref={audioRef} loop style={{ display: 'none' }}>
        <source src={musicUrl} type="video/mp4" />
      </video>

      {showPlayer && (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
          <div className="bg-white rounded-full shadow-md p-4 border border-palo-rosa-100/50 flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-palo-rosa-400 hover:bg-palo-rosa-500 text-white flex items-center justify-center transition-all hover:scale-110 shadow-md"
              aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-800">Lasso - Hasta Ese Día</span>
              <span className="text-xs text-gray-500">{isPlaying ? 'Reproduciendo' : 'Pausada'}</span>
            </div>

            {isPlaying && (
              <div className="flex gap-1 items-center ml-1">
                <div className="w-1 h-3 bg-palo-rosa-300 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 h-4 bg-palo-rosa-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1 h-5 bg-palo-rosa-300 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
              </div>
            )}

            <button
              onClick={() => setShowPlayer(false)}
              className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar reproductor"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {!showPlayer && (
        <button
          onClick={() => setShowPlayer(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-palo-rosa-400 hover:bg-palo-rosa-500 text-white flex items-center justify-center shadow-md transition-all hover:scale-110"
          aria-label="Mostrar reproductor"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </button>
      )}
    </>
  )
}
