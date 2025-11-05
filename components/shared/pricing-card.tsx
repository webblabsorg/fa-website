'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CTAButton } from './cta-button'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { scaleIn } from '@/lib/animations'
import { PRICING } from '@/lib/constants'

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  title?: string
  description?: string
  price?: number
  originalPrice?: number
  features?: PricingFeature[]
  badge?: string
  badgeVariant?: 'default' | 'success' | 'warning'
  ctaText?: string
  ctaHref?: string
  highlight?: boolean
  className?: string
}

const defaultFeatures: PricingFeature[] = [
  { text: 'Lifetime Access - No Monthly Fees', included: true },
  { text: 'All Features Included', included: true },
  { text: 'Unlimited Livestock & Sheds', included: true },
  { text: `${PRICING.supportMonths} Months Premium Support`, included: true },
  { text: 'Free Updates for 1 Year', included: true },
  { text: 'Multi-Language Support', included: true },
  { text: 'Full Documentation & Training', included: true },
]

/**
 * PricingCard Component
 * 
 * Displays pricing information with features checklist and CTA button.
 * Includes original price strikethrough and badge for special offers.
 * 
 * @example
 * <PricingCard
 *   title="Complete Farm Management"
 *   price={99}
 *   originalPrice={299}
 *   badge="BEST VALUE"
 *   highlight
 * />
 */
export function PricingCard({
  title = 'Complete Farm Management',
  description = 'Everything you need to manage your livestock operation',
  price = PRICING.amount,
  originalPrice = PRICING.originalPrice,
  features = defaultFeatures,
  badge = 'BEST VALUE',
  badgeVariant = 'success',
  ctaText,
  ctaHref,
  highlight = true,
  className,
}: PricingCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card
        className={cn(
          'relative overflow-hidden transition-all duration-300',
          highlight &&
            'border-2 border-primary-500 shadow-2xl scale-105 hover:scale-[1.06]',
          !highlight && 'hover:shadow-lg',
          className
        )}
      >
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4">
            <Badge variant={badgeVariant} className="text-xs px-3 py-1">
              {badge}
            </Badge>
          </div>
        )}

        <CardHeader className="text-center pb-8">
          <CardTitle className="text-2xl mb-2">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Pricing */}
          <div className="text-center">
            {originalPrice && (
              <div className="text-slate-500 line-through text-lg mb-1">
                ${originalPrice}
              </div>
            )}
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-bold text-primary-600">
                ${price}
              </span>
              <span className="text-slate-600">One-Time Payment</span>
            </div>
          </div>

          {/* Features List */}
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2
                  className={cn(
                    'h-5 w-5 flex-shrink-0 mt-0.5',
                    feature.included
                      ? 'text-primary-600'
                      : 'text-slate-300'
                  )}
                />
                <span
                  className={cn(
                    'text-sm',
                    feature.included
                      ? 'text-slate-700'
                      : 'text-slate-400 line-through'
                  )}
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="flex-col gap-4 pt-6">
          <CTAButton
            variant="primary"
            size="xl"
            href={ctaHref}
            className="w-full"
            pulse={highlight}
          >
            {ctaText || `Get Instant Access`}
          </CTAButton>
          <p className="text-xs text-center text-slate-500">
            30-day money-back guarantee • Secure payment
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

/**
 * PricingCardCompact Component
 * 
 * Simplified pricing display for inline use.
 */
export function PricingCardCompact({
  price = PRICING.amount,
  originalPrice,
  className,
}: Pick<PricingCardProps, 'price' | 'originalPrice' | 'className'>) {
  return (
    <div className={cn('inline-flex items-baseline gap-2', className)}>
      {originalPrice && (
        <span className="text-slate-500 line-through text-sm">
          ${originalPrice}
        </span>
      )}
      <span className="text-3xl font-bold text-primary-600">
        ${price}
      </span>
      <span className="text-slate-600 text-sm">one-time</span>
    </div>
  )
}
