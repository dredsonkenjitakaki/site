import type { MetadataRoute } from 'next'
import { ARTICLES, SITE_URL } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ['', '/trajetoria', '/patologias', '/microcirurgia', '/orientacoes']
  return [
    ...fixed.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8 })),
    ...ARTICLES.map((a) => ({ url: `${SITE_URL}/patologias/${a.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ]
}
