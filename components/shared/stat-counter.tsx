'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { animateValue } from '@/lib/utils'

interface StatCounterProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  valueClassName?: string
  labelClassName?: string
}

/**
 * StatCounter Component
 * 
 * Animated number counter that triggers when scrolled into view.
 * Perfect for statistics and social proof sections.
 * 
 * @example
 * <StatCounter
 *   value={500}
 *   label="Farms Worldwide"
 *   suffix="+"
 *   duration={2000}
 * />
 */
export function StatCounter({
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
  valueClassName,
  labelClassName,
}: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      animateValue(0, value, duration, setCount)
    }
  }, [isInView, value, duration])

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className={cn('text-4xl md:text-5xl font-bold text-primary-600 mb-2', valueClassName)}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className={cn('text-sm md:text-base text-slate-600', labelClassName)}>
        {label}
      </div>
    </div>
  )
}

/**
 * StatCounterInline Component
 * 
 * Horizontal inline version for compact layouts.
 */
export function StatCounterInline({
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
}: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      animateValue(0, value, duration, setCount)
    }
  }, [isInView, value, duration])

  return (
    <div ref={ref} className={cn('flex items-baseline gap-2', className)}>
      <span className="text-2xl font-bold text-primary-600">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-sm text-slate-600">{label}</span>
    </div>
  )
}
