import React from 'react'
import './BudgetDisplay.css'

const BudgetDisplay = ({ expenses, totalSavings }) => {
const expenseCards = expenses.map((expense) => {
  return (
    <div className='expense-container'>
      <p className='expense-type'>{expense.type}</p>
      <p className='expense-amount'>{expense.amount}</p>
    </div>
  )
})

  return (
    <section className='main-display-container'>
      <h1 className='total-savings'>{`Total Savings: $${totalSavings}`}</h1>
      {expenseCards}
    </section>
  )
}

export default BudgetDisplay
