import AnimatedSection from './AnimatedSection'

export default function EventDetails() {
  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/TgCqMMeJhSABu6M36', '_blank')
  }

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-center text-palo-rosa-500 mb-8">
            Detalles
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Date & Time */}
          <AnimatedSection animation="fade-right">
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 text-center border border-palo-rosa-100/50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-palo-rosa-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-palo-rosa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-800 mb-4">Cuándo</h3>
            <p className="text-3xl font-display text-palo-rosa-500 mb-2">
              Viernes
            </p>
            <p className="text-4xl font-display text-gray-800 mb-2">
              13 de Febrero
            </p>
            <p className="text-2xl font-sans text-gray-700 mb-4">2026</p>
            <div className="w-24 h-px bg-palo-rosa-200 mx-auto mb-4"></div>
            <p className="text-2xl font-display text-palo-rosa-400">
              18:00 hrs
            </p>
            </div>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection animation="fade-left">
            <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 text-center border border-palo-rosa-100/50 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-palo-rosa-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-palo-rosa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-800 mb-4">Dónde</h3>
            <p className="text-xl font-display text-palo-rosa-500 mb-3">
              Eventos Las Escaleras
            </p>
            <p className="text-gray-600 mb-2">Concepción</p>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Dirección: Camino a Chome, Km 3.5<br />
              Península de Hualpén, Concepción
            </p>
            <button
              onClick={openGoogleMaps}
              className="inline-flex items-center gap-2 bg-palo-rosa-400 hover:bg-palo-rosa-500 text-white px-6 py-3 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Cómo Llegar
            </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
