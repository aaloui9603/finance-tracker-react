import BalanceCard from './components/BalanceCard'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import useTransactions from './hooks/useTransactions'

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
    balance
  } = useTransactions()

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '2rem' }}>

      <div style={orb('-10rem', '-10rem', 'auto', 'auto', 'rgba(30,64,175,0.4)')} />
      <div style={orb('10rem', 'auto', '-8rem', 'auto', 'rgba(8,145,178,0.35)')} />
      <div style={orb('auto', '30%', 'auto', '-8rem', 'rgba(157,23,77,0.35)')} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem' }}>
          💰 Finance Tracker
        </h1>

        <BalanceCard
          balance={balance}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
        />

        <TransactionForm onAdd={addTransaction} />

        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
        />
      </div>

    </div>
  )
}

export default App