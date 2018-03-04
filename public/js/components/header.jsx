
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import header_css from './header.css.jsx'
import actions from '../actions.js'

const Header = props => {
  const style = header_css(props.colours)
  return (
    <header style={style.main_head}>
      <a href="/" style={style.link}>
        <h1 style={style.brand_title}>{props.title}</h1>
      </a>
      <label style={style.burger_menu} onClick={props.clickBurgerMenu} htmlFor="slide" title="Main Menu">⋮</label>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    colours: state.constants.colours,
    title: state.constants.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickBurgerMenu () {
      dispatch(actions.toggle_dropdown())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
