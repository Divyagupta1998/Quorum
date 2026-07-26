import { Plus, ArrowRight } from 'lucide-react'

export default function CtaBand({ onPropose, onBrowse }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-accent px-6 py-14 text-center shadow-xl shadow-accent/20 sm:px-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative">
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Got an idea for a table?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/80">
            Propose it in thirty seconds. You take the first seat, the city
            fills the rest — and if it doesn&apos;t fill, it costs nothing.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onPropose}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-accent shadow-md transition hover:bg-white/90 active:scale-[0.98]"
            >
              <Plus size={16} strokeWidth={2.5} />
              Propose a table
            </button>
            <button
              type="button"
              onClick={onBrowse}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Browse open tables
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
