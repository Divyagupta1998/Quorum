import { ArrowLeft, MapPin, Clock, DollarSign, Info } from 'lucide-react'
import SeatGraphic from './SeatGraphic'
import { mockAttendees } from '../data/mockTables'

export default function TableDetail({ table, onBack, onJoin }) {
  const isConfirmed = table.status === 'confirmed'
  const seatsLeft = table.seatsTotal - table.seatsFilled
  const attendees = mockAttendees.slice(0, Math.min(table.seatsFilled, mockAttendees.length))

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-14">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition hover:text-ink"
      >
        <ArrowLeft size={16} />
        Back to tables
      </button>

      <div className="animate-fade-up rounded-3xl border border-border bg-surface-raised p-6 shadow-sm sm:p-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
          <div className="shrink-0">
            <SeatGraphic
              seatsFilled={table.seatsFilled}
              seatsTotal={table.seatsTotal}
              status={table.status}
              size={190}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span className="text-3xl" aria-hidden="true">
                {table.emoji}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${
                  isConfirmed
                    ? 'bg-confirmed-soft text-confirmed'
                    : 'bg-pending-soft text-pending'
                }`}
              >
                {isConfirmed ? 'Confirmed' : 'Pending'}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
              {table.activity}
            </h1>
            <p className="mt-1 text-sm text-ink-muted">
              Hosted by <span className="font-medium text-ink">{table.host}</span>
              {table.category && (
                <span className="ml-2 rounded-full bg-surface px-2 py-0.5 text-[11px] font-medium text-ink-subtle ring-1 ring-border">
                  {table.category}
                </span>
              )}
            </p>
            {table.description && (
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {table.description}
              </p>
            )}

            <ul className="mt-5 space-y-2.5 text-sm text-ink">
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <MapPin size={15} className="shrink-0 text-ink-subtle" />
                {table.venue}
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <Clock size={15} className="shrink-0 text-ink-subtle" />
                {table.time}
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <DollarSign size={15} className="shrink-0 text-ink-subtle" />
                {table.pricePerPerson === 0
                  ? 'Free to hold your seat'
                  : `$${table.pricePerPerson} per person, charged only at quorum`}
              </li>
            </ul>

            {attendees.length > 0 && (
              <div className="mt-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink-subtle">
                  At the table
                </p>
                <div className="flex flex-wrap justify-center gap-1.5 sm:justify-start">
                  {attendees.map((person) => (
                    <span
                      key={person.id}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface py-1 pl-1 pr-2.5 text-xs font-medium text-ink"
                    >
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-semibold text-white"
                        style={{ backgroundColor: person.color }}
                      >
                        {person.name[0]}
                      </span>
                      {person.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {!isConfirmed && (
              <>
                <button
                  type="button"
                  onClick={() => onJoin(table.id)}
                  className="mt-6 w-full rounded-xl bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent/90 active:scale-[0.99] sm:w-auto"
                >
                  Join this table
                </button>
                <p className="mt-3 flex items-start justify-center gap-1.5 text-xs leading-relaxed text-ink-subtle sm:justify-start">
                  <Info size={13} className="mt-0.5 shrink-0" />
                  {seatsLeft === 1
                    ? 'Your seat is the one that makes it happen.'
                    : `Needs ${seatsLeft} more people before anything is booked or paid.`}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
