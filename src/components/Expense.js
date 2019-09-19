import React from 'react';
import { Descriptions } from 'antd';

const Expense = ({expense}) => {
  return (
    <Descriptions title={expense.name}>
    <Descriptions.Item label="Amount">${expense.amount}</Descriptions.Item>
  </Descriptions>
  );
};

export default Expense;