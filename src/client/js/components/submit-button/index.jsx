
import React from 'react'
import constants from '../../constants.js'
import {prop} from '../../utils.js'
import submit_button_css from '../submit-button/index.css.jsx'
import {connect} from 'react-redux'
import actions from '../../actions.js'
import services from '../../services/index.js'

const buttonText = state => {
  const text = {
    default: 'Get Password',
    blocked: 'Get Password',
    active: 'Fetching...',
    done: 'Done'
  }

  return text[state]
}

const styleText = (buttonState, colours) => {
  const styles = submit_button_css(colours)
  const specifics = {
    default: styles.submit_button_default,
    active: styles.submit_button_active,
    blocked: styles.submit_button_blocked,
    done: styles.submit_button_done
  }

  if (!specifics.hasOwnProperty(buttonState)) {
    console.error(`no specific button css for state ${buttonState}`)
  }

  const specificButtonState = specifics[buttonState]

  return Object.assign({}, styles.submit_button, specificButtonState)
}

const SubmitButton = ({colours, website, password, buttonState, clickButton}) => {
  return (
    <input
      id='submit'
      style={styleText(buttonState, colours)}
      type='button'
      value={buttonText(buttonState)}
      onClick={() => clickButton(buttonState, website, password)} />
  )
}

const mapStateToProps = state => {
  let buttonState = 'default'

  if (state.app && state.app.submitButton && state.app.submitButton.state) {
    buttonState = state.app.submitButton.state
  }

  return {
    colours: state.constants.colours,
    website: prop('app.website.text', state),
    password: prop('app.password.text', state),
    buttonState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton (buttonState, salt, password) {
      const isAllowed = buttonState !== 'active'

      if (isAllowed) {
        dispatch(actions.click_submit_button(buttonState))

        services.fetchPassword({salt, password})
          .then(password => {
            dispatch(actions.set_derived_password({text: password}))
          })
          .catch(err => {
            dispatch(actions.set_derived_password({error: err}))
          })
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButton)
