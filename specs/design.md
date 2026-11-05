# specs/design.md: Identidade visual

Legenda: ✅ aprovado · 🟡 proposta (confirmar) · ❓ pendente

## Direção ✅ (pedido do cliente)
Azul vivo, entre sério e alegre (ajustado em 2026-11-05; antes, cobalto mais escuro). Adaptação do padrão editorial do site do Dr. Amilcar, sem copiar: outra paleta, outra tipografia, outra estrutura.

## Paleta 🟡
| Papel | Hex |
|---|---|
| Cobalto (cor principal, hero, blocos escuros) | `#1F5FD4` |
| Cobalto profundo (header ao rolar, hover) | `#1749AE` |
| Tinta (texto) | `#0E2A52` |
| Aço (texto secundário) | `#4C6585` |
| Gelo | `#D5E5FC` |
| Frost (seções alternadas) | `#EAF2FE` |
| Paper (fundo) | `#F5F9FF` |
| Aqua (detalhe pontual, do cartão do Dr.) | `#5CC0F2` |

Aqua só em linhas, números e ícones, nunca em botões nem texto pequeno sobre cobalto.

## Tipografia 🟡
Newsreader (títulos, itálico para a palavra de destaque) e Manrope (texto e interface). Rótulos em maiúsculas, 12px, tracking +0.2em.

## Layout
Arredondamento de 14px em todos os elementos (botões, menu, painéis, cartões, fotos), definido pelo cliente. Hero em painel cobalto, seções Frost e Cobalto como painéis flutuantes com pequena margem lateral, cartões com sombra difusa, patologias como índice editorial. Sombras só suaves e com deslocamento.

## Logo 🟡
Símbolo da mão (pílulas + arco + anel) vetorizado a partir do cartão do Dr. Provisório. `[CONFIRMAR]` pedir o SVG oficial.

## Fotografia ✅
Todas as 18 imagens do documento do cliente (fotos com autorização, segundo o cliente). Ilustrações anatômicas e imagens de mãos (túnel do carpo, dedo em gatilho, De Quervain, túnel cubital, dedo em martelo) parecem de banco ou de terceiros: `[CONFIRMAR]` licença ou trocar por fotos próprias.

## Movimento
Entrada sutil (fade + 28px), parallax leve, revelação ao rolar. Respeita `prefers-reduced-motion`.
