type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const HomeIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M10 21v-6h4v6" />
  </svg>
)

export const BuildingIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 21V6l8-3v18" />
    <path d="M12 21h8V10l-8-3" />
    <path d="M7 9h1M7 13h1M7 17h1M16 12h1M16 16h1" />
  </svg>
)

export const GlobeIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
  </svg>
)

export const TruckIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 17h2l1.5-5h11L19 17h2" />
    <circle cx="7.5" cy="19" r="1.6" />
    <circle cx="16.5" cy="19" r="1.6" />
    <path d="M12 3v6" />
    <path d="m9.5 6.5 2.5 2.5 2.5-2.5" />
  </svg>
)

export const BoltIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>
)

export const SunIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
)

export const BatteryIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="7" width="16" height="10" rx="2.5" />
    <path d="M21 10.5v3" />
    <path d="M7 11v2M11 11v2M15 11v2" />
  </svg>
)

export const ShieldIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3l7 3v5.5c0 4.4-3 8-7 9.5-4-1.5-7-5.1-7-9.5V6l7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const PinIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 21s-7-5.6-7-11a7 7 0 1 1 14 0c0 5.4-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const MailIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
)

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 3.5h3l2 5-2.2 1.6a12 12 0 0 0 5.6 5.6l1.6-2.2 5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.2 5.7A2 2 0 0 1 5 3.5Z" />
  </svg>
)
