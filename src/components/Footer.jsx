const columns = [
  {
    heading: 'Product',
    links: ['Browse tables', 'Propose a table', 'How it works', 'For venues'],
  },
  {
    heading: 'Company',
    links: ['About', 'Pilot cities', 'Community guidelines', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Terms', 'Privacy', 'Refund policy'],
  },
]

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

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-raised">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink">
              <Logo />
              Quorum
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              Spontaneous meetups that only happen when enough people commit.
              Real venues, real headcounts, no empty rooms.
            </p>
            <p className="mt-4 inline-flex rounded-full border border-border px-3 py-1 text-[11px] font-medium text-ink-subtle">
              Concept prototype — all data simulated
            </p>
          </div>

          {columns.map(({ heading, links }) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-subtle">
                {heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-sm text-ink-muted transition hover:text-ink"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-ink-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} Quorum. A concept, not a live product.</p>
          <p>Made for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  )
}
