import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {

  const initialState = {
    showForm: false,
  }

  const [componentState, setComponentState] = useState(initialState);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
    setComponentState((prevState) => ({ ...prevState, showForm: false }));
  };

  const buttonClickHandler = () => {
    setComponentState((prevState) => ({ ...prevState, showForm: true }));
  }

  const cancelHandler = () => {
    setComponentState((prevState) => ({ ...prevState, showForm: false }));
  }

  if (!componentState.showForm) {
    return (
      <div className="new-expense">
        <button onClick={buttonClickHandler}>
          Add new expense
        </button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>
    </div>
  )
}

export default NewExpense;
