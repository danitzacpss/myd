import { useState, FormEvent } from 'react'

interface RSVPModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asistencia: 'si', // 'si' o 'no'
    menuEspecial: '',
    consideraciones: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxhMfcP9mSipwQjHi8UKu8fn3pL4t5a3BAsKCPbp8aDUBG3HYesivj8VSuEg4YsyVDxUA/exec'

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      // Con mode: 'no-cors', no podemos verificar la respuesta, así que asumimos éxito
      setSubmitStatus('success')
      setTimeout(() => {
        onClose()
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asistencia: 'si',
          menuEspecial: '',
          consideraciones: ''
        })
        setSubmitStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-md max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-up border border-palo-rosa-100/50">
        {/* Header */}
        <div className="sticky top-0 bg-palo-rosa-400 text-white px-8 py-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="font-display font-bold text-3xl mb-1">Confirmar Asistencia</h2>
            <p className="text-white/90 text-sm">Completa el formulario para confirmar tu asistencia</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Asistencia */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              ¿Confirmas tu asistencia? <span className="text-palo-rosa-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, asistencia: 'si' })}
                className={`px-6 py-4 rounded-xl border-2 transition-all font-medium ${
                  formData.asistencia === 'si'
                    ? 'border-palo-rosa-400 bg-palo-rosa-50 text-palo-rosa-600'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-palo-rosa-200'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sí, Asistiré
                </div>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, asistencia: 'no' })}
                className={`px-6 py-4 rounded-xl border-2 transition-all font-medium ${
                  formData.asistencia === 'no'
                    ? 'border-gray-400 bg-gray-50 text-gray-700'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  No Asistiré
                </div>
              </button>
            </div>
          </div>

          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre Completo <span className="text-palo-rosa-500">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              required
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-palo-rosa-100/50 focus:border-palo-rosa-300 focus:ring-2 focus:ring-palo-rosa-100 outline-none transition-colors"
              placeholder="Juan Pérez"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Correo Electrónico <span className="text-palo-rosa-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-palo-rosa-100/50 focus:border-palo-rosa-300 focus:ring-2 focus:ring-palo-rosa-100 outline-none transition-colors"
              placeholder="correo@ejemplo.com"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
              Teléfono <span className="text-palo-rosa-500">*</span>
            </label>
            <input
              type="tel"
              id="telefono"
              required
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-palo-rosa-100/50 focus:border-palo-rosa-300 focus:ring-2 focus:ring-palo-rosa-100 outline-none transition-colors"
              placeholder="+56 9 1234 5678"
            />
          </div>

          {/* Menú Especial - Solo si asiste */}
          {formData.asistencia === 'si' && (
            <div>
              <label htmlFor="menuEspecial" className="block text-sm font-medium text-gray-700 mb-2">
                Restricciones Alimenticias o Menú Especial
              </label>
              <input
                type="text"
                id="menuEspecial"
                value={formData.menuEspecial}
                onChange={(e) => setFormData({ ...formData, menuEspecial: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-palo-rosa-100/50 focus:border-palo-rosa-300 focus:ring-2 focus:ring-palo-rosa-100 outline-none transition-colors"
                placeholder="Ej: Vegetariano, alérgico a mariscos, etc."
              />
            </div>
          )}

          {/* Consideraciones */}
          <div>
            <label htmlFor="consideraciones" className="block text-sm font-medium text-gray-700 mb-2">
              {formData.asistencia === 'si' ? 'Otras Consideraciones' : 'Déjanos un Mensaje'}
            </label>
            <textarea
              id="consideraciones"
              rows={4}
              value={formData.consideraciones}
              onChange={(e) => setFormData({ ...formData, consideraciones: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-palo-rosa-100/50 focus:border-palo-rosa-300 focus:ring-2 focus:ring-palo-rosa-100 outline-none transition-colors resize-none"
              placeholder={formData.asistencia === 'si'
                ? '¿Algo más que debamos saber? (Ej: asistes con niños, necesitas silla especial, etc.)'
                : 'Lamentamos que no puedas acompañarnos. Si deseas, déjanos un mensaje...'}
            />
          </div>

          {/* Submit Status */}
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-green-800">¡Gracias! Tu confirmación ha sido enviada exitosamente.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <p className="text-red-800">Hubo un error al enviar. Por favor, intenta nuevamente.</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 rounded-xl bg-palo-rosa-400 hover:bg-palo-rosa-500 text-white transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Enviando...' : formData.asistencia === 'si' ? 'Confirmar Asistencia' : 'Enviar Respuesta'}
            </button>
          </div>

          <p className="text-xs text-center text-gray-500">
            * Campos obligatorios
          </p>
        </form>
      </div>
    </div>
  )
}
