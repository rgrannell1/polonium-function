
import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'

import constants from '../constants.js'
import Header from './header.jsx'
import Dropdown from './dropdown.jsx'
import LoadingBar from './loading-bar.jsx'
import app_css from './app.css.jsx'

import createAppStore from '../store.jsx'

import PasswordForm from '../app-components/password-form.jsx'

const App = props => {
  const style = app_css()
  return (
    <div style={style.container}>
      <Header title={props.title} />
      <LoadingBar active={true}></LoadingBar>
      <main>
        <Dropdown links={props.links} />
        <PasswordForm/>
      </main>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}


const initialState = {
  dropdownShown: false,
  title: 'Polonium',
  links: [
    {href: '/terms', text: 'Privacy & Security'}
  ],
  colours: {
    font: 'red' // constants.colours.font
  }
}

const element = (
  <Provider store={createAppStore(initialState)}>
    <App title="Polonium" links={initialState.links} />
  </Provider>
)

render(element, document.getElementById('root'));
