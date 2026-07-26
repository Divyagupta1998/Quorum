import { useState } from 'react'
import { CalendarPlus, Check, MapPin, Clock, Link2 } from 'lucide-react'
import { mockAttendees } from '../data/mockTables'
import SeatGraphic from './SeatGraphic'

export default function ConfirmedTable({ table, joinerName, onBrowse }) {
  const [calendarAdded, setCalendarAdded] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  const attendees = []
  for (let i = 0; i < table.seatsFilled; i++) {
    const base = mockAttendees[i % mockAttendees.length]
    const isYou = i === table.seatsFilled - 1
    attendees.push(
      isYou
        ? { ...base, id: 'you', name: joinerName || 'You', you: true }
        : { ...base, id: `${base.id}-${i}` }
    )
  }

  const copyLink = () => {
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:px-6 sm:py-14">
      <div className="animate-fade-up rounded-3xl border border-border bg-surface-raised p-6 text-center shadow-sm sm:p-8">
        <div className="animate-pop-in mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-confirmed-soft text-confirmed">
          <Check size={22} strokeWidth={2.5} />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-ink">
          You&apos;re in — this table is live
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          Quorum reached. The reservation is locked and every seat is held.
        </p>

        <div className="mt-8 flex justify-center">
          <SeatGraphic
            seatsFilled={table.seatsFilled}
            seatsTotal={table.seatsTotal}
            status="confirmed"
            size={170}
          />
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold text-ink">
            {table.emoji} {table.activity}
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-muted">
            <li className="flex items-center justify-center gap-1.5">
              <MapPin size={14} />
              {table.venue}
            </li>
            <li className="flex items-center justify-center gap-1.5">
              <Clock size={14} />
              {table.time}
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink-subtle">
            Who&apos;s coming
          </p>
          <div className="flex flex-wrap items-start justify-center gap-2.5">
            {attendees.map((person, i) => (
              <div
                key={person.id}
                className="animate-pop-in flex w-12 flex-col items-center gap-1"
                style={{ animationDelay: `${i * 70}ms` }}
                title={person.name}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white ${
                    person.you ? 'ring-2 ring-accent ring-offset-2' : ''
                  }`}
                  style={{ backgroundColor: person.color }}
                >
                  {person.name[0].toUpperCase()}
                </div>
                <span className="w-full truncate text-[10px] text-ink-muted">
                  {person.you ? 'You' : person.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => setCalendarAdded(true)}
            className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition ${
              calendarAdded
                ? 'border-confirmed/30 bg-confirmed-soft text-confirmed'
                : 'border-border bg-surface text-ink hover:bg-ink/[0.03]'
            }`}
          >
            {calendarAdded ? <Check size={16} /> : <CalendarPlus size={16} />}
            {calendarAdded ? 'Added to calendar' : 'Add to calendar'}
          </button>
          <button
            type="button"
            onClick={copyLink}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink transition hover:bg-ink/[0.03]"
          >
            <Link2 size={16} />
            {linkCopied ? 'Link copied' : 'Share table'}
          </button>
          <button
            type="button"
            onClick={onBrowse}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-accent/90"
          >
            Browse more tables
          </button>
        </div>
      </div>
    </div>
  )
}
