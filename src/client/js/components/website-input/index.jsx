
import React from 'react'
import {connect} from 'react-redux'

import constants from '../../constants.js'
import website_input_css from '../website-input/index.css.jsx'
import actions from '../../actions.js'

/**
 * The Polonium website-input component
 *
 * @param  {object} props.
 * @param {object} props.colours       an object containing colours
 * @param {array} props.updateWebsite  a function that dispatches a redux action
 *
 * @return {Element}
 */
const WebsiteInput = props => {
  const style = website_input_css(props.colours)
  return (
    <div style={style.website_input_container}>
      <label htmlFor="website">Site</label>
      <input
        id="website"
        style={style.website_input}
        type="text"
        required=""
        minLength={constants.limits.minimumWebsiteLength}
        onInput={event => props.updateWebsite(event)}
        autoCorrect="off"
        autoCapitalize="none"
        pattern={constants.patterns.website}>
      </input>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    colours: state.constants.colours
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateWebsite (event) {
      dispatch(actions.update_website(event.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteInput)
