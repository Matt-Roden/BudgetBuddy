import React, { Component } from 'react'
import './IncomeForm.css'

class IncomeForm extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    }
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const income = {
      amount: parseInt(this.state.income)
    }
    this.props.addIncome(income)
    this.resetState()
  }

  resetState = () => {
    this.setState({
      income: 0
    })
  }

  render() {
    return (
      <form>
        <label>Monthly Income</label>
        <input
          type='number'
          name='income'
          value={this.state.income}
          onChange={event => this.handleInputChange(event)}
        />
        <button onClick={event => this.handleSubmit(event)}>Submit</button>
      </form>
    )
  }
}

export default IncomeForm
