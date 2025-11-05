/**
 * Brand colors - Fare Design System
 */
export const COLORS = {
  primary: '#16a34a',
  secondary: '#92400e',
  sage: '#84cc16',
  cream: '#fef3c7',
  slate: '#1e293b',
} as const

/**
 * Product pricing
 */
export const PRICING = {
  amount: 99,
  originalPrice: 299,
  currency: 'USD',
  supportMonths: 6,
} as const

/**
 * Social proof statistics
 */
export const STATS = {
  farms: 11280,
  countries: 45,
  animalsTracked: 212900,
  healthRecords: 153300,
  revenueManaged: 72000000,
} as const

/**
 * Contact information
 */
export const CONTACT = {
  email: 'wakeupictacademy@gmail.com',
  supportHours: '9 AM - 5 PM EST',
} as const

/**
 * Demo and Product URLs
 */
export const URLS = {
  demo: 'https://lsk.fare2u.com/',
  checkout: '/checkout',
} as const

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://linkedin.com',
} as const

/**
 * Feature list for homepage
 */
export const FEATURES = [
  {
    id: 'livestock-tracking',
    title: 'Smart Livestock Tracking',
    description: 'Track unlimited animals with complete birth-to-sale records',
    icon: 'Database',
  },
  {
    id: 'health-management',
    title: 'Health & Vaccination Management',
    description: 'Never miss a vaccination. Auto-schedule doses for every batch',
    icon: 'HeartPulse',
  },
  {
    id: 'shed-organization',
    title: 'Shed & Facility Organization',
    description: 'Manage multiple sheds, transfer animals, monitor capacity',
    icon: 'Building2',
  },
  {
    id: 'feed-optimization',
    title: 'Feed & Cost Optimization',
    description: 'Track daily feeding, control costs, reduce waste',
    icon: 'Wheat',
  },
  {
    id: 'sales-revenue',
    title: 'Sales & Revenue Tracking',
    description: 'Create invoices, manage clients, track payments seamlessly',
    icon: 'DollarSign',
  },
  {
    id: 'production-management',
    title: 'Production Management',
    description: 'Record milk, eggs, and products. Monitor stock levels',
    icon: 'Egg',
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    description: 'Complete expense tracking, profit analysis, cash flow reports',
    icon: 'TrendingUp',
  },
  {
    id: 'breeding-records',
    title: 'Breeding Records',
    description: 'Document births, track lineage, optimize reproduction',
    icon: 'Heart',
  },
  {
    id: 'reports',
    title: 'Comprehensive Reports',
    description: 'Generate detailed reports for any aspect of your operation',
    icon: 'BarChart3',
  },
] as const

/**
 * FAQ items
 */
export const FAQ_ITEMS = [
  {
    question: 'Is this really a one-time payment?',
    answer: 'Yes! Pay $99 once and use it forever. No hidden fees or subscriptions. You own the software for life.',
  },
  {
    question: 'What happens after 6 months of support?',
    answer: 'You keep using the software with all features. Extended support is available at a low cost if needed, but most farmers find the documentation sufficient.',
  },
  {
    question: 'Where is the software installed?',
    answer: 'Fare2u is a web-based application installed on your own domain and hosting. You need a domain name and hosting provider. We offer optional VPS hosting for $7/month, or you can use your own hosting. We provide free installation assistance.',
  },
  {
    question: 'Is it suitable for small farms?',
    answer: 'Absolutely! Perfect for 10 animals or 10,000. The system scales with your operation, from small family farms to large commercial operations.',
  },
  {
    question: 'What types of livestock are supported?',
    answer: 'Cattle, poultry, pigs, goats, rabbits, and more. The system is fully customizable to track any type of livestock you manage.',
  },
  {
    question: 'Do I need hosting?',
    answer: 'Yes, Fare2u runs on your own domain and hosting. We provide VPS hosting for just $7/month (optional), or you can use your existing hosting provider. Free installation service is included with every purchase.',
  },
  {
    question: 'Can multiple users access it?',
    answer: 'Yes, create unlimited user accounts with role-based permissions. Perfect for farms with multiple staff members or family operations.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Your data is stored in your own database with industry-standard security practices. You have complete control and ownership of your farm data.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied for any reason, contact us for a full refund.',
  },
  {
    question: 'What languages are available?',
    answer: 'Multiple languages are supported including English, Spanish, French, and more. Easy to switch in settings to match your preference.',
  },
] as const
