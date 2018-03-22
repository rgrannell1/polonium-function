
import React from 'react'
import {connect} from 'react-redux'

import constants from '../../constants.js'
import websiteInputCss from '../website-input/index.css.jsx'
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
  const style = websiteInputCss(props.colours)
  return (
    <div style={style.website_input_container}>
      <label htmlFor='website'>Site</label>
      <input
        id='website'
        data-test-id='website_input'
        style={style.website_input}
        type='text'
        required=''
        minLength={constants.limits.minimumWebsiteLength}
        onInput={event => props.updateWebsite(event)}
        autoCorrect='off'
        spellCheck='false'
        autoCapitalize='none'
        pattern={constants.patterns.website} />
    </div>
  )
}

WebsiteInput.propTypes = {

}

const validateWebsite = text => {
  let error = ''
  const isCorrectLength = text && text.length >= constants.limits.minimumWebsiteLength
  const matchesPattern = (new RegExp(constants.patterns.website)).test(text)

  if (!isCorrectLength) {
    error = `Website must be at least
  ${constants.limits.minimumWebsiteLength} character long`
  } else if
  (!matchesPattern) { error = `Invalid character set in website` }

  return error
}

const mapStateToProps = state => {
  return {
    colours: state.constants.colours
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateWebsite (event) {
      const text = event.target.value
      dispatch(actions.update_website({
        text,
        error: validateWebsite(text)
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteInput)
