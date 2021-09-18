import React, { Component, useState, useEffect } from 'react'

import './App.css';

import Header from './Components/Header/Header'
import IncomeForm from './Components/IncomeForm/IncomeForm'
import ExpenseForm from './Components/ExpenseForm/ExpenseForm'
import BudgetDisplay from './Components/BudgetDisplay/BudgetDisplay'


const App = () => {
  const [income, setIncome] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)

  const addIncome = (income) => {
    setIncome(income)
  }

  const addNewExpense = (expense) => {
    setExpenses([...expenses, expense])
    getTotalExpenses()
  }

  const getTotalExpenses = () => {
    const total = expenses.reduce((acc, expense) => {
      acc += expense
      return acc
    }, 0)

    setExpenses(parseInt(total))
    getTotalSavings()
  }

  const getTotalSavings = () => {
    const totalSavings = (income) - (totalExpenses)
    setTotalSavings(parseInt(totalSavings))
  }

  return (
    <div className='App'>
      <Header />
      <IncomeForm addIncome={addIncome}/>
      <ExpenseForm addNewExpense={addNewExpense}/>
      <BudgetDisplay />
    </div>
  )
}

export default App;

















// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       income: 0,
//       expenses: [],
//       totalExpenses: 0,
//       totalSavings: 0
//     }
//   }
//
//   addIncome = (income) => {
//     this.setState({ income: income.amount })
//   }
//
//   addNewExpense = (expense) => {
//     this.setState({ expenses: [...this.state.expenses, expense] })
//     setTimeout(() => {this.getTotalExpenses()}, 300)
//   }
//
//   getTotalExpenses = () => {
//     const total = this.state.expenses.reduce((acc, expense) => {
//       acc += expense.amount
//       return acc
//     }, 0)
//
//     this.setState({
//       totalExpenses: parseInt(total)
//     })
//
//     this.getTotalSavings()
//   }
//
//   getTotalSavings = () => {
//     const totalSavings = (this.state.income) - (this.state.totalExpenses)
//
//     this.setState({ totalSavings: totalSavings })
//   }
//
//   render() {
//     return (
//       <div className='App'>
//         <Header />
//         <IncomeForm addIncome={this.addIncome} />
//         <ExpenseForm addNewExpense={this.addNewExpense} />
//         <BudgetDisplay />
//       </div>
//     )
//   }
// }
//
// export default App;
