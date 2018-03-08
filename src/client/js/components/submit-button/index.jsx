
import React from 'react'
import constants from '../../constants.js'
import submit_button_css from '../submit-button/index.css.jsx'
import {connect} from 'react-redux'
import actions from '../../actions.js'

const SubmitButton = props => {
  const submitStyle = submit_button_css(props.colours)
  let style = Object.assign({}, submitStyle.submit_button)
  let buttonText = ''

  if (props.buttonState === 'default') {
    buttonText = 'Get Password'
    Object.assign(style, submitStyle.submit_button_default)
  } else if (props.buttonState === 'active') {
    buttonText = 'Fetching...'
    Object.assign(style, submitStyle.submit_button_active)
  } else if (props.buttonState === 'blocked') {

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
  let buttonState = 'default'

//  if (state.clickSubmitButton.error) {
//    buttonState = 'error'
//  } else if (state.clickSubmitButton.active) {
//    buttonState = 'active'
//  } else {
//    buttonState = 'default'
//  }

  return {
    colours: state.constants.colours,
    buttonState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton () {
      dispatch(actions.click_submit_button())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
