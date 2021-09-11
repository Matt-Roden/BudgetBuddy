import React, { Component } from 'react'

import './App.css';

import Header from '../Header/Header'
import IncomeForm from '../IncomeForm/IncomeForm'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import BudgetDisplay from '../BudgetDisplay/BudgetDisplay'

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
    this.setState({ income: income })
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
        <IncomeForm />
      </div>
    )
  }
}

export default App;
