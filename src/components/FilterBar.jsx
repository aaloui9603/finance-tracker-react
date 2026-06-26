const FILTERS = [
  { key: 'all', label: 'Alle' },
  { key: 'week', label: 'Woche' },
  { key: 'month', label: 'Monat' },
  { key: 'year', label: 'Jahr' },
]

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div style={{
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    }}>
      {FILTERS.map(f => (
        <button
          key={f.key}
          onClick={() => onFilterChange(f.key)}
          style={{
            padding: '0.5rem 1.25rem',
            borderRadius: '999px',
            border: activeFilter === f.key
              ? '1px solid rgba(8,145,178,0.8)'
              : '1px solid rgba(255,255,255,0.12)',
            background: activeFilter === f.key
              ? 'rgba(8,145,178,0.25)'
              : 'rgba(255,255,255,0.05)',
            color: activeFilter === f.key
              ? '#5eead4'
              : 'rgba(255,255,255,0.5)',
            fontWeight: activeFilter === f.key ? '600' : '400',
            fontSize: '0.875rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar