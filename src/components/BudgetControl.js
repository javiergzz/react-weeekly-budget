import React, { Fragment } from 'react';
import { Alert } from 'antd';

const BudgetControl = ({budget, remaining}) => {
  return (
    <Fragment>
      <Alert message={`Budget: $${budget}`} type="info" showIcon />
      <Alert message={`Remaining: $${remaining}`} type="warning" showIcon />
    </Fragment>
  );
};

export default BudgetControl;