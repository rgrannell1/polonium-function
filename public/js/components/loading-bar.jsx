
import React from 'react'
import {connect} from 'react-redux'

import constants from '../../js/constants.js'
import loading_bar_css from './loading-bar.css.jsx'

const LoadingBar = props => {
  const loadingBar = {}
  const style = loading_bar_css(props.colours)
  return (
    <div style={loadingBar}>
      <div style={Object.assign({}, style.bar, style.bar_one)}></div>
      <div style={Object.assign({}, style.bar, style.bar_two)}></div>
      <div style={Object.assign({}, style.bar, style.bar_three)}></div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    colours: state.constants.colours,
    active: state.toggleLoadingBar.active
  }
}

export default connect(mapStateToProps)(LoadingBar)
