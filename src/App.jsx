function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '2rem' }}>

      {/* Schwebende Farbkugeln */}
      <div style={{
        position: 'fixed', top: '-10rem', left: '-10rem',
        width: '40rem', height: '40rem', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30,64,175,0.4) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />
      <div style={{
        position: 'fixed', top: '10rem', right: '-8rem',
        width: '35rem', height: '35rem', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(8,145,178,0.35) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />
      <div style={{
        position: 'fixed', bottom: '-8rem', left: '30%',
        width: '30rem', height: '30rem', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(157,23,77,0.35) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      {/* Inhalt */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>
          💰 Finance Tracker
        </h1>

        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>M-2 erfolgreich — Glassmorphism läuft! ✅</p>
        </div>
      </div>

    </div>
  )
}

export default App