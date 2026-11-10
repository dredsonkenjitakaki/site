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
- Home: logo após a faixa de fatos, seção "Microcirurgia: o que é possível" (reimplantes, cirurgia reconstrutiva, traumas complexos), com cirurgia da mão ainda em primeiro lugar no hero.
- `/microcirurgia`: o que é, reimplante, cirurgia reconstrutiva, quando procurar, em caso de amputação (primeiros socorros e urgência `[PENDENTE]`), equipamentos e formação.
- `/microcirurgia`, `/trajetoria` (inclui imprensa e vídeos), `/orientacoes` (pré e pós-operatório).

## Contato ✅ (do documento do cliente)
- Consultório: Av. Bandeirantes, 500, 6º andar, sala 608, Jardim Ipiranga, Londrina-PR. Mapa: https://maps.app.goo.gl/YrCq5wBw4fnsSpCD6
- Telefone (43) 3324-6159. WhatsApp (43) 99150-6159 (secretária Luciane).
- Hospitais: Evangélico e Unimed.
- Horários: seg e qua 8h às 18h · ter e qui 14h às 18h · sex 8h às 12h. Convênios: Unimed, Hospitalar (rede aberta) e Particular. (09/11/2026)
- Instagram do Dr.: @dredsonkenjitakaki (https://www.instagram.com/dredsonkenjitakaki/), onde ficam os casos de maior porte (reimplantes e cirurgias reconstrutivas), contados nas histórias. Desde 10/11/2026 a home e /microcirurgia também apresentam reimplantes e reconstruções, e o Instagram segue como vitrine dos casos. Facebook: sem até o cliente informar `[CONFIRMAR]`.

## CTA ✅
Botão "Agendar consulta" abre o WhatsApp do consultório (`wa.me`, mensagem pré-preenchida). Header, hero, páginas internas, contato e barra fixa no celular. Sem formulário.

## Credenciais: o que pode ser afirmado
Pode: CRM 7669; formação na UEL; bolsa do governo japonês em 1984 e três anos de especialização na Universidade de Tóquio (cirurgia plástica reconstrutora, cirurgia da mão, microcirurgia); retorno em 1987; Hospital Evangélico.
Também pode (informado em 09/11/2026): 40 anos de profissão; membro da SBCM (Sociedade Brasileira de Cirurgia da Mão).
Especialista (certificados do CRM-PR, 09/11/2026): Cirurgia da Mão, RQE 8847 (24/02/1999); Cirurgia Plástica, RQE 9249 (05/05/1999). Citar o RQE junto à especialidade.
Não usar: nome de paciente, dados pessoais e religiosos, superlativos.

## Stack ✅
Next.js 15 (App Router) + React 19 + TypeScript, GSAP + ScrollTrigger, CSS global, next/font/local (fontes auto-hospedadas), next/image. Export estático (`output: 'export'`). Hospedagem: Cloudflare Pages. Repositório: github.com/HROSHEY/DrTakaki.

## Responsividade e acessibilidade ✅
Mobile-first, WCAG 2.2 AA, `prefers-reduced-motion`, alvos de toque ≥ 44px, `lang="pt-BR"`.

## Fora do escopo
Blog, formulário com backend, agendamento online, depoimentos, antes e depois, multilíngue.
