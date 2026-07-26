import { CheckCircle2 } from 'lucide-react'

export default function Toast({ toast }) {
  if (!toast) return null
  return (
    <div
      key={toast.key}
      className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4"
      role="status"
      aria-live="polite"
    >
      <div className="animate-fade-up flex items-center gap-2 rounded-full border border-border bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-lg">
        <CheckCircle2 size={16} className="text-confirmed-soft" />
        {toast.message}
      </div>
    </div>
  )
}
