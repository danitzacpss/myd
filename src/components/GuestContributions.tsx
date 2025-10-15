import AnimatedSection from './AnimatedSection'

export default function GuestContributions() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="font-script text-4xl sm:text-5xl text-palo-rosa-500 mb-4">
              ¡Sé Parte de Nuestra Celebración!
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayúdanos a crear recuerdos inolvidables compartiendo tus canciones favoritas y capturando momentos especiales
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Spotify Playlist */}
          <AnimatedSection animation="fade-right">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-palo-rosa-200/50 hover:shadow-lg transition-all">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-palo-rosa-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
              </svg>
            </div>
            <h3 className="text-xl font-display text-gray-800 mb-3 text-center">
              Playlist de la Fiesta
            </h3>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Sugiere tus canciones infaltables para la pista de baile
            </p>
            <a
              href="https://open.spotify.com/playlist/3BTTTXtLZPkGqVdMlkb7pg?si=Cwy4fE0iRWmV8WL1uC8JGg&pi=P2RIuo3ORumNP&pt=8d36a048833c62021c447efd9438d56c"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-palo-rosa-400 hover:bg-palo-rosa-500 text-white font-display py-3 px-6 rounded-full transition-colors text-center"
            >
              Añadir Canción
            </a>
            </div>
          </AnimatedSection>

          {/* Google Photos */}
          <AnimatedSection animation="fade-left">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-palo-rosa-200/50 hover:shadow-lg transition-all">
            <div className="flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-palo-rosa-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="text-xl font-display text-gray-800 mb-3 text-center">
              Álbum Compartido
            </h3>
            <p className="text-gray-600 text-sm mb-6 text-center">
              Sube tus fotos y videos del evento para compartir con todos
            </p>
            <a
              href="https://photos.app.goo.gl/AJpb3XkJajBg368k8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-palo-rosa-400 hover:bg-palo-rosa-500 text-white font-display py-3 px-6 rounded-full transition-colors text-center"
            >
              Subir Fotos
            </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional message */}
        <AnimatedSection animation="fade-up">
          <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Tu participación hace que nuestra celebración sea aún más especial
          </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
