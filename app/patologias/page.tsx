import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Arrow } from '@/components/Icons'
import { ContactSection, PageHero } from '@/components/Sections'
import { ARTICLES, FOCUS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Lesões e patologias da mão | Dr. Edson Kenji Takaki, Londrina',
  description: 'Síndrome do túnel do carpo, dedo em gatilho, De Quervain, dedo em martelo e outras condições da mão, do punho e do antebraço tratadas pelo Dr. Edson Kenji Takaki, em Londrina.',
  alternates: { canonical: '/patologias' },
}

export default function Patologias() {
  return (
    <>
      <main id="conteudo">
        <PageHero
          crumb={[['Patologias', '']]}
          title={<>Lesões e <em>patologias</em> da mão</>}
          lead="A formação do Dr. Takaki é em cirurgia da mão e microcirurgia. Ele trata, de forma clínica ou cirúrgica, as doenças da mão, do punho e do antebraço, e também problemas dos nervos periféricos, seja qual for a localização."
        />
        <section className="sec">
          <div className="wrap">
            <div className="eyebrow" data-rv>Áreas de atuação</div>
            <ul className="chips" data-rv>
              {FOCUS.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <h2 className="serif" style={{ margin: '56px 0 0' }} data-rv>Entenda cada <em>condição</em></h2>
            <p className="mut" style={{ maxWidth: '36em', marginTop: 12 }} data-rv>Os textos abaixo explicam, em linguagem simples, o que cada condição significa. Eles não substituem a avaliação médica. São as condições mais frequentes no consultório. Os casos de maior complexidade, como reimplantes e cirurgias reconstrutivas, estão no Instagram do Dr. Takaki, @dredsonkenjitakaki.</p>
            <div className="idx" data-rv>
              {ARTICLES.map((a, i) => (
                <Link key={a.slug} href={`/patologias/${a.slug}`}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <div><h3>{a.title}</h3><p>{a.short}</p></div>
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
