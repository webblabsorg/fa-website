'use client'

import { Hero, Navigation, SocialProofBar, ProblemSolution, FeaturesGrid, UseCases, DemoAccess, Testimonials, TrustBadges, Pricing, FAQ, FinalCTA, Footer } from "@/components/sections"

export default function Home() {
  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Fare2u - Livestock Farm Management Software',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Windows, macOS, Linux',
        offers: {
          '@type': 'Offer',
          price: '99.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          priceValidUntil: '2026-12-31',
          seller: {
            '@type': 'Organization',
            name: 'Fare2u',
          },
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '500',
          bestRating: '5',
          worstRating: '1',
        },
        description: 'Professional livestock farm management software for tracking animals, health records, sales, and expenses. One-time payment of $99 for lifetime access.',
        screenshot: 'https://fare2u.com/dashboard-screenshot.png',
      },
      {
        '@type': 'Organization',
        '@id': 'https://fare2u.com/#organization',
        name: 'Fare2u',
        url: 'https://fare2u.com',
        logo: 'https://fare2u.com/logo.png',
        description: 'Professional livestock management software made simple',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '635 W 42nd St',
          addressLocality: 'New York',
          addressRegion: 'NY',
          postalCode: '10036',
          addressCountry: 'US',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'sales@fare2u.com',
          telephone: '+1-646-693-8098',
          contactType: 'Sales',
          availableLanguage: ['English', 'Spanish', 'French', 'Portuguese', 'Swahili'],
        },
        sameAs: [
          'https://facebook.com/fare',
          'https://twitter.com/fare',
          'https://linkedin.com/company/fare',
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is this really a one-time payment?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! You pay $99 once and own Fare2u forever. No monthly fees, no recurring charges, no hidden costs. You get lifetime access to the software and all its features.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of livestock are supported?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Fare2u supports all common livestock: cattle, sheep, goats, pigs, chickens, ducks, horses, rabbits, and more. You can also add custom animal types.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use it offline?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! Fare2u works completely offline on your computer. Your data is stored locally on your device. You can optionally sync to cloud storage, but it\'s not required.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer refunds?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We offer a no-questions-asked 30-day money-back guarantee. If Fare2u doesn\'t work for your farm for any reason, just email us within 30 days for a full refund.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation Header - Phase 3.2 */}
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section - Phase 3.1 */}
        <Hero />
        
        {/* Social Proof Bar - Phase 3.3 */}
        <SocialProofBar />

        {/* Problem-Solution Section - Phase 4.1 */}
        <ProblemSolution />

        {/* Features Grid Section - Phase 4.2 */}
        <div id="features">
          <FeaturesGrid />
        </div>

        {/* Use Cases Section - Phase 4.3 */}
        <UseCases />

        {/* Live Demo Access Section - Phase 5.1 (Updated) */}
        <DemoAccess />

        {/* Testimonials Section - Phase 5.3 */}
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* Trust Badges Section - Phase 5.4 */}
        <TrustBadges />

        {/* Pricing Section - Phase 6.1 */}
        <div id="pricing">
          <Pricing />
        </div>

        {/* FAQ Section - Phase 6.2 */}
        <FAQ />

        {/* Final CTA Section - Phase 6.3 */}
        <FinalCTA />
      </main>

      {/* Footer - Phase 7.1 */}
      <Footer />
    </>
  )
}
