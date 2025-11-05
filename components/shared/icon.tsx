import { LucideIcon, LucideProps } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconProps extends LucideProps {
  icon: LucideIcon
  className?: string
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const variantStyles = {
  default: 'text-slate-600',
  primary: 'text-primary-600',
  secondary: 'text-secondary',
  success: 'text-sage-500',
  warning: 'text-amber-500',
  danger: 'text-red-500',
}

const sizeStyles = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
}

/**
 * Icon Component
 * 
 * Wrapper for Lucide React icons with consistent sizing and coloring.
 * Provides branded color variants and size options.
 * 
 * @example
 * <Icon icon={Database} variant="primary" size="lg" />
 */
export function Icon({
  icon: IconComponent,
  className,
  variant = 'default',
  size = 'md',
  ...props
}: IconProps) {
  return (
    <IconComponent
      className={cn(
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  )
}

/**
 * IconCircle Component
 * 
 * Icon wrapped in a circular container with gradient background.
 * Perfect for feature cards and highlights.
 * 
 * @example
 * <IconCircle icon={Database} variant="primary" size="lg" />
 */
export function IconCircle({
  icon: IconComponent,
  className,
  variant = 'primary',
  size = 'lg',
  ...props
}: IconProps) {
  const circleSize = {
    sm: 'p-2',
    md: 'p-2.5',
    lg: 'p-3',
    xl: 'p-4',
  }

  const gradients = {
    default: 'from-slate-50 to-slate-100',
    primary: 'from-primary-50 to-primary-100',
    secondary: 'from-amber-50 to-amber-100',
    success: 'from-sage-50 to-sage-100',
    warning: 'from-amber-50 to-amber-100',
    danger: 'from-red-50 to-red-100',
  }

  return (
    <div
      className={cn(
        'inline-flex rounded-lg bg-gradient-to-br',
        gradients[variant],
        circleSize[size]
      )}
    >
      <IconComponent
        className={cn(
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    </div>
  )
}
