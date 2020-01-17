import React, { Component } from 'react'
import Content from './content';
import Header from './header';
import Footer from './footer';

export default class index extends Component {
  render() {
    return (
      <div className="my-layout">
        <Content/>
        <Header/>
        <Footer/>
      </div>
    )
  }
}
