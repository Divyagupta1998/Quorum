import { X } from 'lucide-react'

export default function PrototypeBanner({ onDismiss }) {
  return (
    <div className="border-b border-border bg-ink/[0.035]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <p className="text-xs leading-relaxed text-ink-muted sm:text-[13px]">
          <span className="font-medium text-ink">Prototype</span>
          {' — '}
          Quorum is a concept, not a live product. All data and payments on this
          page are simulated.
        </p>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss prototype banner"
          className="shrink-0 rounded-md p-1 text-ink-subtle transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X size={14} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
