import React, { Component } from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Greeting from './Greeting';

class LoginControl extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {

    const {isLoggedIn} = this.state;

    let button = null;

    if (isLoggedIn) {
      button = <LogoutButton onClickLogout={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClickLogin={this.handleLoginClick} />;
    }

    return (
      <div>
       <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
