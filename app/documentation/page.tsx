import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentation | Fare2U',
  description: 'Complete documentation and user guide for Fare2U - Livestock Farm Management Software',
}

export default function Documentation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-green-400 hover:text-green-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-slate-300">Complete guide to using Fare2U - Livestock Management System v2.3.1</p>
        </div>
      </div>

      {/* Navigation Sidebar and Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Navigation</h3>
              <nav className="space-y-2">
                <a href="#introduction" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Introduction
                </a>
                <a href="#features" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Features Overview
                </a>
                <a href="#livestock" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Livestock Management
                </a>
                <a href="#shed" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Shed Management
                </a>
                <a href="#vaccination" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Vaccination
                </a>
                <a href="#feed" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Feed Management
                </a>
                <a href="#production" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Production
                </a>
                <a href="#sales" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Sales
                </a>
                <a href="#reports" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Reports
                </a>
                <a href="#settings" className="block text-slate-600 hover:text-green-600 transition-colors">
                  Settings
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="prose prose-slate max-w-none">
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Introduction</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Fare2U is a comprehensive livestock management system that helps farmers record and track their livestock from purchase or birth all the way to sale. The system organizes all activities by batch and keeps track of the most important dates in the lifetime of your animals.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  With Fare2U, you can manage cattle, poultry, pigs, goats, rabbits, and other farm animals. Track animal counts per shed and batch with costing and performance metrics, as well as financial tracking from sales. Special features include vaccination management, feed tracking, and death management.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-6">
                  <p className="text-slate-700">
                    <strong className="text-green-800">System Version:</strong> v2.3.1<br />
                    <strong className="text-green-800">Last Updated:</strong> November 2025<br />
                    <strong className="text-green-800">Support:</strong> sales@Fare2U.com
                  </p>
                </div>
              </section>

              {/* Features Overview */}
              <section id="features" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Features Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">🐄 Livestock Management</h4>
                    <p className="text-slate-600 text-sm">Track unlimited animals with detailed records, breed management, and complete history</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">🏗️ Shed Management</h4>
                    <p className="text-slate-600 text-sm">Organize animals by location with batch tracking and transfer management</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">💉 Vaccination</h4>
                    <p className="text-slate-600 text-sm">Schedule and track vaccinations with automated reminders and stock management</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-semibent text-slate-900 mb-2">🌾 Feed Management</h4>
                    <p className="text-slate-600 text-sm">Plan daily feeding, track consumption, and manage feed inventory</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">💰 Sales & Procurement</h4>
                    <p className="text-slate-600 text-sm">Manage purchases, sales, invoicing, and payment tracking</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">🥚 Production</h4>
                    <p className="text-slate-600 text-sm">Track farm production like milk, eggs, wool with stock management</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">👶 Reproduction</h4>
                    <p className="text-slate-600 text-sm">Record births and track breeding with parent-offspring relationships</p>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-2">📊 Comprehensive Reports</h4>
                    <p className="text-slate-600 text-sm">Business intelligence with detailed analytics and financial tracking</p>
                  </div>
                </div>
              </section>

              {/* Livestock Management */}
              <section id="livestock" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Livestock Management</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Adding Livestock Types</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>Navigate to the Livestock module from the main menu</li>
                  <li>Click the &quot;Add New Livestock&quot; button</li>
                  <li>Enter the livestock name (e.g., Cattle, Poultry, Goats)</li>
                  <li>Save to create the livestock type</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Creating Variants</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Variants allow you to categorize different breeds within each livestock type. For example, under Cattle, you might have variants like Holstein, Angus, or Jersey.
                </p>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>From the livestock list, click &quot;Add Variant&quot; under your livestock type</li>
                  <li>Enter variant details (breed name, characteristics)</li>
                  <li>Save the variant</li>
                  <li>Click &quot;View Variant&quot; to see all variants for a livestock type</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Purchasing Livestock</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Before purchasing, ensure you have created suppliers in the Supplier module.
                </p>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                  <li>Go to Livestock Purchase module</li>
                  <li>Click &quot;Add New Purchase&quot;</li>
                  <li>Select supplier, livestock type, and variant</li>
                  <li>Enter quantity and price</li>
                  <li>Optionally add payment details if paying immediately</li>
                  <li>Submit to create purchase invoice</li>
                </ol>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
                  <p className="text-sm text-slate-700">
                    <strong className="text-blue-800">Note:</strong> You can edit or delete purchases before assigning them to a shed.
                  </p>
                </div>
              </section>

              {/* Shed Management */}
              <section id="shed" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Shed Management</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Creating Sheds</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>Navigate to Shed module</li>
                  <li>Click &quot;Add New Shed&quot;</li>
                  <li>Enter unique shed number and name</li>
                  <li>Add capacity and other details</li>
                  <li>Save to create the shed</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Assigning Livestock to Sheds</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When you assign livestock to a shed, the system automatically generates a unique batch number. Each shed assignment creates a new batch for tracking purposes.
                </p>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>Go to Shed module and click &quot;Assign to Shed&quot;</li>
                  <li>Select the purchased livestock you want to assign</li>
                  <li>Choose the destination shed</li>
                  <li>Enter the quantity to assign</li>
                  <li>A batch number will be automatically generated</li>
                  <li>Submit to complete the assignment</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Transfer Between Sheds</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Transfer livestock from one shed to another while maintaining complete history tracking.
                </p>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                  <li>Navigate to Shed module, click &quot;Transfer List&quot;</li>
                  <li>Select the source shed and batch</li>
                  <li>Choose the destination shed</li>
                  <li>All animals in the batch will be transferred together</li>
                  <li>View transfer history to see complete location timeline</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">Death Management</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Track animal deaths separately from active inventory to maintain accurate records.
                </p>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                  <li>Go to Shed module, click &quot;Death List&quot;</li>
                  <li>Select the shed where death occurred</li>
                  <li>Click &quot;Add New Death&quot;</li>
                  <li>Enter quantity and date</li>
                  <li>Deaths are excluded from active inventory counts</li>
                </ol>
              </section>

              {/* Vaccination */}
              <section id="vaccination" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Vaccination Management</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Setting Up Vaccines</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>Go to Vaccine module</li>
                  <li>Create vaccine routes (injection, oral, etc.) in Routing section</li>
                  <li>Click &quot;Add New Vaccine&quot; to create vaccine types</li>
                  <li>Enter vaccine name and unit</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Assigning Vaccination Schedules</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>From vaccine list, click &quot;Assign&quot; button</li>
                  <li>Select livestock type and variant</li>
                  <li>Add dose information (quantity, days interval, route)</li>
                  <li>Click &quot;Add More Dose&quot; for multiple doses</li>
                  <li>Submit to create vaccination schedule</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Purchasing Vaccine Stock</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>Go to Vaccine Purchase</li>
                  <li>Select supplier and vaccine</li>
                  <li>Enter quantity and price</li>
                  <li>Add payment details if paying immediately</li>
                  <li>Stock levels update automatically</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Administering Vaccines</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                  <li>Navigate to Vaccination Schedule</li>
                  <li>View shed-wise vaccination dates</li>
                  <li>Click &quot;Dose&quot; button for due vaccinations</li>
                  <li>Enter quantity used from stock</li>
                  <li>Confirm dose completion</li>
                  <li>System automatically schedules next dose</li>
                </ol>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg my-4">
                  <p className="text-sm text-slate-700">
                    <strong className="text-yellow-800">Tip:</strong> You can revert/undo a dose if entered incorrectly. Use &quot;View Used Vaccine&quot; to edit quantities.
                  </p>
                </div>
              </section>

              {/* Feed Management */}
              <section id="feed" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Feed Management</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Creating Feed Types</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>Ensure you have created product units in Settings</li>
                  <li>Go to Food module</li>
                  <li>Click &quot;Add New Food&quot;</li>
                  <li>Enter food name and select unit</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Assigning Feed to Batches</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>From food list, click &quot;Assign Batch&quot;</li>
                  <li>Select shed and batch</li>
                  <li>Enter daily feed requirements for each food type</li>
                  <li>Submit to create feeding plan</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Daily Feed Distribution</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                  <li>Go to Food Stock module</li>
                  <li>Click &quot;Distribute Food&quot; for assigned batches</li>
                  <li>System shows available stock</li>
                  <li>Confirm daily distribution</li>
                  <li>Stock levels update automatically</li>
                  <li>Track costs per animal/batch</li>
                </ol>
              </section>

              {/* Production */}
              <section id="production" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Production Management</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Setting Up Products</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>Create product categories (e.g., Dairy, Eggs, Wool)</li>
                  <li>Add products within categories</li>
                  <li>Assign products to specific batches</li>
                  <li>Same product can be assigned to multiple batches</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Recording Production</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                  <li>Go to assigned product in Production module</li>
                  <li>Click &quot;Add Stock&quot; for daily production</li>
                  <li>Enter quantity produced</li>
                  <li>Stock updates automatically</li>
                  <li>Track production trends per batch</li>
                </ol>
              </section>

              {/* Sales */}
              <section id="sales" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Sales Management</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Livestock Sales</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
                  <li>Ensure you have created clients in Client module</li>
                  <li>Go to Sale → Livestock Sale List</li>
                  <li>Click &quot;Add New Sale&quot;</li>
                  <li>Select client, shed, and batch</li>
                  <li>Enter quantity and price</li>
                  <li>Add payment details if receiving payment immediately</li>
                </ol>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Product Sales</h3>
                <ol className="list-decimal pl-6 text-slate-600 space-y-2">
                  <li>Go to Sale → Product Sale List</li>
                  <li>Click &quot;Add New Product Sale&quot;</li>
                  <li>Select client and products from stock</li>
                  <li>Enter quantities and prices</li>
                  <li>Multiple products can be added per invoice</li>
                </ol>
              </section>

              {/* Reports */}
              <section id="reports" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Reports & Analytics</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Fare2U provides comprehensive reporting across all modules:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li><strong>Livestock Reports:</strong> Complete inventory and animal history</li>
                  <li><strong>Purchase Reports:</strong> Procurement analysis and supplier trends</li>
                  <li><strong>Sales Reports:</strong> Revenue tracking and customer analysis</li>
                  <li><strong>Vaccination Reports:</strong> Compliance tracking and schedules</li>
                  <li><strong>Feed Reports:</strong> Consumption patterns and cost analysis</li>
                  <li><strong>Production Reports:</strong> Output metrics and efficiency</li>
                  <li><strong>Financial Reports:</strong> Profit/loss, cash flow, and expenses</li>
                  <li><strong>Batch Reports:</strong> Complete lifecycle tracking per batch</li>
                  <li><strong>Shed Performance:</strong> Location-based analytics</li>
                </ul>
              </section>

              {/* Settings */}
              <section id="settings" className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">System Settings</h2>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Farm Information</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Update your farm details, logo, and contact information in the Settings module.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Language Settings</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Fare2U supports multiple languages. Change your preferred language from the Language Setup section.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">User Profile</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Update your username, password, and profile information from the Profile module.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">Product Units</h3>
                <p className="text-slate-600 leading-relaxed">
                  Create custom units for feeds, vaccines, and products (e.g., liters, kg, dozen, bales).
                </p>
              </section>

              {/* Need More Help */}
              <section className="bg-green-50 rounded-lg p-8 border border-green-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Need More Help?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Can&apos;t find what you&apos;re looking for? Our support team is here to help!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link 
                    href="/help" 
                    className="bg-white border border-green-300 rounded-lg p-4 hover:border-green-500 transition-colors"
                  >
                    <h4 className="font-semibold text-slate-900 mb-2">📚 Help Center</h4>
                    <p className="text-slate-600 text-sm">Browse FAQs and guides</p>
                  </Link>
                  <Link 
                    href="/support" 
                    className="bg-white border border-green-300 rounded-lg p-4 hover:border-green-500 transition-colors"
                  >
                    <h4 className="font-semibold text-slate-900 mb-2">💬 Support Portal</h4>
                    <p className="text-slate-600 text-sm">Contact our support team</p>
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
