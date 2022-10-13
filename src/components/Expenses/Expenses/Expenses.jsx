import './Expenses.css';
import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from '../ExpensesList/ExpensesList';

const Expenses = (props) => {

  const initialState = {
    dateFilter: 'all',
  }

  const [expensesState, setExpensesState] = useState(initialState);

  const changeDateFilterHandler = (year) => {
    setExpensesState((prevState) => {
      return { ...prevState, dateFilter: year };
    })
  }

  const filteredExpenses = expensesState.dateFilter === 'all'
    ? props.expenses
    : props.expenses.filter((expense) => expense.date.getFullYear().toString() === expensesState.dateFilter);

  console.log('Expenses ===>', { filteredExpenses })

  return (
    <Card className="expenses">
      <ExpensesFilter selectedDate={expensesState.dateFilter} onChangeDateFilter={changeDateFilterHandler}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  )
};

export default Expenses;
