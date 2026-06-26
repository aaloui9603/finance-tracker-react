import { useState, useEffect, useMemo } from 'react'
import { startOfWeek, startOfMonth, startOfYear, isAfter } from 'date-fns'

const STORAGE_KEY = 'finance_tracker_transactions'

function useTransactions() {
  const [transactions, setTransactions] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
  }, [transactions])

  function addTransaction(transaction) {
    setTransactions(prev => [transaction, ...prev])
  }

  function deleteTransaction(id) {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  const filteredTransactions = useMemo(() => {
    if (activeFilter === 'all') return transactions

    const now = new Date()
    let startDate

    if (activeFilter === 'week') startDate = startOfWeek(now, { weekStartsOn: 1 })
    if (activeFilter === 'month') startDate = startOfMonth(now)
    if (activeFilter === 'year') startDate = startOfYear(now)

    return transactions.filter(t => isAfter(new Date(t.date), startDate))
  }, [transactions, activeFilter])

  const totalIncome = filteredTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = filteredTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  return {
    transactions: filteredTransactions,
    addTransaction,
    deleteTransaction,
    totalIncome,
    totalExpense,
    balance,
    activeFilter,
    setActiveFilter
  }
}

export default useTransactions