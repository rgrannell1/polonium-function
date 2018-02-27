
import j2c from '../../js/libs/j2c.js'
import constants from '../../js/constants.js'
import password_input_css from './password-input.css.jsx'
import actions from '../actions.js'

class PasswordInput extends React.Component {
  handleInput () {
    const {store} = this.props
    store.dispatch(actions.passwordUpdate('this is some text'))
   }
  render () {
    return (
      <div style={password_input_css.password_input_container}>
        <label htmlFor="password">Master Password</label>
        <input
          id="password"
          type="password"
          style={password_input_css.password_input}
          required=""
          minLength={constants.limits.minimumPasswordLength}
          onInput={this.handleInput.bind(this)}
          pattern={constants.patterns.website}>
        </input>

      </div>
    )
  }
}

PasswordInput.propTypes = {
  store: PropTypes.object.isRequired
}

export default PasswordInput
