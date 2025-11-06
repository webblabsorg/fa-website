'use client'

// Social media icons - Commented out for future use
// import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Logo } from '@/components/shared/logo'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Live Demo', href: 'https://lsk.Fare2U.com/auth/login', external: true },
    { label: 'Documentation', href: '/documentation' },
    { label: 'Changelog', href: '/changelog' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Support Portal', href: '/support' },
    { label: 'Submit Ticket', href: '/support/ticket' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

// Social links - Commented out for future use
// const socialLinks = [
//   { icon: Facebook, href: '#', label: 'Facebook' },
//   { icon: Twitter, href: '#', label: 'Twitter' },
//   { icon: Instagram, href: '#', label: 'Instagram' },
//   { icon: Youtube, href: '#', label: 'YouTube' },
//   { icon: Linkedin, href: '#', label: 'LinkedIn' },
// ]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo size="sm" animate={false} showIcon={true} />
              <p className="text-sm text-slate-400 leading-relaxed mt-3">
                Professional Livestock Management Made Simple
              </p>
            </div>

            {/* Social Media Icons - Commented out for future use */}
            {/* <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:text-green-400 transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm hover:text-green-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-green-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sales@Fare2U.com"
                  className="text-sm hover:text-green-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>sales@Fare2U.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@Fare2U.com"
                  className="text-sm hover:text-green-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@Fare2U.com</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:billing@Fare2U.com"
                  className="text-sm hover:text-green-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>billing@Fare2U.com</span>
                </a>
              </li>
              <li className="text-sm">
                <p className="text-slate-400 leading-relaxed">
                  635 W 42nd St,<br />
                  New York, NY 10036,<br />
                  USA
                </p>
              </li>
              <li className="text-sm">
                <a
                  href="tel:+16466938098"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  +1 (646) 693-8098
                </a>
              </li>
              <li className="text-sm">
                <p className="font-medium text-slate-300 mb-1">Support Hours</p>
                <p>24/7 Email Support</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="text-center">
            {/* Copyright */}
            <p className="text-sm text-slate-500">
              © {currentYear} Fare2U. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
