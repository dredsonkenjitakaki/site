import type { ImgKey } from './images'

export const SITE = {
  name: 'Dr. Edson Kenji Takaki',
  short: 'Dr. Takaki',
  crm: 'CRM-PR 7669', // [CONFIRMAR] UF e RQE com o consultório
  role: 'Microcirurgia e cirurgia da mão',
}

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000')
).replace(/\/$/, '')

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
  { name: 'Hospital Evangélico', logo: 'logo-evangelico' as ImgKey },
  { name: 'Unimed', logo: 'logo-unimed' as ImgKey },
]

export const FOCUS = [
  'Cirurgia da mão',
  'Traumas da mão e do punho',
  'Dedo em gatilho',
  'Síndrome do túnel do carpo',
  'Tenossinovite de De Quervain',
  'Reimplantes de membros',
]

/* ---------- Patologias (texto original, rascunho para aprovação do Dr.) ---------- */
export type Block = { h: string; p?: string[]; ul?: string[] }
export type Article = {
  slug: string
  title: string
  short: string
  seoDesc: string
  img?: ImgKey
  img2?: ImgKey
  alt?: string
  blocks: Block[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'sindrome-do-tunel-do-carpo',
    title: 'Síndrome do túnel do carpo',
    short: 'Compressão do nervo mediano no punho, com formigamento e dormência na mão.',
    seoDesc: 'Síndrome do túnel do carpo: sintomas, como é feita a avaliação e quais são as opções de tratamento. Dr. Edson Kenji Takaki, cirurgião da mão em Londrina.',
    img: 'tunel-do-carpo',
    img2: 'tunel-do-carpo-cirurgia',
    alt: 'Ilustração do nervo mediano passando pelo túnel do carpo, no punho',
    blocks: [
      { h: 'O que é', p: ['A síndrome do túnel do carpo acontece quando o nervo mediano é comprimido ao passar pelo punho, em um canal formado pelos ossos do carpo e por um ligamento. Pelo mesmo canal passam os tendões que dobram os dedos.', 'O nervo mediano dá sensibilidade ao polegar, ao indicador, ao dedo médio e a parte do anelar. Por isso os sintomas aparecem ali.'] },
      { h: 'Sintomas', p: ['O mais comum é o formigamento ou a dormência na região que o nervo atende. Costuma piorar à noite e pode acordar a pessoa. Com o tempo, podem surgir perda de força, dificuldade para segurar objetos pequenos e dor que sobe pelo antebraço.'] },
      { h: 'Quem tem mais chance de desenvolver', ul: ['Mulheres, principalmente por volta dos 40 anos', 'Diabetes e hipotireoidismo', 'Artrite reumatoide e outras doenças inflamatórias', 'Gestação e outras mudanças hormonais com retenção de líquido', 'Punho de formato mais estreito'], p: ['Muitas vezes a causa exata não é identificada.'] },
      { h: 'Como é a avaliação', p: ['O diagnóstico parte da conversa e do exame físico, com testes que reproduzem os sintomas. A eletroneuromiografia pode ajudar a confirmar o quadro e a medir sua gravidade. Ultrassom e ressonância mostram o nervo e as estruturas ao redor, mas não são indispensáveis.'] },
      { h: 'Tratamento', p: ['Nos casos iniciais, o tratamento costuma incluir tala noturna, ajuste das posições que forçam o punho, controle de doenças associadas e medicação. Quando não há melhora, ou quando o quadro é mais avançado, a cirurgia libera o nervo. Ela pode ser feita de forma aberta ou com auxílio de uma câmera, e em geral o paciente volta para casa no mesmo dia.', 'O tempo de repouso e a liberação para carregar peso são definidos pelo médico, caso a caso.'] },
    ],
  },
  {
    slug: 'dedo-em-gatilho',
    title: 'Dedo em gatilho',
    short: 'O dedo trava dobrado e precisa de esforço para esticar.',
    seoDesc: 'Dedo em gatilho: o que é, sintomas, avaliação e tratamento. Dr. Edson Kenji Takaki, cirurgião da mão em Londrina.',
    img: 'dedo-em-gatilho',
    alt: 'Mão com o dedo indicador dobrado, ilustrando o dedo em gatilho',
    blocks: [
      { h: 'O que é', p: ['O dedo em gatilho, ou tenossinovite estenosante dos flexores, acontece quando o tendão que dobra o dedo se inflama e passa a ter dificuldade de deslizar dentro de uma polia, uma espécie de cinta na base do dedo.', 'Pode afetar um ou mais dedos, em uma ou nas duas mãos. O polegar e o anelar são os mais comuns.'] },
      { h: 'Sintomas', p: ['Começa com dor e inchaço na base do dedo e a sensação de que ele enrosca. Aos poucos, o dedo pode ficar preso dobrado e exigir esforço, ou a ajuda da outra mão, para esticar, às vezes com um estalo. Em alguns casos sente-se uma pequena bolinha na palma.'] },
      { h: 'Fatores associados', ul: ['Trabalho com movimentos repetidos de preensão', 'Sexo feminino', 'Diabetes e hipotireoidismo', 'Artrite reumatoide, gota e doenças renais'] },
      { h: 'Como é a avaliação', p: ['A avaliação é clínica, com a história e o exame da mão. Em alguns casos o ultrassom ajuda.'] },
      { h: 'Tratamento', p: ['Conforme a gravidade, pode-se começar com repouso relativo, alongamentos, compressas, tala noturna e infiltração de corticoide. Se não houver melhora, a cirurgia é indicada. É um procedimento de pequeno porte, com uma incisão pequena na palma para abrir a polia, em regime de hospital-dia.', 'Depois da cirurgia, o dedo costuma deixar de travar.'] },
    ],
  },
  {
    slug: 'tenossinovite-de-quervain',
    title: 'Tenossinovite de De Quervain',
    short: 'Dor na base do polegar e no lado do punho ao movimentar a mão.',
    seoDesc: 'Tenossinovite de De Quervain: sintomas, causas, avaliação e tratamento. Dr. Edson Kenji Takaki, cirurgião da mão em Londrina.',
    img: 'quervain',
    alt: 'Homem com órtese no punho em uma mesa de trabalho',
    blocks: [
      { h: 'O que é', p: ['É a inflamação dos tendões que movem o polegar e passam pelo primeiro compartimento do dorso do punho. Quando esse canal se espessa, os tendões deslizam com dificuldade, e surgem dor e inchaço.'] },
      { h: 'Sintomas', p: ['Dor na base do polegar e na lateral do punho, que piora ao mexer o polegar ou ao inclinar o punho. Pode haver inchaço local. A dor costuma ser maior de manhã ou no primeiro movimento do dia e, com o tempo, pode haver perda de força e limitação do movimento.'] },
      { h: 'O que contribui', ul: ['Movimentos repetidos do polegar e torção do punho, como usar o celular, torcer roupa ou pegar uma criança pequena', 'Gestação e amamentação, por causa das mudanças hormonais e da retenção de líquido', 'Diabetes e doenças reumatológicas', 'Variações anatômicas do primeiro compartimento', 'Mulheres acima dos 40 anos'] },
      { h: 'Como é a avaliação', p: ['O médico conversa sobre a rotina e faz testes específicos no exame físico. O ultrassom pode complementar.'] },
      { h: 'Tratamento', p: ['Nos casos iniciais usam-se anti-inflamatórios, gelo, alongamentos, órtese e fisioterapia. Se os sintomas persistem, a cirurgia é de pequeno porte e pode ser feita em hospital-dia. Os pontos costumam ser retirados em cerca de duas semanas, e o cuidado com a cicatriz continua depois disso.'] },
    ],
  },
  {
    slug: 'dor-na-palma-da-mao',
    title: 'Dor na palma da mão',
    short: 'Muitas causas possíveis, e a avaliação especializada ajuda a encontrar a certa.',
    seoDesc: 'Dor na palma da mão: causas mais comuns, como é feita a avaliação e quando procurar um cirurgião da mão. Dr. Edson Kenji Takaki, Londrina.',
    blocks: [
      { h: 'Por que a palma dói', p: ['A palma tem pele, músculos, tendões, ossos, ligamentos e vasos. Qualquer uma dessas estruturas pode ser lesada por um trauma, por sobrecarga ou sem um motivo aparente. A dor persistente merece avaliação.'] },
      { h: 'Causas frequentes', ul: ['Tendinopatias por movimentos repetidos ou esforço', 'Síndrome do túnel do carpo', 'Síndrome do túnel cubital', 'Problemas na coluna cervical', 'Cistos', 'Fibrose', 'Tumores', 'Doença de Dupuytren'] },
      { h: 'Sintomas que acompanham', p: ['Dependem da causa. Tendinites podem limitar o movimento dos dedos. A compressão de nervos pode causar perda de sensibilidade ou enfraquecimento dos músculos. Nos tumores, nota-se um aumento de volume anormal.'] },
      { h: 'Como é a avaliação', p: ['Parte de uma conversa detalhada sobre a dor e de um exame físico completo. Conforme a suspeita, o médico pede ultrassom, radiografia ou ressonância.'] },
      { h: 'Tratamento e cuidados', p: ['O tratamento depende da causa. Em geral, começa sem cirurgia, com imobilização, fisioterapia, compressas e medicação. A cirurgia é considerada quando o tratamento conservador não resolve ou em situações específicas, como um tumor.', 'Para reduzir a sobrecarga, vale fazer pausas durante o trabalho, alongar e evitar posições forçadas por muito tempo.'] },
    ],
  },
  {
    slug: 'sindrome-do-tunel-cubital',
    title: 'Síndrome do túnel cubital',
    short: 'Compressão do nervo ulnar no cotovelo, com formigamento nos dedos anelar e mínimo.',
    seoDesc: 'Síndrome do túnel cubital: sintomas, avaliação e tratamento da compressão do nervo ulnar no cotovelo. Dr. Edson Kenji Takaki, Londrina.',
    img: 'tunel-cubital',
    alt: 'Ilustração do trajeto do nervo ulnar do ombro até a mão',
    blocks: [
      { h: 'O que é', p: ['É a compressão do nervo ulnar no túnel cubital, na parte interna do cotovelo. É a segunda síndrome compressiva mais comum do membro superior, depois do túnel do carpo.'] },
      { h: 'Sintomas', p: ['No início, formigamento nos dedos anelar e mínimo, dor no cotovelo e no antebraço e menos força na mão. Se o quadro avança, pode haver atrofia de músculos da mão e deformidade em garra nesses dedos.'] },
      { h: 'Quem tem mais chance', ul: ['Quem mantém o cotovelo dobrado ou apoiado por muito tempo', 'Quem já teve fratura ou trauma perto do cotovelo', 'Pessoas com insuficiência renal ou artrite reumatoide'] },
      { h: 'Como é a avaliação', p: ['Começa pela história do paciente e por um exame físico cuidadoso. Eletroneuromiografia, ultrassom e ressonância do cotovelo ou da coluna cervical podem ser pedidos para medir a gravidade e procurar outras causas.'] },
      { h: 'Tratamento', p: ['Em geral, começa com ajuste de postura, órtese para posicionar o cotovelo, fisioterapia e medicação. Casos que não respondem, ou com perda de força, podem precisar de cirurgia. Evitar apoiar o cotovelo e manter alongamentos e exercícios ajuda a prevenir o problema.'] },
    ],
  },
  {
    slug: 'dor-nas-maos-na-gravidez',
    title: 'Dor nas mãos na gravidez',
    short: 'A retenção de líquido pode comprimir nervos e tendões durante a gestação.',
    seoDesc: 'Dor nas mãos na gravidez: por que acontece, o que pode ser feito e como prevenir. Dr. Edson Kenji Takaki, cirurgião da mão em Londrina.',
    blocks: [
      { h: 'Por que acontece', p: ['Na gestação, as alterações hormonais aumentam a retenção de líquidos, o que pode pressionar nervos e tendões da mão. Dor nas mãos não deve ser tratada como parte esperada da gravidez e vale ser investigada.'] },
      { h: 'Problemas mais comuns', ul: ['Tendinite', 'Sinovite', 'Síndrome do túnel do carpo', 'Síndrome do túnel cubital'] },
      { h: 'Quem tem mais chance', ul: ['Gestantes com diabetes', 'Idade mais avançada', 'Histórico de doença reumatológica', 'Dores nas mãos antes da gestação'] },
      { h: 'Como é o cuidado', p: ['Durante a gravidez, evita-se medicação desnecessária. O plano depende do problema, do incômodo e da fase da gestação, e é combinado com o obstetra. Reabilitação com fisioterapia ou terapia ocupacional, repouso e compressas ajudam a controlar os sintomas.', 'Os sintomas podem continuar ou piorar depois do parto, pelas demandas do cuidado com o bebê. Procurar avaliação cedo costuma tornar o tratamento mais simples.'] },
      { h: 'Como prevenir', p: ['Alongamentos, exercícios, controle do inchaço e do ganho de peso e as consultas de pré-natal ajudam. Se a dor aparecer, procure um especialista em mão.'] },
    ],
  },
  {
    slug: 'sindactilia',
    title: 'Sindactilia',
    short: 'Alteração congênita em que dois ou mais dedos ficam unidos.',
    seoDesc: 'Sindactilia: o que é, como é feito o diagnóstico e como funciona a cirurgia de separação dos dedos. Dr. Edson Kenji Takaki, Londrina.',
    blocks: [
      { h: 'O que é', p: ['A sindactilia é uma alteração congênita, presente desde o nascimento, em que a separação dos dedos não se completa durante a formação do bebê. Pode envolver só partes moles, que é a forma simples, ou também os ossos, que é a forma complexa.', 'É a alteração congênita mais comum da mão. Pode ocorrer sozinha ou associada a síndromes genéticas, como as de Poland, Apert e Holt-Oram.'] },
      { h: 'Como é o diagnóstico', p: ['É clínico. A radiografia ajuda a classificar a alteração. Também se avalia se há outras alterações no corpo, para saber se o caso é isolado ou parte de uma síndrome.'] },
      { h: 'Como é a cirurgia', p: ['O tratamento é cirúrgico e depende do tipo de alteração. Os dedos são separados por incisões em zigue-zague, preservando nervos e vasos. Na maioria das vezes falta pele para cobrir os dois dedos, e é preciso um enxerto, retirado de outra região do corpo.', 'A cirurgia é feita sob anestesia geral. Em crianças, costuma-se aguardar por volta de um ano e meio a dois anos de idade, por segurança anestésica, e o ideal é operar antes da idade escolar. Quando há mais de dois dedos unidos, a separação é feita em etapas.'] },
      { h: 'Pós-operatório', p: ['Os enxertos de pele são delicados, e os primeiros curativos são feitos pelo médico, em geral toda semana por algumas semanas. É preciso atenção às cicatrizes, e, conforme a criança cresce, às vezes são necessárias cirurgias complementares. O acompanhamento até a recuperação completa é parte do tratamento.'] },
    ],
  },
  {
    slug: 'dedo-em-martelo',
    title: 'Dedo em martelo',
    short: 'A ponta do dedo fica caída e não estica sozinha depois de uma pancada.',
    seoDesc: 'Dedo em martelo (mallet finger): causas, tipos, quando imobilizar e quando operar. Dr. Edson Kenji Takaki, cirurgião da mão em Londrina.',
    img: 'dedo-em-martelo',
    alt: 'Ponta de um dedo dobrada, característica do dedo em martelo',
    blocks: [
      { h: 'O que é', p: ['No dedo em martelo, ou mallet finger, a ponta do dedo fica caída e a pessoa não consegue esticá-la ativamente. Isso ocorre por uma lesão do mecanismo extensor, na última articulação do dedo.'] },
      { h: 'Como acontece', p: ['Geralmente por um trauma que dobra à força a ponta do dedo estendido, como uma bolada. O sintoma principal é a ponta caída. Também podem aparecer dor, inchaço e hematoma.'] },
      { h: 'Tipos', p: ['O tendão pode se soltar do osso sem fratura, o tipo tendíneo, ou arrancar um fragmento ósseo junto, o tipo ósseo.'] },
      { h: 'Tratamento sem cirurgia', p: ['Consiste em imobilizar a ponta do dedo esticada, com tala ou órtese sob medida. O tratamento é longo, em geral algumas semanas de uso contínuo, seguidas de uso noturno. Durante esse período a ponta do dedo não pode ser dobrada, nem na hora da higiene, porque isso pode comprometer o resultado.'] },
      { h: 'Quando operar', ul: ['Fragmento ósseo grande, com desvio', 'Lesão aberta, causada por corte', 'Casos antigos', 'Quando o paciente não consegue manter a imobilização'], p: ['Na cirurgia, costumam ser usados fios metálicos temporários para estabilizar a articulação, retirados depois. O médico explica as vantagens e os limites de cada caminho.'] },
    ],
  },
]

export const ARTICLE_BY_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]))

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
