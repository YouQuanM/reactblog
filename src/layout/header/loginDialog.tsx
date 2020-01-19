import React, { Component } from 'react'
import { Form, Icon, Input, Modal } from 'antd';
import { login } from '../../apis/auth';

interface LoginProps {
  visible: boolean;
}
interface LoginState {
  username: string;
  password: string;
}

export default class loginDialog extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: 'yinhang',
      password: 'yh19950320'
    }
  }

  handleOk = () => {
    login({name: this.state.username, password: this.state.password}).then(res => {
      console.log(res)
    })
  }

  handleCancel = () => {
    this.setState ({
      username: '',
      password: ''
    })
  }

  onInputChange = (e: any, tar: string) => {
    console.log(e, tar)
  }

  render() {
    return (
      <Modal
        title="Title"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Form layout="inline">
          <Form.Item>
            <Input
              value={this.state.username}
              onChange={e => {this.onInputChange(e, 'username')}}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          </Form.Item>
          <Form.Item>
            <Input
              value={this.state.password}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
