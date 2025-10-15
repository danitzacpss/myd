import AnimatedSection from './AnimatedSection'

export default function InvitationMessage() {
  return (
    <section className="py-10 sm:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection animation="scale-in">
          <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 border border-palo-rosa-100/50 text-center">
            <h2 className="font-script text-3xl sm:text-4xl text-palo-rosa-500 mb-8 leading-relaxed">
              "Después de 8 años de infinito amor, decidimos comenzar nuestra mayor aventura, uniendo nuestras vidas."
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Nos llena de alegría invitarlos a celebrar nuestro matrimonio, el día en que nuestro "sí" se vuelve para siempre.
              </p>

              <p>
                Cada uno de ustedes ocupa un lugar único y fundamental en nuestra historia; por eso, su presencia es muy importante para nosotros.
              </p>

              <p className="italic text-gray-600 mt-6">
                Acompáñennos a hacer de este momento, un recuerdo inolvidable. ¡Los esperamos!
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
