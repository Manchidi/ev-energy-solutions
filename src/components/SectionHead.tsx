import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  /** Heading left, supporting copy in a second column on the right. */
  split?: boolean
  center?: boolean
}

export default function SectionHead({ eyebrow, title, body, split, center }: Props) {
  if (split) {
    return (
      <Reveal className="section-head section-head--split">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
        </div>
        {body && <p>{body}</p>}
      </Reveal>
    )
  }

  return (
    <Reveal className={center ? 'section-head section-head--center' : 'section-head'}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </Reveal>
  )
}
