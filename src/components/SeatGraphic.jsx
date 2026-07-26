import { mockAttendees } from '../data/mockTables'

const CX = 100
const CY = 100
const TABLE_R = 40
const ARC_R = 57
const SEAT_RING_R = 78
const SEAT_R = 13

function Seat({ index, angle, filled }) {
  const rad = ((angle - 90) * Math.PI) / 180
  const x = CX + SEAT_RING_R * Math.cos(rad)
  const y = CY + SEAT_RING_R * Math.sin(rad)
  const attendee = mockAttendees[index % mockAttendees.length]

  const shapeStyle = {
    transformBox: 'fill-box',
    transformOrigin: 'center',
    transform: filled ? 'scale(1)' : 'scale(0.82)',
    transition:
      'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.3), fill 0.35s ease, stroke 0.35s ease',
  }

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={SEAT_R}
        fill={filled ? attendee.color : '#fafafa'}
        stroke={filled ? attendee.color : '#d4d4d8'}
        strokeWidth={filled ? 0 : 1.75}
        strokeDasharray={filled ? 'none' : '3 3'}
        style={shapeStyle}
      />
      <text
        x={x}
        y={y + 0.5}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#ffffff"
        fontSize="11"
        fontWeight="600"
        fontFamily="Inter, sans-serif"
        style={{
          opacity: filled ? 1 : 0,
          transition: 'opacity 0.3s ease 0.12s',
          pointerEvents: 'none',
        }}
      >
        {attendee.name[0]}
      </text>
    </g>
  )
}

export default function SeatGraphic({
  seatsFilled,
  seatsTotal,
  status = 'pending',
  size = 160,
}) {
  const isConfirmed = status === 'confirmed' || seatsFilled >= seatsTotal
  const frac = Math.min(seatsFilled / seatsTotal, 1)
  const circumference = 2 * Math.PI * ARC_R
  const palette = isConfirmed
    ? { fill: '#d1fae5', stroke: '#059669', text: '#047857', arc: '#10b981' }
    : { fill: '#fef3c7', stroke: '#d97706', text: '#b45309', arc: '#f59e0b' }

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className="overflow-visible"
      role="img"
      aria-label={`${seatsFilled} of ${seatsTotal} seats filled${isConfirmed ? ', table confirmed' : ''}`}
    >
      {/* Quorum progress ring */}
      <circle cx={CX} cy={CY} r={ARC_R} fill="none" stroke="#ececee" strokeWidth="3" />
      <circle
        cx={CX}
        cy={CY}
        r={ARC_R}
        fill="none"
        stroke={palette.arc}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${frac * circumference} ${circumference}`}
        transform={`rotate(-90 ${CX} ${CY})`}
        style={{ transition: 'stroke-dasharray 0.6s ease, stroke 0.5s ease' }}
      />

      {/* One-shot celebration ring when quorum hits */}
      {isConfirmed && (
        <circle
          cx={CX}
          cy={CY}
          r={TABLE_R}
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          className="animate-ping-once"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      )}

      {/* Table */}
      <circle
        cx={CX}
        cy={CY}
        r={TABLE_R}
        fill={palette.fill}
        stroke={palette.stroke}
        strokeWidth="2.5"
        style={{ transition: 'fill 0.5s ease, stroke 0.5s ease' }}
      />
      <text
        x={CX}
        y={isConfirmed ? CY + 1 : CY - 6}
        textAnchor="middle"
        dominantBaseline="central"
        fill={palette.text}
        fontSize={isConfirmed ? 15 : 17}
        fontWeight="600"
        fontFamily="Inter, sans-serif"
        style={{ transition: 'fill 0.5s ease' }}
      >
        {isConfirmed ? 'Live' : `${seatsFilled}/${seatsTotal}`}
      </text>
      {!isConfirmed && (
        <text
          x={CX}
          y={CY + 11}
          textAnchor="middle"
          dominantBaseline="central"
          fill={palette.text}
          fontSize="9"
          fontWeight="500"
          fontFamily="Inter, sans-serif"
          opacity="0.75"
        >
          seats
        </text>
      )}

      {Array.from({ length: seatsTotal }, (_, i) => (
        <Seat
          key={i}
          index={i}
          angle={(360 / seatsTotal) * i}
          filled={i < seatsFilled}
        />
      ))}
    </svg>
  )
}
