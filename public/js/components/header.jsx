
import React from 'react'
import {connect} from 'react-redux'

import header from './header.css.jsx'
import actions from '../actions.js'

const Header = ({title, clickBurgerMenu}) => {
  return (
    <header style={header.main_head}>
      <a href="/" style={header.link}>
        <h1 style={header.brand_title}>{title}</h1>
      </a>
      <label style={header.burger_menu} onClick={clickBurgerMenu} htmlFor="slide" title="Main Menu">⋮</label>
    </header>
  )
}

const mapStateToProps = state => {
  return {title: state.title}
}

const mapDispatchToProps = dispatch => {
  return {
    clickBurgerMenu: () => dispatch(actions.toggle_dropdown())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
