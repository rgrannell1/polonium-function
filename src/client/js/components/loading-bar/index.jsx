
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import loading_bar_css from '../loading-bar/index.css.jsx'


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
  const style = loading_bar_css(props.colours)
  const loadingBarStyle = Object.assign({}, style.loading_bar_active)

  if (!props.active) {
    loadingBarStyle.visibility = 'hidden'
  }

  return (
    <div style={loadingBarStyle}>
      <style>{style.keyframeContent}</style>
      <div style={Object.assign({}, style.bar, style.bar_one)}></div>
      <div style={Object.assign({}, style.bar, style.bar_two)}></div>
      <div style={Object.assign({}, style.bar, style.bar_three)}></div>
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
  return {
    colours: state.constants.colours,
    active: state.app.loadingBarActive
  }
}

export default connect(mapStateToProps)(LoadingBar)
