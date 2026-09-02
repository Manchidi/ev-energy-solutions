/**
 * Single place for the details that appear all over the site.
 *
 * TODO before launch: fill in `email` and `phone`. They are intentionally left
 * blank, so the site renders a visible "[add …]" placeholder so nothing invented
 * goes live by accident.
 */
type Site = {
  name: string
  tagline: string
  blurb: string
  city: string
  website: string
  websiteUrl: string
  email: string
  phone: string
  formEndpoint: string
}

export const site: Site = {
  name: 'EV Energy Solutions',
  tagline: 'Powering the next generation of mobility',
  blurb:
    'A South African clean-technology company building and operating EV charging infrastructure and intelligent energy storage.',
  city: 'Pretoria, South Africa',
  website: 'evenergysolutions.co.za',
  websiteUrl: 'https://evenergysolutions.co.za',
  email: '',
  phone: '',
  /** Form handler URL (Formspree, Netlify Forms, your own endpoint). Empty = not connected yet. */
  formEndpoint: '',
}

export const footerNav = [
  {
    heading: 'Company',
    links: [
      { to: '/about', label: 'About us' },
      { to: '/about#partnership', label: 'Partnership' },
      { to: '/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { to: '/solutions#infrastructure', label: 'Charging infrastructure' },
      { to: '/solutions#highway-fleet', label: 'Highway & fleet' },
      { to: '/solutions#energy', label: 'Energy management' },
      { to: '/solutions#software', label: 'Software & billing' },
    ],
  },
  {
    heading: 'Chargers',
    links: [
      { to: '/chargers#ac', label: 'AC 7-43 kW' },
      { to: '/chargers#dc', label: 'DC 20-240 kW' },
      { to: '/chargers#ultra', label: 'Ultra-fast 240-720 kW' },
      { to: '/chargers#standards', label: 'Standards & certification' },
    ],
  },
] as const
