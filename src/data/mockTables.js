export const initialTables = [
  {
    id: 'deep-work',
    activity: 'Deep Work',
    emoji: '💻',
    category: 'Focus',
    host: 'Ava',
    venue: 'Blue Bottle Coffee, Hayes Valley',
    time: 'Tue · 9:00 AM',
    seatsFilled: 3,
    seatsTotal: 6,
    pricePerPerson: 8,
    status: 'pending',
    description:
      'Silent co-working block. Laptops welcome, conversation after the hour.',
  },
  {
    id: 'reading-club',
    activity: 'Reading Club',
    emoji: '📚',
    category: 'Books',
    host: 'Ben',
    venue: 'Green Apple Books courtyard',
    time: 'Wed · 6:30 PM',
    seatsFilled: 5,
    seatsTotal: 8,
    pricePerPerson: 5,
    status: 'pending',
    description:
      "Bring whatever you're reading. Soft discussion, no homework.",
  },
  {
    id: 'board-games',
    activity: 'Board Games',
    emoji: '🎲',
    category: 'Games',
    host: 'Cam',
    venue: 'Gamescape, Divisadero',
    time: 'Fri · 7:00 PM',
    seatsFilled: 2,
    seatsTotal: 6,
    pricePerPerson: 12,
    status: 'pending',
    description:
      'Casual night — Catan, Ticket to Ride, or whatever the table picks.',
  },
  {
    id: 'sketch-together',
    activity: 'Sketch Together',
    emoji: '✏️',
    category: 'Art',
    host: 'Dee',
    venue: 'Dolores Park lawn',
    time: 'Sat · 11:00 AM',
    seatsFilled: 1,
    seatsTotal: 5,
    pricePerPerson: 0,
    status: 'pending',
    description:
      'Bring a sketchbook. People-watch, draw, share if you want.',
  },
  {
    id: 'philosophy-chat',
    activity: 'Philosophy Chat',
    emoji: '🧠',
    category: 'Ideas',
    host: 'Eli',
    venue: 'The Mill, Divisadero',
    time: 'Thu · 5:30 PM',
    seatsFilled: 4,
    seatsTotal: 6,
    pricePerPerson: 10,
    status: 'pending',
    description:
      'One short reading circulated beforehand. No degrees required.',
  },
  {
    id: 'spanish-conversation',
    activity: 'Spanish Conversation',
    emoji: '🗣️',
    category: 'Language',
    host: 'Fay',
    venue: 'Mission Branch Library',
    time: 'Sun · 2:00 PM',
    seatsFilled: 6,
    seatsTotal: 8,
    pricePerPerson: 0,
    status: 'pending',
    description:
      'Intermediate practice circle. English allowed when stuck.',
  },
]

export const mockAttendees = [
  { id: 1, name: 'Ava', color: '#0f766e' },
  { id: 2, name: 'Ben', color: '#0369a1' },
  { id: 3, name: 'Cam', color: '#7c3aed' },
  { id: 4, name: 'Dee', color: '#db2777' },
  { id: 5, name: 'Eli', color: '#ea580c' },
  { id: 6, name: 'Fay', color: '#4f46e5' },
  { id: 7, name: 'Gus', color: '#0891b2' },
  { id: 8, name: 'Han', color: '#65a30d' },
]

export const testimonials = [
  {
    quote:
      'I proposed a sketching table on a Thursday and by Saturday morning five strangers were drawing next to me in the park. Nobody flaked, because everyone had skin in the game.',
    name: 'Maya R.',
    role: 'Proposed 12 tables',
    color: '#db2777',
  },
  {
    quote:
      "The pending state is the genius part. I never commit to vague plans anymore — I commit to tables, and if they don't fill, I've lost nothing.",
    name: 'Jordan K.',
    role: 'Joined 31 tables',
    color: '#0369a1',
  },
  {
    quote:
      'As a café owner, confirmed headcounts changed everything. A Quorum reservation means six people actually walk through the door.',
    name: 'Sam T.',
    role: 'Venue partner, The Mill',
    color: '#ea580c',
  },
]
