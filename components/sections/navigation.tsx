'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { DemoButton } from '@/components/shared/demo-button'
import { Logo } from '@/components/shared/logo'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '/documentation', label: 'Documentation', external: true },
  { href: '/help', label: 'Help', external: true },
  { href: '/support', label: 'Support', external: true },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string, external?: boolean) => {
    if (external) {
      window.location.href = href
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <Logo size="sm" animate={false} className={cn(
                'transition-opacity duration-300',
                isScrolled ? 'opacity-100' : 'opacity-90'
              )} />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href, link.external)
                  }}
                  className={cn(
                    'text-sm font-medium transition-colors duration-300 hover:text-sage-500',
                    isScrolled
                      ? 'text-slate-700 hover:text-sage-600'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <DemoButton
                size="sm"
                className={cn(
                  'transition-all duration-300',
                  isScrolled
                    ? 'bg-sage-500 hover:bg-sage-600'
                    : 'bg-white text-primary-600 hover:bg-sage-50'
                )}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors duration-300',
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-16 right-0 bottom-0 w-64 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col p-6 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href, link.external)
                      }}
                      className="text-lg font-medium text-slate-700 hover:text-sage-600 transition-colors py-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <DemoButton
                    className="w-full bg-sage-500 hover:bg-sage-600"
                    size="lg"
                  />
                </motion.div>

                {/* Mobile Menu Footer */}
                <motion.div
                  className="pt-6 border-t border-slate-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm text-slate-500 text-center">
                    $99 one-time payment
                    <br />
                    <span className="text-sage-600 font-semibold">No subscriptions</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
