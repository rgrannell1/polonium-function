
import constants from '../constants.js'

const dropdown_css = props => {
  return {
    settings_menu: {
      background: 'white',
      margin: '0px',
      padding: '10px 30px',
      position: 'absolute',
      right: '0px',
      listStyleType: 'none'
    },
    link: {
      textDecoration: 'none',
      color: props.colours.font
    }
  }
}

export default dropdown_css
