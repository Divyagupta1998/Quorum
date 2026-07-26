import { Users, CalendarCheck, Wallet } from 'lucide-react'

const highlights = [
  {
    icon: Users,
    title: 'Commitment first',
    body: 'A table is a promise, not a maybe. Seats represent real people who said yes.',
  },
  {
    icon: CalendarCheck,
    title: 'Reservations that hold',
    body: 'Venues get a confirmed headcount. You get a room that expects you.',
  },
  {
    icon: Wallet,
    title: 'Pay only at quorum',
    body: 'Nothing is charged while a table is pending. Your share locks your seat.',
  },
]

export default function ConceptBrief() {
  return (
    <section className="border-y border-border bg-surface-raised">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              What is Quorum?
            </h2>
            <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.7rem]">
              Most meetup apps let you make a plan and hope. Quorum flips that —
              a table only becomes real once enough people have committed.
            </p>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted">
              <p>
                Propose a table — an activity, a place, a minimum headcount —
                and it stays pending until it fills. Once it hits quorum, the
                reservation is confirmed, everyone pays their share, and you
                show up knowing the room won&apos;t be empty.
              </p>
              <p className="font-medium text-ink">
                No more awkward &ldquo;it&apos;s just me and the host.&rdquo; If
                it&apos;s live, it&apos;s really happening.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-accent/30 hover:bg-accent-soft/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={19} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
