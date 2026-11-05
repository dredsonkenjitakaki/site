'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Motion() {
  const path = usePathname()

  useEffect(() => {
    let dead = false
    let cleanup = () => {}
    import('@/lib/motion').then(async ({ initMotion }) => {
      const c = await initMotion()
      if (dead) c()
      else cleanup = c
    })
    // se a animação não carregar, o conteúdo aparece mesmo assim
    const t = window.setTimeout(() => {
      if (!(window as unknown as { __motion?: boolean }).__motion) document.documentElement.classList.remove('js')
    }, 6000)
    return () => {
      dead = true
      window.clearTimeout(t)
      cleanup()
    }
  }, [path])

  return null
}
