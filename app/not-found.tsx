import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-sage-600 leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Looks like this page wandered off the farm. Let&apos;s get you back to familiar pastures.
          </p>
        </div>

        {/* Illustration or Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100">
            <Search className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
          </Button>

          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 hover:bg-slate-50 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/#features" className="text-green-600 hover:text-green-700 hover:underline">
              Features
            </Link>
            <Link href="/#pricing" className="text-green-600 hover:text-green-700 hover:underline">
              Pricing
            </Link>
            <Link href="/#faq" className="text-green-600 hover:text-green-700 hover:underline">
              FAQ
            </Link>
            <Link href="/#contact" className="text-green-600 hover:text-green-700 hover:underline">
              Contact
            </Link>
            <a 
              href="https://lsk.fare2u.com/auth/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
