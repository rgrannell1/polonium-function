
import React from 'react'

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

export default LoadingBar
