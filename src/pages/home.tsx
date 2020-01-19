import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  
}
interface State {
  name: string;
}

export default class home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "yh",
    };
  }

  handleJump = () => {
    this.props.history.push('test')
  }

  render() {
    return (
      <div className="home-page">
        <div style={{ background: '#fff', minHeight: 280}}>
          <div className="name">{this.state.name}</div>
          <div onClick={() => {this.handleJump()}}>totest</div>
        </div>
      </div>
    )
  }
}
