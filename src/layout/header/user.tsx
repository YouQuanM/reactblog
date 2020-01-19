import React, { SFC } from 'react';
import { Button, Dropdown, Menu } from 'antd';

interface IUser {
  id: string | number,
  name: string,
  avatar?: string;
  introduction?: string;
}

type Props = { 
  user: IUser | null
};

const toMinePage = () => {
  console.log('to mine page')
}

const logout = () => {
  console.log('logout')
}

const menu = (
  <Menu>
    <Menu.Item>
      <span onClick={toMinePage}>
        个人主页
      </span>
    </Menu.Item>
    <Menu.Item>
      <span onClick={logout}>
        退出登录
      </span>
    </Menu.Item>
  </Menu>
)

export const User : SFC<Props> =({user}) => {
    return (
      <div className="header-user">
        {
          user === null ? 
            <Button type="primary" shape="circle">登录</Button> :
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>{user && user['name']}</Button>
            </Dropdown>
        }
      </div>
    )
}
