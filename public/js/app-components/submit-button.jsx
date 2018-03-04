
import React from 'react'
import constants from '../../js/constants.js'
import submit_button_css from './submit-button.css.jsx'
import {connect} from 'react-redux'
import actions from '../actions.js'

const SubmitButton = props => {
  const style = Object.assign({}, submit_button_css.submit_button)

  let buttonText = ''

  if (props.buttonState === 'default') {
    buttonText = 'Get Password'
  }

  return (
    <input
      id="submit"
      style={style}
      type="button"
      value={buttonText}
      onClick={() => props.clickButton()} />
  )
}

const mapStateToProps = state => {
  return {
    buttonState: 'default',
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton () {
      dispatch(actions.toggle_dropdown())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
