'use client'

import { motion } from 'framer-motion'
import { BarChart3, Calendar, TrendingUp, Database } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const annotations = [
  {
    icon: Database,
    label: 'Real-time Inventory',
    position: 'top-left',
    description: 'Track every animal across all sheds',
  },
  {
    icon: Calendar,
    label: 'Vaccination Calendar',
    position: 'top-right',
    description: 'Never miss a health check',
  },
  {
    icon: TrendingUp,
    label: 'Profit Trends',
    position: 'bottom-left',
    description: 'See your margins at a glance',
  },
  {
    icon: BarChart3,
    label: 'Production Analytics',
    position: 'bottom-right',
    description: 'Data-driven decisions',
  },
]

export function DashboardPreview() {
  return (
    <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-grid-white/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-block px-4 py-2 bg-sage-500/20 text-sage-300 rounded-full text-sm font-semibold mb-4">
              See It In Action
            </div>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            A Powerful Dashboard
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-300 to-green-300">
              Designed for Farmers, Not Developers
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Everything you need to manage your farm in one clean, intuitive interface
          </motion.p>
        </motion.div>

        {/* Dashboard Mockup Container */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Browser Chrome */}
          <div className="bg-slate-800 rounded-t-2xl border border-slate-700 p-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 flex-1 bg-slate-700 rounded px-3 py-1.5">
                <p className="text-xs text-slate-400">fare-app.com/dashboard</p>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-b-2xl border-x border-b border-slate-700 p-8 md:p-12 shadow-2xl min-h-[400px] md:min-h-[500px]">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent rounded-b-2xl" />
            
            {/* Content Grid Simulation */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-slate-600/50 backdrop-blur-sm rounded-lg p-6 border border-slate-500/50">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <div className="h-3 bg-slate-500 rounded w-2/3 mb-3" />
                <div className="h-8 bg-green-500/30 rounded mb-2" />
                <div className="h-2 bg-slate-500 rounded w-1/2" />
              </div>

              {/* Card 2 */}
              <div className="bg-slate-600/50 backdrop-blur-sm rounded-lg p-6 border border-slate-500/50">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <div className="h-3 bg-slate-500 rounded w-2/3 mb-3" />
                <div className="h-8 bg-blue-500/30 rounded mb-2" />
                <div className="h-2 bg-slate-500 rounded w-1/2" />
              </div>

              {/* Card 3 */}
              <div className="bg-slate-600/50 backdrop-blur-sm rounded-lg p-6 border border-slate-500/50">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div className="h-3 bg-slate-500 rounded w-2/3 mb-3" />
                <div className="h-8 bg-purple-500/30 rounded mb-2" />
                <div className="h-2 bg-slate-500 rounded w-1/2" />
              </div>
            </div>

            {/* Chart Simulation */}
            <div className="mt-6 bg-slate-600/50 backdrop-blur-sm rounded-lg p-6 border border-slate-500/50">
              <div className="h-3 bg-slate-500 rounded w-1/4 mb-4" />
              <div className="flex items-end gap-2 h-40">
                <div className="flex-1 bg-green-500/40 rounded-t" style={{ height: '60%' }} />
                <div className="flex-1 bg-green-500/40 rounded-t" style={{ height: '80%' }} />
                <div className="flex-1 bg-green-500/40 rounded-t" style={{ height: '70%' }} />
                <div className="flex-1 bg-green-500/40 rounded-t" style={{ height: '90%' }} />
                <div className="flex-1 bg-green-500/40 rounded-t" style={{ height: '85%' }} />
                <div className="flex-1 bg-green-500/40 rounded-t" style={{ height: '100%' }} />
                <div className="flex-1 bg-green-500/40 rounded-t" style={{ height: '95%' }} />
              </div>
            </div>

            {/* Placeholder Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-slate-400 text-sm mb-2">Dashboard Mockup Placeholder</p>
                <p className="text-slate-500 text-xs">Replace with actual screenshot: /dashboard-screenshot.png</p>
              </div>
            </div>
          </div>

          {/* Floating Annotations */}
          <div className="hidden lg:block">
            {annotations.map((annotation, index) => (
              <Annotation key={index} annotation={annotation} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Mobile Feature List (replaces annotations on small screens) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="lg:hidden grid grid-cols-2 gap-4 mt-12 max-w-2xl mx-auto"
        >
          {annotations.map((annotation, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-slate-800 rounded-lg p-4 border border-slate-700"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <annotation.icon className="w-5 h-5 text-green-400" />
                </div>
                <p className="font-semibold text-white text-sm">{annotation.label}</p>
              </div>
              <p className="text-slate-400 text-xs">{annotation.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface AnnotationProps {
  annotation: {
    icon: React.ElementType
    label: string
    position: string
    description: string
  }
  index: number
}

function Annotation({ annotation, index }: AnnotationProps) {
  const Icon = annotation.icon
  
  const positionClasses = {
    'top-left': 'top-20 -left-24',
    'top-right': 'top-20 -right-24',
    'bottom-left': 'bottom-40 -left-24',
    'bottom-right': 'bottom-40 -right-24',
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
      className={`absolute ${positionClasses[annotation.position as keyof typeof positionClasses]} w-56`}
    >
      <div className="bg-white rounded-lg p-4 shadow-xl border border-slate-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="font-semibold text-slate-900 text-sm mb-1">{annotation.label}</p>
            <p className="text-slate-600 text-xs">{annotation.description}</p>
          </div>
        </div>
        
        {/* Arrow pointing to dashboard */}
        <div className={`absolute w-0.5 h-8 bg-gradient-to-b from-slate-300 to-transparent
          ${annotation.position.includes('left') ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}
          ${annotation.position.includes('top') ? 'bottom-0 translate-y-full' : 'top-0 -translate-y-full'}
        `} />
      </div>
    </motion.div>
  )
}
