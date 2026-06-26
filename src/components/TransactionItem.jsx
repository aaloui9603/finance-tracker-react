import { format } from 'date-fns'
import { de } from 'date-fns/locale'

function TransactionItem({ transaction, onDelete }) {
  const { id, type, amount, category, date, note } = transaction
  const isIncome = type === 'income'

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderLeft: `3px solid ${isIncome ? '#0d9488' : '#be185d'}`,
      borderRadius: '10px',
      marginBottom: '0.625rem',
      gap: '1rem',
    }}>

      {/* Links: Kategorie & Datum */}
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.2rem' }}>
          {category}
        </p>
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
          {format(new Date(date), 'dd. MMM yyyy', { locale: de })}
          {note && ` · ${note}`}
        </p>
      </div>

      {/* Mitte: Betrag */}
      <p style={{
        fontSize: '1rem',
        fontWeight: '700',
        color: isIncome ? '#0d9488' : '#be185d',
        whiteSpace: 'nowrap'
      }}>
        {isIncome ? '+' : '-'}
        {amount.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
      </p>

      {/* Rechts: Löschen */}
      <button
        onClick={() => onDelete(id)}
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '6px',
          color: 'rgba(255,255,255,0.4)',
          cursor: 'pointer',
          fontSize: '1rem',
          padding: '0.25rem 0.5rem',
          transition: 'all 0.2s',
          flexShrink: 0
        }}
        onMouseEnter={e => {
          e.target.style.background = 'rgba(190,24,93,0.3)'
          e.target.style.color = '#f9a8d4'
        }}
        onMouseLeave={e => {
          e.target.style.background = 'rgba(255,255,255,0.05)'
          e.target.style.color = 'rgba(255,255,255,0.4)'
        }}
      >
        ✕
      </button>

    </div>
  )
}

export default TransactionItem