'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Beef, Egg, Home, ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import { FarmPotentialCalculator } from '@/components/shared/farm-potential-calculator'

interface UseCase {
  icon: React.ElementType
  title: string
  description: string
  benefits: string[]
  imagePlaceholder: string
  gradient: string
}

const useCases: UseCase[] = [
  {
    icon: Beef,
    title: 'Cattle Ranchers',
    description: 'Manage large herds across multiple pastures with ease.',
    benefits: [
      'Track grazing rotations',
      'Monitor weight gain',
      'Breeding program management',
      'Pasture utilization metrics',
    ],
    imagePlaceholder: '/use-case-cattle.jpg',
    gradient: 'from-amber-900/90 to-orange-900/90',
  },
  {
    icon: Egg,
    title: 'Poultry Farms',
    description: 'Optimize egg production and flock health tracking.',
    benefits: [
      'Daily production logging',
      'Feed conversion ratios',
      'Flock health monitoring',
      'Automated egg collection records',
    ],
    imagePlaceholder: '/use-case-poultry.jpg',
    gradient: 'from-yellow-900/90 to-amber-900/90',
  },
  {
    icon: Home,
    title: 'Mixed Livestock',
    description: 'Perfect for diversified farms with multiple animal types.',
    benefits: [
      'Multi-species tracking',
      'Unified financial dashboard',
      'Cross-operation insights',
      'Flexible shed management',
    ],
    imagePlaceholder: '/use-case-mixed.jpg',
    gradient: 'from-green-900/90 to-emerald-900/90',
  },
]

export function UseCases() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)

  return (
    <section className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-block px-4 py-2 bg-sage-500/20 text-sage-300 rounded-full text-sm font-semibold mb-4">
              Built for Every Farm
            </div>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by Farmers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-300 to-green-300">
              Worldwide
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Whether you raise cattle, poultry, or run a mixed operation, 
            Fare2U adapts to your specific farming needs.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => setIsCalculatorOpen(true)}
            className="group bg-sage-500 hover:bg-sage-600 text-white px-8 py-6 text-lg"
          >
            See Your Farm&apos;s Potential
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Farm Potential Calculator Modal */}
      <FarmPotentialCalculator 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
    </section>
  )
}

interface UseCaseCardProps {
  useCase: UseCase
}

function UseCaseCard({ useCase }: UseCaseCardProps) {
  const Icon = useCase.icon

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative overflow-hidden rounded-2xl shadow-2xl bg-slate-800"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`/images/${useCase.imagePlaceholder.replace('/', '')}`}
          alt={`${useCase.title} - farming operation`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${useCase.gradient} group-hover:opacity-95 transition-opacity duration-300`} />

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col min-h-[500px]">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {useCase.title}
          </h3>
          <p className="text-white/90 text-lg">
            {useCase.description}
          </p>
        </div>

        <div className="flex-1">
          <ul className="space-y-3">
            {useCase.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-white/80">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </motion.div>
  )
}
