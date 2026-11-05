'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NAV } from '@/lib/content'
import Cta from './Cta'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [sheet, setSheet] = useState(false)

  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('sheet-open', sheet)
    return () => document.body.classList.remove('sheet-open')
  }, [sheet])

  useEffect(() => {
    if (!sheet) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setSheet(false)
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [sheet])

  return (
    <>
      <header className={'hdr' + (solid ? ' solid' : '')} id="hdr">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="Dr. Edson Kenji Takaki, página inicial">
            <Image src="/img/logo.svg" alt="" width={30} height={48} priority unoptimized style={{ width: 30, height: "auto" }} />
            <div>
              <b>Dr. Edson Kenji Takaki</b>
              <span>Cirurgia da mão e microcirurgia</span>
            </div>
          </Link>
          <nav className="nav" aria-label="Principal">
            {NAV.map(([t, h]) => (
              <Link key={h} className="nl" href={h}>{t}</Link>
            ))}
            <Cta className="btn btn-light">Agendar consulta</Cta>
          </nav>
          <button className="burger" aria-label="Abrir menu" aria-expanded={sheet} aria-controls="sheet" onClick={() => setSheet(true)}>
            <i />
          </button>
        </div>
      </header>
      <div className="sheet-ov" onClick={() => setSheet(false)} />
      <aside className="sheet" id="sheet" aria-label="Menu" aria-hidden={!sheet}>
        <button className="sheet-x" aria-label="Fechar menu" onClick={() => setSheet(false)}>×</button>
        {NAV.map(([t, h]) => (
          <Link key={h} className="nl" href={h} onClick={() => setSheet(false)}>{t}</Link>
        ))}
        <Cta className="btn btn-light" onClick={() => setSheet(false)}>Agendar consulta</Cta>
      </aside>
    </>
  )
}
