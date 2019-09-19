import React, { Fragment } from 'react';
import { Alert, Divider } from 'antd';
import { checkBudget } from '../helpers';

const BudgetControl = ({budget, remaining}) => {
  return (
    <Fragment>
      <Alert message={`Budget: $${budget}`} type="info" showIcon />
      <Divider dashed />
      <Alert message={`Remaining: $${remaining}`} type={checkBudget(budget, remaining)} showIcon />
    </Fragment>
  );
};

export default BudgetControl;