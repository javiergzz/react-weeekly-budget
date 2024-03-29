import React, { Fragment, useState } from 'react';
import { Alert, Form, Input, Button } from 'antd';

const Question = (props) => {

  const { setBudget, setAskBudget, setRemaining } = props;
  // define state
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  // validate budget
  const addBudget = e => {
    e.preventDefault();
    console.log(e)
    if(amount < 1 || isNaN(amount)){
      setError(true);
      return;
    }
    
    // send budget to main component
    setError(false);
    setBudget(amount);
    setRemaining(amount);
    setAskBudget(false);
  };

  return (
    <Fragment>
      <h2>What is your budget?</h2>

      { error ? <Alert message="The budget is wrong" type="error" style={{width: 200, marginBottom: 12 }} /> : null }

      <Form layout="vertical" onSubmit={addBudget}>
        <Form.Item label="Enter the amount you would like to spend each week">
          <Input 
            placeholder="Your budget" 
            type="number"
            onChange={e => setAmount(parseInt(e.target.value, 10))}
            style={{width: 200}}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Question;