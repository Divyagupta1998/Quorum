import { Plus } from 'lucide-react'

function Logo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="6" fill="#0f766e" />
      <circle cx="12" cy="2.8" r="2" fill="#0f766e" opacity="0.9" />
      <circle cx="20" cy="7.4" r="2" fill="#0f766e" opacity="0.65" />
      <circle cx="20" cy="16.6" r="2" fill="#0f766e" opacity="0.4" />
      <circle cx="12" cy="21.2" r="2" fill="none" stroke="#0f766e" strokeWidth="1.2" opacity="0.5" />
      <circle cx="4" cy="16.6" r="2" fill="none" stroke="#0f766e" strokeWidth="1.2" opacity="0.5" />
      <circle cx="4" cy="7.4" r="2" fill="none" stroke="#0f766e" strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}

export default function Nav({ onHome, onTables, onHow, onPropose }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          type="button"
          onClick={onHome}
          className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink transition hover:opacity-80"
        >
          <Logo />
          Quorum
          <span className="rounded-full border border-border bg-surface-raised px-2 py-0.5 text-[10px] font-medium tracking-wide text-ink-subtle">
            Prototype
          </span>
        </button>

        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={onHow}
            className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-ink-muted transition hover:bg-ink/5 hover:text-ink sm:block"
          >
            How it works
          </button>
          <button
            type="button"
            onClick={onTables}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink-muted transition hover:bg-ink/5 hover:text-ink"
          >
            Tables
          </button>
          <button
            type="button"
            onClick={onPropose}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-accent/90 active:scale-[0.98]"
          >
            <Plus size={15} strokeWidth={2.25} />
            <span className="hidden sm:inline">Propose a table</span>
            <span className="sm:hidden">Propose</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
