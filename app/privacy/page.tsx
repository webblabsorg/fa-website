import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Fare2u',
  description: 'Privacy Policy for Fare2u - Livestock Farm Management Software',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300">Last updated: January 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Welcome to Fare2u (Farm Animal Record & Expense tracking). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our livestock management software.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Fare2u is a web-based application that you install on your own domain and hosting. We do not collect, store, or access your farm data. All data is stored on your own server/hosting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data Collection</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.1 Information We Collect</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              When you purchase Fare2u, we collect:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Name and email address (for license delivery)</li>
              <li>Payment information (processed securely by our payment providers)</li>
              <li>IP address and device information (for fraud prevention)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">2.2 Information We Do NOT Collect</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not collect, access, or store:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Your livestock records or farm data</li>
              <li>Financial information stored in the application</li>
              <li>Any data you enter into Fare2u</li>
              <li>Usage analytics or tracking data from within the application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect only for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Processing your purchase and delivering your license key</li>
              <li>Providing customer support</li>
              <li>Sending important product updates (you can opt-out anytime)</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Storage and Security</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.1 Your Farm Data</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              All your farm data (livestock records, health information, financial data) is stored on your own hosting/server. You have complete control over this data. We cannot access it, and it is not transmitted to our servers.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.2 Purchase Information</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Purchase information is stored securely and encrypted. We use industry-standard security measures to protect your personal information.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">4.3 Backup Responsibility</h3>
            <p className="text-slate-600 leading-relaxed">
              Since your data is stored on your own hosting, you are responsible for backing it up. Fare2u provides export features to help you create backups. Most hosting providers offer automatic backup services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Sharing</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We may share your information only with:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Payment processors</strong> (Stripe, PayPal, Paystack) - to process transactions</li>
              <li><strong>Email service providers</strong> - to send license keys and important updates</li>
              <li><strong>Legal authorities</strong> - if required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights (GDPR Compliance)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you are located in the European Union, you have the following rights:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>Right to access</strong> - Request a copy of your personal data</li>
              <li><strong>Right to rectification</strong> - Correct inaccurate information</li>
              <li><strong>Right to erasure</strong> - Request deletion of your data</li>
              <li><strong>Right to data portability</strong> - Receive your data in a portable format</li>
              <li><strong>Right to object</strong> - Object to processing of your data</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              To exercise these rights, contact us at{' '}
              <a href="mailto:sales@fare2u.com" className="text-green-600 hover:text-green-700">
                sales@fare2u.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website uses minimal cookies for essential functionality only (e.g., remembering your language preference). We do not use tracking or advertising cookies. You can disable cookies in your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Fare2u is not intended for children under 13. We do not knowingly collect information from children under 13. If we discover we have collected information from a child under 13, we will delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a notice on our website. The &quot;Last updated&quot; date at the top of this page indicates when the policy was last revised.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
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
        </div>
      </div>
    </div>
  )
}
