
import React from 'react'
import PropTypes from 'prop-types'

import Header from '../../components/header/index.jsx'
import Dropdown from '../../components/dropdown/index.jsx'
import LoadingBar from '../../components/loading-bar/index.jsx'
import PasswordForm from '../../components/password-form/index.jsx'
import CopyDialog from '../../components/copy-dialog/index.jsx'
import Underlay from '../../components/underlay/index.jsx'

import main_css from './index.css.jsx'

/**
 * The Polonium app component
 *
 * @param  {Object} props.
 * @param {string} props.title the title to display
 * @param {array} props.links  an array of link objects
 *
 * @return {Element}
 */
const MainPage = props => {
  const style = main_css(props.colours)
  return (
    <div style={style.container}>
      <Header title={props.title} />
      <LoadingBar active={true}></LoadingBar>
      <main>
        <Dropdown links={props.links} />
        <Underlay />
        <CopyDialog/>
        <PasswordForm/>
      </main>
    </div>
  )
}

export default MainPage
