import React, { useState, useEffect } from 'react'

import './App.css';

import Header from './Components/Header/Header'
import IncomeForm from './Components/IncomeForm/IncomeForm'
import ExpenseForm from './Components/ExpenseForm/ExpenseForm'
import BudgetDisplay from './Components/BudgetDisplay/BudgetDisplay'


const App = () => {
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)

  const addIncome = (income) => {
    setIncome(income)
  }

  const addNewExpense = (expense) => {
    setExpenses([...expenses, expense])
    getTotalExpenses()
  }

  const getTotalExpenses = () => {
    const total = expenses.reduce((acc, expense) => {
      acc += expense.amount
      return acc
    }, 0)

    setTotalExpenses(parseInt(total))
    getTotalSavings()
  }

  const getTotalSavings = () => {
    const calculatedTotalSavings = (income) - (totalExpenses)
    setTotalSavings(calculatedTotalSavings)
  }

// Ask about useCallBack and not having a second arg in useEffect
  useEffect(() => {
    getTotalExpenses()
  })

  return (
    <div className='App'>
      <Header />
      <IncomeForm addIncome={addIncome}/>
      <ExpenseForm addNewExpense={addNewExpense}/>
      <BudgetDisplay expenses={expenses} totalSavings={totalSavings}/>
    </div>
  )
}

export default App;
