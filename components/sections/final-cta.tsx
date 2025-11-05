'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Shield } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { StripeCheckoutButton } from '@/components/stripe-checkout-button'

const benefits = [
  'Instant access after purchase',
  'Setup complete in under 10 minutes',
  '30-day money-back guarantee',
  'Lifetime license included',
]

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl" />
      
      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              <Shield className="w-4 h-4" />
              <span>Risk-Free Decision</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready to Transform Your{' '}
            <span className="text-green-200">
              Farm Management?
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-green-100 mb-8"
          >
            Join 11,280+ farmers who&apos;ve already simplified their operations and increased profitability
          </motion.p>

          {/* Benefits Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3 text-left bg-white/10 backdrop-blur-sm rounded-lg p-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-6"
          >
            <StripeCheckoutButton
              size="lg"
              className="group relative text-xl px-12 py-8 bg-white text-green-700 hover:bg-green-50 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Managing Your Farm Today
                <span className="flex items-center gap-2 px-3 py-1 bg-green-600 text-white rounded-full text-sm">
                  $99
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </span>
            </StripeCheckoutButton>

            {/* Reassurance Text */}
            <div className="flex flex-col sm:flex-row items-center gap-2 text-green-100 text-sm">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Instant access
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Setup in minutes
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                30-day guarantee
              </span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-200 mb-1">11,280+</div>
                <div className="text-sm text-green-100">Active Farms</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-bold text-green-200 mb-1">25+</div>
                <div className="text-sm text-green-100">Countries</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-bold text-green-200 mb-1">4.9/5</div>
                <div className="text-sm text-green-100">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Final Note */}
          <motion.p
            variants={fadeInUp}
            className="mt-8 text-green-100 text-sm italic"
          >
            &quot;The best decision I made for my farm this year&quot; - John M., Cattle Rancher
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
