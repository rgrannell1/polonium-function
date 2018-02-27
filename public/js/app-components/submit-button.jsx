

import j2c from '../../js/libs/j2c.js'
import constants from '../../js/constants.js'
import submit_button_css from './submit-button.css.jsx'

class SubmitButton extends React.Component {
  handleSubmit () {

  }
  render () {
    const style = Object.assign({},
      submit_button_css.submit_button)

    return (
      <input
        id="submit"
        style={style}
        type="button"
        value="Get Password"
        onClick={this.handleSubmit} />
    )
  }
}

export default SubmitButton
