import { useEffect } from 'react'

/** Sets the document title and meta description for a page. */
export default function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    if (!description) return

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    tag.content = description
  }, [title, description])
}
