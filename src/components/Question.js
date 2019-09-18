import React, { Fragment } from 'react';
import { Form, Input, Button } from 'antd';

const Question = () => {
  return (
    <Fragment>
      <h2>What is your budget?</h2>
      <Form layout="vertical">
        <Form.Item label="Enter the amount you would like to spend each week">
          <Input placeholder="Your budget" style={{width: 200}}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Save</Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Question;