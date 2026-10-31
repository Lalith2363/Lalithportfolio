import { memo, useEffect, useState } from 'react'

/**
 * Live local time in Asia/Kolkata (IST — India Standard Time).
 * Updates every 30s to keep DOM cost negligible.
 */
function LocalTimeBase() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(id)
  }, [])

  const time = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Asia/Kolkata',
  }).format(now)

  // Working-hours indicator — 09:00–22:00 IST counts as active
  const hour = Number(
    new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      hour12: false,
      timeZone: 'Asia/Kolkata',
    }).format(now),
  )
  const online = hour >= 9 && hour < 22

  return (
    <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] text-[color:var(--ink-faint)]">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${online ? 'bg-[color:var(--ok)]' : 'bg-[color:var(--warn)]'}`}
        style={{
          boxShadow: online ? '0 0 8px var(--ok)' : '0 0 8px var(--warn)',
        }}
      />
      <span className="uppercase tracking-[0.16em]">
        India · {time} IST
      </span>
    </span>
  )
}

const LocalTime = memo(LocalTimeBase)
export default LocalTime
