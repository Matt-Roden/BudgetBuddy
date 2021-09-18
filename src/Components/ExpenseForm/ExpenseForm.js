import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({ addNewExpense }) => {
  const [type, setType] = useState('')
  const [amount, setAmount] = useState(0)

  const handleAddExpense = (event) => {
    event.preventDefault()
    const expense = {
      type: type,
      amount: amount
    }
    addNewExpense(expense)
    setType('')
    setAmount(0)
  }

  return (
    <form className='expense-form'>
      <input
        required
        className='type-input'
        type='text'
        name='type'
        placeholder='Type of Expense'
        value={type}
        onChange={event => setType(event.target.value)}
      />
      <input
        required
        className='amount-input'
        type='number'
        name='amount'
        value={amount}
        onChange={event => setAmount(parseInt(event.target.value))}
      />
      <button onClick={event => handleAddExpense(event)} className='expense-button'>Add Expense</button>
    </form>
  )
}

export default ExpenseForm
