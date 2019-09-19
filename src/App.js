import React, { useState } from 'react';
import 'antd/dist/antd.css'; 
import 'antd/dist/antd.js'; 
import { Layout, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import Head from './components/Header';
import Question from './components/Question';
const { Content, Footer } = Layout;

function App() {

  // state
  const [budget, setBudget] = useState(0);
  const [askBudget, setAskBudget] = useState(true);

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
              />
            : (
              <div>
                <Row>
                  <Col span={12}>Form here</Col>
                  <Col span={12}>col-12</Col>
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
