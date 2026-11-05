'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cta from './Cta'
import { WhatsApp } from './Icons'

// Barra fixa de agendamento no celular: aparece depois da primeira seção
export default function MobileBar() {
  const path = usePathname()
  const [on, setOn] = useState(false)

  useEffect(() => {
    const first = document.querySelector<HTMLElement>('[data-first]')
    let limit = 300
    const measure = () => { if (first) limit = first.offsetHeight * 0.5 }
    const f = () => setOn(window.scrollY > limit)
    measure()
    f()
    window.addEventListener('scroll', f, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('scroll', f)
      window.removeEventListener('resize', measure)
    }
  }, [path])

  return (
    <Cta className={'mbar' + (on ? ' on' : '')} id="mbar">
      <WhatsApp /> Agendar consulta
    </Cta>
  )
}
