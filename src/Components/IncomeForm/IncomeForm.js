// import React, { Component } from 'react'
import React, { useState } from 'react'
import './IncomeForm.css'

const IncomeForm = ({ addIncome }) => {
  const [amount, setAmount] = useState(0)

  const handleInputChange = (event) => {
    setAmount(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const income = {
      amount: parseInt(amount)
    }

    addincome(income)
    resetState()
  }

  const resetState = () => {
    setAmount(0)
  }

  return (
    <form className='income-form'>
      <label htmlFor='amount'>Monthly Income</label>
      <input
        className='income-input'
        type='number'
        name='amount'
        value={this.state.amount}
        onChange={event => this.handleInputChange(event)}
      />
      <button onClick={event => this.handleSubmit(event)} className='income-button'>Submit</button>
    </form>
  )
}

export default IncomeForm







// class IncomeForm extends Component {
//   constructor() {
//     super();
//     this.state = {
//       amount: 0,
//     }
//   }
//
//   handleInputChange = (event) => {
//     this.setState({amount: event.target.value})
//   }
//
//   handleSubmit = (event) => {
//     event.preventDefault()
//     const income = {
//       amount: parseInt(this.state.amount)
//     }
//     this.props.addIncome(income)
//     this.resetState()
//   }
//
//   resetState = () => {
//     this.setState({
//       amount: 0
//     })
//   }
//
//   render() {
//     return (
//       <form className='income-form'>
//         <label htmlFor='amount'>Monthly Income</label>
//         <input
//           className='income-input'
//           type='number'
//           name='amount'
//           value={this.state.amount}
//           onChange={event => this.handleInputChange(event)}
//         />
//         <button onClick={event => this.handleSubmit(event)} className='income-button'>Submit</button>
//       </form>
//     )
//   }
// }
//
// export default IncomeForm
