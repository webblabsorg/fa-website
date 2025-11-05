'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: number
  label: string
  suffix?: string
  prefix?: string
}

const stats: Stat[] = [
  { value: 11280, label: 'Farms across 45+ countries', suffix: '+' },
  { value: 212900, label: 'Animals Tracked', suffix: '+' },
  { value: 153300, label: 'Health Records', suffix: '+' },
  { value: 72, label: 'Revenue Managed', prefix: '$', suffix: 'M+' },
]

function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2 
}: { 
  value: number
  suffix?: string
  prefix?: string
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * value))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function SocialProofBar() {
  return (
    <section className="bg-gradient-to-r from-green-50 via-cream-50 to-green-50 border-y border-green-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-slate-600 font-medium">
            Trusted by farmers worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="text-slate-600 text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
