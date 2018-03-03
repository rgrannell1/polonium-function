
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import header from './header.css.jsx'
import actions from '../actions.js'

const Header = props => {
  return (
    <header style={header.main_head}>
      <a href="/" style={header.link}>
        <h1 style={header.brand_title}>{props.title}</h1>
      </a>
      <label style={header.burger_menu} onClick={props.clickBurgerMenu} htmlFor="slide" title="Main Menu">⋮</label>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {title: state.title}
}

const mapDispatchToProps = dispatch => {
  return {
    clickBurgerMenu () {
      dispatch(actions.toggle_dropdown())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
