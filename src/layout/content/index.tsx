import React, { Component } from 'react'
import { Layout } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../pages/home';
import Test from '../../pages/test';
import Mine from '../../pages/mine';
import List from '../../pages/article';
const { Content } = Layout;

export default class index extends Component {
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <BrowserRouter>
          <Route exact path="/" component={Home}></Route>
          <Route path="/test" component={Test}></Route>
          <Route path="/mine" component={Mine}></Route>
          <Route path="/list" component={List}></Route>
        </BrowserRouter>
      </Content>
    )
  }
}
