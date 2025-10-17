import { useState, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'

const photos = [
  { id: 1, src: '/images/01e0e38a-3fbe-4833-9744-9efb92349db6.jpg', alt: 'Michael & Danitza 1' },
  { id: 2, src: '/images/46e78880-3112-449d-bda8-d05281264010.jpg', alt: 'Michael & Danitza 2' },
  { id: 3, src: '/images/DBD8F30E-0AA9-4F07-ABFC-F917ED57C8B8.jpg', alt: 'Michael & Danitza 3' },
  { id: 4, src: '/images/IMG_0504.JPG', alt: 'Michael & Danitza 4' },
  { id: 5, src: '/images/IMG_20190725_122110_Original.jpg', alt: 'Michael & Danitza 5' },
  { id: 6, src: '/images/IMG_20200128_093753_1.jpg', alt: 'Michael & Danitza 6' },
  { id: 7, src: '/images/IMG_20240207_153044.jpg', alt: 'Michael & Danitza 7' },
  { id: 8, src: '/images/IMG_20240212_134217.jpg', alt: 'Michael & Danitza 8' },
  { id: 9, src: '/images/IMG_20241031_115519.jpg', alt: 'Michael & Danitza 9' },
  { id: 10, src: '/images/IMG_20250311_145845.jpg', alt: 'Michael & Danitza 10' },
]

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get photos per view based on screen size
  const photosPerView = isMobile ? 4 : 8

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 3000) // Change photos every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const openLightbox = (index: number) => {
    setSelectedPhoto(index)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    setSelectedPhoto((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0))
  }

  const prevPhoto = () => {
    setSelectedPhoto((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1))
  }

  // Get visible photos for carousel
  const getVisiblePhotos = () => {
    const visible = []
    for (let i = 0; i < photosPerView; i++) {
      visible.push(photos[(currentIndex + i) % photos.length])
    }
    return visible
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-center text-palo-rosa-500 mb-4">
            Galería de Fotos
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            8 años de amor, risas y momentos inolvidables que nos han traído hasta aquí
          </p>
        </AnimatedSection>

        {/* Photo Carousel */}
        <AnimatedSection animation="scale-in">
          <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {getVisiblePhotos().map((photo, index) => {
              const actualIndex = (currentIndex + index) % photos.length
              return (
                <div
                  key={`${photo.id}-${actualIndex}`}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-md cursor-pointer group border border-palo-rosa-100/50 animate-fadeIn"
                  onClick={() => openLightbox(actualIndex)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-palo-rosa-500/0 group-hover:bg-palo-rosa-500/20 transition-colors duration-300"></div>
                </div>
              )
            })}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <span className="text-sm text-gray-600">
              {currentIndex + 1}-{Math.min(currentIndex + photosPerView, photos.length)} de {photos.length} fotos
            </span>
            <div className="flex gap-1 ml-3">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index >= currentIndex && index < currentIndex + photosPerView
                      ? 'w-6 bg-palo-rosa-500'
                      : 'w-2 bg-gray-300 hover:bg-palo-rosa-300'
                  }`}
                  aria-label={`Ir a foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-palo-rosa-300 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prevPhoto()
            }}
            className="absolute left-4 text-white hover:text-palo-rosa-300 transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={photos[selectedPhoto].src}
            alt={photos[selectedPhoto].alt}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextPhoto()
            }}
            className="absolute right-4 text-white hover:text-palo-rosa-300 transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 text-white text-sm">
            {selectedPhoto + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  )
}
