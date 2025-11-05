'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  location: string
  rating?: number
  image?: string
  className?: string
  delay?: number
}

/**
 * TestimonialCard Component
 * 
 * Displays customer testimonials with star ratings.
 * Includes author information and optional profile image.
 * 
 * @example
 * <TestimonialCard
 *   quote="This software saved me 10 hours per week..."
 *   author="John M."
 *   role="Cattle Rancher"
 *   location="Texas, USA"
 *   rating={5}
 *   delay={0.2}
 * />
 */
export function TestimonialCard({
  quote,
  author,
  role,
  location,
  rating = 5,
  image,
  className,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay }}
    >
      <Card className={cn('h-full hover:shadow-lg transition-shadow', className)}>
        <CardContent className="pt-6">
          {/* Quote Icon */}
          <Quote className="h-8 w-8 text-primary-200 mb-4" />
          
          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < rating
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-slate-300'
                )}
              />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
            &ldquo;{quote}&rdquo;
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center gap-3">
            {image ? (
              <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={author}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-lg">
                  {author.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <div className="font-semibold text-slate-900">{author}</div>
              <div className="text-sm text-slate-600">{role}</div>
              <div className="text-xs text-slate-500">{location}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

/**
 * TestimonialCardCompact Component
 * 
 * Compact version without card wrapper for dense layouts.
 */
export function TestimonialCardCompact({
  quote,
  author,
  role,
  location,
  rating = 5,
}: Omit<TestimonialCardProps, 'image' | 'className' | 'delay'>) {
  return (
    <div className="space-y-3">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-3 w-3',
              i < rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-slate-300'
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-slate-700 italic">&ldquo;{quote}&rdquo;</p>

      {/* Author */}
      <div className="text-xs">
        <span className="font-semibold text-slate-900">{author}</span>
        <span className="text-slate-500"> • {role} • {location}</span>
      </div>
    </div>
  )
}
