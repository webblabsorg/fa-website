import { Metadata } from 'next'
import Link from 'next/link'
import { XCircle, ArrowLeft, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Payment Cancelled | Fare2U',
  description: 'Your payment was cancelled',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center py-16">
        {/* Cancel Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
            <XCircle className="w-16 h-16 text-orange-600" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Payment Cancelled
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          No charges were made to your account.
        </p>

        {/* Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
          <p className="text-slate-700 leading-relaxed mb-6">
            We noticed you cancelled the checkout process. That&apos;s completely fine! 
            You can return anytime when you&apos;re ready.
          </p>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="font-bold text-slate-900 mb-3">Why Choose Fare2U?</h3>
            <ul className="text-left space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>One-time payment of $99 (no monthly fees)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Lifetime access to all features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>30-day money-back guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>6 months priority support included</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Mail className="w-6 h-6 text-green-600" />
            <h3 className="font-bold text-slate-900">Have Questions?</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Our team is here to help answer any questions you might have before purchasing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@Fare2U.com"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              sales@Fare2U.com
            </a>
            <span className="hidden sm:block text-slate-400">•</span>
            <a
              href="tel:+16466938098"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              +1 (646) 693-8098
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/#pricing" className="flex items-center gap-2">
              Try Again
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Homepage
            </Link>
          </Button>
        </div>

        {/* Additional Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/#faq" className="text-green-600 hover:text-green-700">
            View FAQ
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/refund" className="text-green-600 hover:text-green-700">
            Refund Policy
          </Link>
          <span className="text-slate-400">•</span>
          <a 
            href="https://lsk.Fare2U.com/auth/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700"
          >
            Try Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
