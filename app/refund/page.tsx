import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Clock, Mail, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy | FARE',
  description: 'Refund Policy for FARE - 30-Day Money-Back Guarantee',
}

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-slate-300">30-Day Money-Back Guarantee</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        {/* Guarantee Highlight */}
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">100% Satisfaction Guarantee</h2>
              <p className="text-slate-700 text-lg">
                Try FARE risk-free for 30 days. If it doesn&apos;t work for your farm, we&apos;ll refund every penny. No questions asked.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Promise</h2>
            <p className="text-slate-600 leading-relaxed">
              We stand behind FARE with a complete satisfaction guarantee. We want you to be 100% confident in your purchase, which is why we offer a full refund if the software doesn&apos;t meet your needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Refund Eligibility</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Who Qualifies?</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              You are eligible for a full refund if:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-slate-600">
                  <strong>Within 30 days:</strong> Your refund request is made within 30 days of your original purchase date
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-slate-600">
                  <strong>Any reason:</strong> You are not satisfied with FARE for any reason (technical issues, doesn&apos;t fit your workflow, etc.)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-slate-600">
                  <strong>First purchase:</strong> This is your first purchase of FARE (refunds are limited to one per customer to prevent abuse)
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Request a Refund</h2>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Simple 3-Step Process:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600 text-sm">
                      Send an email to{' '}
                      <a href="mailto:sales@fare2u.com" className="text-green-600 hover:text-green-700 font-medium">
                        sales@fare2u.com
                      </a>{' '}
                      with the subject line &quot;Refund Request&quot;
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Include Your Information</h4>
                    <p className="text-slate-600 text-sm">
                      Provide your purchase email address and order number (found in your purchase confirmation email)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Receive Your Refund</h4>
                    <p className="text-slate-600 text-sm">
                      We&apos;ll process your refund within 2-5 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              <strong>No questions asked:</strong> We won&apos;t ask why you want a refund or try to convince you to stay. We respect your decision.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Refund Timeline</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Processing Time: 2-5 Business Days</h3>
                  <p className="text-slate-600 text-sm">
                    Once we receive your refund request, we&apos;ll process it within 2-5 business days (Monday-Friday, excluding holidays)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Bank Processing: 3-10 Business Days</h3>
                  <p className="text-slate-600 text-sm">
                    After we process the refund, your bank or payment provider may take an additional 3-10 business days to show the credit in your account
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mt-4">
              <strong>Total timeline:</strong> Most customers see their refund within 7-10 business days from the date of request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Refund Method</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Refunds are issued to the original payment method:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Credit/Debit Card:</strong> Refunded to the card used for purchase</li>
              <li><strong>PayPal:</strong> Refunded to your PayPal account</li>
              <li><strong>Other Payment Methods:</strong> Refunded according to the payment provider&apos;s policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Happens After Refund</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Once your refund is processed:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Your license key will be deactivated</li>
              <li>You may continue using the software until the end of the 30-day period</li>
              <li>You can keep any data you&apos;ve entered (it&apos;s stored locally on your device)</li>
              <li>You&apos;ll receive a confirmation email when the refund is complete</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Important Notes</h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-amber-900 mb-2">Refund Limitations</h3>
              <ul className="list-disc pl-6 text-amber-800 space-y-2 text-sm">
                <li>Refunds are limited to <strong>one per customer</strong></li>
                <li>Requests after 30 days cannot be honored (no exceptions)</li>
                <li>If you repurchase after a refund, you will not be eligible for another refund</li>
              </ul>
            </div>

            <p className="text-slate-600 leading-relaxed">
              These limitations are in place to prevent abuse of our generous refund policy while protecting honest customers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Before You Request a Refund</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We want you to succeed with FARE. Before requesting a refund, consider:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Contact Support:</strong> We may be able to solve your issue quickly</li>
              <li><strong>Check Documentation:</strong> Our help center and video tutorials cover most questions</li>
              <li><strong>Try the Demo:</strong> If you haven&apos;t already, try the{' '}
                <a href="https://lsk.fare2u.com/auth/login" className="text-green-600 hover:text-green-700">
                  live demo
                </a> to explore features
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-slate-900">For Refund Requests or Questions:</h3>
              </div>
              <p className="text-slate-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:sales@fare2u.com" className="text-green-600 hover:text-green-700">
                  sales@fare2u.com
                </a>
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Phone:</strong>{' '}
                <a href="tel:+16466938098" className="text-green-600 hover:text-green-700">
                  +1 (646) 693-8098
                </a>
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Subject Line:</strong> &quot;Refund Request&quot;
              </p>
              <p className="text-slate-700">
                <strong>Response Time:</strong> Within 24 hours (usually much faster)
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-900 font-medium">
                💚 We believe in our product and want you to be completely satisfied. That&apos;s why we offer this straightforward, no-hassle refund policy. Your trust means everything to us.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
