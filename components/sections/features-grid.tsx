'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  HeartPulse, 
  Building2, 
  Wheat, 
  DollarSign, 
  Egg,
  TrendingUp,
  Heart,
  BarChart3,
  LucideIcon
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

const features: Feature[] = [
  {
    icon: Database,
    title: 'Smart Livestock Tracking',
    description: 'Complete digital records for every animal. Track lineage, weight, location, and history in one searchable database.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: HeartPulse,
    title: 'Health & Vaccination Management',
    description: 'Never miss a vaccination or health check. Automated reminders and complete medical history for every animal.',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Building2,
    title: 'Shed & Facility Organization',
    description: 'Track which animals are in which sheds, monitor capacity, and optimize space utilization across your farm.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Wheat,
    title: 'Feed & Cost Optimization',
    description: 'Monitor feed consumption, calculate cost per animal, and identify opportunities to reduce waste and increase efficiency.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: DollarSign,
    title: 'Sales & Revenue Tracking',
    description: 'Record all sales, track buyer relationships, and see your revenue trends at a glance with intuitive dashboards.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Egg,
    title: 'Production Management',
    description: 'Track eggs, milk, wool, or any production output. Monitor productivity trends and identify your top performers.',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: TrendingUp,
    title: 'Financial Dashboard',
    description: 'Real-time view of farm profitability. See income, expenses, and profit margins with visual charts and reports.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Breeding Records',
    description: 'Manage breeding programs with detailed lineage tracking, breeding history, and offspring performance data.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Comprehensive Reports',
    description: 'Generate detailed reports for any time period. Export data for accountants, vets, or regulatory compliance.',
    gradient: 'from-violet-500 to-purple-500',
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-semibold mb-4">
              Powerful Features
            </div>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Everything You Need to Run a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sage-600">
              Profitable Farm
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            From livestock tracking to financial management, Fare2U gives you all the tools 
            to make smarter decisions and increase your bottom line.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  feature: Feature
}

function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon
  
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
    >
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {feature.title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}
