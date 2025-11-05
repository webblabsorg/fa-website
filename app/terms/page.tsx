import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Fare2u',
  description: 'Terms of Service for Fare2u - Livestock Farm Management Software',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-300">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By purchasing and using Fare2u (Farm Animal Record & Expense tracking), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not purchase or use the software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. License Grant</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 License Type</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Upon payment of the one-time license fee ($99), you are granted a non-exclusive, non-transferable, lifetime license to use Fare2u software.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Permitted Use</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Install Fare2u on your domain and hosting (one installation per license)</li>
              <li>Use the software for managing your livestock operations</li>
              <li>Create backups of your data</li>
              <li>Receive free updates for 1 year from purchase date</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.3 Prohibited Use</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may NOT:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Share your license key with others</li>
              <li>Resell, redistribute, or sublicense the software</li>
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Remove or modify any copyright notices</li>
              <li>Use the software for illegal purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">3.1 One-Time Payment</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Fare2u is sold for a one-time payment of $99 USD. This grants you lifetime access to the software with no recurring fees or subscriptions.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">3.2 Payment Processing</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Payments are processed securely through our payment partners (Stripe, PayPal, Paystack). We do not store your credit card information.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">3.3 Taxes</h3>
            <p className="text-slate-600 leading-relaxed">
              You are responsible for any applicable taxes in your jurisdiction. Prices are listed in USD and may be subject to currency conversion fees by your bank or payment provider.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Refund Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We offer a 30-day money-back guarantee. If you are not satisfied with Fare2u for any reason, request a refund within 30 days of purchase for a full refund. See our{' '}
              <Link href="/refund" className="text-green-600 hover:text-green-700">
                Refund Policy
              </Link>
              {' '}for complete details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Support and Updates</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.1 Premium Support (First 6 Months)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your purchase includes 6 months of premium priority support with faster response times and personalized assistance.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.2 Standard Support (After 6 Months)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              After 6 months, you continue to receive standard support via email, documentation, and community forums at no additional cost.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">5.3 Software Updates</h3>
            <p className="text-slate-600 leading-relaxed">
              Free software updates (bug fixes, security patches, minor features) are included for 1 year. After 1 year, you may continue using your current version or purchase an upgrade for major new versions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data and Backups</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Fare2u stores all your data on your own hosting/server. You are solely responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Creating regular backups of your data</li>
              <li>Securing your device and data</li>
              <li>Maintaining hardware that meets system requirements</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              We are not responsible for data loss due to hardware failure, user error, or any other cause.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Fare2u is provided &quot;as is&quot; without warranty of any kind, express or implied. We do not guarantee that:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>The software will be error-free or uninterrupted</li>
              <li>The software will meet your specific requirements</li>
              <li>All data entered will be 100% accurate (user input errors may occur)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, we shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Business interruption</li>
              <li>Damages exceeding the amount you paid for the license ($99)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Some jurisdictions do not allow the limitation of liability, so these limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. User Responsibilities</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              As a user of Fare2u, you are responsible for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Ensuring data entered is accurate</li>
              <li>Complying with local laws and regulations regarding farm records</li>
              <li>Maintaining the confidentiality of your license key</li>
              <li>Using the software ethically and legally</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Termination</h2>
            <p className="text-slate-600 leading-relaxed">
              We may terminate your license if you violate these terms. Upon termination, you must stop using the software and delete all copies. Sections regarding limitation of liability, warranty disclaimers, and dispute resolution survive termination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Dispute Resolution</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have a dispute with us, please contact us first at{' '}
              <a href="mailto:sales@fare2u.com" className="text-green-600 hover:text-green-700">
                sales@fare2u.com
              </a>
              {' '}to resolve it informally.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any legal disputes shall be governed by the laws of your local jurisdiction, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update these Terms of Service from time to time. Significant changes will be communicated via email. Continued use of the software after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Information</h2>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <p className="text-slate-700 mb-4">
                <strong>Email:</strong>{' '}
                <a href="mailto:sales@fare2u.com" className="text-green-600 hover:text-green-700">
                  sales@fare2u.com
                </a>
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Phone:</strong>{' '}
                <a href="tel:+16466938098" className="text-green-600 hover:text-green-700">
                  +1 (646) 693-8098
                </a>
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Address:</strong><br />
                635 W 42nd St,<br />
                New York, NY 10036,<br />
                USA
              </p>
              <p className="text-slate-700">
                <strong>Response Time:</strong> Within 48 hours
              </p>
            </div>
          </section>

          <section className="mb-8">
            <p className="text-slate-600 leading-relaxed italic">
              By using Fare2u, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
