
import constants from '../../js/constants.js'
import dropdown_css from './dropdown.css.jsx'

const Dropdown = ({store, links}) => {
  const dropdownShown = store.getState().dropdownShown === true
console.log('dropdown redraw')
  if (!dropdownShown) {
    return null
  } else {
    return (
      <ul style={dropdown_css.settings_menu}>
        {links.map(({text, href}) => (
          <li><a style={dropdown_css.link} key={text} href={href}>{text}</a></li>
        ))}
      </ul>
    )
  }
}

Dropdown.propTypes = {
  store: PropTypes.object,
  links: PropTypes.array
}

export default Dropdown
