'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'livestock', name: 'Livestock', icon: '🐄' },
    { id: 'shed', name: 'Shed Management', icon: '🏗️' },
    { id: 'vaccination', name: 'Vaccination', icon: '💉' },
    { id: 'feed', name: 'Feed & Food', icon: '🌾' },
    { id: 'sales', name: 'Sales & Purchase', icon: '💰' },
    { id: 'reports', name: 'Reports', icon: '📊' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: '🔧' },
  ]

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I start using Fare2U after purchase?',
      answer: 'After purchasing, you will receive a license key and download link. Install Fare2U on your web hosting, configure the database, and login with the default credentials (admin@example.com / 12345). Change your password immediately after first login.'
    },
    {
      category: 'getting-started',
      question: 'What are the system requirements?',
      answer: 'Fare2U requires: PHP 7.x or higher, MySQL 5.x database, Apache/Nginx web server, and at least 50MB of disk space. Any modern web hosting package should work.'
    },
    {
      category: 'getting-started',
      question: 'Can I change the language?',
      answer: 'Yes! Go to Settings → Language Setup and select your preferred language. Fare2U supports multiple languages including English, Spanish, French, Portuguese, and more.'
    },
    {
      category: 'livestock',
      question: 'How do I add a new animal to the system?',
      answer: 'First, create the livestock type (e.g., Cattle) in the Livestock module. Then add variants (breeds) under that type. Purchase livestock from suppliers, then assign them to sheds to start tracking.'
    },
    {
      category: 'livestock',
      question: 'Can I track individual animals?',
      answer: 'Fare2U tracks animals by batch rather than individually. Each shed assignment creates a unique batch, and all activities (feeding, vaccination, sales) are tracked per batch.'
    },
    {
      category: 'livestock',
      question: 'What happens when I delete a livestock purchase?',
      answer: 'You can only delete purchases that have not been assigned to a shed. Once assigned, the purchase cannot be deleted to maintain data integrity. You can, however, record deaths or sales to reduce inventory.'
    },
    {
      category: 'shed',
      question: 'What is a batch and how does it work?',
      answer: 'A batch is automatically created when you assign livestock to a shed. It represents a group of animals of the same variant living together. Each batch has a unique number and all activities are tracked per batch.'
    },
    {
      category: 'shed',
      question: 'Can I move animals between sheds?',
      answer: 'Yes! Use the Transfer function to move entire batches between sheds. The system maintains a complete location history showing where animals were at any given time.'
    },
    {
      category: 'shed',
      question: 'How do I record animal deaths?',
      answer: 'Go to Shed → Death List, select the shed, and click "Add New Death". Enter the quantity that died. Deaths are tracked separately and excluded from active inventory counts and financial calculations.'
    },
    {
      category: 'vaccination',
      question: 'How do I set up a vaccination schedule?',
      answer: 'First create vaccine types in the Vaccine module. Then assign vaccines to livestock variants with dose information (quantity, interval, route). The system automatically generates schedules for all batches of that variant.'
    },
    {
      category: 'vaccination',
      question: 'What if I administer the wrong dose?',
      answer: 'You can revert/undo a dose immediately after administering it. Go to Vaccination Schedule, find the dose, and click the undo option. You can also edit the quantity used in "View Used Vaccine".'
    },
    {
      category: 'vaccination',
      question: 'How do I track vaccine expiration?',
      answer: 'Currently, Fare2U tracks vaccine stock levels but not expiration dates. We recommend using the "Wasted Vaccine" feature to remove expired stock and maintaining a separate expiration tracking log.'
    },
    {
      category: 'feed',
      question: 'How does feed management work?',
      answer: 'Create feed types in the Food module, then assign daily requirements to each batch. Purchase feed from suppliers to build stock, then distribute daily from the Food Stock module. The system tracks consumption and costs per batch.'
    },
    {
      category: 'feed',
      question: 'Can different batches have different feeding plans?',
      answer: 'Yes! Each batch can have its own feeding plan with different food types and quantities. This is useful when different age groups or species have different nutritional needs.'
    },
    {
      category: 'feed',
      question: 'What if I distribute the wrong amount of feed?',
      answer: 'You can edit feed distributions from the Food Stock module. Click "View Distributed Food" and edit the quantity. Make corrections as soon as possible to maintain accurate stock levels.'
    },
    {
      category: 'sales',
      question: 'Can I sell part of a batch?',
      answer: 'Yes! When creating a livestock sale, you can specify the quantity to sell from a batch. The remaining animals stay in the batch with updated counts.'
    },
    {
      category: 'sales',
      question: 'How do I handle partial payments?',
      answer: 'Both purchase and sale invoices support multiple payments. Create the invoice first, then add payments over time from the Payment module. The system tracks due amounts automatically.'
    },
    {
      category: 'sales',
      question: 'Can I issue refunds for sales?',
      answer: 'Fare2U doesn\'t have a built-in refund feature. To handle returns, you can create a negative payment entry or delete the sale invoice if no other activities depend on it.'
    },
    {
      category: 'reports',
      question: 'What reports are available?',
      answer: 'Fare2U includes comprehensive reports: Livestock inventory, Purchase history, Sales records, Vaccination compliance, Feed consumption, Production output, Financial statements, Batch analysis, Shed performance, and Supplier/Client ledgers.'
    },
    {
      category: 'reports',
      question: 'Can I export reports to PDF or Excel?',
      answer: 'Reports can be printed from your browser (File → Print) which creates PDFs. For Excel export, you can copy data from reports and paste into spreadsheet software. Direct export features may be added in future updates.'
    },
    {
      category: 'reports',
      question: 'How do I calculate profit per batch?',
      answer: 'Go to Reports → Batch Analysis Report. This shows all costs (purchase, feed, vaccine) and revenue (sales, production) for each batch, calculating the net profit/loss.'
    },
    {
      category: 'troubleshooting',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Contact our support team at sales@Fare2U.com with your license key and farm details. We\'ll help you reset your password securely.'
    },
    {
      category: 'troubleshooting',
      question: 'Why can\'t I edit a purchase/sale invoice?',
      answer: 'Invoices can only be edited or deleted before they\'re linked to other activities. For example, a purchase can\'t be edited after livestock are assigned to sheds, and sales can\'t be edited after payments are recorded.'
    },
    {
      category: 'troubleshooting',
      question: 'The system is slow or not loading. What should I do?',
      answer: 'Check your internet connection and web hosting performance. Clear your browser cache and cookies. If using shared hosting, you may need to upgrade to VPS hosting for better performance with larger farms.'
    },
    {
      category: 'troubleshooting',
      question: 'How do I backup my data?',
      answer: 'Regular backups are crucial! Use your hosting control panel to backup the database (MySQL) and files. We recommend daily automated backups. Export important reports periodically as PDFs for offline records.'
    },
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-slate-300 mb-8">Find answers to common questions about Fare2U</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg text-slate-900 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">🔍</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  activeCategory === category.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-slate-200 hover:border-green-300 bg-white'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-slate-900 text-sm">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {activeCategory === 'all' ? 'All Questions' : categories.find(c => c.id === activeCategory)?.name}
            <span className="text-slate-500 text-lg ml-2">({filteredFaqs.length})</span>
          </h2>

          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No results found</h3>
              <p className="text-slate-600">Try a different search term or category</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-green-300 transition-colors"
                >
                  <summary className="px-6 py-4 font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between">
                    <span className="flex-1">{faq.question}</span>
                    <span className="text-green-600 ml-4 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/documentation" 
            className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-green-400 transition-colors"
          >
            <div className="text-3xl mb-3">📖</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Documentation</h3>
            <p className="text-slate-600 text-sm">Complete user guide and tutorials</p>
          </Link>
          
          <Link 
            href="/support" 
            className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-green-400 transition-colors"
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Contact Support</h3>
            <p className="text-slate-600 text-sm">Get help from our support team</p>
          </Link>
          
          <Link 
            href="/changelog" 
            className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-green-400 transition-colors"
          >
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Changelog</h3>
            <p className="text-slate-600 text-sm">See what&apos;s new in Fare2U</p>
          </Link>
        </div>

        {/* Still Need Help */}
        <div className="max-w-4xl mx-auto mt-16 bg-green-50 rounded-lg p-8 border border-green-200 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Still Need Help?</h2>
          <p className="text-slate-600 mb-6">
            Can&apos;t find what you&apos;re looking for? Our support team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="mailto:sales@Fare2U.com"
              className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
