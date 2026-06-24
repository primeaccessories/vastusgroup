import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import GlassIcon from './GlassIcon'
import { hasDetail, type Service } from '../lib/services'

function ServiceCard({ service }: { service: Service }) {
  const clickable = hasDetail(service)

  const inner = (
    <>
      <GlassIcon Icon={service.Icon} tone="mint" size="md" />
      <h3 className="mt-4 font-display text-[15px] font-semibold leading-tight tracking-tight text-ink">
        {service.title}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-xs leading-snug text-ink-muted">{service.tagline}</p>
      {clickable && (
        <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-mint-deep">
          Learn more
          <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </>
  )

  const base =
    'group flex h-full flex-col items-center rounded-2xl bg-white p-5 text-center ring-1 ring-ink/[0.06] shadow-[0_18px_44px_-32px_rgba(10,18,38,0.45)]'

  if (clickable) {
    return (
      <Link
        to={`/services/${service.slug}`}
        className={`${base} transition duration-300 hover:-translate-y-1 hover:ring-mint/40`}
      >
        {inner}
      </Link>
    )
  }

  return <div className={base}>{inner}</div>
}

export default function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  )
}
