import React, { Component } from 'react'
import './IncomeForm.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      income: 0,
    }
  }

  handleInputChange = (event) => {
    this.setState({income: event.target.vale})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const income = {
      id: Date.now(),
      ...this.state
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
          type='text'
          name='income'
          placeholder='Monthly Income...'
          value={this.state.income}
          onChange={event => this.handleInputChange}
        />
        <button onClick={event > this.handleSubmit}>Submit</button>
      </form>
    )
  }
}
