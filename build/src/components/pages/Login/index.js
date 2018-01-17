import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'

import { ProfileAvatar, LoginForm } from '../../../components'

import { attemptLogin } from '../../../services'

import './style.css'

class Login extends PureComponent {
  state = {
    open: false,
    userObject: {
      username: 'caio',
      password: '123',
      status: 'unauthorized'
    }
  }

  componentDidMount = () => {
    // this.props.loginRequest()
    const bla = 1212
    attemptLogin(bla)
  }
  
  toggleProfile = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  onChangeText = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <div className="container">
        <h3 style={{ textAlign: "center " }}>MagicBox CMS</h3>
        <h4 style={{ textAlign: "center " }}>Welcome</h4>
        <div className={this.state.open ? "profile--open" : "profile"}>
          <ProfileAvatar toggleProfile={this.toggleProfile} />
          <LoginForm
            onChangeText={this.onChangeText}
          />
        </div>
      </div>
    )
  }
}

export default Login
