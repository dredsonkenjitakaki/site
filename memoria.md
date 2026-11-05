# memoria.md: Histórico vivo do projeto

## Decisões aprovadas
- 2026-11-05 · Projeto novo em `C:\amilcar\drtakaki`, repositório `HROSHEY/DrTakaki`. Base técnica copiada do site do Dr. Amilcar (stack, header, footer, motion). Identidade própria.
- 2026-11-05 · Cor: azul mais claro e frio (cobalto/aço), pedido do cliente.
- 2026-11-05 · Usar todas as imagens do documento; cliente informou que as fotos têm autorização.
- 2026-11-05 · Humanizer aplicado aos textos: sem travessões, sem superlativos, sem "tem cura".

## Alterações realizadas
- 2026-11-05 · Design suavizado a pedido do cliente ("muito quadrado"): painéis arredondados, menu e botões em pílula, retratos em arco, cartões com sombra difusa. Substitui a proposta anterior de cantos de 2px. Eyebrows mantidos.
- 2026-11-05 · Artigos reescritos do zero (9 temas, com cisto sinovial) em `lib/articles.ts`. Documento de revisão para o Dr. gerado em `revisao/Revisao-textos-Dr-Takaki.docx` (script em `tools/`). Prazos de repouso, imobilização e retirada de pontos ficam genéricos no site até o Dr. informar os valores.
- 2026-11-05 · Estrutura construída: Home, Patologias (9 artigos), Microcirurgia, Trajetória, Orientações, 404, sitemap, robots, JSON-LD (Physician, BreadcrumbList). Build passou (19 páginas).
- 2026-11-05 · Imagens extraídas do .doc (18), tratadas e convertidas para WebP em `public/img`. As fotos 3 e 5 vinham com orientação EXIF; já corrigidas.

## Problemas encontrados
- **Texto de terceiros no documento.** O artigo "Dedo em gatilho" é idêntico ao de dramarinapisani.com.br, e o documento linka outras páginas dessa mesma médica (túnel do carpo, De Quervain, microcirurgia, tendinite, cisto sinovial, alongamento, traumas). Os demais artigos têm o mesmo estilo e provavelmente têm a mesma origem. **Não foram copiados.** Os textos de patologia e de microcirurgia no site são originais, curtos e conservadores, e precisam ser revisados e aprovados pelo Dr. Takaki.
- Imagens de mãos e ilustrações podem ser de banco ou de terceiros.
- "35 anos de expertise" não bate com 1987. Usado "Desde 1987" até confirmação.
- WhatsApp aparece truncado em um trecho do documento (99150-61); usado (43) 99150-6159.
- Caso de paciente identificado (reimplante de ambas as mãos) e dados pessoais/religiosos do Dr. não foram usados.

## Pendências
- Confirmar com o Dr.: UF/RQE do CRM, "35 anos", textos de todas as páginas, legenda "Lions: honrarias".
- Fotos prometidas no documento: Dr. com lupa, cirurgias, prédio/estacionamento/recepção, sala com o Dr., Dr. com a mão.
- Logo oficial em SVG. Lista de "tipos de patologias" da página 2 do documento.
- Domínio (`NEXT_PUBLIC_SITE_URL` na Vercel). Política de privacidade (LGPD) se houver analytics.
- Instagram/Facebook, se houver.
- Verificar autorização de imagens cirúrgicas (CFM) e das imagens de terceiros.
