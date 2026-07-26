import { useEffect, useState } from 'react'
import { initialTables } from './data/mockTables'
import PrototypeBanner from './components/PrototypeBanner'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ConceptBrief from './components/ConceptBrief'
import HowItWorks from './components/HowItWorks'
import TableGrid from './components/TableGrid'
import TableDetail from './components/TableDetail'
import PaymentForm from './components/PaymentForm'
import ConfirmedTable from './components/ConfirmedTable'
import ProposeTable from './components/ProposeTable'
import Testimonials from './components/Testimonials'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import Toast from './components/Toast'

export default function App() {
  const [view, setView] = useState('home')
  const [tables, setTables] = useState(initialTables)
  const [selectedId, setSelectedId] = useState(null)
  const [joinerName, setJoinerName] = useState('')
  const [bannerVisible, setBannerVisible] = useState(true)
  const [proposeOpen, setProposeOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const selectedTable = tables.find((t) => t.id === selectedId)

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 3200)
    return () => clearTimeout(timer)
  }, [toast])

  const showToast = (message) => setToast({ message, key: Date.now() })

  const scrollToId = (id) =>
    requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    )

  const goHome = (targetId) => {
    setView('home')
    setSelectedId(null)
    setJoinerName('')
    if (targetId) scrollToId(targetId)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openDetail = (id) => {
    setSelectedId(id)
    setView('detail')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const joinTable = (id) => {
    const table = tables.find((t) => t.id === id)
    if (!table || table.status === 'confirmed' || table.seatsFilled >= table.seatsTotal)
      return

    const nextFilled = table.seatsFilled + 1
    const hitsQuorum = nextFilled >= table.seatsTotal

    setTables((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, seatsFilled: nextFilled, status: hitsQuorum ? 'confirmed' : t.status }
          : t
      )
    )
    setSelectedId(id)

    if (hitsQuorum) {
      setView('payment')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const left = table.seatsTotal - nextFilled
      showToast(`Seat claimed — ${left} more to quorum`)
    }
  }

  const createTable = (data) => {
    const id = `custom-${Date.now()}`
    setTables((prev) => [
      {
        ...data,
        id,
        host: 'You',
        category: 'New',
        seatsFilled: 1,
        status: 'pending',
        description: 'Proposed just now. You hold the first seat.',
      },
      ...prev,
    ])
    setProposeOpen(false)
    showToast(`Table proposed — 1 of ${data.seatsTotal} seats filled`)
    if (view !== 'home') {
      setView('home')
      setSelectedId(null)
    }
    scrollToId('tables')
  }

  const confirmPayment = ({ name }) => {
    setJoinerName(name)
    setView('confirmed')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      {bannerVisible && (
        <PrototypeBanner onDismiss={() => setBannerVisible(false)} />
      )}

      <Nav
        onHome={() => goHome()}
        onTables={() => goHome('tables')}
        onHow={() => goHome('how')}
        onPropose={() => setProposeOpen(true)}
      />

      <main className="flex-1">
        {view === 'home' && (
          <>
            <Hero
              tables={tables}
              onBrowse={() => scrollToId('tables')}
              onHow={() => scrollToId('how')}
            />
            <ConceptBrief />
            <HowItWorks />
            <TableGrid tables={tables} onSelect={openDetail} onJoin={joinTable} />
            <Testimonials />
            <CtaBand
              onPropose={() => setProposeOpen(true)}
              onBrowse={() => scrollToId('tables')}
            />
          </>
        )}

        {view === 'detail' && selectedTable && (
          <TableDetail
            table={selectedTable}
            onBack={() => goHome('tables')}
            onJoin={joinTable}
          />
        )}

        {view === 'payment' && selectedTable && (
          <PaymentForm
            table={selectedTable}
            onBack={() => setView('detail')}
            onConfirm={confirmPayment}
          />
        )}

        {view === 'confirmed' && selectedTable && (
          <ConfirmedTable
            table={selectedTable}
            joinerName={joinerName}
            onBrowse={() => goHome('tables')}
          />
        )}
      </main>

      <Footer />

      {proposeOpen && (
        <ProposeTable
          onClose={() => setProposeOpen(false)}
          onCreate={createTable}
        />
      )}

      <Toast toast={toast} />
    </div>
  )
}
