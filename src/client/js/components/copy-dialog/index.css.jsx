
/**
 * The copy-dialog css
 *
 * @param  {Object} colours an object containing colours
 * @return {Object} an inline style
 */
const copyDialogCss = colours => {
  return {
    '@font-face': {
      'font-family': 'Nunito',
      'src': 'url("fonts/NotoSans.ttf")'
    },
    modal: {
      position: 'absolute',
      display: 'grid',
      gridTemplateColumns: '8.5fr 1.5fr',
      fontFamily: "'Nunito', sans-serif",
      left: '50%',
      minWidth: '200px',
      transform: 'translateX(-50%)',
      border: '1px solid grey',
      padding: '0px 0px 35px 35px',
      background: 'white',
      color: colours.font,
      zIndex: '100'
    },
    modal_title: {
      marginBottom: '30px',
      color: colours.font,
      marginTop: '25px',
      gridRow: 1,
      gridColumnStart: 1,
      gridColumnEnd: 2
    },
    derived_password_field: {
      background: 'white',
      border: `1px solid ${colours.font}`,
      gridRow: 2,
      gridColumnStart: 1,
      color: colours.font,
      padding: '5px 10px'
    },
    copy_button: {
      border: 'none',
      gridRow: 2,
      gridColumnStart: 2,
      background: 'rgb(61, 41, 255)',
      color: 'white',
      padding: '10px',
      cursor: 'pointer',
      marginRight: '25px'
    },
    close_modal: {
      background: 'white',
      border: 'none',
      fontWeight: 'bold'
    }
  }
}

export default copyDialogCss
