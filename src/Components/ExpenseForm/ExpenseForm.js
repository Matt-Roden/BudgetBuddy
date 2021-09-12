import React, { Component } from 'react'
class ExpenseForm extends Component {
  constructor() {
    super();
    this.sate = {
      amount: 0,
      type: ''
    }
  }

  handleInputChange = () => {

  }

  handleAdd = () => {

  }

  render() {

    return (
      <input
        type='text'
        name='expenseType'
        value={this.state}
      />
    )
  }
} // end component

export default ExpenseForm
