
import React from 'react'
import constants from '../../constants.js'
import submit_button_css from '../submit-button/index.css.jsx'
import {connect} from 'react-redux'
import actions from '../../actions.js'

const buttonText = state => {
  const text = {
    default: 'Get Password',
    active: 'Fetching...'
  }

  return text[state]
}

const styleText = (state, colours) => {
  const styles = submit_button_css(colours)
  const specifics = {
    default: styles.submit_button_default,
    active: styles.submit_button_active
  }

  return Object.assign({}, styles.submit_button, specifics[state])
}

const SubmitButton = ({colours, state, clickButton}) => {
  return (
    <input
      id="submit"
      style={styleText(state, colours)}
      type="button"
      value={buttonText(state)}
      onClick={() => clickButton(state)} />
  )
}

const mapStateToProps = state => {
  return {
    colours: state.constants.colours,
    state: state.app.submitButtonState || 'default'
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton (state) {
      dispatch(actions.click_submit_button(state))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
