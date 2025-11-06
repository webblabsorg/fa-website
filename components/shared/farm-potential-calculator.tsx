'use client'

import { useState } from 'react'
import { X, TrendingUp, Clock, DollarSign, CheckCircle2, ArrowRight, Calculator } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CalculatorResults {
  timeSavedPerWeek: number
  annualTimeSaving: number
  costReductionPerYear: number
  profitImprovement: number
  roi: number
  paybackMonths: number
}

interface FarmPotentialCalculatorProps {
  isOpen: boolean
  onClose: () => void
}

export function FarmPotentialCalculator({ isOpen, onClose }: FarmPotentialCalculatorProps) {
  const [step, setStep] = useState<'input' | 'results'>('input')
  const [formData, setFormData] = useState({
    farmType: 'cattle',
    animalCount: 100,
    currentMethod: 'paper',
  })
  const [results, setResults] = useState<CalculatorResults | null>(null)

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculatePotential = () => {
    const { farmType, animalCount, currentMethod } = formData

    // Base calculations (simplified for demo - real values would be more complex)
    let timeMultiplier = 1
    let costMultiplier = 1
    let profitMultiplier = 1

    // Adjust based on current method
    switch (currentMethod) {
      case 'paper':
        timeMultiplier = 1.5
        costMultiplier = 1.3
        profitMultiplier = 1.4
        break
      case 'excel':
        timeMultiplier = 1.2
        costMultiplier = 1.15
        profitMultiplier = 1.25
        break
      case 'other':
        timeMultiplier = 0.8
        costMultiplier = 0.9
        profitMultiplier = 1.1
        break
      case 'none':
        timeMultiplier = 2
        costMultiplier = 1.5
        profitMultiplier = 1.6
        break
    }

    // Adjust based on farm type
    let baseTime = 0
    let baseCost = 0
    switch (farmType) {
      case 'cattle':
        baseTime = 0.15 // hours per animal per week
        baseCost = 50 // cost per animal per year
        break
      case 'poultry':
        baseTime = 0.05
        baseCost = 15
        break
      case 'mixed':
        baseTime = 0.12
        baseCost = 40
        break
      case 'dairy':
        baseTime = 0.18
        baseCost = 60
        break
      case 'sheep':
        baseTime = 0.08
        baseCost = 25
        break
    }

    const timeSavedPerWeek = Math.round(animalCount * baseTime * timeMultiplier)
    const annualTimeSaving = Math.round(timeSavedPerWeek * 52)
    const costReductionPerYear = Math.round(animalCount * baseCost * costMultiplier)
    const profitImprovement = Math.round(animalCount * baseCost * profitMultiplier)
    const totalAnnualBenefit = costReductionPerYear + (annualTimeSaving * 25) // $25/hour value
    const roi = Math.round((totalAnnualBenefit / 99) * 100)
    const paybackMonths = Math.max(1, Math.round((99 / totalAnnualBenefit) * 12))

    const calculatedResults: CalculatorResults = {
      timeSavedPerWeek,
      annualTimeSaving,
      costReductionPerYear,
      profitImprovement,
      roi,
      paybackMonths,
    }

    setResults(calculatedResults)
    setStep('results')
  }

  const handleClose = () => {
    setStep('input')
    setResults(null)
    onClose()
  }

  const handleRecalculate = () => {
    setStep('input')
    setResults(null)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-t-2xl">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">See Your Farm&apos;s Potential</h2>
                    <p className="text-green-100 mt-1">Calculate your ROI in 30 seconds</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {step === 'input' ? (
                  <InputStep
                    formData={formData}
                    onChange={handleChange}
                    onCalculate={calculatePotential}
                  />
                ) : (
                  <ResultsStep
                    results={results!}
                    formData={formData}
                    onRecalculate={handleRecalculate}
                    onClose={handleClose}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

interface InputStepProps {
  formData: { farmType: string; animalCount: number; currentMethod: string }
  onChange: (field: string, value: string | number) => void
  onCalculate: () => void
}

function InputStep({ formData, onChange, onCalculate }: InputStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-slate-600 mb-6">
          Answer a few quick questions to see how much time and money you could save with Fare2u.
        </p>
      </div>

      {/* Farm Type */}
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-3">
          What type of farm do you operate?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { value: 'cattle', label: 'Cattle' },
            { value: 'poultry', label: 'Poultry' },
            { value: 'dairy', label: 'Dairy' },
            { value: 'sheep', label: 'Sheep/Goat' },
            { value: 'mixed', label: 'Mixed' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => onChange('farmType', option.value)}
              className={`p-4 rounded-lg border-2 transition-all ${
                formData.farmType === option.value
                  ? 'border-green-600 bg-green-50 text-green-900 font-semibold'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Animal Count */}
      <div>
        <label htmlFor="animalCount" className="block text-sm font-semibold text-slate-900 mb-3">
          How many animals do you manage?
        </label>
        <input
          type="number"
          id="animalCount"
          value={formData.animalCount}
          onChange={(e) => onChange('animalCount', parseInt(e.target.value) || 0)}
          min="1"
          className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all text-lg font-semibold"
        />
        <div className="mt-2 flex gap-2">
          {[50, 100, 500, 1000].map((value) => (
            <button
              key={value}
              onClick={() => onChange('animalCount', value)}
              className="px-3 py-1 text-sm bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {/* Current Method */}
      <div>
        <label className="block text-sm font-semibold text-slate-900 mb-3">
          How do you currently track your livestock?
        </label>
        <div className="space-y-2">
          {[
            { value: 'paper', label: 'Paper records / Notebooks', impact: 'Highest time savings' },
            { value: 'excel', label: 'Excel spreadsheets', impact: 'High time savings' },
            { value: 'other', label: 'Other software', impact: 'Moderate time savings' },
            { value: 'none', label: 'No tracking system', impact: 'Maximum potential' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => onChange('currentMethod', option.value)}
              className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                formData.currentMethod === option.value
                  ? 'border-green-600 bg-green-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-900">{option.label}</span>
                <span className="text-xs text-green-600 font-semibold">{option.impact}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Calculate Button */}
      <div className="pt-4">
        <Button
          onClick={onCalculate}
          size="lg"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg group"
        >
          Calculate My Potential
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}

interface ResultsStepProps {
  results: CalculatorResults
  formData: { farmType: string; animalCount: number; currentMethod: string }
  onRecalculate: () => void
  onClose: () => void
}

function ResultsStep({ results, formData, onRecalculate, onClose }: ResultsStepProps) {
  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="text-center pb-6 border-b border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Your Farm&apos;s Potential with Fare2u
        </h3>
        <p className="text-slate-600">
          Based on {formData.animalCount} {formData.farmType} animals
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <MetricCard
          icon={Clock}
          label="Time Saved"
          value={`${results.timeSavedPerWeek}h`}
          subtitle="per week"
          color="blue"
        />
        <MetricCard
          icon={DollarSign}
          label="Annual Savings"
          value={`$${results.costReductionPerYear.toLocaleString()}`}
          subtitle="reduced costs"
          color="green"
        />
        <MetricCard
          icon={TrendingUp}
          label="Profit Boost"
          value={`$${results.profitImprovement.toLocaleString()}`}
          subtitle="per year"
          color="purple"
        />
        <MetricCard
          icon={CheckCircle2}
          label="ROI"
          value={`${results.roi}%`}
          subtitle={`in ${results.paybackMonths} ${results.paybackMonths === 1 ? 'month' : 'months'}`}
          color="orange"
        />
      </div>

      {/* Annual Summary */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
        <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          First Year Impact
        </h4>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-green-800">Time saved annually:</span>
            <span className="font-bold text-green-900">{results.annualTimeSaving} hours</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-green-800">Financial benefit:</span>
            <span className="font-bold text-green-900">
              ${(results.costReductionPerYear + results.profitImprovement).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-green-300">
            <span className="text-green-800">Investment:</span>
            <span className="font-bold text-green-900">$99 (one-time)</span>
          </div>
          <div className="flex justify-between items-center text-lg pt-2 border-t-2 border-green-400">
            <span className="text-green-900 font-bold">Net benefit:</span>
            <span className="font-bold text-green-900 text-xl">
              ${(results.costReductionPerYear + results.profitImprovement - 99).toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* What You Get */}
      <div className="bg-slate-50 rounded-xl p-6">
        <h4 className="font-bold text-slate-900 mb-4">What You&apos;ll Get:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Lifetime license - No subscriptions',
            'Automated vaccination reminders',
            'Feed cost tracking & analytics',
            'Batch lifecycle management',
            'Sales & profit reports',
            'Mobile access anywhere',
            '24/7 support included',
            'Free updates forever',
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Link href="https://lsk.fare2u.com/auth/login" target="_blank" className="flex-1">
          <Button
            size="lg"
            variant="outline"
            className="w-full border-2 border-green-600 text-green-600 hover:bg-green-50"
            onClick={onClose}
          >
            Try Live Demo
          </Button>
        </Link>
        <Link href="https://codecanyon.net/item/fare2u-livestock-management-system/51630743" target="_blank" className="flex-1">
          <Button
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700 text-white group"
            onClick={onClose}
          >
            Get Fare2u for $99
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Recalculate */}
      <div className="text-center pt-4 border-t border-slate-200">
        <button
          onClick={onRecalculate}
          className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors"
        >
          ← Recalculate with different numbers
        </button>
      </div>
    </div>
  )
}

interface MetricCardProps {
  icon: React.ElementType
  label: string
  value: string
  subtitle: string
  color: 'blue' | 'green' | 'purple' | 'orange'
}

function MetricCard({ icon: Icon, label, value, subtitle, color }: MetricCardProps) {
  const colors = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  }

  return (
    <div className={`rounded-xl p-5 border-2 ${colors[color]}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-xs opacity-75">{subtitle}</div>
    </div>
  )
}
