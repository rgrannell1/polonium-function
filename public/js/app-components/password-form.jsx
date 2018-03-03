
import React from 'react'
import PropTypes from 'prop-types'

import WebsiteInput from './website-input.jsx'
import PasswordInput from './password-input.jsx'
import SubmitButton from './submit-button.jsx'
import password_form_css from './password-form.css.jsx'

const PasswordForm = props => {
  return (
    <form style={password_form_css.form}>
      <WebsiteInput/>
      <p style={password_form_css.website_input_error}>xxxx</p>
      <PasswordInput/>
      <p style={password_form_css.password_input_error}>xxxx</p>
      <SubmitButton/>
    </form>
  )
}

PasswordForm.propTypes = {

}

export default PasswordForm
