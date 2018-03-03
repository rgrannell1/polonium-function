
import React from 'react'
import constants from '../../js/constants.js'
import submit_button_css from './submit-button.css.jsx'

const reactions = {}
reactions.handleSubmit = () => {}

const SubmitButton = () => {
  const style = Object.assign({}, submit_button_css.submit_button)

  return (
    <input
      id="submit"
      style={style}
      type="button"
      value="Get Password"
      onClick={() => reactions.handleSubmit()} />
  )
}

export default SubmitButton
