import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const EMOJI_OPTIONS = ['☕', '📚', '🎲', '✏️', '🧠', '🗣️', '🎨', '♟️', '🏃', '🎸']

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-subtle focus:border-accent focus:ring-2 focus:ring-accent/20'

export default function ProposeTable({ onClose, onCreate }) {
  const [activity, setActivity] = useState('')
  const [emoji, setEmoji] = useState('☕')
  const [venue, setVenue] = useState('')
  const [time, setTime] = useState('')
  const [seatsTotal, setSeatsTotal] = useState(5)
  const [price, setPrice] = useState('')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    onCreate({
      activity: activity.trim() || 'Untitled table',
      emoji,
      venue: venue.trim() || 'Somewhere nearby',
      time: time.trim() || 'Soon',
      seatsTotal: Number(seatsTotal),
      pricePerPerson: Math.max(0, Number(price) || 0),
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/30 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Propose a table"
        onClick={(e) => e.stopPropagation()}
        className="animate-fade-up w-full max-w-md rounded-t-3xl border border-border bg-surface-raised p-6 shadow-xl sm:rounded-3xl sm:p-7"
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-ink">
              Propose a table
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              You take the first seat. It goes live when it fills.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-ink-subtle transition hover:bg-ink/5 hover:text-ink"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="activity" className="mb-1.5 block text-xs font-medium text-ink-muted">
              Activity
            </label>
            <input
              id="activity"
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="Morning run club"
              autoFocus
              className={inputClass}
            />
          </div>

          <div>
            <span className="mb-1.5 block text-xs font-medium text-ink-muted">Icon</span>
            <div className="flex flex-wrap gap-1.5">
              {EMOJI_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setEmoji(option)}
                  aria-pressed={emoji === option}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl text-lg transition ${
                    emoji === option
                      ? 'bg-accent-soft ring-2 ring-accent/60'
                      : 'bg-surface hover:bg-ink/5'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="venue" className="mb-1.5 block text-xs font-medium text-ink-muted">
                Venue
              </label>
              <input
                id="venue"
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="Ritual Coffee"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="time" className="mb-1.5 block text-xs font-medium text-ink-muted">
                When
              </label>
              <input
                id="time"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Sat · 9:00 AM"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="seats" className="mb-1.5 block text-xs font-medium text-ink-muted">
                Minimum headcount
              </label>
              <select
                id="seats"
                value={seatsTotal}
                onChange={(e) => setSeatsTotal(e.target.value)}
                className={inputClass}
              >
                {[3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>
                    {n} people
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="price" className="mb-1.5 block text-xs font-medium text-ink-muted">
                Share per person ($)
              </label>
              <input
                id="price"
                type="number"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0"
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition hover:bg-accent/90 active:scale-[0.99]"
          >
            Put it on the board
          </button>
        </form>
      </div>
    </div>
  )
}
