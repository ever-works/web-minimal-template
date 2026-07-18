/**
 * Single source of truth for the site's brand + marketing copy.
 *
 * Edit this file (by hand or via Ever Works AI generation) to turn the template
 * into a real product/landing site — every section reads from here.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  /** Icon name understood by src/components/Icon.astro. */
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
}

export const siteConfig = {
  name: 'Acme',
  domain: 'acme.com',
  url: import.meta.env.SITE_URL || 'https://acme.com',
  tagline: 'Ship your idea in days, not months.',
  description:
    'Acme is the all-in-one platform that helps modern teams launch faster, stay in sync, and delight their customers.',
  nav: [
    { label: 'Features', href: '/#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' }
  ] as NavItem[],
  cta: { label: 'Get started', href: '/contact' },
  hero: {
    badge: 'New — v2 is here',
    title: 'The fastest way to',
    highlight: 'launch your product',
    subtitle:
      'Everything you need to build, ship, and grow — beautifully designed, blazing fast, and ready on day one.',
    primary: { label: 'Get started free', href: '/contact' },
    secondary: { label: 'See how it works', href: '/#how-it-works' }
  },
  logos: ['Northwind', 'Globex', 'Umbrella', 'Initech', 'Hooli', 'Soylent'],
  features: {
    eyebrow: 'Why teams choose us',
    title: 'Everything you need, nothing you don’t',
    subtitle:
      'A thoughtfully designed toolkit that gets out of your way so you can focus on shipping.',
    items: [
      {
        icon: 'zap',
        title: 'Lightning fast',
        description: 'Built on a modern stack for instant loads and a snappy experience everywhere.'
      },
      {
        icon: 'shield',
        title: 'Secure by default',
        description: 'Best-practice security baked in, so your data and your customers stay protected.'
      },
      {
        icon: 'sparkles',
        title: 'Delightful design',
        description: 'A polished, accessible interface your users will actually enjoy using.'
      },
      {
        icon: 'chart',
        title: 'Insightful analytics',
        description: 'Understand what matters with clear, actionable metrics out of the box.'
      },
      {
        icon: 'puzzle',
        title: 'Integrates with everything',
        description: 'Connect the tools you already love with a flexible, open integration layer.'
      },
      {
        icon: 'headphones',
        title: 'Human support',
        description: 'Real people, ready to help. We’re with you from first launch to full scale.'
      }
    ] as Feature[]
  },
  steps: {
    eyebrow: 'How it works',
    title: 'Launch in three simple steps',
    subtitle: 'From zero to live in an afternoon — no complicated setup required.',
    items: [
      { title: 'Create your account', description: 'Sign up in seconds and set up your workspace.' },
      { title: 'Make it yours', description: 'Customize everything to match your brand and workflow.' },
      { title: 'Go live', description: 'Publish with one click and start delighting your customers.' }
    ]
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Simple, transparent pricing',
    subtitle: 'Start free. Upgrade when you’re ready. No surprises.',
    plans: [
      {
        name: 'Starter',
        price: '$0',
        period: '/mo',
        description: 'For individuals getting started.',
        features: ['Up to 3 projects', 'Community support', 'Basic analytics'],
        cta: { label: 'Start free', href: '/contact' }
      },
      {
        name: 'Pro',
        price: '$29',
        period: '/mo',
        description: 'For growing teams that need more.',
        features: ['Unlimited projects', 'Priority support', 'Advanced analytics', 'Custom domain'],
        cta: { label: 'Start free trial', href: '/contact' },
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For organizations at scale.',
        features: ['Everything in Pro', 'SSO & SAML', 'Dedicated success manager', 'SLA & audit logs'],
        cta: { label: 'Contact sales', href: '/contact' }
      }
    ] as PricingPlan[]
  },
  testimonials: {
    eyebrow: 'Loved by teams',
    title: 'Don’t just take our word for it',
    items: [
      {
        quote: 'We shipped our new site in a single afternoon. It genuinely changed how fast we move.',
        author: 'Jordan Rivera',
        role: 'Founder, Northwind'
      },
      {
        quote: 'The best developer experience we’ve had. Everything just works, and it looks incredible.',
        author: 'Sam Chen',
        role: 'CTO, Globex'
      },
      {
        quote: 'Our conversion rate jumped 30% after switching. The design does the selling for us.',
        author: 'Priya Nair',
        role: 'Head of Growth, Initech'
      }
    ]
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Do I need a credit card to start?',
        answer: 'No. You can start on the free plan and upgrade whenever you’re ready.'
      },
      {
        question: 'Can I use my own domain?',
        answer: 'Yes — custom domains are supported on the Pro plan and above.'
      },
      {
        question: 'How does support work?',
        answer: 'Every plan includes support. Pro and Enterprise get priority and dedicated help.'
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Absolutely. There are no long-term contracts — cancel with one click.'
      }
    ]
  },
  finalCta: {
    title: 'Ready to get started?',
    subtitle: 'Join thousands of teams building faster with Acme. It’s free to begin.',
    primary: { label: 'Get started free', href: '/contact' }
  },
  footer: {
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/#features' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Changelog', href: '/blog' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' }
        ]
      }
    ],
    social: [
      { label: 'X', href: 'https://x.com' },
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' }
    ],
    legal: `© ${new Date().getFullYear()} Acme, Inc. All rights reserved.`
  }
};

export type SiteConfig = typeof siteConfig;
