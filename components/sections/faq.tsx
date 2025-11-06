'use client'

import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'
import { ContactModal } from '@/components/shared/contact-modal'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Is this really a one-time payment?',
    answer: 'Yes! You pay $99 once and own Fare2U forever. No monthly fees, no recurring charges, no hidden costs. You get lifetime access to the software and all its features.',
  },
  {
    question: 'What happens after 6 months of support?',
    answer: 'The first 6 months include premium priority support. After that, you still have access to our standard support channels (email, documentation, community forum) for free. You can also upgrade to priority support anytime if needed.',
  },
  {
    question: 'Where is the software installed?',
    answer: 'Fare2U is a web-based application installed on your own domain and hosting. You need a domain name and hosting provider. We offer optional VPS hosting for $7/month, or you can use your own hosting. We provide free installation assistance.',
  },
  {
    question: 'Is it suitable for small farms?',
    answer: 'Absolutely! Fare2U scales from 10 animals to 10,000+. Whether you\'re a hobby farmer with a few chickens or managing a large commercial operation, Fare2U adapts to your needs. Start small and grow without limitations.',
  },
  {
    question: 'What types of livestock are supported?',
    answer: 'Fare2U supports all common livestock: cattle, sheep, goats, pigs, chickens, ducks, horses, rabbits, and more. You can also add custom animal types. The system is flexible and adapts to any farming operation.',
  },
  {
    question: 'Do I need hosting?',
    answer: 'Yes, Fare2U runs on your own domain and hosting. We provide VPS hosting for just $7/month (optional), or you can use your existing hosting provider. Free installation service is included with every purchase.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Your data is 100% yours and stored on your own hosting. We don\'t collect, store, or access your farm data. You have full control and ownership. Your database is on your server, fully private and secure.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes! We offer a no-questions-asked 30-day money-back guarantee. If Fare2U doesn\'t work for your farm for any reason, just email us within 30 days for a full refund. We want you to be 100% satisfied.',
  },
  {
    question: 'What languages are available?',
    answer: 'Fare2U is currently available in English, Spanish, French, Portuguese, and Arabic. We\'re actively adding more languages based on user requests. The interface is fully translatable, and we welcome community translations.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-32 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-semibold mb-4">
              Have Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sage-600">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about Fare2U. Still have questions? 
              Contact our support team anytime.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordionItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16 p-8 bg-slate-50 rounded-2xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our support team is here to help. Get in touch and we&apos;ll respond within 24 hours.
            </p>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-300"
            >
              Contact Support
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  )
}

interface FAQAccordionItemProps {
  faq: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

function FAQAccordionItem({ faq, index, isOpen, onToggle }: FAQAccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-green-300 transition-colors duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-slate-900 pr-8">
          {faq.question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
          {isOpen ? (
            <Minus className="w-5 h-5 text-green-600" />
          ) : (
            <Plus className="w-5 h-5 text-green-600" />
          )}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 pt-0">
          <p className="text-slate-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
