
import React from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'

import constants from '../constants.js'
import Header from './header.jsx'
import Dropdown from './dropdown.jsx'
import LoadingBar from './loading-bar.jsx'
import app_css from './app.css.jsx'

import store from './store.jsx'

import PasswordForm from '../app-components/password-form.jsx'

class App extends React.Component {
  render () {
    const {title, links} = this.props
    return (
      <div style={app_css.container}>
        <Header title={title} />
        <LoadingBar active={true}></LoadingBar>
        <main>
          <Dropdown links={links} />
          <PasswordForm/>
        </main>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

const app = props => {
  return (
    <Provider store={props.store}>
      <App title={props.title} links={props.links} />
    </Provider>
  )
}

const element = app({
  title: 'Polonium',
  links: [
    {href: '/terms', text: 'Privacy & Security'}
  ],
  colours: constants.colours,
  store
})

render(element, document.getElementById('root'));
