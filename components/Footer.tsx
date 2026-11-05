import Image from 'next/image'
import Link from 'next/link'
import { NAV, OFFICE, SITE } from '@/lib/content'
import { Phone, Pin, WhatsApp } from './Icons'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <Image src="/img/logo.svg" alt="" width={34} height={54} unoptimized style={{ width: 34, height: "auto" }} />
            <div>
              <b>{SITE.name}</b>
              <span>Microcirurgia · Cirurgia da mão · Plástica reconstrutora</span>
              <span>{SITE.crm}</span>
            </div>
          </div>
          <div className="ft-col">
            <h4>Consultório</h4>
            <p>{OFFICE.street}<br />{OFFICE.area} · {OFFICE.city}-{OFFICE.uf}</p>
            <a className="ft-l" href={OFFICE.map} target="_blank" rel="noopener"><Pin /><span>Como chegar</span></a>
          </div>
          <div className="ft-col">
            <h4>Contato</h4>
            <a className="ft-l" href={`tel:${OFFICE.tel}`}><Phone /><span>{OFFICE.phone}</span></a>
            <a className="ft-l" href={`https://wa.me/${OFFICE.wa}`} target="_blank" rel="noopener"><WhatsApp /><span>{OFFICE.waLabel}</span></a>
          </div>
          <div className="ft-col">
            <h4>Site</h4>
            {NAV.slice(0, 4).map(([t, h]) => (
              <Link key={h} className="ft-l" href={h}><span>{t}</span></Link>
            ))}
          </div>
        </div>
        <p className="ft-copy">© 2026 {SITE.name} · Todos os direitos reservados</p>
        <p className="ft-made">
          Feito com <span aria-label="amor" role="img">❤️</span> por{' '}
          <a href="https://luminacompany.com/" target="_blank" rel="noopener">Lumina</a>
        </p>
      </div>
    </footer>
  )
}
