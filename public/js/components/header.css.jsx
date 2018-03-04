
import constants from '../constants.js'

const header_css = colours => {
  return {
    '@font-face': {
      'font-family': 'Nunito',
      'src': 'url("fonts/NotoSans.ttf")'
    },
    link: {
      cursor: 'pointer',
      fontSize: '1.4em',
      gridRow: 1,
      gridColumnStart: 1,
      gridColumnEnd: 2,
      marginBottom: '15px',
      marginTop: '15px',
      textDecoration: 'inherit',
      color: colours.white
    },
    main_head: {
      background: colours.primary,
      colour: colours.white,
      padding: '0px 20px',
      gridColumn: 1,
      gridRow: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 8.5fr 0.5fr'
    },
    brand_title: {
      background: colours.primary,
      fontFamily: "'Nunito', sans-serif",
      fontWeight: 'normal',
      marginLeft: '25px',
      gridColumnStart: 2,
      gridColumnEnd: 3,
      gridRow: 1
    },
    burger_menu: {
      fontSize: '1.4em',
      gridRow: 1,
      gridColumnStart: 3,
      gridColumnEnd: 4,
      marginTop: '15px',
      cursor: 'pointer',
      color: colours.white
    }
  }
}

export default header_css
