import AnimatedSection from './AnimatedSection'

export default function Recommendations() {
  const recommendations = [
    {
      icon: '/4.png',
      title: 'Vestimenta Formal/Fiesta',
      description: 'No utilizar color blanco, beige ni sus derivados, tanto hombres como mujeres.'
    },
    {
      icon: '/5.png',
      title: '¡No olvides tus zapatillas para bailar!',
      description: 'La pista de baile nos espera y queremos que bailes toda la noche sin preocupaciones.'
    },
    {
      icon: '/6.png',
      title: 'Lleva algo para abrigarte',
      description: 'Las noches de febrero pueden ser frescas, así que trae algo cómodo para mantenerte calientito.'
    },
    {
      icon: '/7.png',
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
              <div className="flex items-center justify-center mb-4">
                <img src={rec.icon} alt={rec.title} className="w-20 h-20 opacity-80" />
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
