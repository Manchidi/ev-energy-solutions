import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'lime' | 'ghost'

type Props = {
  to?: string
  href?: string
  variant?: Variant
  small?: boolean
  arrow?: boolean
  children: ReactNode
  onClick?: () => void
}

/** Pill button with an optional arrow bubble, used for every call to action. */
export default function Button({
  to,
  href,
  variant = 'primary',
  small,
  arrow,
  children,
  onClick,
}: Props) {
  const className = ['btn', `btn--${variant}`, small ? 'btn--sm' : ''].filter(Boolean).join(' ')

  const inner = (
    <>
      {children}
      {arrow && (
        <span className="btn__dot" aria-hidden="true">
          →
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a className={className} href={href} onClick={onClick}>
        {inner}
      </a>
    )
  }

  return (
    <Link className={className} to={to ?? '/'} onClick={onClick}>
      {inner}
    </Link>
  )
}
