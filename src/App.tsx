import { useState } from 'react'
import Hero from './components/Hero'
import InvitationMessage from './components/InvitationMessage'
import Countdown from './components/Countdown'
import OurStory from './components/OurStory'
import EventDetails from './components/EventDetails'
import PhotoGallery from './components/PhotoGallery'
import GiftRegistry from './components/GiftRegistry'
import RSVPModal from './components/RSVPModal'
import RSVPSection from './components/RSVPSection'
import Recommendations from './components/Recommendations'
import MusicPlayer from './components/MusicPlayer'
import GuestContributions from './components/GuestContributions'
import AnimatedSection from './components/AnimatedSection'

function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <MusicPlayer />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Countdown onOpenRSVP={() => setIsRSVPOpen(true)} />
        <InvitationMessage />
        <OurStory />
        <EventDetails />
        <PhotoGallery />
        <GiftRegistry />
        <GuestContributions />
      </main>

      <RSVPSection onOpenModal={() => setIsRSVPOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Recommendations />
      </main>

      <section className="py-16 text-center">
        <AnimatedSection animation="fade-up">
          <div className="max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-palo-rosa-300 w-16"></div>
              <svg className="w-6 h-6 text-palo-rosa-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <div className="h-px bg-palo-rosa-300 w-16"></div>
            </div>
            <p className="font-script text-3xl sm:text-4xl text-palo-rosa-500">
              La medida del amor es amar sin medida
            </p>
          </div>
        </AnimatedSection>
      </section>

      <footer className="bg-white border-t border-palo-rosa-100/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-display text-2xl text-palo-rosa-500 mb-2">Michael & Danitza</p>
          <p className="text-gray-600">13 de Febrero, 2026</p>
          <p className="font-script text-lg text-palo-rosa-400 mt-4">Con amor</p>
        </div>
      </footer>

      <RSVPModal isOpen={isRSVPOpen} onClose={() => setIsRSVPOpen(false)} />
    </div>
  )
}

export default App
