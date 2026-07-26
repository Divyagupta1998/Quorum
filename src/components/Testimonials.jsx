import { Quote } from 'lucide-react'
import { testimonials } from '../data/mockTables'

export default function Testimonials() {
  return (
    <section className="border-t border-border bg-surface-raised">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            From the pilot
          </h2>
          <p className="mx-auto mt-3 max-w-md text-3xl font-semibold tracking-tight text-ink">
            People show up when everyone&apos;s committed
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {testimonials.map(({ quote, name, role, color }) => (
            <figure
              key={name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <Quote size={20} className="text-accent/40" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: color }}
                >
                  {name[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-xs text-ink-muted">{role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
