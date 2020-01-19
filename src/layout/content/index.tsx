import React, { Component } from 'react'
import { Layout } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Test from '../../pages/test';
const { Content } = Layout;

export default class index extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <BrowserRouter>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/test" component={Test}></Route>
        </BrowserRouter>
      </Content>
    )
  }
}
