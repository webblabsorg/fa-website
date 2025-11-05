import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Download, Mail, Headphones, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Order Confirmed - Thank You! | Fare2u',
  description: 'Your Fare2u license has been purchased successfully',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string }
}) {
  const sessionId = searchParams.session_id

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-3xl mx-auto text-center py-16">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Payment Successful! 🎉
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Welcome to Fare2u! Your lifetime license is ready.
        </p>

        {/* Order Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-green-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What Happens Next?</h2>
          
          <div className="space-y-6 text-left">
            {/* Step 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">1. Check Your Email</h3>
                <p className="text-slate-600">
                  We&apos;ve sent your license key and download instructions to your email. 
                  Check your inbox (and spam folder) within the next 5 minutes.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">2. Download Fare2u</h3>
                <p className="text-slate-600 mb-3">
                  Use the download link in your email to get the installation package. You'll need a domain name and hosting (we offer VPS hosting for $7/month).
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://lsk.fare2u.com" target="_blank" rel="noopener noreferrer">
                    Download Now
                    <Download className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">3. Activate Your License</h3>
                <p className="text-slate-600">
                  Upload Fare2u to your hosting and enter your license key (from the email) to activate. Free installation service available - just contact us!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Headphones className="w-6 h-6 text-green-600" />
            <h3 className="font-bold text-slate-900">Need Help?</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Our support team is here for you 24/7. For the next 6 months, 
            you have priority support access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@fare2u.com"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              sales@fare2u.com
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

        {/* Order Reference */}
        {sessionId && (
          <div className="text-sm text-slate-500 mb-8">
            <p>Order Reference: <code className="bg-slate-100 px-2 py-1 rounded">{sessionId}</code></p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/" className="flex items-center gap-2">
              Return to Homepage
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Trust Message */}
        <p className="text-slate-500 text-sm mt-8">
          Thank you for choosing Fare2u! We&apos;re excited to help you manage your farm better.
        </p>
      </div>
    </div>
  )
}
