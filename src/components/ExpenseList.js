import React, { Fragment } from 'react';
import Expense from './Expense';

const ExpenseList = ({expenses}) => {
  return (
    <Fragment>
      <h3>Expense list</h3>
      {expenses.map(expense => (
        <Expense
          key={expense.id}
          expense={expense}
        />
      ))}
    </Fragment>
  );
};

export default ExpenseList;