
import React from 'react'
import {prop} from '../../utils.js'
import submitButtonCss from '../submit-button/index.css.jsx'
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
  const styles = submitButtonCss(colours)
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

const validate = {
  salt (salt) {
    return salt && salt.length >= 1
  },
  password (password) {
    return password && password.length >= 12
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickButton (buttonState, salt, password) {
      const isActive = buttonState === 'active'
      const isAllowed = !isActive && validate.salt(salt) && validate.password(password)

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
