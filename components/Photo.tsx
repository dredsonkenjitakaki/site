import Image from 'next/image'
import { IMG, type ImgKey } from '@/lib/images'

export default function Photo({
  k, alt, className, priority, sizes = '(max-width: 960px) 100vw, 50vw', style, par,
}: {
  k: ImgKey; alt: string; className?: string; priority?: boolean; sizes?: string; style?: React.CSSProperties; par?: boolean
}) {
  const i = IMG[k]
  return <Image src={i.src} width={i.w} height={i.h} alt={alt} className={className} priority={priority} sizes={sizes} style={style} data-par={par ? '' : undefined} />
}
