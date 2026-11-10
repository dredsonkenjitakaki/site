import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Arrow, WhatsApp } from '@/components/Icons'
import JsonLd from '@/components/JsonLd'
import Cta from '@/components/Cta'
import Photo from '@/components/Photo'
import { ContactSection, InstaNote, MoreLink } from '@/components/Sections'
import { ARTICLES, FOCUS, HOSPITALS, OFFICE, SITE, SITE_URL } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Dr. Edson Kenji Takaki | Cirurgia da mão e microcirurgia em Londrina',
  description: 'Dr. Edson Kenji Takaki, microcirurgião especialista em cirurgia da mão e plástica reconstrutora em Londrina. Atendimento humanizado, formação na UEL e na Universidade de Tóquio.',
  alternates: { canonical: '/' },
}

const ld = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: SITE.name,
  url: SITE_URL,
  image: `${SITE_URL}/img/og.jpg`,
  medicalSpecialty: ['Hand surgery', 'Plastic surgery'],
  sameAs: [OFFICE.instagram],
  identifier: [SITE.crm, ...SITE.rqe.map((r) => `RQE ${r.n} ${r.esp}`)],
  memberOf: { '@type': 'Organization', name: SITE.societyFull, alternateName: SITE.society },
  paymentAccepted: OFFICE.insurance.join(', '),
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Wednesday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday'], opens: '14:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:00', closes: '12:00' },
  ],
  telephone: OFFICE.tel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: OFFICE.street,
    addressLocality: OFFICE.city,
    addressRegion: OFFICE.uf,
    addressCountry: 'BR',
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={ld} />
      <main id="conteudo">
        <section className="hero" data-first>
          <div className="in">
            <div className="glass"><div className="glass-in">
            <div className="eyebrow">Microcirurgia · Cirurgia da mão · Plástica reconstrutora</div>
            <h1 className="serif">
              <span className="ln"><span>Cirurgia da mão</span></span>
              <span className="ln"><span><em>com escuta e cuidado.</em></span></span>
            </h1>
            <p className="lead">Microcirurgião especialista em cirurgia da mão. Tratamento especializado e atendimento humanizado para conduzir o seu caso.</p>
            <div className="ctas">
              <Cta className="btn btn-light"><WhatsApp /> Agendar consulta</Cta>
              <Link className="btn btn-line" href="/trajetoria">Conhecer a trajetória <Arrow /></Link>
            </div>
            <div className="cred">{SITE.name} · {SITE.crm} · {SITE.rqe.map((r) => `RQE ${r.n} (${r.esp})`).join(' · ')}</div>
            </div></div>
          </div>
          <div className="ph">
            <Photo k="hero" alt="Dr. Edson Kenji Takaki operando sob o microscópio cirúrgico" priority quality={90} sizes="(max-width: 960px) 100vw, 1200px" />
          </div>
        </section>

        <section className="facts" aria-label="Em resumo">
          <div className="wrap">
            <div className="it"><b>40 anos</b><small>De profissão em Londrina</small></div>
            <div className="it"><b>3 anos</b><small>De especialização em Tóquio</small></div>
            <div className="it"><b>{SITE.society}</b><small>Membro da {SITE.societyFull}</small></div>
            <div className="it"><b>{SITE.crm}</b><small>Registro profissional</small></div>
          </div>
        </section>

        <section className="sec" id="atendimento">
          <div className="wrap split">
            <figure className="fig r45" data-rv>
              <Photo k="atendimento" alt="Dr. Edson Kenji Takaki sentado à mesa do consultório, sorrindo" sizes="(max-width: 960px) 100vw, 520px" par style={{ height: '112%' }} />
            </figure>
            <div data-rv>
              <div className="eyebrow">Atendimento humanizado</div>
              <h2 className="serif">Um consultório pensado <em>para cada paciente.</em></h2>
              <p className="mut">O consultório busca oferecer um atendimento médico personalizado e individual, olhando para as necessidades de cada paciente.</p>
              <blockquote className="qt">
                <p>“Meu maior prazer é ver o paciente recuperado. Esse sempre foi o meu objetivo, me preparei para isso. O paciente deposita total confiança no médico e temos que ter, por obrigação, consciência da nossa responsabilidade.”</p>
                <cite>Edson Kenji Takaki</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="sec frost hand">
          <div className="wrap">
            <div className="rule" data-line />
            <p className="big" data-rv>Com as mãos, a gente <em>interage com tudo à nossa volta.</em> Elas expressam sentimentos, protegem e dão forma aos nossos planos.</p>
            <p className="mut" data-rv>Quando algo afeta as mãos, o impacto vai além do movimento de dobrar e esticar. Pode atingir a independência, o estado emocional e a autoestima. Por isso cada caso merece uma avaliação atenta.</p>
          </div>
        </section>

        <section className="sec" id="patologias">
          <div className="wrap">
            <div className="sechd" data-rv>
              <div>
                <div className="eyebrow">Como podemos ajudar</div>
                <h2 className="serif" style={{ margin: '14px 0' }}>Lesões e <em>patologias</em></h2>
                <p className="mut">A formação do Dr. Takaki é em cirurgia da mão e microcirurgia. Por isso a área de atuação é ampla: além de tratar, de forma clínica ou cirúrgica, as doenças da mão, do punho e do antebraço, ele também cuida de problemas dos nervos periféricos, seja qual for a localização. Reimplantes e cirurgias reconstrutivas de maior porte estão no Instagram do Dr. Takaki.</p>
              </div>
              <MoreLink href="/patologias">Ver todas</MoreLink>
            </div>
            <ul className="chips" data-rv>
              {FOCUS.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <div className="idx" data-rv>
              {ARTICLES.slice(0, 5).map((a, i) => (
                <Link key={a.slug} href={`/patologias/${a.slug}`}>
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <div><h3>{a.title}</h3><p>{a.short}</p></div>
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sec dark" id="microcirurgia">
          <div className="wrap split rev">
            <div data-rv>
              <div className="eyebrow">Microcirurgia</div>
              <h2 className="serif">Quando a vista <em>não alcança.</em></h2>
              <p className="mut">Com lupas e microscópios cirúrgicos, o campo operado é ampliado, e se torna possível trabalhar em vasos e nervos muito pequenos. A técnica é usada em reconstruções após acidentes, retirada de tumores ou malformações congênitas.</p>
              <div style={{ marginTop: 28 }}><MoreLink href="/microcirurgia">Entender a microcirurgia</MoreLink></div>
            </div>
            <figure className="fig r43" data-rv>
              <Photo k="microscopio-visao" alt="Imagem ampliada de pinças sob o microscópio cirúrgico" sizes="(max-width: 960px) 100vw, 560px" par style={{ height: '112%' }} />
            </figure>
          </div>
        </section>

        <section className="sec" id="trajetoria">
          <div className="wrap split">
            <figure className="fig r45" data-rv>
              <Photo k="retrato" alt="Retrato do Dr. Edson Kenji Takaki" sizes="(max-width: 960px) 100vw, 480px" par style={{ height: '112%', objectPosition: '50% 18%' }} />
            </figure>
            <div data-rv>
              <div className="eyebrow">Trajetória</div>
              <h2 className="serif">Da Londrina dos anos 80 <em>ao Japão, e de volta.</em></h2>
              <p className="mut">Desde estudante, o Dr. Takaki se interessava por cirurgia da mão e microcirurgia, áreas pouco conhecidas na época e que ninguém praticava em Londrina e região. Em 1984 recebeu uma bolsa do governo japonês e passou três anos se especializando na Universidade de Tóquio.</p>
              <div className="tl lt">
                <div><b>UEL</b><span>Medicina na Universidade Estadual de Londrina</span></div>
                <div><b>1984</b><span>Bolsa do governo japonês<small>Cirurgia plástica reconstrutora, cirurgia da mão e microcirurgia, na Universidade de Tóquio</small></span></div>
                <div><b>1987</b><span>Retorno a Londrina<small>Início das microcirurgias no Hospital Evangélico</small></span></div>
              </div>
              <InstaNote />
              <div style={{ marginTop: 28 }}><MoreLink href="/trajetoria">Ler a trajetória completa</MoreLink></div>
            </div>
          </div>
        </section>

        <section className="sec frost" id="orientacoes">
          <div className="wrap split">
            <div data-rv>
              <div className="eyebrow">Antes e depois da cirurgia</div>
              <h2 className="serif">Orientações <em>claras</em> para cada etapa.</h2>
              <p className="mut">Jejum, exames, internação, curativos, posição do membro e exercícios: reunimos as orientações do consultório para você consultar quando precisar.</p>
              <div style={{ marginTop: 28 }}><MoreLink href="/orientacoes">Ver orientações</MoreLink></div>
            </div>
            <figure className="fig r32" data-rv>
              <Photo k="centro-cirurgico" alt="Centro cirúrgico com microscópio e o Dr. Takaki" sizes="(max-width: 960px) 100vw, 560px" par style={{ height: '112%' }} />
            </figure>
          </div>
        </section>

        <section className="sec" id="consultorio">
          <div className="wrap split">
            <figure className="fig r43" data-rv>
              <Photo k="consultorio" alt="Fachada do prédio onde fica o consultório, em Londrina" sizes="(max-width: 960px) 100vw, 560px" par style={{ height: '112%' }} />
            </figure>
            <div data-rv>
              <div className="eyebrow">Consultório</div>
              <h2 className="serif">No Jardim Ipiranga, <em>de fácil acesso.</em></h2>
              <p className="mut">O consultório particular fica perto de importantes hospitais e laboratórios de Londrina, com estacionamento no subsolo e em vários locais ao redor.</p>
              <p style={{ marginTop: 14, fontWeight: 600 }}>{OFFICE.street}<br /><span className="mut" style={{ fontWeight: 400 }}>{OFFICE.area} · {OFFICE.city}-{OFFICE.uf}</span></p>
              <div className="eyebrow" style={{ marginTop: 26 }}>Convênios</div>
              <div className="hosp">
                {OFFICE.insurance.map((c) => <span key={c}>{c}</span>)}
              </div>
              <div className="eyebrow" style={{ marginTop: 26 }}>Hospitais em que atua</div>
              <div className="hosp">
                {HOSPITALS.map((h) => (
                  <span key={h.name}>
                    <Photo k={h.logo} alt="" sizes="26px" />
                    {h.name}
                  </span>
                ))}
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
