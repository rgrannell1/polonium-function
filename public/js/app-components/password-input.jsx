
import React from 'react'
import constants from '../../js/constants.js'
import password_input_css from './password-input.css.jsx'
import {connect} from 'react-redux'
import actions from '../actions.js'

const PasswordInput = props => {
  return (
    <div style={password_input_css.password_input_container}>
      <label htmlFor="password">Master Password</label>
      <input
        id="password"
        type="password"
        style={password_input_css.password_input}
        required=""
        minLength={constants.limits.minimumPasswordLength}
        onInput={event => props.updatePassword(event)}
        pattern={constants.patterns.website}>
      </input>
    </div>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePassword (event) {
      dispatch(actions.update_password(event.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordInput)
