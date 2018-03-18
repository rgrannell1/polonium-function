
import React from 'react'
import constants from '../../constants.js'
import passwordInputCss from '../password-input/index.css.jsx'
import {connect} from 'react-redux'
import actions from '../../actions.js'

const PasswordInput = props => {
  const style = passwordInputCss(props.colours)
  return (
    <div style={style.password_input_container}>
      <label htmlFor='password'>Master Password</label>
      <input
        id='password'
        type='password'
        data-test-id='password_input'
        style={style.password_input}
        required=''
        minLength={constants.limits.minimumPasswordLength}
        onInput={event => props.updatePassword(event)}
        pattern={constants.patterns.password} />
    </div>
  )
}

const validatePassword = text => {
  let error = ''
  const isCorrectLength = text && text.length >= constants.limits.minimumPasswordLength
  const matchesPattern = (new RegExp(constants.patterns.password)).test(text)

  if (!isCorrectLength) {
    error = `Password must be at least ${constants.limits.minimumPasswordLength} characters long`
  } else if (!matchesPattern) {
    error = `Invalid character set in password`
  }

  return error
}

const mapStateToProps = state => {
  return {
    colours: state.constants.colours
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updatePassword (event) {
      const text = event.target.value
      dispatch(actions.update_password({
        text,
        error: validatePassword(text)
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordInput)
