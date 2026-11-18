import type { Block } from './articles'
import type { ImgKey } from './images'

export const SITE = {
  name: 'Dr. Edson Kenji Takaki',
  short: 'Dr. Takaki',
  crm: 'CRM-PR 7669',
  /* Certificados de Especialista do CRM-PR (recebidos do Dr. em 2026-11-09). */
  rqe: [
    { esp: 'Cirurgia da Mão', n: '8847' },
    { esp: 'Cirurgia Plástica', n: '9249' },
  ],
  role: 'Microcirurgia e cirurgia da mão',
  society: 'SBCM',
  societyFull: 'Sociedade Brasileira de Cirurgia da Mão',
}

/* Domínio de produção. Usado como fallback para que canonical, og:image,
   sitemap, robots e JSON-LD nunca apontem para localhost nem para a URL
   temporária *.pages.dev. Pode ser sobrescrito por NEXT_PUBLIC_SITE_URL
   (variável de ambiente do Cloudflare Pages ou .env.local). */
export const PROD_URL = 'https://dredsonkenjitakaki.com.br'

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || PROD_URL).replace(/\/$/, '')

export const OFFICE = {
  street: 'Av. Bandeirantes, 500, 6º andar, sala 608',
  area: 'Jardim Ipiranga',
  city: 'Londrina',
  uf: 'PR',
  phone: '(43) 3324-6159',
  tel: '+554333246159',
  wa: '5543991506159',
  waLabel: '(43) 99150-6159',
  map: 'https://maps.app.goo.gl/YrCq5wBw4fnsSpCD6',
  secretary: 'Luciane',
  /* Informado pela secretaria e pelo Dr. em 2026-11-09. */
  hours: [
    ['Segundas e quartas', '8h às 18h'],
    ['Terças e quintas', '14h às 18h'],
    ['Sextas', '8h às 12h'],
  ] as const,
  insurance: ['Unimed', 'Hospitalar (rede aberta)', 'Particular'],
  instagram: 'https://www.instagram.com/dredsonkenjitakaki/',
  instagramHandle: '@dredsonkenjitakaki',
}

const MSG = 'Olá! Gostaria de agendar uma consulta com o Dr. Edson Kenji Takaki.'
export const waLink = (text = MSG) => `https://wa.me/${OFFICE.wa}?text=${encodeURIComponent(text)}`

export const NAV = [
  ['Trajetória', '/trajetoria'],
  ['Patologias', '/patologias'],
  ['Microcirurgia', '/microcirurgia'],
  ['Orientações', '/orientacoes'],
  ['Contato', '/#contato'],
] as const

export const HOSPITALS = [
  { name: 'Hospital Evangélico', logo: 'logo-evangelico' as ImgKey, wide: true },
  { name: 'Unimed', logo: 'logo-unimed' as ImgKey, wide: true },
]

/* Home: seção "Microcirurgia: o que é possível". Textos para aprovação do Dr. */
export const MICRO = [
  { title: 'Reimplantes de membros', text: 'Em dedos, mão, braço e pé, a técnica permite reconectar vasos, nervos e tendões da parte que foi separada. O objetivo é restabelecer o máximo de função possível, e o resultado varia em cada caso.' },
  { title: 'Cirurgia reconstrutiva microcirúrgica', text: 'Quando faltam nervo, vasos ou pele, a técnica permite reconstruir a região, às vezes com tecido de outra parte do corpo e os vasos dele. A indicação depende de cada caso.' },
  { title: 'Traumas complexos', text: 'Esmagamentos e amputações atingem várias estruturas de uma vez. A técnica permite tratar vasos, nervos e tendões sob ampliação. O que é possível depende de cada caso, e a avaliação precisa ser rápida.' },
]

export const FOCUS = [
  'Cirurgia da mão',
  'Traumas da mão e do punho',
  'Dedo em gatilho',
  'Síndrome do túnel do carpo',
  'Tenossinovite de De Quervain',
  'Reimplantes de membros',
]

