import TransactionItem from './TransactionItem'

function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💸</p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
          Noch keine Transaktionen vorhanden
        </p>
      </div>
    )
  }

  return (
    <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem' }}>
        Transaktionen ({transactions.length})
      </h2>

      <div>
        {transactions.map(t => (
          <TransactionItem
            key={t.id}
            transaction={t}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default TransactionList