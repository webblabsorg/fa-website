'use client'

import { motion } from 'framer-motion'
import { Sprout } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  animate?: boolean
}

export function Logo({ 
  className, 
  size = 'md', 
  showIcon = true,
  animate = true 
}: LogoProps) {
  const sizes = {
    sm: {
      text: 'text-xl',
      icon: 'w-5 h-5',
    },
    md: {
      text: 'text-2xl md:text-3xl',
      icon: 'w-6 h-6 md:w-7 md:h-7',
    },
    lg: {
      text: 'text-3xl md:text-4xl',
      icon: 'w-8 h-8 md:w-10 md:h-10',
    },
  }

  const logoContent = (
    <div className={cn('flex items-center gap-2', className)}>
      {showIcon && (
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 blur-lg opacity-30 rounded-full" />
          <div className="relative bg-gradient-to-br from-green-600 to-green-700 p-1.5 rounded-lg shadow-lg">
            <Sprout className={cn('text-white', sizes[size].icon)} />
          </div>
        </div>
      )}
      <div className={cn('font-bold', sizes[size].text)}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">
          Fare
        </span>
        <span className="text-slate-800">2U</span>
      </div>
    </div>
  )

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="inline-block cursor-pointer"
      >
        {logoContent}
      </motion.div>
    )
  }

  return <div className="inline-block">{logoContent}</div>
}

export function LogoText({ className, size = 'md' }: { className?: string, size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
  }

  return (
    <div className={cn('font-bold', sizes[size], className)}>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">
        Fare
      </span>
      <span className="text-slate-800">2U</span>
    </div>
  )
}
