
import header from './header.css.jsx'
import actions from '../actions.js'

class Header extends React.Component {
  onBurgerMenuClick (store) {
    store.dispatch(actions.toggle_dropdown())
  }
  render () {
    const {title, store} = this.props
    return (
      <header style={header.main_head}>
        <a href="/" style={header.link}>
          <h1 style={header.brand_title}>{title}</h1>
        </a>
        <label style={header.burger_menu} onClick={() => this.onBurgerMenuClick(store)} htmlFor="slide" title="Main Menu">⋮</label>
      </header>
    )
  }
}

export default Header
