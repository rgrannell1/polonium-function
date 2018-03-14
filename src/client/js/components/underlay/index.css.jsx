
import constants from '../../constants.js'

/**
 * The copy-dialog css
 *
 * @param  {Object} colours an object containing colours
 * @return {Object} an inline style
 */
const underlay_css = colours => {
  return {
    underlay: {
      position: 'fixed',
      padding: '0',
      margin: '0',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      zIndex: '50'
    }
  }
}

export default underlay_css
