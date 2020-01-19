import React, { Component } from 'react'
import styled from 'styled-components'

import { Layout } from 'antd';
import User from './user';
const { Header } = Layout;
interface IUser {
  id: [string, number],
  name: string,
  avatar?: string;
  introduction?: string;
}

const HeaderLogo = styled.img`
  width: 50px;
  height: 50px;
`

const LayoutHeader = styled(Header)`
  position: 'fixed';
  z-index: 1;
  width: '100%';
  height: '80px';
  display: flex;
  justify-content: space-between;
  align-items:center;
`

const LayoutHeaderTitle = styled.p`
  margin: 0;
  font-size: 30px;
  color: #fff;
  align-items:center;
`

const user = null
export default class index extends Component {
  render() {
    return (
      <LayoutHeader>
        <HeaderLogo src="assets/logo.png" alt="logo" className="header-logo"/>
        <LayoutHeaderTitle>test</LayoutHeaderTitle>
        <User user={user}/>
      </LayoutHeader>
    )
  }
}
