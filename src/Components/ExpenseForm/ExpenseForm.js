import React, { Component } from 'react'
class ExpenseForm extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      type: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleAdd = (event) => {
    event.preventDefault()
    const newExpense = {
      amount: parseInt(this.state.amount),
      type: this.state.type
    }
    this.props.addNewExpense(newExpense)
    this.resetState()
  }

  resetState = () => {
    this.setState({
      amount: 0,
      type: ''
    })
  }

  render() {

    return (
      <form>
        <input
          type='text'
          name='expenseType'
          placeholder='Type of Expense'
          value={this.state.type}
          onChange={event => this.handleInputChange(event)}
        />
        <input
          type='number'
          name='expenseAmount'
          value={this.state.amount}
          onChange={event => this.handleInputChange(event)}
        />
      </form>
    )
  }
} // end component

export default ExpenseForm
