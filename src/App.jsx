import './App.css';
import Expenses from './components/Expenses/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import { useState } from 'react';
import { ExpensesMock } from './mock/expenses.mock';

const App = () => {

  const initialState = {
    expenses: ExpensesMock,
  }

  const [appState, setAppState] = useState(initialState)

  const addExpenseHandler = (expense) => {
    const newExp = {
      title: expense.enteredTitle,
      amount: expense.enteredAmount,
      date: expense.enteredDate,
      id: expense.id,
    }
    setAppState((prevState) => ({ ...prevState, expenses: [...prevState.expenses, newExp] }))
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={appState.expenses}/>
    </div>
  );
}

export default App;
