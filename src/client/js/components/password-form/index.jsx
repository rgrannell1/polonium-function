
import React from 'react'
import {connect} from 'react-redux'

import WebsiteInput from '../website-input/index.jsx'
import PasswordInput from '../password-input/index.jsx'
import SubmitButton from '../submit-button/index.jsx'
import password_form_css from '../password-form/index.css.jsx'

const PasswordForm = props => {
  const style = password_form_css(props.colours)
  return (
    <form style={style.form}>
      <WebsiteInput />
      <p style={style.website_input_error}>{props.websiteError}</p>
      <PasswordInput />
      <p style={style.password_input_error}>{props.passwordError}</p>
      <SubmitButton />
    </form>
  )
}

PasswordForm.propTypes = {

}

const mapStateToProps = state => {
  const {website, password} = state.app

  let websiteError = '\xa0'
  let passwordError = '\xa0'

  if (website && website.error) {
    websiteError = website.error
  }
  if (password && password.error) {
    passwordError = password.error
  }

  return {
    colours: state.constants.colours,
    websiteError,
    passwordError
  }
}

export default connect(mapStateToProps)(PasswordForm)
