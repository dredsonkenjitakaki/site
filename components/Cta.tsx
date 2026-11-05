import type { ReactNode } from 'react'
import { waLink } from '@/lib/content'

// Botão "Agendar consulta": abre o WhatsApp do consultório em nova aba.
export default function Cta({
  className = 'btn btn-solid', children = 'Agendar consulta', onClick, id, text,
}: { className?: string; children?: ReactNode; onClick?: () => void; id?: string; text?: string }) {
  return (
    <a id={id} className={className} href={waLink(text)} target="_blank" rel="noopener" onClick={onClick} data-cta>
      {children}
    </a>
  )
}
