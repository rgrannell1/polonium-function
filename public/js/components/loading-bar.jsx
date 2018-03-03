
import React from 'react'
import {connect} from 'react-redux'

import constants from '../../js/constants.js'
import loading_bar_css from './loading-bar.css.jsx'

const LoadingBar = active => {
  const loadingBar = {}
  return (
    <div style={loadingBar}>
      <div style={Object.assign({}, loading_bar_css.bar, loading_bar_css.bar_one)}></div>
      <div style={Object.assign({}, loading_bar_css.bar, loading_bar_css.bar_two)}></div>
      <div style={Object.assign({}, loading_bar_css.bar, loading_bar_css.bar_three)}></div>
    </div>
  )
}

const mapStateToProps = state => {
  return {active: state.loadingBarActive}
}

export default connect(mapStateToProps)(LoadingBar)
