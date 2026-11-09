import type { ImgKey } from './images'

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
  /** Perguntas para o Dr. Takaki. Aparecem só no documento de revisão, nunca no site. */
  confirmar: string[]
}

/*
 * Textos originais, em linguagem simples, para revisão e aprovação do Dr. Takaki.
 * Nenhum prazo (repouso, imobilização, retirada de pontos) foi inventado: onde o texto
 * depende de um número, o site fala de forma geral e o documento de revisão pergunta o valor.
 */
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
      { h: 'O que é', p: ['A síndrome do túnel do carpo é a compressão do nervo mediano no punho. O nervo passa por um canal estreito, formado pelos ossos do carpo e por um ligamento, junto com os tendões que dobram os dedos. Quando a pressão ali dentro aumenta, o nervo sofre.', 'O nervo mediano dá sensibilidade ao polegar, ao indicador, ao dedo médio e a metade do anelar. É nessa região da mão que os sintomas aparecem.'] },
      { h: 'Sintomas', p: ['Formigamento e dormência são os sinais mais comuns. Costumam piorar à noite e podem acordar a pessoa. Com o tempo, surgem dor que sobe pelo antebraço, perda de força e dificuldade para segurar objetos pequenos. Nos casos mais avançados, o músculo da base do polegar pode diminuir de volume.'] },
      { h: 'Quem tem mais chance de desenvolver', ul: ['Mulheres, principalmente por volta dos 40 anos', 'Pessoas com diabetes ou hipotireoidismo', 'Pessoas com artrite reumatoide e outras doenças inflamatórias', 'Gestantes e outras fases de retenção de líquido', 'Quem tem o canal do punho mais estreito'], p: ['Em muitos casos, a causa exata não é encontrada.'] },
      { h: 'Como é a avaliação', p: ['O diagnóstico começa na consulta, com a história do paciente e um exame físico que inclui testes para reproduzir os sintomas. A eletroneuromiografia pode confirmar o diagnóstico e mostrar a gravidade da compressão. Ultrassom e ressonância ajudam a ver o nervo e as estruturas ao redor, mas nem sempre são necessários.'] },
      { h: 'Tratamento', p: ['Nos casos iniciais, o tratamento costuma começar sem cirurgia: tala para dormir, ajuste das posições que deixam o punho muito dobrado ou esticado, controle de doenças como diabetes e hipotireoidismo e, quando indicado, medicação.', 'Se os sintomas continuam, ou se a compressão é mais grave, a cirurgia abre o ligamento para aliviar a pressão sobre o nervo. Ela pode ser feita por um corte na palma da mão ou com o auxílio de uma câmera.'] },
      { h: 'Cirurgia e recuperação', p: ['A cirurgia é de pequeno porte e feita em regime de hospital-dia. Os pontos costumam ser retirados com cerca de duas semanas. A volta às atividades, inclusive dirigir, costuma acontecer em torno de três semanas, mas o Dr. Takaki orienta o momento certo conforme o caso de cada paciente.'] },
      { h: 'Quando procurar um especialista', p: ['Vale buscar avaliação quando o formigamento é frequente, acorda você à noite ou vem com perda de força. Tratar cedo costuma deixar as opções mais simples.'] },
    ],
    confirmar: [
      'O paciente recebe alta no mesmo dia (hospital-dia)? Qual anestesia o senhor usa?',
      'Qual técnica o senhor usa: aberta, com câmera (endoscópica) ou as duas?',
      'Repouso após a cirurgia: ____ dias.',
      'Retirada dos pontos (2 semanas) e volta às atividades e a dirigir (3 semanas) já constam no site, conforme informado em 09/11/2026. Liberação para carregar peso: após ____ semanas.',
      'A eletroneuromiografia é sempre pedida antes de operar?',
      'Algum ponto deste texto o senhor diria de outra forma?',
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
      { h: 'O que é', p: ['No dedo em gatilho, o tendão que dobra o dedo inflama e passa a ter dificuldade para deslizar dentro de uma polia, uma espécie de cinta que o mantém junto ao osso, na base do dedo. O nome técnico é tenossinovite estenosante dos flexores.', 'Pode afetar um ou mais dedos, em uma mão ou nas duas. O polegar e o anelar são os mais comuns.'] },
      { h: 'Sintomas', p: ['A queixa começa com dor e inchaço na base do dedo e a sensação de que ele enrosca. Depois, o dedo pode estalar ao esticar ou ficar preso dobrado, exigindo esforço, ou a ajuda da outra mão, para abrir. Algumas pessoas sentem um caroço pequeno na palma, perto da base do dedo.'] },
      { h: 'Fatores associados', ul: ['Trabalho com movimentos repetidos de preensão', 'Sexo feminino', 'Diabetes e hipotireoidismo', 'Artrite reumatoide, gota e doenças renais'], p: ['Muitas vezes não há uma causa definida.'] },
      { h: 'Como é a avaliação', p: ['A avaliação é clínica, feita com a história do paciente e o exame da mão. Em alguns casos, o ultrassom ajuda.'] },
      { h: 'Tratamento', p: ['Depende da gravidade. Os casos iniciais podem melhorar com repouso relativo, alongamentos, compressas, tala para dormir e infiltração de corticoide.', 'Quando o tratamento sem cirurgia não resolve, a cirurgia libera o tendão. O cirurgião abre a polia por um corte pequeno na palma da mão.'] },
      { h: 'Cirurgia e recuperação', p: ['É um procedimento de pequeno porte, feito em regime de hospital-dia. Os pontos costumam ser retirados com cerca de duas semanas, e a volta às atividades, inclusive dirigir, em torno de três semanas. O Dr. Takaki orienta os cuidados com o curativo, os movimentos do dedo e o momento certo de retomar a rotina, conforme cada caso.'] },
    ],
    confirmar: [
      'Quantas infiltrações de corticoide o senhor costuma fazer antes de indicar cirurgia?',
      'Qual anestesia o senhor usa na cirurgia?',
      'Retirada dos pontos (2 semanas) e volta às atividades e a dirigir (3 semanas) já constam no site, conforme informado em 09/11/2026.',
      'O senhor confirma que, depois da cirurgia, o dedo costuma deixar de travar? Há casos em que isso não acontece?',
      'Algum ponto deste texto o senhor diria de outra forma?',
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
      { h: 'O que é', p: ['É a inflamação dos tendões que movem o polegar e passam pelo primeiro compartimento do dorso do punho, do lado do polegar. Esses tendões correm dentro de um túnel. Quando a cobertura do túnel engrossa, eles deslizam com dificuldade, e surgem dor e inchaço.'] },
      { h: 'Sintomas', p: ['Dor na base do polegar e na lateral do punho, que piora ao mexer o polegar, ao pegar objetos ou ao inclinar o punho. Pode haver inchaço no local. A dor costuma ser maior de manhã ou no primeiro movimento do dia. Com o tempo, podem aparecer perda de força e limitação do movimento do polegar.'] },
      { h: 'O que contribui', ul: ['Movimentos repetidos do polegar e torção do punho, como usar o celular, torcer roupa ou pegar uma criança pequena', 'Gestação e amamentação, pelas mudanças hormonais e pela retenção de líquido', 'Diabetes e doenças reumatológicas', 'Variações na anatomia do primeiro compartimento', 'Idade acima de 40 anos, mais em mulheres'] },
      { h: 'Como é a avaliação', p: ['O médico conversa sobre a rotina e faz testes específicos no exame físico. O ultrassom pode complementar a avaliação.'] },
      { h: 'Tratamento', p: ['Nos casos iniciais, usam-se anti-inflamatórios, gelo, alongamentos, órtese e fisioterapia. Se os sintomas persistem, a cirurgia abre o túnel para que os tendões deslizem de novo.'] },
      { h: 'Cirurgia e recuperação', p: ['É uma cirurgia de pequeno porte, que pode ser feita em regime de hospital-dia. Depois, o paciente mexe os dedos, protege a mão de esforços e cuida da cicatriz. Os pontos costumam ser retirados com cerca de duas semanas, e a volta às atividades, inclusive dirigir, em torno de três semanas. O Dr. Takaki define o momento certo conforme o caso.'] },
    ],
    confirmar: [
      'O senhor faz infiltração de corticoide antes de operar?',
      'Quanto tempo de órtese ou imobilização o senhor costuma indicar no tratamento sem cirurgia: ____ semanas.',
      'Retirada dos pontos (2 semanas) e volta às atividades e a dirigir (3 semanas) já constam no site, conforme informado em 09/11/2026. Retorno de esforço com o polegar: após ____ semanas.',
      'Algum ponto deste texto o senhor diria de outra forma?',
    ],
  },
  {
    slug: 'cisto-sinovial',
    title: 'Cisto sinovial',
    short: 'Caroço cheio de líquido, mais comum no dorso do punho.',
    seoDesc: 'Cisto sinovial na mão e no punho: o que é, quando incomoda, como é feita a avaliação e quais são as opções de tratamento. Dr. Edson Kenji Takaki, Londrina.',
    blocks: [
      { h: 'O que é', p: ['O cisto sinovial é um caroço cheio de um líquido espesso, parecido com gel. Ele se liga a uma articulação ou à bainha de um tendão e aparece com mais frequência no dorso do punho. Também pode surgir na palma, na base de um dedo ou na articulação mais próxima da ponta do dedo.', 'É uma alteração benigna. Muitas pessoas procuram o médico para ter certeza disso.'] },
      { h: 'Sintomas', p: ['O sinal principal é o caroço visível ou palpável, que pode mudar de tamanho ao longo dos dias. Alguns cistos não doem. Outros causam dor ao fazer esforço com a mão, sensação de peso ou formigamento, quando pressionam um nervo próximo.'] },
      { h: 'Como é a avaliação', p: ['O médico examina o caroço, vê se ele é firme ou mole e se está preso a uma articulação. O ultrassom confirma que o conteúdo é líquido e mostra de onde o cisto sai. A ressonância pode ser pedida quando o cisto é pequeno e não aparece ao exame, ou quando há dúvida sobre o diagnóstico.'] },
      { h: 'Tratamento', p: ['Se o cisto não incomoda, o médico pode apenas acompanhar. Alguns diminuem ou desaparecem sozinhos.', 'Quando há dor ou limitação, as opções incluem esvaziar o cisto com agulha e retirá-lo cirurgicamente. O cisto pode voltar depois de qualquer um dos dois tratamentos, e o médico explica essa possibilidade antes de indicar o procedimento.'] },
      { h: 'Cirurgia e recuperação', p: ['Na cirurgia, os pontos costumam ser retirados com cerca de duas semanas, e a volta às atividades, inclusive dirigir, em torno de três semanas. O Dr. Takaki orienta o momento certo conforme o caso.'] },
      { h: 'Quando procurar um especialista', p: ['Vale buscar avaliação quando o caroço cresce, causa dor, limita o movimento, provoca formigamento ou quando você não tem certeza do que ele é.'] },
    ],
    confirmar: [
      'O senhor oferece o esvaziamento com agulha, ou prefere indicar direto a cirurgia?',
      'Na cirurgia, o cisto é retirado junto com a ligação com a articulação ou a bainha do tendão?',
      'Retirada dos pontos (2 semanas) e volta às atividades e a dirigir (3 semanas) já constam no site, conforme informado em 09/11/2026. Imobilização por ____ dias.',
      'O senhor costuma dar alguma informação sobre a chance de o cisto voltar? Qual?',
      'Os locais citados no texto (dorso do punho, palma, base do dedo, articulação da ponta) correspondem ao que o senhor mais vê?',
    ],
  },
  {
    slug: 'dor-na-palma-da-mao',
    title: 'Dor na palma da mão',
    short: 'Muitas causas possíveis, e a avaliação especializada ajuda a encontrar a certa.',
    seoDesc: 'Dor na palma da mão: causas mais comuns, como é feita a avaliação e quando procurar um cirurgião da mão. Dr. Edson Kenji Takaki, Londrina.',
    blocks: [
      { h: 'Por que a palma dói', p: ['A palma da mão tem pele, músculos, tendões, ossos, ligamentos e vasos. Qualquer uma dessas estruturas pode ser afetada por um trauma, por sobrecarga ou sem motivo aparente. Dor que persiste merece avaliação.'] },
      { h: 'Causas frequentes', ul: ['Tendinopatias, por movimentos repetidos ou esforço', 'Síndrome do túnel do carpo', 'Síndrome do túnel cubital', 'Problemas na coluna cervical que irradiam para a mão', 'Cistos', 'Fibrose', 'Tumores', 'Doença de Dupuytren'] },
      { h: 'Sintomas que acompanham a dor', p: ['Dependem da causa. Tendinites podem limitar o movimento dos dedos. A compressão de um nervo pode causar perda de sensibilidade e enfraquecimento dos músculos. Um tumor aparece como um aumento de volume anormal. Contar ao médico o que mais você sente ajuda a chegar ao diagnóstico.'] },
      { h: 'Como é a avaliação', p: ['Começa com uma conversa detalhada sobre a dor: quando surgiu, o que piora, o que alivia. Em seguida vem o exame físico completo da mão, do punho e do antebraço. Conforme a suspeita, o médico pede ultrassom, radiografia ou ressonância.'] },
      { h: 'Tratamento', p: ['Depende da causa. Em geral começa sem cirurgia, com imobilização, fisioterapia, compressas e medicação. A cirurgia entra quando o tratamento sem operação não resolve, ou em situações específicas, como um tumor.'] },
      { h: 'Como reduzir a sobrecarga', p: ['Fazer pausas durante o trabalho, alongar as mãos e os punhos e evitar posições forçadas por muito tempo ajudam a diminuir o risco de dor por esforço repetido.'] },
    ],
    confirmar: [
      'A lista de causas representa o que o senhor mais atende? O que acrescentar ou tirar?',
      'Quais exames o senhor mais pede nesse quadro?',
      'Existe alguma orientação de alongamento que o senhor recomenda e queira colocar no site?',
      'Algum ponto deste texto o senhor diria de outra forma?',
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
      { h: 'O que é', p: ['É a compressão do nervo ulnar no túnel cubital, na parte interna do cotovelo, no ponto em que ele passa por estruturas de osso, ligamento e tendão a caminho do antebraço. É a segunda síndrome compressiva mais comum do membro superior, depois do túnel do carpo.'] },
      { h: 'Sintomas', p: ['No início, a pessoa sente formigamento nos dedos anelar e mínimo, dor no cotovelo e no antebraço e menos força na mão. Se o quadro avança, os músculos da mão podem diminuir de volume, e os dedos anelar e mínimo podem ficar em forma de garra.'] },
      { h: 'Quem tem mais chance', ul: ['Quem mantém o cotovelo dobrado ou apoiado por muito tempo', 'Quem já teve fratura ou trauma perto do cotovelo', 'Pessoas com insuficiência renal ou artrite reumatoide'] },
      { h: 'Como é a avaliação', p: ['Começa pela história do paciente e por um exame físico cuidadoso. O médico pode pedir eletroneuromiografia, ultrassom e ressonância do cotovelo ou da coluna cervical, para medir a gravidade e procurar outras causas ou condições associadas.'] },
      { h: 'Tratamento', p: ['Em geral, começa com ajuste de postura, órtese para posicionar o cotovelo, fisioterapia e medicação. Os casos que não respondem, ou que já têm perda de força, podem precisar de cirurgia para liberar o nervo.'] },
      { h: 'Como prevenir', p: ['Evitar a flexão prolongada do cotovelo e o apoio sobre a parte interna dele, e manter alongamentos e exercícios de fortalecimento da região, ajuda a proteger o nervo.'] },
    ],
    confirmar: [
      'Qual técnica cirúrgica o senhor usa: liberação simples, transposição do nervo ou outra?',
      'Após a cirurgia, o cotovelo fica imobilizado por ____ dias?',
      'Retirada dos pontos: com ____ dias. Volta ao trabalho: após ____ semanas.',
      'Com que grau de perda de força o senhor passa a indicar cirurgia?',
      'Algum ponto deste texto o senhor diria de outra forma?',
    ],
  },
  {
    slug: 'dor-nas-maos-na-gravidez',
    title: 'Dor nas mãos na gravidez',
    short: 'A retenção de líquido pode comprimir nervos e tendões durante a gestação.',
    seoDesc: 'Dor nas mãos na gravidez: por que acontece, o que pode ser feito e como prevenir. Dr. Edson Kenji Takaki, cirurgião da mão em Londrina.',
    blocks: [
      { h: 'Por que acontece', p: ['Na gestação, as mudanças hormonais aumentam a retenção de líquidos, e o inchaço pode pressionar nervos e tendões da mão. Dor nas mãos não faz parte do esperado na gravidez e merece ser investigada.'] },
      { h: 'Problemas mais comuns', ul: ['Tendinite', 'Sinovite', 'Síndrome do túnel do carpo', 'Síndrome do túnel cubital'] },
      { h: 'Quem tem mais chance', ul: ['Gestantes com diabetes', 'Idade mais avançada', 'Histórico de doença reumatológica', 'Dores nas mãos antes da gestação'] },
      { h: 'Como é o cuidado', p: ['Na gravidez, evita-se medicação desnecessária, por causa do risco para o bebê. O plano depende do problema, do incômodo e da fase da gestação, e é combinado com o obstetra. Fisioterapia ou terapia ocupacional, repouso e compressas ajudam a controlar os sintomas.', 'Os sintomas podem continuar ou piorar depois do parto, pelas demandas do cuidado com o recém-nascido. Procurar avaliação cedo costuma deixar o tratamento mais simples.'] },
      { h: 'Como prevenir', p: ['Alongamentos, exercícios, controle do inchaço e do ganho de peso e as consultas de pré-natal ajudam. Se a dor aparecer, procure um especialista em mão.'] },
    ],
    confirmar: [
      'Quais condutas o senhor adota na gestação (órtese, fisioterapia, outras)? Algo mais deve entrar no texto?',
      'Em que casos o senhor indica cirurgia durante a gestação, se algum?',
      'O senhor orienta drenagem linfática? (O texto não cita.)',
      'Algum ponto deste texto o senhor diria de outra forma?',
    ],
  },
  {
    slug: 'sindactilia',
    title: 'Sindactilia',
    short: 'Alteração congênita em que dois ou mais dedos ficam unidos.',
    seoDesc: 'Sindactilia: o que é, como é feito o diagnóstico e como funciona a cirurgia de separação dos dedos. Dr. Edson Kenji Takaki, Londrina.',
    blocks: [
      { h: 'O que é', p: ['A sindactilia é uma alteração congênita, presente desde o nascimento, em que a separação dos dedos não se completa durante a formação do bebê. Pode envolver só as partes moles, que é a forma simples, ou também os ossos, que é a forma complexa.', 'É a alteração congênita mais comum da mão. Pode ocorrer sozinha ou associada a síndromes genéticas, como as de Poland, Apert e Holt-Oram.'] },
      { h: 'Como é o diagnóstico', p: ['O diagnóstico é clínico. A radiografia ajuda a classificar a alteração. O médico também avalia o resto do corpo, para saber se o caso é isolado ou faz parte de uma síndrome.'] },
      { h: 'Como é a cirurgia', p: ['O tratamento é cirúrgico e depende do tipo de alteração. O cirurgião separa os dedos com incisões em zigue-zague, preservando nervos e vasos, e, quando necessário, o osso. Na maioria das vezes falta pele para cobrir os dois dedos, e é preciso um enxerto, retirado de outra parte do corpo.', 'A cirurgia é feita com anestesia geral. Em crianças, o momento da operação é escolhido pelo médico, com atenção à segurança anestésica e, de preferência, antes da idade escolar. Quando mais de dois dedos estão unidos, a separação é feita em etapas.'] },
      { h: 'Pós-operatório', p: ['Os enxertos de pele são delicados, por isso os primeiros curativos são feitos pelo médico. É preciso cuidar das cicatrizes e, conforme a criança cresce, podem ser necessárias cirurgias complementares. O acompanhamento até a recuperação completa faz parte do tratamento.'] },
    ],
    confirmar: [
      'Idade em que o senhor costuma operar: a partir de ____ meses/anos. (O texto anterior do documento falava em 1 ano e meio a 2 anos. Confirme.)',
      'Os curativos são feitos toda semana por quantas semanas: ____.',
      'De onde o senhor costuma retirar o enxerto de pele?',
      'Quanto tempo a criança fica internada: ____ dias.',
      'Quais cuidados com a cicatriz o senhor recomenda, e por quanto tempo?',
      'Algum ponto deste texto o senhor diria de outra forma?',
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
      { h: 'O que é', p: ['No dedo em martelo, ou mallet finger, a ponta do dedo fica caída e a pessoa não consegue esticá-la sozinha. A causa é uma lesão do mecanismo extensor na última articulação do dedo.'] },
      { h: 'Como acontece', p: ['Geralmente por um trauma que dobra à força a ponta de um dedo esticado, como uma bolada. O sintoma principal é a ponta caída. Também podem aparecer dor, inchaço e hematoma.'] },
      { h: 'Tipos', p: ['O tendão pode se soltar do osso sem fratura, o tipo tendíneo, ou arrancar um pedaço do osso junto, o tipo ósseo. Essa diferença ajuda a definir o tratamento.'] },
      { h: 'Tratamento sem cirurgia', p: ['Consiste em imobilizar a ponta do dedo esticada, com uma tala ou uma órtese feita sob medida. O tratamento é longo, com uso contínuo da imobilização seguido de uso noturno. Durante esse período, a ponta do dedo não pode ser dobrada, nem na hora da higiene, porque isso pode comprometer o resultado. O médico ensina como tirar e recolocar a órtese.'] },
      { h: 'Quando a cirurgia é considerada', ul: ['Fragmento de osso grande, com desvio', 'Lesão aberta, causada por corte', 'Casos antigos', 'Quando o paciente não consegue manter a imobilização'], p: ['Na cirurgia, costumam ser usados fios metálicos temporários para estabilizar a articulação, retirados depois. O médico explica as vantagens e os limites de cada caminho.'] },
    ],
    confirmar: [
      'Imobilização contínua: ____ semanas. Uso noturno depois: ____ semanas. (O texto anterior do documento falava em 8 semanas e 2 semanas à noite. Confirme.)',
      'Quanto tempo o paciente fica com os fios metálicos, quando operado: ____ semanas.',
      'Quando o paciente pode voltar a esportes e a trabalhos manuais: após ____ semanas.',
      'Algum ponto deste texto o senhor diria de outra forma?',
    ],
  },
]

export const ARTICLE_BY_SLUG = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]))
