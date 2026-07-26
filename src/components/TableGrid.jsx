import { useState } from 'react'
import TableCard from './TableCard'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'pending', label: 'Pending' },
  { id: 'confirmed', label: 'Confirmed' },
  { id: 'free', label: 'Free' },
]

export default function TableGrid({ tables, onSelect, onJoin }) {
  const [filter, setFilter] = useState('all')

  const visible = tables.filter((t) => {
    if (filter === 'pending') return t.status === 'pending'
    if (filter === 'confirmed') return t.status === 'confirmed'
    if (filter === 'free') return t.pricePerPerson === 0
    return true
  })

  const pendingCount = tables.filter((t) => t.status === 'pending').length
  const confirmedCount = tables.filter((t) => t.status === 'confirmed').length

  return (
    <section id="tables" className="scroll-mt-16 border-t border-border bg-surface-raised/60">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              This week in San Francisco
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
              Open tables nearby
            </p>
            <p className="mt-2 text-ink-muted">
              Join a pending table — seats fill as people commit.
            </p>
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-3.5 py-1.5 text-sm font-medium text-ink-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-pending" />
            {pendingCount} pending · {confirmedCount} confirmed
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-1.5" role="group" aria-label="Filter tables">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition ${
                filter === id
                  ? 'bg-ink text-white'
                  : 'bg-transparent text-ink-muted hover:bg-ink/5 hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-border py-14 text-center text-sm text-ink-muted">
            No tables here yet — propose one and take the first seat.
          </p>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((table) => (
              <TableCard
                key={table.id}
                table={table}
                onSelect={onSelect}
                onJoin={onJoin}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
