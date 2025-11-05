'use client'

import { motion } from 'framer-motion'
import { Shield, Globe, Headphones, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StripeCheckoutButton } from '@/components/stripe-checkout-button'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-sage-900/95 z-0">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-grid-white/5" />
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            variants={fadeInUp}
          >
            Stop Losing Money on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
              Scattered Records
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Run Your Farm Like a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-300 to-sage-100">
                Profitable Business
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-sage-100 font-medium"
            variants={fadeInUp}
          >
            Track every animal, vaccination, and expense in one place.
            <br />
            <span className="text-sage-300">Pay once. Own forever. No monthly fees.</span>
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Join 11,280+ farmers who&apos;ve ditched spreadsheets and paper for a system that actually helps them make better decisions, save time, and increase profits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            variants={fadeInUp}
          >
            <StripeCheckoutButton
              size="lg"
              className="group relative text-lg px-8 py-6 bg-sage-500 hover:bg-sage-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Managing Better Today
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </StripeCheckoutButton>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 shadow-lg transition-all duration-300"
              asChild
            >
              <a href="https://lsk.fare2u.com/auth/login" target="_blank" rel="noopener noreferrer">
                See How It Works
              </a>
            </Button>
          </motion.div>
          
          {/* Price callout below CTAs */}
          <motion.p className="text-sage-200 text-sm font-medium" variants={fadeInUp}>
            One-time payment of $99 • No subscriptions • Lifetime updates included
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-12"
            variants={staggerContainer}
          >
            <TrustBadge icon={Award} text="Lifetime License" delay={0} />
            <TrustBadge icon={Headphones} text="24/7 Support" delay={0.1} />
            <TrustBadge icon={Shield} text="Your Data Stays Private" delay={0.15} />
            <TrustBadge icon={Globe} text="Used in 25+ Countries" delay={0.2} />
          </motion.div>

          {/* Social Proof Snippet */}
          <motion.div className="pt-8" variants={fadeInUp}>
            <p className="text-sage-200 text-sm">
              ⭐️ ⭐️ ⭐️ ⭐️ ⭐️{' '}
              <span className="font-semibold">Trusted by farmers in 45+ countries</span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

interface TrustBadgeProps {
  icon: React.ElementType
  text: string
  delay: number
}

function TrustBadge({ icon: Icon, text, delay }: TrustBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-2 text-white/90"
      variants={scaleIn}
      whileHover={{ scale: 1.05 }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: 3,
          delay: delay,
          ease: 'easeInOut',
        },
      }}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-sage-300" />
      <span className="text-sm sm:text-base font-medium">{text}</span>
    </motion.div>
  )
}
