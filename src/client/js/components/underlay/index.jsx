
import React from 'react'
import {connect} from 'react-redux'

import {hasProp} from '../../utils.js'
import underlayCss from './index.css.jsx'

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

  const style = underlayCss(props.colours)
  return (
    <div style={style.underlay} />
  )
}

const mapStateToProps = state => {
  return {
    display: hasProp('app.derivedPassword.text', state) && state.app.derivedPassword.text
  }
}

export default connect(mapStateToProps)(Underlay)
