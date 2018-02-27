
import j2c from '../../js/libs/j2c.js'

import WebsiteInput from './website-input.jsx'
import PasswordInput from './password-input.jsx'
import SubmitButton from './submit-button.jsx'
import password_form_css from './password-form.css.jsx'

class PasswordForm extends React.Component {
  render () {
    const {store} = this.props
    return (
      <form style={password_form_css.form}>
        <WebsiteInput store={store}/>
        <p style={password_form_css.website_input_error}>xxxx</p>
        <PasswordInput />
        <p style={password_form_css.password_input_error}>xxxx</p>
        <SubmitButton store={store}/>
      </form>
    )
  }
}

PasswordForm.propTypes = {
  store: PropTypes.object.isRequired
}

export default PasswordForm
