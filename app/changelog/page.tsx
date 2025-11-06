import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Changelog | Fare2u',
  description: 'Latest updates, features, and improvements to Fare2u - Livestock Farm Management Software',
}

export default function Changelog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Changelog</h1>
          <p className="text-slate-300">Track all updates, features, and improvements to Fare2u</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Version 2.3.1 - LATEST */}
          <div className="mb-12 border-l-4 border-green-500 pl-8 relative">
            <div className="absolute -left-3 top-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              ✓
            </div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Version 2.3.1</h2>
                <p className="text-slate-500">Released November 15, 2025</p>
              </div>
              <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                CURRENT
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">🐛 Bug Fixes</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fixed issue with batch transfer not updating shed capacity correctly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Resolved vaccine stock calculation error when multiple doses administered same day</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fixed date picker display issue in Safari browser</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Corrected financial report rounding errors in currency conversion</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">⚡ Improvements</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improved page load speed by 40% through database query optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced mobile responsiveness across all modules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Updated email notification templates with clearer formatting</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-3">🔒 Security</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Patched SQL injection vulnerability in search functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Updated password hashing algorithm to bcrypt for enhanced security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 2.3.0 */}
          <div className="mb-12 border-l-4 border-slate-300 pl-8 relative">
            <div className="absolute -left-3 top-0 bg-slate-300 rounded-full w-6 h-6"></div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Version 2.3.0</h2>
              <p className="text-slate-500">Released October 1, 2025</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">✨ New Features</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Added bulk vaccination feature - vaccinate multiple batches at once</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>New dashboard widget showing upcoming vaccination schedules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Introduced feed conversion ratio (FCR) tracking and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Added export functionality for all reports (PDF and Excel)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>New mortality rate tracking and analytics per batch</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">⚡ Improvements</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Redesigned navigation menu for easier access to key features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced search with filters across livestock, suppliers, and clients</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improved invoice printing with customizable templates</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">🐛 Bug Fixes</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fixed issue with reproduction records not showing in batch history</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Resolved payment ledger pagination error with large datasets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 2.2.0 */}
          <div className="mb-12 border-l-4 border-slate-300 pl-8 relative">
            <div className="absolute -left-3 top-0 bg-slate-300 rounded-full w-6 h-6"></div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Version 2.2.0</h2>
              <p className="text-slate-500">Released July 15, 2025</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">✨ New Features</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Production forecasting based on historical batch performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Automated low stock alerts for feed, vaccines, and supplies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Client and supplier communication log for tracking interactions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Multi-currency support for international farmers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Batch comparison tool to analyze performance across different groups</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">⚡ Improvements</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Dashboard now displays key metrics and trends at a glance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Faster report generation with caching mechanism</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Added date range filters to all financial reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improved data validation to prevent entry errors</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">🐛 Bug Fixes</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fixed product stock calculation when waste is recorded</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Corrected timezone issues affecting vaccination schedules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Resolved duplicate batch number generation in rare cases</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 2.1.5 */}
          <div className="mb-12 border-l-4 border-slate-300 pl-8 relative">
            <div className="absolute -left-3 top-0 bg-slate-300 rounded-full w-6 h-6"></div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Version 2.1.5</h2>
              <p className="text-slate-500">Released May 1, 2025</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">⚡ Improvements</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced user interface with modern design updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improved mobile app responsiveness on tablets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Added tooltips and help text throughout the application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Optimized database queries for better performance with large datasets</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">🐛 Bug Fixes</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fixed issue with feed distribution not updating stock in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Resolved payment recording error for partial payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Corrected batch status display after livestock sale</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-3">🔒 Security</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Updated third-party libraries to latest secure versions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced session management for improved security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 2.1.0 */}
          <div className="mb-12 border-l-4 border-slate-300 pl-8 relative">
            <div className="absolute -left-3 top-0 bg-slate-300 rounded-full w-6 h-6"></div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-slate-900">Version 2.1.0</h2>
              <p className="text-slate-500">Released March 1, 2025</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-green-600 mb-3">✨ New Features</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Advanced reporting module with customizable report builder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Batch profitability calculator showing ROI per batch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Supplier and client rating system for better relationship management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Automated backup scheduling with cloud storage integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Email notifications for important events (low stock, due vaccines, etc.)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-3">⚡ Improvements</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Completely redesigned batch analysis report with visual charts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced financial reports with profit/loss breakdowns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improved data import/export functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Added search functionality across all modules</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-600 mb-3">🐛 Bug Fixes</h3>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Multiple bug fixes and stability improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Resolved issues with language translations in some modules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Fixed printer-friendly view formatting issues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Stay Updated</h3>
            <p className="text-slate-600 mb-6">
              Subscribe to our newsletter to receive notifications about new updates and features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#pricing"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Fare2u Now
              </Link>
              <Link
                href="/support"
                className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
