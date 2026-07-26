import { MapPin, Clock, Check } from 'lucide-react'
import SeatGraphic from './SeatGraphic'
import { mockAttendees } from '../data/mockTables'

function AvatarStack({ count }) {
  const shown = mockAttendees.slice(0, Math.min(count, 4))
  const extra = count - shown.length
  return (
    <div className="flex items-center">
      <div className="flex -space-x-1.5">
        {shown.map((person) => (
          <span
            key={person.id}
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-surface-raised text-[9px] font-semibold text-white"
            style={{ backgroundColor: person.color }}
            title={person.name}
          >
            {person.name[0]}
          </span>
        ))}
      </div>
      {extra > 0 && (
        <span className="ml-1.5 text-xs font-medium text-ink-muted">
          +{extra}
        </span>
      )}
    </div>
  )
}

export default function TableCard({ table, onSelect, onJoin }) {
  const isConfirmed = table.status === 'confirmed'
  const seatsLeft = table.seatsTotal - table.seatsFilled

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-raised shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-lg">
      <button
        type="button"
        onClick={() => onSelect(table.id)}
        className="flex flex-1 flex-col text-left"
      >
        {/* Header strip */}
        <div
          className={`flex items-center justify-between px-5 py-3 text-[11px] font-semibold ${
            isConfirmed
              ? 'bg-confirmed-soft/60 text-confirmed'
              : 'bg-pending-soft/50 text-pending'
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isConfirmed ? 'bg-confirmed' : 'animate-pulse bg-pending'
              }`}
            />
            {isConfirmed
              ? 'Confirmed — table is live'
              : seatsLeft === 1
                ? 'Only 1 seat to quorum'
                : `${seatsLeft} seats to quorum`}
          </span>
          <span className="rounded-full bg-surface-raised/80 px-2 py-0.5 text-[10px] font-semibold text-ink-muted">
            {table.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-xl">
              {table.emoji}
            </span>
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold text-ink transition-colors group-hover:text-accent">
                {table.activity}
              </h3>
              <p className="text-xs text-ink-muted">
                Hosted by <span className="font-medium text-ink">{table.host}</span>
              </p>
            </div>
          </div>

          <div className="my-3 flex justify-center">
            <SeatGraphic
              seatsFilled={table.seatsFilled}
              seatsTotal={table.seatsTotal}
              status={table.status}
              size={144}
            />
          </div>

          <div className="space-y-1.5 text-sm text-ink-muted">
            <p className="flex items-center gap-1.5">
              <MapPin size={14} className="shrink-0 text-ink-subtle" />
              <span className="truncate">{table.venue}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Clock size={14} className="shrink-0 text-ink-subtle" />
              {table.time}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-3.5">
            <AvatarStack count={table.seatsFilled} />
            <span className="text-sm font-semibold text-ink">
              {table.pricePerPerson === 0 ? (
                'Free'
              ) : (
                <>
                  ${table.pricePerPerson}
                  <span className="text-xs font-normal text-ink-muted">
                    /person
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
      </button>

      <div className="px-5 pb-5">
        <button
          type="button"
          disabled={isConfirmed}
          onClick={(e) => {
            e.stopPropagation()
            onJoin(table.id)
          }}
          className={`inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99] ${
            isConfirmed
              ? 'cursor-default bg-confirmed-soft text-confirmed'
              : 'bg-accent text-white shadow-sm shadow-accent/20 hover:bg-accent/90'
          }`}
        >
          {isConfirmed ? (
            <>
              <Check size={15} strokeWidth={2.5} />
              Table confirmed
            </>
          ) : (
            'Join this table'
          )}
        </button>
      </div>
    </article>
  )
}
