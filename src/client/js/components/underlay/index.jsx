
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import constants from '../../constants.js'
import underlay_css from './index.css.jsx'
import actions from '../../actions.js'

/**
 * A component for darkening a page's background
 *
 * @param  {object} props
 * @param  {boolean} props.display should the underlay be shown?
 * @param  {object} props.colours an object of colours
 *
 * @return {Element}
 */
const Underlay = props => {
  if (!props.display) {
    return null
  }

  const style = underlay_css(props.colours)
  return (
    <div style={style.underlay}/>
  )
}

const mapStateToProps = state => {
  return {
    display: !!state.retrievedPassword,
  }
}

export default connect()(Underlay)
