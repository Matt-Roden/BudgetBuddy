import React, { Component } from 'react'

import './App.css';

import Header from './Components/Header/Header'
import IncomeForm from './Components/IncomeForm/IncomeForm'
// import ExpenseForm from './Components/ExpenseForm/ExpenseForm'
// import BudgetDisplay from './Components/BudgetDisplay/BudgetDisplay'

class App extends Component {
  constructor() {
    super();
    this.state = {
      income: 0,
      expenses: [],
      totalExpenses: 0,
      totalSavings: 0
    }
  }

  addIncome = (income) => {
    this.setState({ income: income.amount })
  }

  addNewExpense = (expense) => {
    this.setState({ expenses: [...this.state.expenses, expense] })
  }

  getTotalExpenses = () => {
    const total = this.state.expenses.reduce((acc, expense) => {
      acc += expense.amount
      return acc
    }, 0)

    this.setState({
      totalExpenses: total
    })
  }

  getTotalSavings = () => {
    const totalSavings = (this.state.income) - (this.state.totalExpenses)

    this.setState({ totalSavings: totalSavings })
  }

  render() {
    return (
      <div className='App'>
        <IncomeForm addIncome={this.addIncome}/>
      </div>
    )
  }
}

export default App;
