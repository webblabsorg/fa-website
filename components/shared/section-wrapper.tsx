import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'gradient' | 'cream'
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

const variants = {
  default: 'bg-white',
  dark: 'bg-slate-900 text-white',
  gradient: 'bg-gradient-to-b from-primary-50 to-white',
  cream: 'bg-cream-50',
}

const containerSizes = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
}

const paddings = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

/**
 * SectionWrapper Component
 * 
 * Provides consistent section padding, max-width, and background variants
 * for all major sections of the landing page.
 * 
 * @example
 * <SectionWrapper variant="gradient" containerSize="lg" padding="lg">
 *   <h2>Section Title</h2>
 *   <p>Section content</p>
 * </SectionWrapper>
 */
export function SectionWrapper({
  children,
  className,
  variant = 'default',
  containerSize = 'lg',
  padding = 'lg',
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full',
        variants[variant],
        paddings[padding],
        className
      )}
    >
      <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', containerSizes[containerSize])}>
        {children}
      </div>
    </section>
  )
}
