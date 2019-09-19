import React, { Fragment, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Alert } from 'antd';

const BudgetForm = (props) => {

  // state
  const [name, setName] = useState(0);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(false);

  const addExpense = e => {
    e.preventDefault();
    // validate
    if(amount < 1 || NaN(amount) || name === ''){
      setError(true);
      return;
    }
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
            style={{width: 200}}/>
        </Form.Item>
        <Form.Item label="Enter your amount expense">
          <Input 
            placeholder="i.e. 20" 
            type="number"
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