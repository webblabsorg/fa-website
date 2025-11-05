'use client'

import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { PRICING, URLS } from '@/lib/constants'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'demo'
  size?: 'sm' | 'default' | 'lg' | 'xl'
  children?: ReactNode
  className?: string
  href?: string
  showIcon?: boolean
  pulse?: boolean
  onClick?: () => void
}

/**
 * CTAButton Component
 * 
 * Call-to-action button with pre-configured variants for common use cases.
 * Includes pricing information and demo links.
 * 
 * @example
 * <CTAButton variant="primary" size="xl" pulse>
 *   Get Started for $99
 * </CTAButton>
 */
export function CTAButton({
  variant = 'primary',
  size = 'lg',
  children,
  className,
  href,
  showIcon = true,
  pulse = false,
  onClick,
}: CTAButtonProps) {
  const variants = {
    primary: 'default',
    secondary: 'secondary',
    outline: 'outline',
    demo: 'outline',
  }

  const defaultContent = {
    primary: `Get Started for $${PRICING.amount}`,
    secondary: 'Learn More',
    outline: 'Contact Sales',
    demo: 'Check Demo',
  }

  const defaultHref = {
    primary: '/checkout',
    secondary: '/#features',
    outline: `mailto:${URLS.demo}`,
    demo: URLS.demo,
  }

  const icons = {
    primary: ArrowRight,
    secondary: ArrowRight,
    outline: ArrowRight,
    demo: ExternalLink,
  }

  const Icon = icons[variant]
  const content = children || defaultContent[variant]
  const link = href || defaultHref[variant]
  const isExternal = variant === 'demo' || link.startsWith('http')

  const buttonContent = (
    <>
      <span>{content}</span>
      {showIcon && <Icon className="h-4 w-4" />}
    </>
  )

  const buttonElement = (
    <Button
      size={size}
      variant={variants[variant] as 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'}
      className={cn(
        'gap-2 transition-all duration-300',
        variant === 'primary' && 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl',
        className
      )}
      onClick={onClick}
      asChild={!!link}
    >
      {link ? (
        <a
          href={link}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {buttonContent}
        </a>
      ) : (
        buttonContent
      )}
    </Button>
  )

  if (pulse) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {buttonElement}
      </motion.div>
    )
  }

  return buttonElement
}

/**
 * CTAButtonGroup Component
 * 
 * Group of CTA buttons with consistent spacing.
 * Common pattern for hero sections.
 */
export function CTAButtonGroup({
  primaryText,
  secondaryText,
  primaryHref,
  secondaryHref,
  className,
}: {
  primaryText?: string
  secondaryText?: string
  primaryHref?: string
  secondaryHref?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-4 justify-center', className)}>
      <CTAButton variant="primary" size="xl" href={primaryHref} pulse>
        {primaryText}
      </CTAButton>
      <CTAButton variant="demo" size="xl" href={secondaryHref}>
        {secondaryText}
      </CTAButton>
    </div>
  )
}
