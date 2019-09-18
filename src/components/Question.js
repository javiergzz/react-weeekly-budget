import React, { Fragment, useState } from 'react';
import { Form, Input, Button } from 'antd';

const Question = () => {

  // define state
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  // validate budget
  const addBudget = e => {
    e.preventDefault();
    if(amount < 1 || isNaN(amount)){
      setError(true);
      return;
    }

    // send budget to main component

  }

  return (
    <Fragment>
      <h2>What is your budget?</h2>
      <Form layout="vertical" onSubmit={addBudget}>
        <Form.Item label="Enter the amount you would like to spend each week">
          <Input 
            placeholder="Your budget" 
            onChange={e => setAmount(parseInt(e.target.value, 10))}
            style={{width: 200}}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Save</Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Question;