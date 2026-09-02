import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  as?: ElementType
  className?: string
  id?: string
  style?: React.CSSProperties
}

/** Fades content in once it scrolls into view. Falls back to visible without IO support. */
export default function Reveal({ children, as: Tag = 'div', className = '', id, style }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      style={style}
      className={['reveal', shown ? 'is-in' : '', className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  )
}
