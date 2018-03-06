
import React from 'react'
import constants from '../../constants.js'
import password_input_css from '../password-input/index.css.jsx'
import {connect} from 'react-redux'
import actions from '../../actions.js'

const PasswordInput = props => {
  const style = password_input_css(props.colours)
  return (
    <div style={style.password_input_container}>
      <label htmlFor="password">Master Password</label>
      <input
        id="password"
        type="password"
        style={style.password_input}
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
    colours: state.constants.colours
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
