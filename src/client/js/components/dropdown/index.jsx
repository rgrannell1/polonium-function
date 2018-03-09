
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import constants from '../../constants.js'
import dropdown_css from './index.css.jsx'

/**
 * A dropdown component.
 *
 * @param  {Object} props.
 * @param {boolean} props.dropdownShown should the dropdown be displayed?
 * @param {object} props.colours        colours supplied to the components css
 * @param {array} props.links           an array of link objects
 *
 * @return {Element}
 */
const Dropdown = props => {
  if (!props.dropdownShown) {
    return null
  } else {
    const style = dropdown_css(props.colours)
    return (
      <ul style={style.settings_menu}>
        {props.links.map(({text, href}) => (
          <li key={text}><a style={style.link} href={href}>{text}</a></li>
        ))}
      </ul>
    )
  }
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
    links: state.constants.links,
    dropdownShown: state.app.dropdownActive
  }
}

export default connect(mapStateToProps)(Dropdown)
