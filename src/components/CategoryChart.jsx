import { useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Cell
} from 'recharts'

function CategoryChart({ transactions }) {
  const data = useMemo(() => {
    const expenses = transactions.filter(t => t.type === 'expense')

    const grouped = expenses.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount
      return acc
    }, {})

    return Object.entries(grouped)
      .map(([category, amount]) => ({ category, amount }))
      .sort((a, b) => b.amount - a.amount)
  }, [transactions])

  if (data.length === 0) {
    return (
      <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
          Noch keine Ausgaben für das Diagramm
        </p>
      </div>
    )
  }

  const COLORS = [
    '#be185d', '#9d174d', '#db2777',
    '#0d9488', '#0891b2', '#1e40af'
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'rgba(6,8,24,0.95)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '8px',
          padding: '0.625rem 0.875rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.25rem' }}>
            {payload[0].payload.category}
          </p>
          <p style={{ fontSize: '0.875rem', fontWeight: '700', color: '#be185d' }}>
            {payload[0].value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.25rem' }}>
        Ausgaben nach Kategorie
      </h2>

      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 60 }}>
          <XAxis
            dataKey="category"
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
            angle={-35}
            textAnchor="end"
            interval={0}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={v => `${v}€`}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CategoryChart