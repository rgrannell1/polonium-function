
import constants from '../constants.js'

const dropdown_css = colours => {
  return {
    settings_menu: {
      background: colours.white,
      margin: '0px',
      padding: '10px 30px',
      position: 'absolute',
      right: '0px',
      listStyleType: 'none'
    },
    link: {
      textDecoration: 'none',
      color: colours.font
    }
  }
}

export default dropdown_css
