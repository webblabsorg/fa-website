'use client'

import { motion } from 'framer-motion'
import { Shield, RefreshCw, Lock, Globe, Headphones, Award } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface Badge {
  icon: React.ElementType
  title: string
  description: string
}

const badges: Badge[] = [
  {
    icon: Award,
    title: 'Lifetime License',
    description: 'Pay once, use forever. No subscriptions.',
  },
  {
    icon: RefreshCw,
    title: '30-Day Money Back',
    description: 'Not satisfied? Full refund, no questions.',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your data stays on your device.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Real humans ready to help anytime.',
  },
  {
    icon: Globe,
    title: 'Global Community',
    description: '500+ farmers in 25+ countries.',
  },
  {
    icon: Shield,
    title: 'Regular Updates',
    description: 'Continuous improvements included.',
  },
]

export function TrustBadges() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Risk-Free Investment in Your Farm
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We stand behind FARE with guarantees that protect your investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <badge.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{badge.title}</h4>
                    <p className="text-sm text-slate-600">{badge.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guarantee Highlight */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              100% Satisfaction Guarantee
            </h3>
            <p className="text-green-100 text-lg mb-6">
              Try FARE risk-free for 30 days. If it doesn&apos;t work for your farm, 
              we&apos;ll refund every penny. No hassle, no questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-green-100">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Full Refund
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30 Days
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Questions
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
