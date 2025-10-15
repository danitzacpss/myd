import AnimatedSection from './AnimatedSection'

export default function OurStory() {
  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-left" className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <img
                src="/images/IMG_20250311_145845.jpg"
                alt="Michael & Danitza"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection animation="fade-right" className="order-1 md:order-2 text-center md:text-left">
            {/* Heart icon */}
            <div className="flex justify-center md:justify-start mb-6">
              <svg className="w-12 h-12 text-palo-rosa-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>

            <h2 className="font-script text-4xl sm:text-5xl text-palo-rosa-500 mb-6">
              Nuestra Historia
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nuestra historia de amor comenzó el <strong>27 de Julio de 2017</strong> en un paseo a la nieve con amigos. Lo que inició con una atracción instantánea se convirtió en una conexión profunda y sincera.
              </p>

              <p>
                Desde entonces, hemos recorrido juntos muchos caminos, buscando paisajes que nos hagan suspirar y momentos simples que se vuelven inolvidables.
              </p>

              <p className="text-palo-rosa-600 font-medium italic">
                Hoy, después de tantos pasos juntos, seguimos eligiéndonos cada día.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
