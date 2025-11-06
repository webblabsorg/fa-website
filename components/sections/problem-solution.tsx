'use client'

import { motion } from 'framer-motion'
import { X, CheckCircle2, FileQuestion, Calendar, Receipt, AlertCircle } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const problems = [
  { icon: FileQuestion, text: 'Can\'t track which animals were vaccinated and when doses are due' },
  { icon: Receipt, text: 'No idea how much feed each batch consumes or costs per animal' },
  { icon: Calendar, text: 'Missing livestock deaths, transfers, and reproduction records' },
  { icon: AlertCircle, text: 'Unable to calculate profit/loss per batch or shed' },
]

const solutions = [
  { icon: CheckCircle2, text: 'Automated vaccination schedules with dose tracking per batch' },
  { icon: CheckCircle2, text: 'Daily feed distribution tracking with cost analysis per animal' },
  { icon: CheckCircle2, text: 'Complete batch lifecycle: purchase, shed assignment, transfers, deaths, sales' },
  { icon: CheckCircle2, text: 'Detailed batch profitability reports showing ROI and performance metrics' },
]

export function ProblemSolution() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Block */}
        <motion.div
          className="mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder - Left Side */}
            <motion.div
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-200 to-slate-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">
                      Stressed farmer with paperwork
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Image placeholder: /problem-stressed-farmer.jpg
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div variants={fadeInUp} className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
                The Problem
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Tired of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Scattered Records?
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Most livestock farmers struggle with tracking vaccinations, calculating feed costs, 
                managing multiple sheds and batches, and understanding which groups are actually profitable.
              </p>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-200"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="text-slate-700 pt-2">{problem.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Solution Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content - Left Side */}
            <motion.div variants={fadeInUp}>
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                The Solution
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                One System,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sage-600">
                  Total Control
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Fare2u puts everything you need in one place. Make better decisions, 
                save time, and never miss an important task again.
              </p>
              
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md border border-green-200 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <solution.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-slate-700 pt-2 font-medium">{solution.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Placeholder - Right Side */}
            <motion.div
              variants={fadeInUp}
              className="order-1 md:order-2"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-200 to-sage-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl">
                    <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">
                      Confident farmer using tablet
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                      Image placeholder: /solution-farmer-tablet.jpg
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
