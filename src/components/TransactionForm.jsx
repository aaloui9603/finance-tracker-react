import { useState } from 'react'

const EXPENSE_CATEGORIES = [
  'Lebensmittel', 'Miete & Wohnen', 'Transport',
  'Freizeit', 'Kleidung', 'Gesundheit', 'Sonstiges'
]

const INCOME_CATEGORIES = [
  'Gehalt', 'Freelance', 'Geschenk', 'Investitionen', 'Sonstiges'
]

function TransactionForm({ onAdd }) {
  const [type, setType] = useState('expense')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Sonstiges')
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [note, setNote] = useState('')

  const categories = type === 'expense' ? EXPENSE_CATEGORIES : INCOME_CATEGORIES

  function handleSubmit(e) {
    e.preventDefault()
    if (!amount || isNaN(amount) || Number(amount) <= 0) return

    onAdd({
      id: Date.now(),
      type,
      amount: Number(amount),
      category,
      date,
      note
    })

    setAmount('')
    setNote('')
    setCategory('Sonstiges')
  }

  const inputStyle = {
    width: '100%',
    padding: '0.625rem 0.875rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '8px',
    color: 'white',
    fontSize: '0.875rem',
    outline: 'none',
  }

  return (
    <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.25rem' }}>
        Transaktion hinzufügen
      </h2>

      <form onSubmit={handleSubmit}>

        {/* Typ Toggle */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
          <button
            type="button"
            onClick={() => { setType('expense'); setCategory('Sonstiges') }}
            style={{
              padding: '0.625rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.875rem',
              background: type === 'expense' ? 'rgba(190,24,93,0.4)' : 'rgba(255,255,255,0.05)',
              color: type === 'expense' ? '#f9a8d4' : 'rgba(255,255,255,0.5)',
            }}
          >
            Ausgabe
          </button>
          <button
            type="button"
            onClick={() => { setType('income'); setCategory('Sonstiges') }}
            style={{
              padding: '0.625rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.875rem',
              background: type === 'income' ? 'rgba(13,148,136,0.4)' : 'rgba(255,255,255,0.05)',
              color: type === 'income' ? '#5eead4' : 'rgba(255,255,255,0.5)',
            }}
          >
            Einnahme
          </button>
        </div>

        {/* Betrag */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.375rem' }}>
            Betrag (€)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={inputStyle}
            required
          />
        </div>

        {/* Kategorie */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.375rem' }}>
            Kategorie
          </label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            {categories.map(cat => (
              <option key={cat} value={cat} style={{ background: '#0f172a' }}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Datum */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.375rem' }}>
            Datum
          </label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{ ...inputStyle, colorScheme: 'dark' }}
          />
        </div>

        {/* Notiz */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.375rem' }}>
            Notiz (optional)
          </label>
          <input
            type="text"
            placeholder="z.B. Einkauf Rewe..."
            value={note}
            onChange={e => setNote(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.875rem',
            background: type === 'expense'
              ? 'linear-gradient(135deg, #9d174d, #be185d)'
              : 'linear-gradient(135deg, #0f766e, #0d9488)',
            color: 'white',
          }}
        >
          {type === 'expense' ? '− Ausgabe hinzufügen' : '+ Einnahme hinzufügen'}
        </button>

      </form>
    </div>
  )
}

export default TransactionForm