'use client'

import { LucideIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
  className?: string
  delay?: number
}

/**
 * FeatureCard Component
 * 
 * Displays a feature with an icon, title, and description.
 * Includes hover animations and icon color customization.
 * 
 * @example
 * <FeatureCard
 *   icon={Database}
 *   title="Smart Livestock Tracking"
 *   description="Track unlimited animals with complete records"
 *   iconColor="text-primary-600"
 *   delay={0.1}
 * />
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = 'text-primary-600',
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay }}
    >
      <Card
        className={cn(
          'h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
          className
        )}
      >
        <CardHeader>
          <div className={cn('mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100', iconColor)}>
            <Icon className={cn('h-6 w-6', iconColor)} />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}

/**
 * FeatureCardCompact Component
 * 
 * A more compact version without the Card wrapper.
 * Good for dense layouts or sidebars.
 */
export function FeatureCardCompact({
  icon: Icon,
  title,
  description,
  iconColor = 'text-primary-600',
  className,
}: Omit<FeatureCardProps, 'delay'>) {
  return (
    <div className={cn('flex gap-4', className)}>
      <div className={cn('flex-shrink-0 p-2 rounded-lg bg-gradient-to-br from-primary-50 to-primary-100')}>
        <Icon className={cn('h-5 w-5', iconColor)} />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  )
}
