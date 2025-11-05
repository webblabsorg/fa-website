'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'

interface Testimonial {
  quote: string
  author: string
  role: string
  location: string
  rating: number
  farmType?: string
}

const testimonials: Testimonial[] = [
  {
    quote: "FARE saved me 10+ hours every week. I can now track all 200 cattle from my phone and never miss a vaccination. Best $99 I've spent on my ranch.",
    author: "John Martinez",
    role: "Cattle Rancher",
    location: "Texas, USA",
    rating: 5,
    farmType: "Cattle Ranch",
  },
  {
    quote: "For $99, this is the best investment I've made for my farm. My poultry operation's efficiency increased by 30% and feed costs dropped significantly.",
    author: "Amara Kimathi",
    role: "Poultry Farmer",
    location: "Kenya",
    rating: 5,
    farmType: "Poultry Farm",
  },
  {
    quote: "I'm not tech-savvy, but FARE is so simple to use. Within 2 days I had all my sheep records digitized. The support team helped me every step of the way.",
    author: "Carlos Rodriguez",
    role: "Sheep Farmer",
    location: "Brazil",
    rating: 5,
    farmType: "Sheep Farm",
  },
  {
    quote: "Managing 5,000 chickens used to be chaos. Now I have complete visibility into production, health, and costs. My profit margins improved by 25%.",
    author: "Sarah Thompson",
    role: "Poultry Farm Owner",
    location: "Australia",
    rating: 5,
    farmType: "Poultry Farm",
  },
  {
    quote: "Running a mixed livestock operation with goats, cattle, and chickens was overwhelming. FARE handles it all seamlessly. Highly recommend!",
    author: "Raj Patel",
    role: "Mixed Livestock Farmer",
    location: "India",
    rating: 5,
    farmType: "Mixed Livestock",
  },
  {
    quote: "The financial tracking alone is worth the price. I finally know exactly where my money goes and which animals are most profitable. Game changer.",
    author: "Emma Williams",
    role: "Dairy Farmer",
    location: "United Kingdom",
    rating: 5,
    farmType: "Dairy Farm",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection
      if (nextIndex < 0) return testimonials.length - 1
      if (nextIndex >= testimonials.length) return 0
      return nextIndex
    })
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Farmer Testimonials
            </div>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Trusted by Farmers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sage-600">
              Worldwide
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Real stories from farmers who transformed their operations with FARE
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[350px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(-1)}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-green-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => paginate(1)}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Trust Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600">
            <span className="font-bold text-2xl text-green-600">11,280+</span> farmers trust FARE to manage their operations
          </p>
        </motion.div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200 mx-4">
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <Quote className="w-8 h-8 text-green-600" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-slate-700 text-center mb-8 italic leading-relaxed">
        &quot;{testimonial.quote}&quot;
      </blockquote>

      {/* Author */}
      <div className="text-center border-t border-slate-200 pt-6">
        <p className="font-bold text-slate-900 text-lg">{testimonial.author}</p>
        <p className="text-slate-600">{testimonial.role}</p>
        <p className="text-slate-500 text-sm mt-1">{testimonial.location}</p>
        {testimonial.farmType && (
          <div className="mt-3">
            <span className="inline-block px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm">
              {testimonial.farmType}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
