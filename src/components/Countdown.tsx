import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface CountdownProps {
  onOpenRSVP?: () => void
}

export default function Countdown({ onOpenRSVP }: CountdownProps) {
  const { ref, isVisible } = useScrollAnimation()
  const weddingDate = new Date('2026-02-13T18:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  const addToCalendar = () => {
    const event = {
      title: 'Boda Michael & Danitza',
      description: 'Celebración de nuestra boda en Eventos Las Escaleras, Concepción',
      location: 'Camino a Chome, Km 3.5, Península de Hualpén, Concepción',
      start: '2026-02-13T18:00:00',
      end: '2026-02-14T02:00:00'
    }

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Michael & Danitza Wedding//ES
BEGIN:VEVENT
DTSTART:20260213T180000
DTEND:20260214T020000
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`

    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'boda-michael-danitza.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <section ref={ref} className="py-10 sm:py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className={`text-sm uppercase tracking-widest text-palo-rosa-500 font-display mb-3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Save the Date
        </p>
        <h2 className={`font-display font-bold text-4xl sm:text-5xl text-gray-800 mb-2 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          13 de Febrero
        </h2>
        <p className={`text-gray-600 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          2026
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-10">
          <div className={`bg-gradient-to-br from-white to-palo-rosa-50 rounded-xl shadow-md p-5 border border-palo-rosa-100/50 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-4xl sm:text-5xl font-display font-semibold text-palo-rosa-500 mb-1">
              {timeLeft.days}
            </div>
            <div className="text-xs uppercase tracking-wide text-gray-500 font-display">Días</div>
          </div>
          <div className={`bg-gradient-to-br from-white to-palo-rosa-50 rounded-xl shadow-md p-5 border border-palo-rosa-100/50 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-4xl sm:text-5xl font-display font-semibold text-palo-rosa-500 mb-1">
              {timeLeft.hours}
            </div>
            <div className="text-xs uppercase tracking-wide text-gray-500 font-display">Horas</div>
          </div>
          <div className={`bg-gradient-to-br from-white to-palo-rosa-50 rounded-xl shadow-md p-5 border border-palo-rosa-100/50 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-4xl sm:text-5xl font-display font-semibold text-palo-rosa-500 mb-1">
              {timeLeft.minutes}
            </div>
            <div className="text-xs uppercase tracking-wide text-gray-500 font-display">Minutos</div>
          </div>
          <div className={`bg-gradient-to-br from-white to-palo-rosa-50 rounded-xl shadow-md p-5 border border-palo-rosa-100/50 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="text-4xl sm:text-5xl font-display font-semibold text-palo-rosa-500 mb-1">
              {timeLeft.seconds}
            </div>
            <div className="text-xs uppercase tracking-wide text-gray-500 font-display">Segundos</div>
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={addToCalendar}
            className="bg-palo-rosa-400 hover:bg-palo-rosa-500 text-white font-display text-lg sm:text-xl px-10 sm:px-12 py-3 sm:py-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
          >
            Agendar Fecha
          </button>
          {onOpenRSVP && (
            <button
              onClick={onOpenRSVP}
              className="bg-white hover:bg-palo-rosa-50 text-palo-rosa-500 border-2 border-palo-rosa-400 font-display text-lg sm:text-xl px-10 sm:px-12 py-3 sm:py-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto"
            >
              Confirmar Asistencia
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
