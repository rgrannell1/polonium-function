
import React from 'react'
import constants from '../../js/constants.js'
import password_input_css from './password-input.css.jsx'
import actions from '../actions.js'

const reactions = {}

reactions.handleInput = () => {
  store.dispatch(actions.passwordUpdate('this is some text'))
}

const PasswordInput = () => {
  return (
    <div style={password_input_css.password_input_container}>
      <label htmlFor="password">Master Password</label>
      <input
        id="password"
        type="password"
        style={password_input_css.password_input}
        required=""
        minLength={constants.limits.minimumPasswordLength}
        onInput={() => reactions.handleInput()}
        pattern={constants.patterns.website}>
      </input>
    </div>
  )
}

export default PasswordInput
