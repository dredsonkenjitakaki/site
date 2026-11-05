// Gera o HTML do documento de revisão para o Dr. Takaki a partir de lib/articles.ts.
// Uso: node tools/gerar-revisao.mjs <saida.html>
// Depois, converter para .docx no Word (ver tools/gerar-revisao.ps1).
import { writeFileSync } from 'node:fs'
import { ARTICLES } from '../lib/articles.ts'

const out = process.argv[2]
if (!out) throw new Error('Informe o caminho do HTML de saída.')

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const LINE = '<span class="fill">&nbsp;</span>'

const FOCUS = [
  'Cirurgia da mão',
  'Traumas da mão e do punho',
  'Reimplantes de membros',
  'Lesões por esmagamento',
  'Deformidades congênitas (por exemplo, sindactilia)',
  'Síndrome do túnel do carpo',
  'Síndrome do túnel cubital',
  'Dedo em gatilho',
  'Tenossinovite de De Quervain',
  'Cisto sinovial',
  'Dedo em martelo',
  'Doença de Dupuytren',
  'Lesões de nervos periféricos',
  'Cirurgia plástica reconstrutora (quais casos?)',
]

const box = (title, items) => `
<table class="box"><tr><td>
  <p class="boxh">${esc(title)}</p>
  ${items.map((q) => `<p class="q">☐ ${esc(q)}</p>`).join('\n')}
  <p class="q">Observações: ${LINE}</p>
</td></tr></table>`

const general = `
<h2>Antes dos textos: perguntas gerais</h2>

<h3>1. Quais condições o senhor atende?</h3>
<p>O documento original deixou essa lista em branco. Marque as que o senhor atende e acrescente as que faltam. As páginas do site seguem a lista que o senhor aprovar.</p>
${FOCUS.map((f) => `<p class="q">☐ ${esc(f)}</p>`).join('\n')}
<p class="q">Outras: ${LINE}</p>

<h3>2. Dados profissionais</h3>
<p class="q">CRM: número ${LINE} Estado ${LINE}</p>
<p class="q">RQE (se houver): ${LINE}</p>
<p class="q">Títulos de especialista e sociedades de que faz parte: ${LINE}</p>
<p class="q">O documento original fala em 35 anos de experiência, e o retorno do Japão foi em 1987. Qual número devemos usar? ${LINE}</p>

<h3>3. Microcirurgia</h3>
<p>A página sobre microcirurgia faz estas afirmações. Confirme cada uma ou corrija.</p>
<p class="q">☐ A microcirurgia reconstrutiva surgiu na década de 1970.</p>
<p class="q">☐ O microscópio cirúrgico aumenta a imagem cerca de 20 vezes.</p>
<p class="q">☐ Os fios usados são mais finos que um fio de cabelo.</p>
<p class="q">☐ Situações citadas: reimplante de dedos, reconstrução de nervos e vasos, cobertura de áreas sem pele com tecido que leva os próprios vasos.</p>
<p class="q">Correções: ${LINE}</p>

<h3>4. Orientações de pré e pós-operatório</h3>
<p>As orientações do site vieram do documento original. Confirme se continuam atuais: jejum a partir das 23h, internação com duas horas de antecedência, retorno cerca de uma semana depois da cirurgia, membro na tipoia com o cotovelo a cerca de 90°.</p>
<p class="q">Atuais: ☐ sim ☐ não. Mudanças: ${LINE}</p>

<h3>5. Imagens</h3>
<p class="q">☐ Confirmo que as fotos cirúrgicas e as fotos em que aparece têm autorização de uso.</p>
<p class="q">Ilustrações de mão e de nervos (túnel do carpo, dedo em gatilho, De Quervain, túnel cubital, dedo em martelo): são de sua autoria ou licenciadas? ${LINE}</p>
`

const article = (a, i) => `
<h2 class="pb">${i + 1}. ${esc(a.title)}</h2>
<p class="meta">Resumo que aparece na lista do site: ${esc(a.short)}</p>
${a.blocks
  .map(
    (b) => `<h3>${esc(b.h)}</h3>
${(b.p || []).map((t) => `<p>${esc(t)}</p>`).join('\n')}
${b.ul ? `<ul>${b.ul.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}`
  )
  .join('\n')}
${box('O que preciso que o senhor confirme neste texto', a.confirmar.map((q) => q.replace(/____/g, '________')))}
<p class="q">Texto aprovado: ☐ sim ☐ sim, com as correções acima ☐ não</p>
`

const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>Revisão dos textos do site</title>
<style>
  body{font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.45;color:#0E2A52}
  h1{font-size:24pt;color:#1E4FA8;margin-bottom:4pt}
  h2{font-size:17pt;color:#1E4FA8;border-bottom:1px solid #D6E4F5;padding-bottom:3pt;margin-top:22pt}
  h2.pb{page-break-before:always}
  h3{font-size:12.5pt;color:#153C83;margin:14pt 0 4pt}
  p{margin:0 0 6pt}
  .meta{color:#4C6585;font-size:10pt}
  .q{margin:4pt 0}
  .fill{border-bottom:1px solid #4C6585;display:inline-block;min-width:260pt}
  table.box{width:100%;border:1px solid #1E4FA8;background:#EAF1FA;margin:14pt 0 8pt;border-collapse:collapse}
  table.box td{padding:8pt 10pt}
  .boxh{font-weight:bold;color:#1E4FA8;margin-bottom:6pt}
  ul{margin-top:2pt}
</style></head><body>
<h1>Revisão dos textos do site</h1>
<p class="meta">Dr. Edson Kenji Takaki · Cirurgia da mão e microcirurgia</p>

<h2>Como revisar</h2>
<p>Este documento reúne os textos que vão para o site, em linguagem simples para o paciente. Eles foram escritos do zero, com base nos temas do documento original, e ainda não foram publicados.</p>
<p>Peço ao senhor três coisas:</p>
<ol>
  <li>Ler cada texto e corrigir diretamente no documento (de preferência com o controle de alterações do Word ligado).</li>
  <li>Preencher as linhas das caixas azuis, principalmente os prazos de repouso, imobilização e retirada de pontos. Os textos só terão números depois que o senhor informar os valores, porque o paciente quer essa informação e ela só vale se for sua.</li>
  <li>Responder as perguntas gerais da próxima seção, inclusive a lista de condições que o senhor atende.</li>
</ol>
<p>O que o senhor aprovar será publicado exatamente como estiver aqui.</p>

${general}
${ARTICLES.map(article).join('\n')}
</body></html>`

writeFileSync(out, html, 'utf8')
console.log('HTML gerado:', out, '·', ARTICLES.length, 'artigos')
