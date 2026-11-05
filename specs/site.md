# specs/site.md: O que construir

Legenda: ✅ aprovado · 🟡 proposta (confirmar) · ❓ pendente

## Objetivo ✅
Apresentar a trajetória do Dr. Takaki, explicar as condições da mão que ele trata e facilitar o agendamento, com tom acolhedor e técnico, sem apelo comercial.

## Público 🟡
Pacientes de Londrina e região com problemas na mão, no punho e no antebraço, e pessoas encaminhadas por outros médicos.

## Idioma ✅
Somente português (BR).

## Estrutura 🟡
- `/` Home: hero, fatos, atendimento humanizado, a mão, patologias, microcirurgia, trajetória, orientações, consultório, contato.
- `/patologias` e `/patologias/[slug]`: 9 artigos (túnel do carpo, dedo em gatilho, De Quervain, cisto sinovial, dor na palma, túnel cubital, dor nas mãos na gravidez, sindactilia, dedo em martelo). Uma URL por condição, para SEO.
- `/microcirurgia`, `/trajetoria` (inclui imprensa e vídeos), `/orientacoes` (pré e pós-operatório).

## Contato ✅ (do documento do cliente)
- Consultório: Av. Bandeirantes, 500, 6º andar, sala 608, Jardim Ipiranga, Londrina-PR. Mapa: https://maps.app.goo.gl/YrCq5wBw4fnsSpCD6
- Telefone (43) 3324-6159. WhatsApp (43) 99150-6159 (secretária Luciane).
- Hospitais: Evangélico e Unimed.
- Sem Instagram/Facebook até o cliente informar `[CONFIRMAR]`.

## CTA ✅
Botão "Agendar consulta" abre o WhatsApp do consultório (`wa.me`, mensagem pré-preenchida). Header, hero, páginas internas, contato e barra fixa no celular. Sem formulário.

## Credenciais: o que pode ser afirmado
Pode: CRM 7669; formação na UEL; bolsa do governo japonês em 1984 e três anos de especialização na Universidade de Tóquio (cirurgia plástica reconstrutora, cirurgia da mão, microcirurgia); retorno em 1987; Hospital Evangélico.
Pendente `[CONFIRMAR]`: UF e RQE; "35 anos de expertise" (o documento diz 35; o retorno em 1987 sugere cerca de 38); título de especialista e sociedades.
Não usar: nome de paciente, dados pessoais e religiosos, superlativos.

## Stack ✅
Next.js 15 (App Router) + React 19 + TypeScript, GSAP + ScrollTrigger, CSS global, next/font/local (fontes auto-hospedadas), next/image. Export estático (`output: 'export'`). Hospedagem: Cloudflare Pages. Repositório: github.com/HROSHEY/DrTakaki.

## Responsividade e acessibilidade ✅
Mobile-first, WCAG 2.2 AA, `prefers-reduced-motion`, alvos de toque ≥ 44px, `lang="pt-BR"`.

## Fora do escopo
Blog, formulário com backend, agendamento online, depoimentos, antes e depois, multilíngue.
