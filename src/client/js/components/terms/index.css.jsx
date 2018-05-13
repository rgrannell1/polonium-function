
/**
 * The header css
 *
 * @param  {Object} colours an object containing colours
 * @return {Object} an inline style
 */
const termsCss = colours => {
  return {
    '@font-face': {
      'font-family': 'Nunito',
      'src': 'url("fonts/NotoSans.ttf")'
    },
    container: {
      gridTemplateColumns: '1.25fr 7.5fr 1.25fr',
      display: 'grid',
      gridGap: '0px',
      marginTop: '60px',
      color: colours.font
    },
    article: {
      gridColumn: 2,
      gridRow: 1
    },
    h2: {
      margin: '1.2em 0'
    },
    h3: {
      margin: '1.2em 0'
    },
    p: {
      lineSpacing: '1.2em'
    },
    ul: {
      margin: '1.2em 0'
    },
    li: {

    }
  }
}

export default termsCss
