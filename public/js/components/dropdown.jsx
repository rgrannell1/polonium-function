
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import constants from '../../js/constants.js'
import dropdown_css from './dropdown.css.jsx'

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

Dropdown.propTypes = {
  links: PropTypes.array
}

const mapStateToProps = state => {
  return {
    colours: state.constants.colours,
    links: [
      {text: 'Terms of Use', href: '/terms'}
    ],
    dropdownShown: state.toggleDropdown.dropdownShown
  }
}

export default connect(mapStateToProps)(Dropdown)
