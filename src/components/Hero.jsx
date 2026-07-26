import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import SeatGraphic from './SeatGraphic'

const DEMO_MIN = 2
const DEMO_TOTAL = 6

function HeroDemo() {
  const [filled, setFilled] = useState(DEMO_MIN)

  useEffect(() => {
    const timer = setInterval(() => {
      setFilled((f) => (f >= DEMO_TOTAL ? DEMO_MIN : f + 1))
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const isLive = filled >= DEMO_TOTAL
  const toGo = DEMO_TOTAL - filled

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/15 via-accent/5 to-pending/10 blur-2xl" />
      <div className="relative rounded-3xl border border-border bg-surface-raised/90 p-8 shadow-xl shadow-accent/5 backdrop-blur">
        <div className="flex flex-col items-center">
          <SeatGraphic seatsFilled={filled} seatsTotal={DEMO_TOTAL} size={200} />
          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-ink">
              🎲 Board Games · Gamescape · Fri 7 PM
            </p>
            <p
              className={`mt-1.5 text-xs font-medium transition-colors duration-500 ${
                isLive ? 'text-confirmed' : 'text-pending'
              }`}
            >
              {isLive
                ? 'Quorum reached — this table is happening'
                : `${toGo} more ${toGo === 1 ? 'person' : 'people'} to make it real`}
            </p>
          </div>
        </div>
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-ink-muted">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-confirmed" />
          LIVE DEMO
        </span>
      </div>
    </div>
  )
}

export default function Hero({ tables, onBrowse, onHow }) {
  const openTables = tables.filter((t) => t.status === 'pending').length
  const seatsClaimed = tables.reduce((sum, t) => sum + t.seatsFilled, 0)
  const venues = new Set(tables.map((t) => t.venue)).size

  const stats = [
    { value: openTables, label: 'tables open tonight' },
    { value: seatsClaimed, label: 'seats claimed' },
    { value: venues, label: 'partner venues' },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #d4d4d8 1px, transparent 0)',
            backgroundSize: '28px 28px',
            maskImage: 'linear-gradient(to bottom, black, transparent 70%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft/60 px-3 py-1 text-xs font-semibold text-accent">
              <Sparkles size={13} />
              Now piloting in San Francisco
            </span>
            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-[3.4rem]">
              Tables only happen when{' '}
              <span className="relative whitespace-nowrap text-accent">
                enough people
                <svg
                  className="absolute -bottom-1.5 left-0 w-full"
                  viewBox="0 0 200 9"
                  fill="none"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7C50 2 150 2 198 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>
              </span>{' '}
              show up
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              Propose a meetup at a real place. Watch seats fill in real time.
              Pay your share only when it&apos;s actually happening.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onBrowse}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition hover:bg-accent/90 hover:shadow-accent/35 active:scale-[0.98]"
              >
                Browse open tables
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={onHow}
                className="rounded-xl border border-border bg-surface-raised px-5 py-3.5 text-sm font-semibold text-ink transition hover:border-ink/20 hover:bg-ink/[0.03]"
              >
                How it works
              </button>
            </div>

            <dl className="mt-10 flex items-center gap-6 sm:gap-8">
              {stats.map(({ value, label }, i) => (
                <div key={label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && <span className="h-8 w-px bg-border" aria-hidden="true" />}
                  <div>
                    <dt className="sr-only">{label}</dt>
                    <dd className="text-2xl font-semibold tracking-tight text-ink">
                      {value}
                    </dd>
                    <p className="text-xs text-ink-muted">{label}</p>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <HeroDemo />
        </div>
      </div>
    </section>
  )
}
