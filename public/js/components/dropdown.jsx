
import React from 'react'
import PropTypes from 'prop-types'

import constants from '../../js/constants.js'
import dropdown_css from './dropdown.css.jsx'

const Dropdown = ({links}) => {
//  const dropdownShown = store.getState().dropdownShown === true
  const dropdownShown = false

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

export default Dropdown
