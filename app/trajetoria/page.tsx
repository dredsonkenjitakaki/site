import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Photo from '@/components/Photo'
import { ContactSection, PageHero } from '@/components/Sections'
import { PRESS, SITE, VIDEOS } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Trajetória | Dr. Edson Kenji Takaki, Londrina',
  description: 'A trajetória do Dr. Edson Kenji Takaki: formação na UEL, especialização na Universidade de Tóquio, retorno a Londrina em 1987 e atuação em microcirurgia e cirurgia da mão.',
  alternates: { canonical: '/trajetoria' },
}

export default function Trajetoria() {
  return (
    <>
      <main id="conteudo">
        <PageHero
          crumb={[['Trajetória', '']]}
          title={<>Contexto e trajetória do <em>Dr. Takaki</em></>}
          lead={`${SITE.name} · ${SITE.crm} · ${SITE.rqe.map((r) => `RQE ${r.n} (${r.esp})`).join(' · ')}`}
          cta={false}
        />

        <section className="sec">
          <div className="wrap split">
            <figure className="fig r45" data-rv>
              <Photo k="retrato" alt="Retrato do Dr. Edson Kenji Takaki" sizes="(max-width: 960px) 100vw, 480px" par style={{ height: '112%', objectPosition: '50% 18%' }} />
            </figure>
            <div data-rv>
              <div className="eyebrow">Formação</div>
              <h2 className="serif">Um interesse que <em>começou na faculdade.</em></h2>
              <p>O Dr. Takaki se formou na Universidade Estadual de Londrina e é membro da {SITE.societyFull} ({SITE.society}). Desde estudante, gostava de acompanhar trabalhos sobre cirurgia da mão e de ler sobre microcirurgia.</p>
              <p>Naquela época, a área era pouco conhecida, e em Londrina e região ninguém realizava esses procedimentos. Poucos centros no mundo desenvolviam a técnica, e o acesso aos trabalhos publicados era difícil.</p>
            </div>
          </div>
        </section>

        <section className="sec dark">
          <div className="wrap split">
            <div data-rv>
              <div className="eyebrow">Tóquio</div>
              <h2 className="serif">Três anos <em>no Japão.</em></h2>
              <p>Em 1984, ele ganhou uma bolsa do governo japonês para estudar na Universidade de Tóquio. Ali permaneceu por três anos, especializando-se em cirurgia plástica reconstrutora, cirurgia da mão e microcirurgia.</p>
              <p style={{ marginTop: 14 }}>Recebeu convites para ficar no Japão, mas voltou por um compromisso com o Hospital Evangélico, que o acolheu desde a época de estudante.</p>
              <div className="tl">
                <div><b>1984</b><span>Bolsa do governo japonês<small>Universidade de Tóquio</small></span></div>
                <div><b>1987</b><span>Retorno a Londrina<small>Primeiras microcirurgias realizadas no Hospital Evangélico</small></span></div>
              </div>
            </div>
            <figure className="fig r32" data-rv>
              <Photo k="centro-cirurgico" alt="Dr. Takaki no centro cirúrgico ao lado do microscópio" sizes="(max-width: 960px) 100vw, 560px" par style={{ height: '112%' }} />
            </figure>
          </div>
        </section>

        <section className="sec">
          <div className="wrap split rev">
            <div data-rv>
              <div className="eyebrow">Atuação</div>
              <h2 className="serif">Uma área <em>vasta e complexa.</em></h2>
              <p>A cirurgia da mão vai das condições mais comuns, como a síndrome do túnel do carpo, o dedo em gatilho e o cisto sinovial, a patologias mais complexas, como deformidades congênitas, lesões por esmagamento e reimplantes de membros.</p>
              <blockquote className="qt">
                <p>“Meu maior prazer é ver o paciente recuperado. Esse sempre foi o meu objetivo, me preparei para isso.”</p>
                <cite>Edson Kenji Takaki</cite>
              </blockquote>
            </div>
            <figure className="fig r45" data-rv>
              <Photo k="atendimento" alt="Dr. Edson Kenji Takaki no consultório" sizes="(max-width: 960px) 100vw, 480px" par style={{ height: '112%' }} />
            </figure>
          </div>
        </section>

        <section className="sec frost">
          <div className="wrap">
            <div className="eyebrow" data-rv>Na imprensa</div>
            <h2 className="serif" style={{ margin: '14px 0 28px' }} data-rv>Reconhecimento <em>público</em></h2>
            <div className="press">
              {PRESS.map((p) => (
                <a key={p.href} href={p.href} target="_blank" rel="noopener" data-rv>
                  <small>{p.src} · {p.date}</small>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <span className="link">Ler na fonte</span>
                </a>
              ))}
            </div>
            <div className="split" style={{ marginTop: 56 }}>
              <figure data-rv>
                <div className="fig r32"><Photo k="honrarias" alt="Dr. Takaki ao lado de outro homem, ambos com medalhas, em uma solenidade" sizes="(max-width: 960px) 100vw, 560px" /></div>
                <figcaption className="cap">Lions: honrarias.</figcaption>
              </figure>
              <div data-rv>
                <div className="eyebrow">Em vídeo</div>
                <h3 className="serif" style={{ fontSize: '1.8rem', margin: '10px 0 14px' }}>Entrevistas e participações</h3>
                <div className="idx" style={{ marginTop: 0 }}>
                  {VIDEOS.map((v) => (
                    <a key={v.href} href={v.href} target="_blank" rel="noopener" style={{ gridTemplateColumns: '1fr auto' }}>
                      <div><h3 style={{ fontSize: '1.3rem' }}>{v.title}</h3><p>{v.meta}</p></div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6" /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
