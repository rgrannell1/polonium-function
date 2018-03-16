
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import headerCss from './index.css.jsx'
import actions from '../../actions.js'

/**
 * The Polonium header component
 *
 * @param  {Object} props
 * @param {string} props.title the title to display
 * @param {object} props.colours  an object of colours
 * @param {object} props.clickBurgerMenu a function that sends a redux action
 *
 * @return {Element}
 */
const Header = props => {
  const style = headerCss(props.colours)
  return (
    <header style={style.main_head}>
      <a href={props.link} style={style.link}>
        <h1 style={style.brand_title}>{props.title}</h1>
      </a>
      <label style={style.burger_menu} onClick={props.clickBurgerMenu} htmlFor='slide' title='Main Menu'>⋮</label>
    </header>
  )
}

/**
 * Assert header properties are set.
 *
 * @type {Object}
 */
Header.propTypes = {
  title: PropTypes.string.isRequired
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
    title: state.constants.title,
    link: state.constants.baseUrl
  }
}

/**
 * Map the Redux action dispatch to component methods.
 *
 * @param  {functionm} dispatch the dispatch function
 * @return {Object} An object containing function properties
 */
const mapDispatchToProps = dispatch => {
  return {
    clickBurgerMenu () {
      dispatch(actions.toggle_dropdown())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
