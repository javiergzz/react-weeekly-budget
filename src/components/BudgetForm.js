import React, { Fragment, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Alert } from 'antd';
import shortid from 'shortid';

const BudgetForm = (props) => {

  const { setExpense, setCreateExpense } = props;
  // state
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = e => {
    e.preventDefault();
    // validate
    if(amount < 1 || isNaN(amount) || name === ''){
      setError(true);
      return;
    }
    // build expense object
    const expense = {
      name, 
      amount,
      id: shortid.generate()
    }
    // send expense to main component
    setExpense(expense);
    setCreateExpense(true);
    // delete alert
    setError(false);
    // reset form
    setName('');
    setAmount(0);
  }

  return (
    <Fragment>
      <h2>Add your expenses here</h2>

      { error ? <Alert message="Both fields are required" type="error" style={{width: 200, marginBottom: 12 }} /> : null }

      <Form layout="vertical" onSubmit={addExpense}>
        <Form.Item label="Enter your expense">
          <Input 
            placeholder="i.e. Bus ticket" 
            onChange={e => setName(e.target.value)}
            value={name}
            style={{width: 200}}/>
        </Form.Item>
        <Form.Item label="Enter your amount expense">
          <Input 
            placeholder="i.e. 20" 
            type="number"
            value={amount}
            onChange={e => setAmount(parseInt(e.target.value, 10))}
            style={{width: 200}}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Add</Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default BudgetForm;