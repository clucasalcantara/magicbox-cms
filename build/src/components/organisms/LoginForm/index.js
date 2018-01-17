import React from 'react'

import { BlockInput } from '../../../components'

import './style.css'

const LoginForm = () => (
  <div className="profile__form">
    <div className="profile__fields">
      <BlockInput
        type="text"
        id="fieldUser"
        label="Username"
        required
        pattern='.*\S.*' />
      <BlockInput
        type="password"
        id="fieldPassword"
        label="Password"
        required
        pattern='.*\S.*' />
      <div className="profile__footer">
        <button className="btn">Login</button>
      </div>
    </div>
  </div>
)

export default LoginForm