import { MapPin, Users, Lock, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    title: 'Propose or find a table',
    body: 'Pick an activity, a real venue, a time, and the minimum headcount that makes it worth doing.',
    detail: 'Cafés · parks · libraries · game shops',
  },
  {
    icon: Users,
    title: 'Others join, seats fill',
    body: 'As people commit, seats fill in on the table graphic. Until quorum, nothing is booked and nobody pays.',
    detail: 'Live seat count · zero risk while pending',
  },
  {
    icon: Lock,
    title: 'Table locks in',
    body: 'At minimum headcount the reservation confirms and everyone pays their share to hold a seat.',
    detail: 'Confirmed reservation · split evenly',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            How it works
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-3xl font-semibold tracking-tight text-ink">
            Three steps from idea to a table that&apos;s actually happening
          </p>
        </div>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, body, detail }, i) => (
            <div key={title} className="relative">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface-raised p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={19} strokeWidth={2} />
                  </div>
                  <span className="text-4xl font-semibold tracking-tight text-ink/[0.08]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {body}
                </p>
                <p className="mt-4 border-t border-border pt-3 text-xs font-medium text-ink-subtle">
                  {detail}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  className="absolute -right-4.5 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-raised p-1 text-ink-subtle sm:flex"
                  aria-hidden="true"
                >
                  <ArrowRight size={13} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
