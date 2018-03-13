
import constants from '../../constants.js'

/**
 * The copy-dialog css
 *
 * @param  {Object} colours an object containing colours
 * @return {Object} an inline style
 */
const copy_dialog_css = colours => {
  return {
    '@font-face': {
      'font-family': 'Nunito',
      'src': 'url("fonts/NotoSans.ttf")'
    },
    modal_title: {
      marginBottom: '30px',
      color: colours.font
    },
    modal: {
      position: 'absolute',
      display: 'block',
      fontFamily: "'Nunito', sans-serif",
      width: '33%',
      left: '50%',
      minWidth: '200px',
      transform: 'translateX(-50%)',
      border: '1px solid grey',
      padding: '35px',
      background: 'white',
      color: colours.font
    },
    derived_password_field: {
      background: 'white',
      border: `1px solid ${colours.font}`,
      color: colours.font,
      padding: '5px 10px'
    },
    copy_button: {
      background: 'white',
      border: 'none',
      color: colours.primary,
      padding: '10px'
    }
  }
}

export default copy_dialog_css
