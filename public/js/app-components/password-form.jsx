
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import WebsiteInput from './website-input.jsx'
import PasswordInput from './password-input.jsx'
import SubmitButton from './submit-button.jsx'
import password_form_css from './password-form.css.jsx'

const PasswordForm = props => {
  return (
    <form style={password_form_css.form}>
      <WebsiteInput/>
      <p style={password_form_css.website_input_error}>{props.websiteError}</p>
      <PasswordInput/>
      <p style={password_form_css.password_input_error}>{props.passwordError}</p>
      <SubmitButton/>
    </form>
  )
}

PasswordForm.propTypes = {

}

const mapStateToProps = state => {
  const tooShort = {
    website: !state.updateWebsite.website,
    password: !state.updateWebsite.password || state.updateWebsite.password < 12
  }

  return {
    websiteError: tooShort.website ? 'Website must be provided' : '\xa0',
    passwordError: tooShort.password ? 'Password must be at least 12 characters' : '\xa0',
  }
}

export default connect(mapStateToProps)(PasswordForm)
