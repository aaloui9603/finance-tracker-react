function BalanceCard({ balance, totalIncome, totalExpense }) {
  return (
    <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>

      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>
        Aktuelles Guthaben
      </p>
      <p style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
        {balance.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

        <div style={{
          background: 'rgba(13, 148, 136, 0.15)',
          border: '1px solid rgba(13, 148, 136, 0.3)',
          borderRadius: '12px',
          padding: '1rem'
        }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.25rem' }}>
            Einnahmen
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#0d9488' }}>
            +{totalIncome.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </p>
        </div>

        <div style={{
          background: 'rgba(190, 24, 93, 0.15)',
          border: '1px solid rgba(190, 24, 93, 0.3)',
          borderRadius: '12px',
          padding: '1rem'
        }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.25rem' }}>
            Ausgaben
          </p>
          <p style={{ fontSize: '1.25rem', fontWeight: '600', color: '#be185d' }}>
            -{totalExpense.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </p>
        </div>

      </div>
    </div>
  )
}

export default BalanceCard