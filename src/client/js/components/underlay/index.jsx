
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import constants from '../../constants.js'
import underlay_css from './index.css.jsx'
import actions from '../../actions.js'

const Underlay = props => {
  if (!props.display) {
    return null
  }

  const style = underlay_css(props.colours)
  return (
    <div style={style.underlay}/>
  )
}

export default connect()(Underlay)
