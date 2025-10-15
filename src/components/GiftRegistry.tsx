import AnimatedSection from './AnimatedSection'

export default function GiftRegistry() {
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    alert(`${type} copiado al portapapeles`)
  }

  const openFalabella = () => {
    window.open('https://novios.falabella.com/info-evento/evento?codigoEvento=2101898', '_blank')
  }

  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8">
          <div className="w-16 h-16 bg-palo-rosa-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-palo-rosa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-palo-rosa-500 mb-4">
            Sugerencia de Regalo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tu presencia es nuestro mejor regalo, pero si deseas hacernos un obsequio, estas son nuestras opciones:
          </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bank Transfer */}
          <AnimatedSection animation="fade-right">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-palo-rosa-100/50">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-palo-rosa-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-palo-rosa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-gray-800 mb-2">Transferencia</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-palo-rosa-50/30 rounded-xl p-4 border border-palo-rosa-100/50">
                <p className="text-sm text-gray-500 mb-1">Nombre</p>
                <p className="text-gray-800 font-medium">Danitza Campos</p>
              </div>

              <div className="bg-palo-rosa-50/30 rounded-xl p-4 border border-palo-rosa-100/50">
                <p className="text-sm text-gray-500 mb-1">RUT</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-medium">20.194.702-2</p>
                  <button
                    onClick={() => copyToClipboard('20194702-2', 'RUT')}
                    className="text-palo-rosa-500 hover:text-palo-rosa-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-palo-rosa-50/30 rounded-xl p-4 border border-palo-rosa-100/50">
                <p className="text-sm text-gray-500 mb-1">Banco</p>
                <p className="text-gray-800 font-medium">Banco Prepago Tenpo - Cuenta Vista</p>
              </div>

              <div className="bg-palo-rosa-50/30 rounded-xl p-4 border border-palo-rosa-100/50">
                <p className="text-sm text-gray-500 mb-1">Nº de cuenta</p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-medium">111120194702</p>
                  <button
                    onClick={() => copyToClipboard('111120194702', 'Número de cuenta')}
                    className="text-palo-rosa-500 hover:text-palo-rosa-400"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            </div>
          </AnimatedSection>

          {/* Falabella Registry */}
          <AnimatedSection animation="fade-left">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-palo-rosa-100/50">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-palo-rosa-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-palo-rosa-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-gray-800 mb-2">Lista de Novios</h3>
              <p className="text-gray-600 text-sm">Falabella</p>
            </div>

            <div className="space-y-6">
              <div className="bg-palo-rosa-50/30 rounded-xl p-6 border border-palo-rosa-100/50 text-center">
                <p className="text-sm text-gray-500 mb-2">Código de Evento</p>
                <p className="text-3xl font-display text-palo-rosa-500 mb-4">2101898</p>
                <button
                  onClick={() => copyToClipboard('2101898', 'Código')}
                  className="text-sm text-palo-rosa-500 hover:text-palo-rosa-400 flex items-center gap-2 mx-auto"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copiar código
                </button>
              </div>

              <button
                onClick={openFalabella}
                className="w-full bg-palo-rosa-400 hover:bg-palo-rosa-500 text-white font-medium py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Ver Lista de Novios
              </button>

              <p className="text-xs text-center text-gray-500 leading-relaxed">
                Ingresa el código en la web de Falabella Novios o usa el botón para acceder directamente
              </p>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
