import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Head = () => {
  return (
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Weekly</Menu.Item>
        <Menu.Item key="2">Monthly</Menu.Item>
        <Menu.Item key="3">Daily</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Head;