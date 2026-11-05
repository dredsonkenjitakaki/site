// Animações (GSAP). Roda só no navegador, depois da hidratação. Retorna a função de limpeza.
export async function initMotion(): Promise<() => void> {
  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
  gsap.registerPlugin(ScrollTrigger)
  ;(window as unknown as { __motion?: boolean }).__motion = true

  const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector<T>(s)
  const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll<T>(s))
  const ease = 'power3.out'

  const mm = gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const w = window as unknown as { __hdr?: boolean }
    if (!w.__hdr) {
      w.__hdr = true
      gsap.fromTo('#hdr', { yPercent: -100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.9, ease, delay: 0.1, clearProps: 'transform' })
    } else gsap.set('#hdr', { autoAlpha: 1 })

    if ($('.hero')) {
      const tl = gsap.timeline({ defaults: { ease } })
      tl.fromTo('.hero .ph', { scale: 1.08, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 2, ease: 'power2.out' }, 0)
        .fromTo('.hero .in .eyebrow', { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.3)
        .set('.hero h1', { autoAlpha: 1 }, 0.4)
        .fromTo('.hero h1 .ln>span', { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.12 }, 0.4)
        .fromTo('.hero .lead,.hero .ctas,.hero .cred', { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.9)
      gsap.to('.hero .ph img', { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    }

    if ($('.phero')) gsap.fromTo('.phero .crumb,.phero h1,.phero .lead', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12, ease, delay: 0.25 })

    $$('[data-rv]').forEach((el) =>
      gsap.fromTo(el, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.9, ease, scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
    )
    $$('[data-par]').forEach((img) =>
      gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
    )
    $$('[data-line]').forEach((el) =>
      gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 1.2, ease: 'power2.inOut', scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
    )
  })

  const refresh = () => ScrollTrigger.refresh()
  if (document.readyState !== 'complete') window.addEventListener('load', refresh, { once: true })
  document.fonts?.ready.then(refresh)

  return () => {
    window.removeEventListener('load', refresh)
    mm.revert()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  }
}
