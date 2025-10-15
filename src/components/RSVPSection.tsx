import AnimatedSection from './AnimatedSection'

interface RSVPSectionProps {
  onOpenModal: () => void
}

export default function RSVPSection({ onOpenModal }: RSVPSectionProps) {
  return (
    <section className="py-20 -mx-4 sm:-mx-6 lg:-mx-8">
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/IMG_20240212_134217.jpg"
            alt="Michael & Danitza"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40"></div>
        </div>

        {/* Content */}
        <AnimatedSection animation="scale-in" className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 sm:w-20 sm:h-20" fill="none" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1.5">
              <path d="M20 16 L20 52 L44 52 L44 16" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 16 L48 16" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M26 24 L38 24 M26 32 L38 32 M26 40 L32 40" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M38 8 L38 16 M26 8 L26 16" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="35" cy="40" r="2" fill="currentColor"/>
            </svg>
          </div>

          <p className="text-sm sm:text-base uppercase tracking-widest mb-4 font-display">RSVP</p>

          <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl mb-6">
            Confirmación de Asistencia
          </h2>

          <p className="text-lg sm:text-xl mb-4 font-light">
            Esperamos contar con tu presencia
          </p>

          <p className="text-base sm:text-lg mb-8 font-light">
            Por favor confirmar antes del <strong className="font-semibold">15 de Enero 2026</strong>
          </p>

          {/* Additional Info */}
          <div className="space-y-3 mb-10 text-sm sm:text-base">
            <p className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Indica si tienes alguna restricción alimenticia</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Contacto: +569 9202 0932 - +569 3641 3071</span>
            </p>
          </div>

          {/* Button */}
          <button
            onClick={onOpenModal}
            className="bg-white hover:bg-palo-rosa-50 text-palo-rosa-500 font-display text-lg sm:text-xl px-12 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            CONFIRMAR ASISTENCIA
          </button>
        </AnimatedSection>
      </div>
    </section>
  )
}
