
import React from 'react'
import constants from '../../js/constants.js'
import submit_button_css from './submit-button.css.jsx'
import {connect} from 'react-redux'

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
      onClick={() => reactions.handleSubmit()} />
  )
}

const mapStateToProps = state => {
  return {
    buttonState: 'default',
  }
}

export default connect(mapStateToProps)(SubmitButton)
