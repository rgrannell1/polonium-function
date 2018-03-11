
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import WebsiteInput from '../website-input/index.jsx'
import PasswordInput from '../password-input/index.jsx'
import SubmitButton from '../submit-button/index.jsx'
import password_form_css from '../password-form/index.css.jsx'

const PasswordForm = props => {
  const style = password_form_css(props.colours)
  return (
    <form style={style.form}>
      <WebsiteInput/>
      <p style={style.website_input_error}>{props.websiteError}</p>
      <PasswordInput/>
      <p style={style.password_input_error}>{props.passwordError}</p>
      <SubmitButton/>
    </form>
  )
}

PasswordForm.propTypes = {

}

const mapStateToProps = state => {
  const {website, password, triggered} = state.app

  const exists = {
    website: !!website && website.length > 0,
    password: !!password && password.length > 0
  }
  const tooShort = {
    website: !exists.website || website.length === 0,
    password: !exists.password || password.length < 12
  }

  const shouldDisplayError = {
    website: (exists.password && tooShort.website) || (triggered && tooShort.website),
    password: (exists.password && tooShort.password) || (triggered && tooShort.password)
  }

  return {
    colours: state.constants.colours,
    websiteError: shouldDisplayError.website
      ? 'Website must be provided'
      : '\xa0',
    passwordError: shouldDisplayError.password
      ? 'Password must be at least 12 characters'
      : '\xa0',
  }
}

export default connect(mapStateToProps)(PasswordForm)
