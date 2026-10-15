import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ToTop from './ToTop'

// The original theme scripts (menu highlighting, mobile nav, counters, slideshow, TradingView)
// are plain JS that expects the page to be in the DOM, so they are re-run after every route change.
export default function Layout() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  useEffect(() => {
    document.body.classList.add('loaded')
    let cancelled = false
    const added = []
    const stamp = Date.now()
    const srcs = [
      ...(pathname === '/' ? ['/js/vendors/tradingview-widget.min.js'] : []),
      '/js/utilities.min.js',
      '/js/config-theme.js',
    ]
    ;(async () => {
      for (const s of srcs) {
        if (cancelled) return
        await new Promise((res) => {
          const el = document.createElement('script')
          el.src = `${s}?v=${stamp}`
          el.onload = el.onerror = res
          document.body.appendChild(el)
          added.push(el)
        })
      }
    })()
    return () => { cancelled = true; added.forEach((e) => e.remove()) }
  }, [pathname])

  // links inside the mobile full-screen menu are cloned by the theme script, so route them here
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('#modal-full a[href^="/"]')
      if (!a || a.getAttribute('href').startsWith('//')) return
      e.preventDefault()
      try { window.UIkit.modal('#modal-full').hide() } catch (_) {}
      navigate(a.getAttribute('href'))
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [navigate])

  return (
    <>
      <div className="page-loader"><div></div><div></div><div></div></div>
      <Header />
      <Outlet />
      <Footer />
      <ToTop />
    </>
  )
}
