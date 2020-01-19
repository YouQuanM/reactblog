import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import LoginDialog from './loginDialog';
interface IUser {
  id: string | number,
  name: string,
  avatar?: string;
  introduction?: string;
}

type Props = { 
  user: IUser | null
};

interface State {
  visible: boolean
}

export default class user extends Component<Props, State> {
  state = {
    user: null,
    visible: false
  }

  login = () => {
    this.setState({
      visible: true
    })
  }

  toMinePage = () => {
    console.log('to mine page')
  }
  
  logout = () => {
    console.log('logout')
  }
  
  menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => {this.toMinePage()}}>
          个人主页
        </span>
      </Menu.Item>
      <Menu.Item>
        <span onClick={() => {this.logout()}}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  )

  render() {
    return (
      <div className="header-user">
        {
          this.state.user === null ? 
            <Button type="primary" shape="circle" onClick={() => {this.login()}}>登录</Button> :
            <Dropdown overlay={this.menu} placement="bottomCenter">
              <Button>{user && user['name']}</Button>
            </Dropdown>
        }
        <LoginDialog visible={this.state.visible}/>
      </div>
    )
  }
}
