import { useEffect } from 'react'

export default function useInlineScript(src) {
  useEffect(() => {
    const el = document.createElement('script')
    el.src = `${src}?v=${Date.now()}`
    document.body.appendChild(el)
    return () => el.remove()
  }, [src])
}
