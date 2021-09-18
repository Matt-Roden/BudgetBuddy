import React, { useState } from 'react'
import './IncomeForm.css'

const IncomeForm = ({ addIncome }) => {
  const [income, setIncome] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    addIncome(income)
    setIncome(0)
  }

  return (
    <form className='income-form'>
      <label htmlFor='amount'>Monthly Income</label>
      <input
        required
        className='income-input'
        type='number'
        name='amount'
        value={income}
        onChange={event => setIncome(parseInt(event.target.value))}
      />
      <button onClick={event => handleSubmit(event)} className='income-button'>Submit</button>
    </form>
  )
}

export default IncomeForm
