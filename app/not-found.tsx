import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Página não encontrada | Dr. Edson Kenji Takaki', robots: { index: false } }

export default function NotFound() {
  return (
    <>
      <main id="conteudo">
        <section className="phero" data-first style={{ minHeight: '78svh', display: 'flex', alignItems: 'center' }}>
          <div className="wrap">
            <div className="eyebrow">Erro 404</div>
            <h1 className="serif" style={{ margin: '14px 0' }}>Esta página <em>não existe.</em></h1>
            <p className="lead">O endereço pode ter mudado ou estar incorreto.</p>
            <div className="ctas"><Link className="btn btn-light" href="/">Voltar ao início</Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
