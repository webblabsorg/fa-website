import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support Portal | Fare2u',
  description: 'Get help and support for Fare2u - Livestock Farm Management Software',
}

export default function SupportPortal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Portal</h1>
          <p className="text-slate-300">We&apos;re here to help you get the most out of Fare2u</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Support Options */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How Can We Help You?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Submit a Ticket */}
            <Link 
              href="/support/ticket"
              className="group bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-green-500 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">🎫</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                Submit a Ticket
              </h3>
              <p className="text-slate-600 mb-4">
                Need help with a specific issue? Submit a support ticket and our team will get back to you within 24-48 hours.
              </p>
              <div className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Create Ticket →
              </div>
            </Link>

            {/* Email Support */}
            <a 
              href="mailto:sales@fare2u.com"
              className="group bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-green-500 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                Email Support
              </h3>
              <p className="text-slate-600 mb-4">
                Prefer email? Send us a message at sales@fare2u.com and we&apos;ll respond within 24-48 hours.
              </p>
              <div className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Send Email →
              </div>
            </a>

            {/* Phone Support */}
            <a 
              href="tel:+16466938098"
              className="group bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-green-500 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                Phone Support
              </h3>
              <p className="text-slate-600 mb-4">
                For urgent issues, call us at +1 (646) 693-8098. Available Monday-Friday, 9 AM - 5 PM EST.
              </p>
              <div className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Call Now →
              </div>
            </a>

            {/* Help Center */}
            <Link 
              href="/help"
              className="group bg-white border-2 border-slate-200 rounded-xl p-8 hover:border-green-500 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">❓</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">
                Help Center
              </h3>
              <p className="text-slate-600 mb-4">
                Browse our comprehensive FAQ and find instant answers to common questions about Fare2u.
              </p>
              <div className="text-green-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                Browse FAQs →
              </div>
            </Link>
          </div>

          {/* Support Tiers */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Support Plans</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Premium Support */}
              <div className="bg-white rounded-lg p-6 border-2 border-green-500 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Premium Support</h3>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FIRST 6 MONTHS
                  </span>
                </div>
                <p className="text-slate-600 mb-6">
                  Included free with your purchase for the first 6 months
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-slate-700">Priority response (within 24 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-slate-700">Email and phone support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-slate-700">Installation assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-slate-700">Bug fixes and patches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-slate-700">Feature guidance</span>
                  </li>
                </ul>
              </div>

              {/* Standard Support */}
              <div className="bg-white rounded-lg p-6 border-2 border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Standard Support</h3>
                  <span className="bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1 rounded-full">
                    AFTER 6 MONTHS
                  </span>
                </div>
                <p className="text-slate-600 mb-6">
                  Continued support at no additional cost
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">✓</span>
                    <span className="text-slate-700">Response within 48-72 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">✓</span>
                    <span className="text-slate-700">Email support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">✓</span>
                    <span className="text-slate-700">Documentation access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">✓</span>
                    <span className="text-slate-700">Bug fixes and security patches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-slate-400 mr-2">✓</span>
                    <span className="text-slate-700">Community forum access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Response Times */}
          <div className="bg-blue-50 rounded-xl border border-blue-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Response Times</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">24h</div>
                <div className="text-sm font-semibold text-slate-900 mb-1">Premium Support</div>
                <div className="text-xs text-slate-600">First 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">48h</div>
                <div className="text-sm font-semibold text-slate-900 mb-1">Standard Support</div>
                <div className="text-xs text-slate-600">After 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-slate-600 mb-2">1-2h</div>
                <div className="text-sm font-semibold text-slate-900 mb-1">Urgent Issues</div>
                <div className="text-xs text-slate-600">Phone support only</div>
              </div>
            </div>
          </div>

          {/* Before You Contact Us */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Before You Contact Us</h2>
            <p className="text-slate-600 mb-6">
              To help us assist you faster, please have the following information ready:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">📌</span>
                <div>
                  <div className="font-semibold text-slate-900">Your License Key</div>
                  <div className="text-slate-600 text-sm">Found in your purchase confirmation email</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">📌</span>
                <div>
                  <div className="font-semibold text-slate-900">Fare2u Version Number</div>
                  <div className="text-slate-600 text-sm">Found in Settings → System Information</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">📌</span>
                <div>
                  <div className="font-semibold text-slate-900">Detailed Description of Issue</div>
                  <div className="text-slate-600 text-sm">What were you trying to do? What happened instead?</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">📌</span>
                <div>
                  <div className="font-semibold text-slate-900">Screenshots (if applicable)</div>
                  <div className="text-slate-600 text-sm">Visual aids help us understand the issue faster</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">📌</span>
                <div>
                  <div className="font-semibold text-slate-900">Steps to Reproduce</div>
                  <div className="text-slate-600 text-sm">What steps lead to the problem?</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link 
                href="/documentation"
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-green-400 transition-colors"
              >
                <div className="text-3xl mb-2">📖</div>
                <h4 className="font-semibold text-slate-900 mb-1">Documentation</h4>
                <p className="text-slate-600 text-sm">Complete user guide</p>
              </Link>
              
              <Link 
                href="/help"
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-green-400 transition-colors"
              >
                <div className="text-3xl mb-2">💡</div>
                <h4 className="font-semibold text-slate-900 mb-1">Help Center</h4>
                <p className="text-slate-600 text-sm">FAQs and guides</p>
              </Link>
              
              <Link 
                href="/changelog"
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-green-400 transition-colors"
              >
                <div className="text-3xl mb-2">📝</div>
                <h4 className="font-semibold text-slate-900 mb-1">Changelog</h4>
                <p className="text-slate-600 text-sm">Latest updates</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Help?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Our support team is standing by to help you succeed with Fare2u. Choose your preferred contact method above.
            </p>
            <Link
              href="/support/ticket"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Submit a Support Ticket
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
