import Link from 'next/link'
import type { ReactNode } from 'react'
import { OFFICE } from '@/lib/content'
import Cta from './Cta'
import { Arrow, Instagram, Phone, Pin, WhatsApp } from './Icons'

export function PageHero({ crumb, title, lead, cta = true }: { crumb: [string, string][]; title: ReactNode; lead?: string; cta?: boolean }) {
  return (
    <section className="phero" data-first>
      <div className="wrap">
        <nav className="crumb" aria-label="Você está em">
          <Link href="/">Início</Link>
          {crumb.map(([t, h]) => (
            <span key={t}> / {h ? <Link href={h}>{t}</Link> : t}</span>
          ))}
        </nav>
        <h1 className="serif">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {cta && (
          <div className="ctas">
            <Cta className="btn btn-light"><WhatsApp /> Agendar consulta</Cta>
          </div>
        )}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="sec dark ct" id="contato">
      <div className="wrap">
        <div className="eyebrow" data-rv>Contato</div>
        <h2 className="serif" data-rv>Vamos conversar sobre <em>o seu caso.</em></h2>
        <p className="sub" data-rv>O agendamento é feito pela secretaria do consultório, pelo WhatsApp ou por telefone.</p>
        <div className="ctgrid" data-rv>
          <div className="ctbox">
            <div className="eyebrow">Consultório · {OFFICE.city}</div>
            <h3>{OFFICE.street}</h3>
            <p>{OFFICE.area} · {OFFICE.city}-{OFFICE.uf}</p>
            <p style={{ marginTop: 12 }}>Estacionamento no subsolo do prédio e em vários locais ao redor. Fica perto de hospitais e laboratórios de Londrina.</p>
            <a className="ctl" href={OFFICE.map} target="_blank" rel="noopener"><Pin /><span>Como chegar</span></a>
          </div>
          <div className="ctbox">
            <div className="eyebrow">Agendamento</div>
            <h3>{OFFICE.waLabel}</h3>
            <p>WhatsApp da secretaria {OFFICE.secretary}.</p>
            <Cta className="btn btn-light"><WhatsApp /> Agendar consulta</Cta>
            <a className="ctl" href={`tel:${OFFICE.tel}`}><Phone /><span>{OFFICE.phone}</span></a>
            <a className="ctl" href={OFFICE.instagram} target="_blank" rel="noopener"><Instagram /><span>{OFFICE.instagramHandle}</span></a>
          </div>
          <div className="ctbox">
            <div className="eyebrow">Horários de atendimento</div>
            <ul className="hours">
              {OFFICE.hours.map(([d, h]) => <li key={d}><span>{d}</span><b>{h}</b></li>)}
            </ul>
          </div>
          <div className="ctbox">
            <div className="eyebrow">Convênios</div>
            <ul className="hours">
              {OFFICE.insurance.map((c) => <li key={c}><span>{c}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CtaBand({ title, text }: { title: ReactNode; text: string }) {
  return (
    <section className="sec dark">
      <div className="wrap split">
        <div data-rv>
          <h2 className="serif">{title}</h2>
          <p className="mut" style={{ marginTop: 14 }}>{text}</p>
        </div>
        <div data-rv style={{ justifySelf: 'start' }}>
          <Cta className="btn btn-light"><WhatsApp /> Agendar consulta</Cta>
        </div>
      </div>
    </section>
  )
}

/* Convida quem quiser conhecer as cirurgias realizadas ao longo dos anos a seguir o Dr. no Instagram. */
export function InstaNote() {
  return (
    <p className="mut" style={{ marginTop: 14 }}>
      Reimplantes e cirurgias reconstrutivas de maior porte, realizadas ao longo dos anos, estão nas histórias do Instagram do Dr. Takaki, <a className="link" href={OFFICE.instagram} target="_blank" rel="noopener">{OFFICE.instagramHandle}</a>.
    </p>
  )
}

/* Marca visível de informação pendente de confirmação. Procure por "pend" antes de publicar. */
export const Pend = ({ children }: { children: ReactNode }) => (
  <span className="pend">[PENDENTE: {children}]</span>
)

export const MoreLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link className="link" href={href}>{children} <Arrow /></Link>
)
