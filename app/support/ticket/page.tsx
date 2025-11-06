'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SubmitTicket() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    licenseKey: '',
    subject: '',
    category: '',
    priority: 'medium',
    description: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [error, setError] = useState('')
  const [ticketNumber, setTicketNumber] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/submit-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit ticket')
      }

      setTicketNumber(data.ticketNumber)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Ticket</h1>
          </div>
        </div>

        {/* Success Message */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">✓</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Ticket Submitted Successfully!</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Thank you for contacting us. We&apos;ve received your support ticket and will respond within 24-48 hours.
            </p>
            <div className="bg-white border border-slate-200 rounded-lg p-6 mb-8 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-slate-500 mb-1">Ticket Number</div>
                  <div className="font-mono font-semibold text-slate-900">#{ticketNumber}</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Priority</div>
                  <div className="font-semibold text-slate-900 capitalize">{formData.priority}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-slate-500 mb-1">Subject</div>
                  <div className="font-semibold text-slate-900">{formData.subject}</div>
                </div>
              </div>
            </div>
            <p className="text-slate-600 mb-8">
              A confirmation has been sent to <strong className="text-slate-900">{formData.email}</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/support"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Back to Support Portal
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: '',
                    email: '',
                    licenseKey: '',
                    subject: '',
                    category: '',
                    priority: 'medium',
                    description: '',
                  })
                }}
                className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Submit Another Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/support" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Back to Support Portal
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit a Support Ticket</h1>
          <p className="text-slate-300">Fill out the form below and we&apos;ll get back to you within 24-48 hours</p>
        </div>
      </div>

      {/* Form */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Info Banner */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h3 className="font-semibold text-blue-900 mb-2">Before You Submit</h3>
            <p className="text-blue-800 text-sm">
              Please check our{' '}
              <Link href="/help" className="underline font-semibold">Help Center</Link>
              {' '}and{' '}
              <Link href="/documentation" className="underline font-semibold">Documentation</Link>
              {' '}first. You might find an instant answer to your question!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                placeholder="john@example.com"
              />
              <p className="text-xs text-slate-500 mt-1">We&apos;ll send ticket updates to this email</p>
            </div>

            {/* License Key */}
            <div className="mb-6">
              <label htmlFor="licenseKey" className="block text-sm font-semibold text-slate-900 mb-2">
                License Key <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="licenseKey"
                name="licenseKey"
                value={formData.licenseKey}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all font-mono"
                placeholder="FARE-XXXX-XXXX-XXXX"
              />
              <p className="text-xs text-slate-500 mt-1">Found in your purchase confirmation email</p>
            </div>

            {/* Category and Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-slate-900 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                >
                  <option value="">Select a category</option>
                  <option value="installation">Installation & Setup</option>
                  <option value="technical">Technical Issue</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="livestock">Livestock Management</option>
                  <option value="shed">Shed Management</option>
                  <option value="vaccination">Vaccination</option>
                  <option value="feed">Feed Management</option>
                  <option value="sales">Sales & Purchase</option>
                  <option value="reports">Reports</option>
                  <option value="billing">Billing & License</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label htmlFor="priority" className="block text-sm font-semibold text-slate-900 mb-2">
                  Priority <span className="text-red-500">*</span>
                </label>
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                >
                  <option value="low">Low - General question</option>
                  <option value="medium">Medium - Issue but can work</option>
                  <option value="high">High - Cannot use feature</option>
                  <option value="urgent">Urgent - System down</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                placeholder="Brief description of your issue"
              />
            </div>

            {/* Description */}
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-semibold text-slate-900 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-y"
                placeholder="Please provide as much detail as possible:&#10;- What were you trying to do?&#10;- What happened instead?&#10;- What error messages did you see?&#10;- Steps to reproduce the issue"
              />
              <p className="text-xs text-slate-500 mt-1">The more details you provide, the faster we can help</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Ticket'
              )}
            </button>
          </form>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sales@fare2u.com"
                className="inline-block text-green-600 font-semibold hover:text-green-700"
              >
                📧 Email: sales@fare2u.com
              </a>
              <a
                href="tel:+16466938098"
                className="inline-block text-green-600 font-semibold hover:text-green-700"
              >
                📞 Call: +1 (646) 693-8098
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
