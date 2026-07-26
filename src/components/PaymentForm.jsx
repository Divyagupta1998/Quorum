import { useState } from 'react'
import { ArrowLeft, Lock, Loader2 } from 'lucide-react'

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-subtle focus:border-accent focus:ring-2 focus:ring-accent/20'

const formatCard = (value) =>
  value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(\d{4})(?=\d)/g, '$1 ')

const formatExpiry = (value) => {
  const digits = value.replace(/\D/g, '').slice(0, 4)
  if (digits.length <= 2) return digits
  return `${digits.slice(0, 2)} / ${digits.slice(2)}`
}

export default function PaymentForm({ table, onBack, onConfirm }) {
  const [name, setName] = useState('')
  const [card, setCard] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isFree = table.pricePerPerson === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => onConfirm({ name: name.trim() || 'You' }), 900)
  }

  return (
    <div className="mx-auto max-w-md px-4 py-10 sm:px-6 sm:py-14">
      <button
        type="button"
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition hover:text-ink"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="animate-fade-up rounded-3xl border border-border bg-surface-raised p-6 shadow-sm sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-3xl" aria-hidden="true">
            {table.emoji}
          </p>
          <h1 className="mt-2 text-xl font-semibold tracking-tight text-ink">
            {isFree ? 'Claim your seat' : 'Hold your seat'}
          </h1>
          <p className="mt-1 text-sm text-ink-muted">
            {table.activity} · {table.venue} · {table.time}
          </p>
        </div>

        <div className="mb-6 space-y-2 rounded-2xl bg-surface p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-muted">Your share</span>
            <span className="font-medium text-ink">
              {isFree ? 'Free' : `$${table.pricePerPerson}.00`}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-ink-muted">Service fee</span>
            <span className="font-medium text-ink">$0.00</span>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-2 text-sm">
            <span className="font-medium text-ink">Due now</span>
            <span className="text-lg font-semibold text-ink">
              {isFree ? '$0.00' : `$${table.pricePerPerson}.00`}
            </span>
          </div>
          <p className="pt-1 text-xs font-medium text-confirmed">
            Quorum reached — your seat confirms this table.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink-muted">
              Full name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex Rivera"
              autoComplete="name"
              className={inputClass}
            />
          </div>

          {!isFree && (
            <>
              <div>
                <label htmlFor="card" className="mb-1.5 block text-xs font-medium text-ink-muted">
                  Card number
                </label>
                <input
                  id="card"
                  type="text"
                  value={card}
                  onChange={(e) => setCard(formatCard(e.target.value))}
                  placeholder="4242 4242 4242 4242"
                  inputMode="numeric"
                  autoComplete="off"
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="expiry" className="mb-1.5 block text-xs font-medium text-ink-muted">
                    Expiry
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    placeholder="MM / YY"
                    inputMode="numeric"
                    autoComplete="off"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="mb-1.5 block text-xs font-medium text-ink-muted">
                    CVC
                  </label>
                  <input
                    id="cvc"
                    type="text"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="123"
                    inputMode="numeric"
                    autoComplete="off"
                    className={inputClass}
                  />
                </div>
              </div>
            </>
          )}

          <p className="flex items-start gap-2 rounded-xl bg-ink/[0.03] px-3 py-2.5 text-xs leading-relaxed text-ink-muted">
            <Lock size={12} className="mt-0.5 shrink-0" />
            This is a simulated payment for prototype purposes only. Nothing is
            charged, stored, or sent anywhere.
          </p>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition hover:bg-accent/90 active:scale-[0.99] disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Confirming…
              </>
            ) : (
              'Confirm my seat'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
