import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import { WhatsApp } from '@/components/Icons'
import JsonLd from '@/components/JsonLd'
import Photo from '@/components/Photo'
import { ContactSection, PageHero } from '@/components/Sections'
import { ARTICLES, ARTICLE_BY_SLUG, SITE, SITE_URL } from '@/lib/content'

export const dynamicParams = false
export const generateStaticParams = () => ARTICLES.map((a) => ({ slug: a.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = ARTICLE_BY_SLUG[(await params).slug]
  if (!a) return {}
  return {
    title: `${a.title} | Dr. Edson Kenji Takaki, Londrina`,
    description: a.seoDesc,
    alternates: { canonical: `/patologias/${a.slug}` },
  }
}

export default async function Artigo({ params }: { params: Promise<{ slug: string }> }) {
  const a = ARTICLE_BY_SLUG[(await params).slug]
  if (!a) notFound()
  const others = ARTICLES.filter((x) => x.slug !== a.slug)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Patologias', item: `${SITE_URL}/patologias` },
      { '@type': 'ListItem', position: 3, name: a.title, item: `${SITE_URL}/patologias/${a.slug}` },
    ],
  }

  return (
    <>
      <JsonLd data={ld} />
      <main id="conteudo">
        <PageHero crumb={[['Patologias', '/patologias'], [a.title, '']]} title={a.title} lead={a.short} />
        <section className="sec">
          <div className="wrap art">
            <article>
              {a.img && (
                <figure className="fig r32" style={{ marginBottom: 40 }} data-rv>
                  <Photo k={a.img} alt={a.alt || ''} sizes="(max-width: 960px) 100vw, 720px" style={{ objectFit: a.slug === 'sindrome-do-tunel-cubital' ? 'contain' : 'cover', background: '#fff' }} />
                </figure>
              )}
              {a.blocks.map((b) => (
                <div key={b.h} data-rv>
                  <h2>{b.h}</h2>
                  {b.p?.map((t, i) => <p key={i}>{t}</p>)}
                  {b.ul && <ul>{b.ul.map((t) => <li key={t}>{t}</li>)}</ul>}
                </div>
              ))}
              {a.img2 && (
                <figure style={{ marginTop: 40 }} data-rv>
                  <div className="fig r43"><Photo k={a.img2} alt="Imagem cirúrgica ilustrativa" sizes="(max-width: 960px) 100vw, 720px" /></div>
                  <figcaption className="cap">Imagem cirúrgica ilustrativa.</figcaption>
                </figure>
              )}
              <p className="note">Este conteúdo é informativo e não substitui a consulta. O diagnóstico e o tratamento dependem da avaliação individual de cada paciente. {SITE.name}, {SITE.crm}.</p>
            </article>
            <aside className="aside">
              <div className="box">
                <h3>Tem dúvidas sobre o seu caso?</h3>
                <p>Converse com a secretaria do consultório e agende uma avaliação.</p>
                <Cta className="btn btn-solid"><WhatsApp /> Agendar consulta</Cta>
              </div>
              <div className="box rel">
                <h3>Outras condições</h3>
                {others.slice(0, 5).map((o) => (
                  <Link key={o.slug} href={`/patologias/${o.slug}`}>{o.title}</Link>
                ))}
                <Link href="/patologias" style={{ color: 'var(--cobalt)', fontWeight: 700 }}>Ver todas</Link>
              </div>
            </aside>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
