import React, { useState } from 'react';
import 'antd/dist/antd.css'; 
import 'antd/dist/antd.js'; 
import { Layout, Breadcrumb } from 'antd';
import Head from './components/Header';
import Question from './components/Question';
const { Content, Footer } = Layout;

function App() {

  // state
  const [budget, setBudget] = useState(0);
  return (
    <Layout className="layout">
      <Head/>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Weekly</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 820 }}>
          <Question setBudget={setBudget}/>
        </div>
      </Content>
    <Footer style={{ textAlign: 'center' }}>Adparatio DEsign ©2019 Created by Javier</Footer>

    </Layout>
  );
}

export default App;
