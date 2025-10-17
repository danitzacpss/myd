export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[80vh] w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Michael & Danitza"
          className="w-full h-full object-cover object-[center_45%] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-paper-100"></div>
      </div>

      {/* Content */}
      <div className="relative h-full min-h-[90vh] sm:min-h-[80vh] flex flex-col items-center justify-end pb-12 sm:pb-16 px-4">
        <div className="text-center animate-fade-up">
          <p className="font-script text-[#E8D4D1] text-2xl sm:text-3xl mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] font-semibold">
            Nos casamos
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-7xl text-gray-800 mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Michael <span className="text-[#E8D4D1] text-6xl sm:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">&</span> Danitza
          </h1>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="w-20 sm:w-24 h-0.5 bg-[#E8D4D1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"></div>
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#E8D4D1] drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <div className="w-20 sm:w-24 h-0.5 bg-[#E8D4D1] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"></div>
          </div>
          <p className="text-gray-700 text-lg sm:text-xl font-light drop-shadow-md">
            13 de Febrero, 2026
          </p>
          <p className="text-gray-600 text-base mt-3 drop-shadow-sm">
            Y queremos que nos acompañes
          </p>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="2" cy="2" r="2" fill="#C9A9A6"/>
          <circle cx="2" cy="18" r="2" fill="#C9A9A6"/>
          <circle cx="2" cy="34" r="2" fill="#C9A9A6"/>
          <circle cx="18" cy="2" r="2" fill="#C9A9A6"/>
          <circle cx="18" cy="18" r="2" fill="#C9A9A6"/>
          <circle cx="34" cy="2" r="2" fill="#C9A9A6"/>
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="78" cy="78" r="2" fill="#C9A9A6"/>
          <circle cx="78" cy="62" r="2" fill="#C9A9A6"/>
          <circle cx="78" cy="46" r="2" fill="#C9A9A6"/>
          <circle cx="62" cy="78" r="2" fill="#C9A9A6"/>
          <circle cx="62" cy="62" r="2" fill="#C9A9A6"/>
          <circle cx="46" cy="78" r="2" fill="#C9A9A6"/>
        </svg>
      </div>
    </section>
  )
}