/* ---------- Patologias: ver lib/articles.ts ---------- */
export { ARTICLES, ARTICLE_BY_SLUG } from './articles'
export type { Article, Block } from './articles'

/* ---------- Orientações (consultório) ---------- */
export const PRE = {
  before: [
    `Confirmar data e hospital com a secretária ${OFFICE.secretary}, pelo telefone ${OFFICE.phone} ou pelo WhatsApp ${OFFICE.waLabel}.`,
    'Confirmar a autorização do seu convênio.',
  ],
  day: [
    'Jejum a partir das 23h do dia anterior, inclusive de água. Quem usa anti-hipertensivo toma apenas esse medicamento ao acordar, no dia da cirurgia.',
    'Internar com duas horas de antecedência.',
    'Levar todos os exames: sangue, risco cirúrgico e exames de imagem, caso tenham sido pedidos.',
    'Um Termo Cirúrgico será enviado. Ele deve ser assinado e entregue junto.',
    'O hospital também entrará em contato para pedir algumas informações.',
    'Evitar internar com adornos, como alianças e relógios.',
    `Em caso de dúvida, falar com o consultório pelo telefone ${OFFICE.phone} ou pelo WhatsApp ${OFFICE.waLabel}.`,
  ],
}
export const POST: Block[] = [
  { h: 'Medicamentos', p: ['Uma receita com os medicamentos do pós-operatório fica no hospital e é entregue pela enfermagem. Se houver reação adversa, suspenda o uso e entre em contato.'] },
  { h: 'Atestados', p: ['Ficam no hospital, junto com as demais orientações.'] },
  { h: 'Curativos', ul: ['Devem ser retirados apenas pelo médico, no retorno, que acontece cerca de uma semana depois da cirurgia. Entre em contato com o consultório para agendar.', 'Mantenha o curativo limpo e seco, protegido para não molhar durante o banho.', 'Em caso de dor, inchaço em excesso ou sangramento, o retorno pode ser antecipado depois de um contato por telefone ou WhatsApp.'] },
  { h: 'Posição do membro operado', ul: ['Mantenha o membro na tipoia, com o cotovelo dobrado a cerca de 90°.', 'Evite deixá-lo por longos períodos para baixo, para reduzir o inchaço.', 'Ao dormir, apoie o membro sobre o corpo ou ao lado dele, sobre o travesseiro.'] },
  { h: 'Exercícios', ul: ['Os dedos que ficam fora do curativo podem e devem ser mexidos várias vezes ao dia, assim como o punho.', 'Não carregue peso nem faça esforço até a liberação médica.', 'O membro pode sair da tipoia para exercícios com o cotovelo, evitando apenas que fique muito tempo para baixo.'] },
]

/* ---------- Imprensa ---------- */
export const PRESS = [
  {
    src: 'Folha de Londrina',
    date: '16 de agosto de 2008',
    title: 'O homem que reconstrói vidas',
    text: 'Reportagem sobre a trajetória do Dr. Takaki, incluindo sua especialização em microcirurgia no Japão.',
    href: 'https://www.folhadelondrina.com.br/folha-gente/o-homem-que-reconstroi-vidas-651142.html',
  },
  {
    src: 'Câmara Municipal de Londrina',
    date: '19 de abril de 2009',
    title: 'Doutor Takaki recebe Cidadania Honorária',
    text: 'Homenagem concedida pela Câmara de Vereadores e pela Prefeitura de Londrina, aprovada por unanimidade.',
    href: 'https://www.cml.pr.gov.br/imprensa/noticias/0/301/0/142119/04/2009',
  },
]
export const VIDEOS = [
  { title: 'Cidadão Tropical: Dr. Edson Takaki', meta: 'Rede CNT, 3 de outubro de 2021', href: 'https://www.youtube.com/@RedeCNTBrasil' },
  { title: 'Somos Todos Unimed', meta: 'Canal Somos Todos Unimed', href: 'https://www.youtube.com/@somostodosunimed2502' },
]
