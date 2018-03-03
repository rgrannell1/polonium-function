
import React from 'react'
import constants from '../../js/constants.js'
import website_input_css from './website-input.css.jsx'

const WebsiteInput = () => {
  return (
    <div style={website_input_css.website_input_container}>
      <label htmlFor="website">Site</label>
      <input
        id="website"
        style={website_input_css.website_input}
        type="text"
        required=""
        minLength={constants.limits.minimumWebsiteLength}
        onInput={this.handleInput}
        autoCorrect="off"
        autoCapitalize="none"
        pattern={constants.patterns.website}>
      </input>
    </div>
  )
}

export default WebsiteInput
