'use client'

export function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Fare2U',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Farm Management Software',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2025-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '11280',
      bestRating: '5',
      worstRating: '1',
    },
    description:
      'Professional farm business management software for livestock, cattle, dairy, and poultry operations. Complete herd management system with farm record keeping, crop planning, and agricultural management solutions.',
    image: 'https://fare2u.com/og-image.jpg',
    url: 'https://fare2u.com',
    publisher: {
      '@type': 'Organization',
      name: 'Fare2U',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fare2u.com/logo.png',
      },
    },
    softwareVersion: '2.0',
    releaseNotes: 'Latest version with enhanced features',
  }

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fare2U',
    alternateName: 'Fare2U Farm Management Software',
    url: 'https://fare2u.com',
    logo: 'https://fare2u.com/logo.png',
    description:
      'Best farm management software for livestock, cattle, and dairy operations. Professional agricultural management solutions.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One Liberty Plaza, 165 Broadway, Lower Manhattan, 23rd Floor',
      addressLocality: 'New York City',
      addressRegion: 'NY',
      postalCode: '10006',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '',
        contactType: 'customer support',
        email: 'support@fare2u.com',
        availableLanguage: ['English', 'Spanish', 'French', 'Portuguese', 'Arabic'],
        areaServed: 'Worldwide',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@fare2u.com',
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    ],
    sameAs: [
      'https://www.facebook.com/fare2u',
      'https://twitter.com/fare2u',
      'https://www.linkedin.com/company/fare2u',
    ],
  }

  // Website Schema with Sitelinks SearchBox
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fare2U',
    alternateName: 'Fare2U Farm Management Software',
    url: 'https://fare2u.com',
    description:
      'Professional farm business management software for livestock, cattle, dairy, and poultry operations.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://fare2u.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://fare2u.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Features',
        item: 'https://fare2u.com/#features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pricing',
        item: 'https://fare2u.com/#pricing',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Documentation',
        item: 'https://fare2u.com/documentation',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Help Center',
        item: 'https://fare2u.com/help',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Support',
        item: 'https://fare2u.com/support',
      },
    ],
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this really a one-time payment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You pay $99 once and own Fare2U forever. No monthly fees, no recurring charges, no hidden costs. You get lifetime access to the software and all its features.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of livestock are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fare2U supports all common livestock: cattle, sheep, goats, pigs, chickens, ducks, horses, rabbits, and more. You can also add custom animal types. The system is flexible and adapts to any farming operation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need hosting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Fare2U runs on your own domain and hosting. We provide VPS hosting for just $7/month (optional), or you can use your existing hosting provider. Free installation service is included with every purchase.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it suitable for small farms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Absolutely! Fare2U scales from 10 animals to 10,000+. Whether you're a hobby farmer with a few chickens or managing a large commercial operation, Fare2U adapts to your needs. Start small and grow without limitations.",
        },
      },
      {
        '@type': 'Question',
        name: 'What languages are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Fare2U is currently available in English, Spanish, French, Portuguese, and Arabic. We're actively adding more languages based on user requests. The interface is fully translatable, and we welcome community translations.",
        },
      },
    ],
  }

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Fare2U Farm Management Software',
    description:
      'Professional farm business management software for livestock, cattle, dairy, and poultry. Complete herd management system with farm record keeping, crop planning, and agricultural management solutions.',
    image: 'https://fare2u.com/og-image.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Fare2U',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://fare2u.com',
      priceCurrency: 'USD',
      price: '99',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: {
        '@type': 'Organization',
        name: 'Fare2U',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '11280',
      bestRating: '5',
      worstRating: '1',
    },
    category: 'Farm Management Software',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  )
}
