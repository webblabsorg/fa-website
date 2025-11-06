'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Shield, Sparkles } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { StripeCheckoutButton } from '@/components/stripe-checkout-button'

const features = [
  'Lifetime Access - No Monthly Fees',
  'All Features Included',
  'Unlimited Livestock & Sheds',
  '6 Months Premium Support',
  'Lifetime Updates Included',
  'Multi-Language Support',
  'Full Documentation & Training',
  'Mobile & Desktop Access',
  'Data Export & Backup',
  'Priority Customer Service',
]

function AnimatedPrice() {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const targetPrice = 99
    const duration = 2000

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * targetPrice))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(targetPrice)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView])

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-start justify-center gap-2 mb-2">
        <span className="text-3xl font-bold text-slate-900 mt-2">$</span>
        <span className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">
          {count}
        </span>
      </div>
      <div className="flex items-center justify-center gap-3 mb-2">
        <span className="text-2xl text-slate-400 line-through">$299</span>
        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-bold">
          Save $200
        </span>
      </div>
      <p className="text-slate-600 text-lg">One-time payment. No subscriptions.</p>
    </div>
  )
}

export function Pricing() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-green-100/50 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Simple Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              One Price.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sage-600">
                Everything Included.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              No hidden fees. No monthly charges. No surprises. 
              Pay once and manage your farm forever.
            </p>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-green-500 overflow-hidden">
              {/* Best Value Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-bl-2xl flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-bold text-sm">BEST VALUE</span>
              </div>

              <div className="p-8 md:p-12">
                {/* Title */}
                <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                  Complete Farm Management
                </h3>

                {/* Animated Price */}
                <AnimatedPrice />

                {/* Features List */}
                <div className="mt-12 space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="mt-12"
                >
                  <StripeCheckoutButton
                    size="lg"
                    className="w-full group relative text-xl py-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Get Instant Access Now
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </StripeCheckoutButton>
                </motion.div>

                {/* Hosting Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                >
                  <p className="text-sm text-slate-700 text-center">
                    <strong>Hosting Required:</strong> Runs on your own domain. Optional VPS hosting: $7/month. Free installation included.
                  </p>
                </motion.div>

                {/* Guarantee */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="mt-4 text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm">
                      30-day money-back guarantee • Free installation • Support included
                    </span>
                  </div>
                </motion.div>

                {/* Payment Icons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="mt-8 pt-8 border-t border-slate-200"
                >
                  <p className="text-center text-slate-500 text-sm mb-4">
                    Secure payment powered by Stripe
                  </p>
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <div className="px-3 py-2 bg-slate-100 rounded text-slate-600 font-medium text-xs">
                      💳 Debit/Credit Cards
                    </div>
                    <div className="px-3 py-2 bg-slate-100 rounded text-slate-600 font-medium text-xs">
                      🍎 Apple Pay
                    </div>
                    <div className="px-3 py-2 bg-slate-100 rounded text-slate-600 font-medium text-xs">
                      📱 Google Pay
                    </div>
                    <div className="px-3 py-2 bg-slate-100 rounded text-slate-600 font-medium text-xs">
                      🏦 Bank Transfer
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Trust Note */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <p className="text-slate-600">
              <span className="font-bold text-green-600">11,280+</span> farmers have already transformed their operations with Fare2u
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
