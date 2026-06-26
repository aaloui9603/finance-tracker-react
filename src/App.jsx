import BalanceCard from './components/BalanceCard'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import FilterBar from './components/FilterBar'
import CategoryChart from './components/CategoryChart'
import useTransactions from './hooks/useTransactions'
import { format } from 'date-fns'
import { de } from 'date-fns/locale'

const orb = (top, left, right, bottom, color) => ({
  position: 'fixed',
  top, left, right, bottom,
  width: '40rem', height: '40rem',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
  pointerEvents: 'none',
  zIndex: 0
})

function App() {
  const {
    transactions,
    addTransaction,
    deleteTransaction,
    totalIncome,
    totalExpense,
    balance,
    activeFilter,
    setActiveFilter
  } = useTransactions()

  const today = format(new Date(), "EEEE, dd. MMMM yyyy", { locale: de })

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '2rem' }}>

      <div style={orb('-10rem', '-10rem', 'auto', 'auto', 'rgba(30,64,175,0.4)')} />
      <div style={orb('10rem', 'auto', '-8rem', 'auto', 'rgba(8,145,178,0.35)')} />
      <div style={orb('auto', '30%', 'auto', '-8rem', 'rgba(157,23,77,0.35)')} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: '700' }}>
              💰 Finance Tracker
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {today}
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '999px',
            padding: '0.375rem 1rem',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.5)',
            alignSelf: 'center'
          }}>
            {transactions.length} Transaktion{transactions.length !== 1 ? 'en' : ''}
          </div>
        </div>

        {/* BalanceCard */}
        <BalanceCard
          balance={balance}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />

        {/* FilterBar */}
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Zweispaltiges Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start'
        }}>
          <div>
            <TransactionForm onAdd={addTransaction} />
            <TransactionList
              transactions={transactions}
              onDelete={deleteTransaction}
            />
          </div>
          <div>
            <CategoryChart transactions={transactions} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App