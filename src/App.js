import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'; 
import 'antd/dist/antd.js'; 
import { Layout, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import Head from './components/Header';
import Question from './components/Question';
import BudgetForm from './components/BudgetForm';
import ExpenseList from './components/ExpenseList';
import BudgetControl from './components/BudgetControl';
const { Content, Footer } = Layout;

function App() {

  // state
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [askBudget, setAskBudget] = useState(true);
  const [createExpense, setCreateExpense] = useState(false);
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if(createExpense){
      const expenseList = [...expenses, expense];
      setExpenses(expenseList);
      setCreateExpense(false);
    }
  }, [createExpense]);

  return (
    <Layout className="layout">
      <Head/>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Weekly</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 820 }}>
          { (askBudget) ?
              <Question 
              setBudget={setBudget}
              setAskBudget={setAskBudget}
              setRemaining={setRemaining}
              />
            : (
              <div>
                <Row>
                  <Col span={12}>
                    <BudgetForm
                      setExpense={setExpense}
                      setCreateExpense={setCreateExpense}
                    />
                  </Col>
                  <Col span={12}>
                    <ExpenseList
                      expenses={expenses}
                    />
                    <BudgetControl
                      budget={budget}
                      remaining={remaining}
                    />
                  </Col>
                </Row>
              </div>
            )
          }
        </div>
      </Content>
    <Footer style={{ textAlign: 'center' }}>Adparatio DEsign ©2019 Created by Javier</Footer>

    </Layout>
  );
}

export default App;
