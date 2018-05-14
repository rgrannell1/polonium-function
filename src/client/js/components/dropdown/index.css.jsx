
/**
 * The dropdown css
 *
 * @param  {Object} colours an object containing colours
 * @return {Object} an inline style
 */
const dropdownCss = colours => {
  return {
    settings_menu: {
//      background: colours.white,
      background: '#f2f2f2',
      margin: '0px',
      padding: '10px 0px',
      position: 'absolute',
      right: '0px',
      listStyleType: 'none',
      height: '100%'
    },
    link: {
      textDecoration: 'none',
      color: colours.font
    },
    list_item: {
      padding: '20px 40px',
      background: '#f2f2f2',
      borderBottom: '1px solid #ddd'
    }
  }
}

export default dropdownCss
