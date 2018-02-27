
import j2c from '../../js/libs/j2c.js'

import constants from '../constants.js'
import Header from './header.jsx'
import Dropdown from './dropdown.jsx'
import LoadingBar from './loading-bar.jsx'
import app_css from './app.css.jsx'

import store from './store.jsx'

import PasswordForm from '../app-components/password-form.jsx'

class App extends React.Component {
  render () {
    const {store, title, links} = this.props
    return (
      <div style={app_css.container}>
        <Header store={store} title={title} />
        <LoadingBar store={store} active={true}></LoadingBar>
        <main>
          <Dropdown store={store} links={links} />
          <PasswordForm store={store}/>
        </main>
      </div>
    )
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired
}

const app = props => {
  return (<App title={props.title} links={props.links} store={props.store} />)
}

const element = app({
  title: 'Polonium',
  links: [
    {href: '/terms', text: 'Privacy & Security'}
  ],
  colours: constants.colours,
  store
})

ReactDOM.render(element, document.getElementById('root'));
