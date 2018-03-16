
import React from 'react'
import {connect} from 'react-redux'

import loadingBarCss from '../loading-bar/index.css.jsx'

/**
 * The Polonium loading-bar component
 *
 * @param  {Object} props
 * @param {boolean} props.active is the loading bar active?
 * @param {object} props.colours  an object of colours
 *
 * @return {Element}
 */
const LoadingBar = props => {
  const style = loadingBarCss(props.colours)
  const loadingBarStyle = Object.assign({}, style.loading_bar_active)

  if (!props.active) {
    loadingBarStyle.visibility = 'hidden'
  }

  return (
    <div style={loadingBarStyle}>
      <style>{style.keyframeContent}</style>
      <div style={Object.assign({}, style.bar, style.bar_one)} />
      <div style={Object.assign({}, style.bar, style.bar_two)} />
      <div style={Object.assign({}, style.bar, style.bar_three)} />
    </div>
  )
}

/**
 * Map the Redux state to this components properties
 *
 * @param  {Object} state the Redux state
 * @return {Object} the component properties
 */
const mapStateToProps = state => {
  let active = false

  if (state.app && state.app.submitButton && state.app.submitButton.state === 'active') {
    active = true
  }

  return {
    colours: state.constants.colours,
    active
  }
}

export default connect(mapStateToProps)(LoadingBar)
