import React, { Component } from 'react'
import { Layout } from 'antd';
import Content from './content';
import Header from './header';
import Footer from './footer';


export default class index extends Component {
  render() {
    return (
      <Layout>
        <Header/>
        <Content/>
        <Footer/>
      </Layout>
    )
  }
}
