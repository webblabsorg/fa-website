'use client'

import { motion } from 'framer-motion'
import { ExternalLink, User, Lock, ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'

export function DemoAccess() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              Try It Yourself
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience FARE Live
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              No signup required. Jump straight into a fully-functional demo 
              and explore all features with sample farm data.
            </p>
          </motion.div>

          {/* Demo Access Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12">
              {/* Demo Link */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Demo URL</h3>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <a
                    href="https://lsk.fare2u.com/auth/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-mono text-sm md:text-base break-all underline"
                  >
                    https://lsk.fare2u.com/auth/login
                  </a>
                </div>
              </div>

              {/* Login Credentials */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Username */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-slate-900">Username</h4>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <code className="text-slate-700 font-mono text-sm">
                      admin@example.com
                    </code>
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-slate-900">Password</h4>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <code className="text-slate-700 font-mono text-sm">12345</code>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button
                  asChild
                  size="lg"
                  className="group bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full sm:w-auto"
                >
                  <a
                    href="https://lsk.fare2u.com/auth/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Launch Live Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <p className="text-slate-500 text-sm">
                  Opens in new tab • No credit card required
                </p>
              </div>

              {/* Features List */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-slate-600 text-center mb-4 font-medium">
                  What you&apos;ll see in the demo:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Complete livestock inventory</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Health & vaccination tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Financial dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Production analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Shed management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span>All core features enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <p className="text-green-100 text-sm">
              💡 <strong>Pro Tip:</strong> The demo is loaded with sample data. 
              Feel free to explore, add records, and test all features. Changes won&apos;t affect real farms!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
