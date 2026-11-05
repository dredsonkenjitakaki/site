import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { ContactSection, PageHero } from '@/components/Sections'
import { POST, PRE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Orientações pré e pós-operatório | Dr. Edson Kenji Takaki, Londrina',
  description: 'Orientações do consultório do Dr. Edson Kenji Takaki para antes, no dia e depois da cirurgia da mão: jejum, exames, curativos, posição do membro e exercícios.',
  alternates: { canonical: '/orientacoes' },
}

export default function Orientacoes() {
  return (
    <>
      <main id="conteudo">
        <PageHero
          crumb={[['Orientações', '']]}
          title={<>Orientações para <em>antes e depois</em> da cirurgia</>}
          lead="Um resumo das orientações do consultório. Em caso de dúvida, fale com a secretaria antes de qualquer decisão."
        />

        <section className="sec">
          <div className="wrap">
            <div className="eyebrow" data-rv>Pré-operatório</div>
            <h2 className="serif" style={{ margin: '14px 0 28px' }} data-rv>Antes da cirurgia e <em>no dia</em></h2>
            <div className="two">
              <div className="card" data-rv>
                <h3>Antes da cirurgia</h3>
                <ol className="ol">{PRE.before.map((t) => <li key={t}>{t}</li>)}</ol>
              </div>
              <div className="card" data-rv>
                <h3>No dia da cirurgia</h3>
                <ol className="ol">{PRE.day.map((t) => <li key={t}>{t}</li>)}</ol>
              </div>
            </div>
          </div>
        </section>

        <section className="sec frost">
          <div className="wrap">
            <div className="eyebrow" data-rv>Pós-operatório</div>
            <h2 className="serif" style={{ margin: '14px 0 28px' }} data-rv>Cuidados <em>depois da cirurgia</em></h2>
            <div className="two">
              {POST.map((b) => (
                <div className="card" key={b.h} data-rv>
                  <h3>{b.h}</h3>
                  {b.p?.map((t) => <p className="mut" key={t}>{t}</p>)}
                  {b.ul && <ol className="ol">{b.ul.map((t) => <li key={t}>{t}</li>)}</ol>}
                </div>
              ))}
            </div>
            <p className="note" data-rv>Estas orientações são gerais. Siga sempre as instruções específicas entregues pela equipe para o seu caso.</p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
