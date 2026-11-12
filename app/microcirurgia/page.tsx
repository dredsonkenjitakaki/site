import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Photo from '@/components/Photo'
import Cta from '@/components/Cta'
import { WhatsApp } from '@/components/Icons'
import { ContactSection, InstaNote, PageHero } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Microcirurgia e reimplantes | Dr. Edson Kenji Takaki, Londrina',
  description: 'Reimplantes, cirurgia reconstrutiva e traumas complexos: entenda como funciona a microcirurgia, feita sob microscópio cirúrgico, e quando procurar um microcirurgião. Dr. Edson Kenji Takaki, Londrina.',
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
              <p>A microcirurgia reconstrutiva surgiu na década de 1970. Quando a operação exige uma imagem maior da região, o cirurgião opera sob o microscópio cirúrgico e passa a trabalhar em estruturas que o olho nu não alcança.</p>
              <p>Vasos e nervos pequenos são suturados com fios mais finos que um fio de cabelo. É esse nível de detalhe que torna possível reconstruir partes do corpo danificadas por acidentes, pela retirada de tumores ou por defeitos congênitos.</p>
            </div>
            <figure className="fig r45" data-rv>
              <Photo k="cirurgiao-microscopio" alt="Dr. Edson Kenji Takaki no centro cirúrgico, ao lado do microscópio" sizes="(max-width: 960px) 100vw, 480px" par style={{ height: '112%', objectPosition: '50% 30%' }} />
            </figure>
          </div>
        </section>

        <section className="sec frost" id="reimplante">
          <div className="wrap split">
            <div data-rv>
              <div className="eyebrow">Reimplante</div>
              <h2 className="serif">O que é <em>um reimplante.</em></h2>
              <p>Reimplante é a cirurgia que recoloca no lugar uma parte do corpo separada por acidente, como um dedo, a mão, parte do braço ou o pé. Sob o microscópio, o cirurgião fixa o osso e reconecta tendões, artérias, veias e nervos.</p>
              <p style={{ marginTop: 14 }}>A cirurgia é longa e depende de cada caso. O objetivo é restabelecer o máximo de função possível, e o resultado varia em cada caso. Nem toda amputação permite o reimplante: a avaliação médica é que define.</p>
              <InstaNote />
            </div>
            <div className="card" data-rv>
              <h3>O que a equipe avalia</h3>
              <ul className="bul">
                <li>O tipo de lesão: corte limpo, esmagamento ou arrancamento</li>
                <li>O estado da parte que foi separada</li>
                <li>As condições gerais de saúde do paciente</li>
                <li>O tempo entre o acidente e o atendimento</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sec" id="reconstrucao">
          <div className="wrap">
            <div className="eyebrow" data-rv>Cirurgia reconstrutiva</div>
            <h2 className="serif" style={{ margin: '14px 0 12px' }} data-rv>Quando falta nervo, vaso <em>ou pele</em></h2>
            <p className="mut" style={{ maxWidth: '38em', marginBottom: 28 }} data-rv>Depois de acidentes, da retirada de tumores ou de malformações de nascimento, pode faltar um segmento de nervo, de osso, de vasos ou de pele. A microcirurgia permite reconstruir a região, e a técnica escolhida depende de cada caso e é definida na consulta.</p>
            <div className="two">
              <div className="card" data-rv>
                <h3>Nervos, vasos e osso</h3>
                <p className="mut">Um segmento de nervo pode ser substituído por um enxerto. Quando o problema é a falta de osso ou de circulação, tecidos de outra região podem ser levados com seus vasos e conectados sob ampliação, para que a área receba sangue.</p>
              </div>
              <div className="card" data-rv>
                <h3>Cobertura de áreas sem pele</h3>
                <p className="mut">Quando há perda de pele com exposição do osso, às vezes é preciso levar pele de outra região do corpo, junto com seus vasos. Eles são costurados sob microscópio no local do defeito, para que o tecido receba sangue.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec frost" id="quando-procurar">
          <div className="wrap split">
            <div data-rv>
              <div className="eyebrow">Quando procurar</div>
              <h2 className="serif">Quando procurar <em>um microcirurgião.</em></h2>
              <p>Em lesões graves da mão e dos membros, quanto antes houver avaliação, mais opções o médico tem. Em caso de dúvida, entre em contato com o consultório.</p>
            </div>
            <div className="card" data-rv>
              <h3>Situações que pedem avaliação</h3>
              <ul className="bul">
                <li>Perda ou amputação de dedo, mão, braço ou pé</li>
                <li>Lesão por esmagamento ou por máquina</li>
                <li>Ferida profunda com perda de movimento ou de sensibilidade</li>
                <li>Perda de pele com osso, tendão ou nervo à mostra</li>
                <li>Ferida que não fecha depois de um trauma</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sec dark" id="amputacao">
          <div className="wrap split">
            <div data-rv>
              <div className="eyebrow">Em caso de amputação</div>
              <h2 className="serif">O que fazer <em>nos primeiros minutos.</em></h2>
              <p>Se uma parte do corpo foi amputada, ligue para o SAMU (192) ou vá ao pronto-socorro mais próximo e avise que se trata de uma amputação. Leve a parte amputada junto.</p>
              <div style={{ marginTop: 22 }}>
                <Cta className="btn btn-light" text="Olá! Preciso de orientação sobre uma lesão grave na mão ou em um membro."><WhatsApp /> Falar pelo WhatsApp</Cta>
              </div>
            </div>
            <div className="card" data-rv>
              <h3>Primeiros socorros</h3>
              <ul className="bul">
                <li>Não dê comida nem água ao paciente, porque ele provavelmente será submetido a anestesia geral.</li>
                <li>Não faça garrote. Comprima o local com um pano limpo.</li>
                <li>Coloque a parte amputada, do jeito que foi encontrada, em um saco plástico bem fechado e depois em um recipiente com gelo (isopor).</li>
                <li>Chame o SAMU.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sec">
          <div className="wrap">
            <div className="eyebrow" data-rv>Equipamento</div>
            <h2 className="serif" style={{ margin: '14px 0 12px' }} data-rv>Microscópio <em>cirúrgico</em></h2>
            <p className="mut" style={{ maxWidth: '38em' }} data-rv>As cirurgias são feitas sob microscópio, que aumenta a imagem em cerca de 80 vezes.</p>
            <div className="two" style={{ marginTop: 36 }}>
              <figure data-rv>
                <div className="fig r43">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/img/hero-1200.webp" srcSet="/img/hero-800.webp 800w, /img/hero-1200.webp 1200w" sizes="(max-width: 960px) 100vw, 560px" width={2506} height={1904} alt="Dr. Edson Kenji Takaki operando sob o microscópio cirúrgico" loading="lazy" decoding="async" />
                </div>
                <figcaption className="cap">Dr. Takaki operando sob o microscópio cirúrgico.</figcaption>
              </figure>
              <figure data-rv>
                <div className="fig r43"><Photo k="microsutura" alt="Sutura sob microscópio em cirurgia reconstrutiva" sizes="(max-width: 960px) 100vw, 560px" /></div>
                <figcaption className="cap">Exemplo de microcirurgia reconstrutiva. Imagem cirúrgica.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="sec dark">
          <div className="wrap split">
            <div data-rv>
              <div className="eyebrow">Formação</div>
              <h2 className="serif">Uma técnica que exige <em>formação longa.</em></h2>
            </div>
            <div data-rv>
              <p>A microcirurgia tem uma curva de aprendizado longa. A formação do especialista leva vários anos e exige muita experiência cirúrgica.</p>
              <p style={{ marginTop: 14 }}>Sob o microscópio a escala de trabalho é outra: o que se vê e o que as mãos fazem, com instrumentos e fios muito pequenos, precisam andar juntos. A cirurgia pede paciência e muita concentração, e por isso costuma ser mais demorada.</p>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
