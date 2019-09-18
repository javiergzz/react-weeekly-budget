import React from 'react';
import 'antd/dist/antd.css'; 
import 'antd/dist/antd.js'; 
import { Layout, Breadcrumb } from 'antd';
import Head from './components/Header';
const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Head/>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Weekly</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 800 }}>Content</div>
      </Content>
    <Footer style={{ textAlign: 'center' }}>Adparatio DEsign ©2019 Created by Javier</Footer>

    </Layout>
  );
}

export default App;
