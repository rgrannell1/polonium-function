
import React from 'react'

import Header from '../../components/header/index.jsx'
import Dropdown from '../../components/dropdown/index.jsx'
import LoadingBar from '../../components/loading-bar/index.jsx'
import PasswordForm from '../../components/password-form/index.jsx'
import CopyDialog from '../../components/copy-dialog/index.jsx'
import Underlay from '../../components/underlay/index.jsx'

import mainCss from './index.css.jsx'

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
  const style = mainCss(props.colours)
  return (
    <div style={style.container}>
      <Header title={props.title} />
      <LoadingBar active />
      <main>
        <Dropdown links={props.links} />
        <Underlay />
        <CopyDialog />
        <PasswordForm />
      </main>
    </div>
  )
}

export default MainPage
