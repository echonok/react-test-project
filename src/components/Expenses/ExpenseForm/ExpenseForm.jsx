import './ExpenseForm.css'
import { useState } from 'react';

const ExpenseForm = (props) => {

  const initialState = {
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  }

  const [userInput, setUserInput] = useState(initialState)

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => ({ ...prevState, enteredTitle: event.target.value }))
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => ({ ...prevState, enteredAmount: event.target.value }))
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => ({ ...prevState, enteredDate: event.target.value }))
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { ...userInput, enteredDate: new Date(userInput.enteredDate) }
    props.onSaveExpenseData(expenseData)
    setUserInput(() => initialState)
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input value={userInput.enteredTitle} onChange={titleChangeHandler} type="text"/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input value={userInput.enteredAmount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input value={userInput.enteredDate} onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-31"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
