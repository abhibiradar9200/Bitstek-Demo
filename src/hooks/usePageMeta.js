import { useEffect } from 'react'

export default function usePageMeta(title, description) {
  useEffect(() => {
    const m = document.querySelector('meta[name="description"]')
    if (m && description) m.setAttribute('content', description)
  }, [description])
}