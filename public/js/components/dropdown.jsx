
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import constants from '../../js/constants.js'
import dropdown_css from './dropdown.css.jsx'

const Dropdown = ({links, dropdownShown}) => {

  if (!dropdownShown) {
    return null
  } else {
    return (
      <ul style={dropdown_css.settings_menu}>
        {links.map(({text, href}) => (
          <li><a style={dropdown_css.link} key={text} href={href}>{text}</a></li>
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
    links: [
      {text: 'Terms of Use', href: '/terms'}
    ],
    dropdownShown: state.toggleDropdown.dropdownShown
  }
}

export default connect(mapStateToProps)(Dropdown)
