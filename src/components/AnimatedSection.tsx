import { ReactNode } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-in'
  delay?: number
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getAnimationClasses = () => {
    const delayClass = delay > 0 ? `delay-${delay}` : ''

    switch (animation) {
      case 'fade-up':
        return `transition-all duration-700 ${delayClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
      case 'fade-down':
        return `transition-all duration-700 ${delayClass} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`
      case 'fade-left':
        return `transition-all duration-700 ${delayClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`
      case 'fade-right':
        return `transition-all duration-700 ${delayClass} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`
      case 'scale-in':
        return `transition-all duration-700 ${delayClass} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`
      default:
        return `transition-all duration-700 ${delayClass} ${isVisible ? 'opacity-100' : 'opacity-0'}`
    }
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
