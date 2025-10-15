import AnimatedSection from './AnimatedSection'

export default function Recommendations() {
  const recommendations = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8 L40 24 L32 28 L24 24 Z M24 24 L16 40 L24 56 L32 52 M32 52 L40 56 L48 40 L40 24" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="18" r="3" fill="currentColor"/>
        </svg>
      ),
      title: 'Vestimenta Formal/Fiesta',
      description: 'No utilizar color blanco, beige ni sus derivados, tanto hombres como mujeres.'
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 40 Q20 32 32 32 Q44 32 44 40 L44 56 L20 56 Z M28 32 L28 20 M36 32 L36 20 M28 20 L36 20" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="14" r="6" strokeWidth="1.5"/>
        </svg>
      ),
      title: '¡No olvides tus zapatillas para bailar!',
      description: 'La pista de baile nos espera y queremos que bailes toda la noche sin preocupaciones.'
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8 L44 16 L44 32 L40 36 L32 32 L24 36 L20 32 L20 16 Z M32 32 L32 56" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="12" r="3" fill="currentColor"/>
        </svg>
      ),
      title: 'Lleva algo para abrigarte',
      description: 'Las noches de febrero pueden ser frescas, así que trae algo cómodo para mantenerte calientito.'
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="32" cy="32" r="20" strokeWidth="1.5"/>
          <path d="M22 32 Q32 42 42 32 M26 26 L26 26.1 M38 26 L38 26.1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
        </svg>
      ),
      title: 'Ven con toda tu energía y ganas de pasarlo bien',
      description: '¡Será una noche inolvidable llena de amor, música y celebración!'
    }
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-palo-rosa-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-palo-rosa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-palo-rosa-500 mb-4">
              Recomendaciones
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Algunas sugerencias para que disfrutes al máximo de nuestra celebración
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((rec, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={100 * index}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4 text-palo-rosa-400">
                {rec.icon}
              </div>
              <h3 className="font-display text-lg text-gray-800 mb-3 min-h-[3rem] flex items-center justify-center">
                {rec.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {rec.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
