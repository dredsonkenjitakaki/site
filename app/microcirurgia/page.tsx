import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Photo from '@/components/Photo'
import { ContactSection, PageHero } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Microcirurgia reconstrutiva | Dr. Edson Kenji Takaki, Londrina',
  description: 'Entenda como funciona a microcirurgia reconstrutiva, feita com lupas e microscópio cirúrgico, e em quais situações ela é indicada. Dr. Edson Kenji Takaki, Londrina.',
  alternates: { canonical: '/microcirurgia' },
}

export default function Microcirurgia() {
  return (
    <>
      <main id="conteudo">
        <PageHero
          crumb={[['Microcirurgia', '']]}
          title={<>Microcirurgia: quando a vista <em>não alcança</em></>}
          lead="Uma técnica que amplia o campo operado para trabalhar em estruturas muito pequenas, como vasos e nervos."
        />

        <section className="sec">
          <div className="wrap split">
            <div data-rv>
              <div className="eyebrow">O que é</div>
              <h2 className="serif">Cirurgia sob <em>ampliação.</em></h2>
              <p>A microcirurgia reconstrutiva surgiu na década de 1970. Quando a operação exige uma imagem maior da região, o cirurgião usa lupas ou um microscópio cirúrgico, e passa a trabalhar em estruturas que o olho nu não alcança.</p>
              <p>Vasos e nervos pequenos são suturados com fios mais finos que um fio de cabelo. É esse nível de detalhe que torna possível reconstruir partes do corpo danificadas por acidentes, pela retirada de tumores ou por defeitos congênitos.</p>
            </div>
            <figure className="fig r45" data-rv>
              <Photo k="cirurgiao-microscopio" alt="Dr. Edson Kenji Takaki no centro cirúrgico, com lupa e microscópio" sizes="(max-width: 960px) 100vw, 480px" par style={{ height: '112%', objectPosition: '50% 30%' }} />
            </figure>
          </div>
        </section>

        <section className="sec frost">
          <div className="wrap">
            <div className="eyebrow" data-rv>Quando é usada</div>
            <h2 className="serif" style={{ margin: '14px 0 28px' }} data-rv>Situações em que a técnica <em>faz diferença</em></h2>
            <div className="two">
              <div className="card" data-rv>
                <h3>Reimplante e reconstrução</h3>
                <p className="mut">Em casos como a perda de um dedo, é preciso reconstruir vasos, veias e artérias muito pequenos, o que só é possível sob ampliação. A técnica também é indicada para quem perdeu um segmento de nervo, pele ou osso na mão, no antebraço ou na perna.</p>
              </div>
              <div className="card" data-rv>
                <h3>Cobertura de áreas sem pele</h3>
                <p className="mut">Quando há perda de pele com exposição do osso, às vezes é preciso levar pele de outra região do corpo, junto com seus vasos. Eles são costurados sob microscópio no local do defeito, para que o tecido receba sangue.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="eyebrow" data-rv>Equipamentos</div>
            <h2 className="serif" style={{ margin: '14px 0 12px' }} data-rv>Lupa cirúrgica e <em>microscópio</em></h2>
            <p className="mut" style={{ maxWidth: '38em' }} data-rv>Dois tipos de equipamento podem ser usados para ampliar a visão, conforme a cirurgia. O microscópio chega a aumentar a imagem em cerca de 20 vezes.</p>
            <div className="gal" style={{ marginTop: 36 }}>
              <figure data-rv>
                <div className="fig"><Photo k="hero" alt="Dr. Takaki operando com lupa cirúrgica" sizes="(max-width: 960px) 100vw, 380px" /></div>
                <figcaption className="cap">Lupa cirúrgica</figcaption>
              </figure>
              <figure data-rv>
                <div className="fig"><Photo k="centro-cirurgico" alt="Centro cirúrgico com microscópio cirúrgico" sizes="(max-width: 960px) 100vw, 380px" /></div>
                <figcaption className="cap">Microscópio cirúrgico no centro cirúrgico</figcaption>
              </figure>
              <figure data-rv>
                <div className="fig"><Photo k="microscopio-visao" alt="Pinças vistas sob ampliação do microscópio" sizes="(max-width: 960px) 100vw, 380px" /></div>
                <figcaption className="cap">Visão ampliada</figcaption>
              </figure>
            </div>
            <figure style={{ marginTop: 28, maxWidth: 560 }} data-rv>
              <div className="fig r43"><Photo k="microsutura" alt="Sutura sob microscópio em cirurgia reconstrutiva" sizes="(max-width: 960px) 100vw, 560px" /></div>
              <figcaption className="cap">Exemplo de microcirurgia reconstrutiva. Imagem cirúrgica.</figcaption>
            </figure>
          </div>
        </section>

        <section className="sec dark">
          <div className="wrap split">
            <div data-rv>
              <div className="eyebrow">Evolução</div>
              <h2 className="serif">Por que há <em>poucos centros</em> no Brasil.</h2>
            </div>
            <div data-rv>
              <p>A microcirurgia tem uma curva de aprendizado longa. A formação do especialista leva vários anos e exige muita experiência cirúrgica.</p>
              <p style={{ marginTop: 14 }}>A operação acontece em outra escala de magnificação, e isso pede coordenação entre o que se vê no microscópio e o trabalho das mãos com instrumentos e fios muito pequenos. Também exige paciência, e por isso o procedimento costuma ser mais demorado. Os equipamentos são sofisticados, o que limita a oferta da técnica.</p>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
