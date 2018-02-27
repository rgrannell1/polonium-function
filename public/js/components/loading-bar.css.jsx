
import constants from '../constants.js'

const loading_bar_css = {
  loading_bar_active: {
    position: 'relative',
    height: '6px',
    width: '100%',
    backgroundColor: constants.colours.barMedium
  },
  loading_bar: {
    'height': '6px'
  },
  bar: {
    content: '',
    display: 'inline',
    position: 'absolute',
    height: '100%',
    left: '50%',
    textAlign: 'center'
  },
  bar_one: {
    backgroundColor: constants.colours.barLight,
    animation: 'loading 3s linear infinite'
  },
  bar_two: {
    backgroundColor: constants.colours.barMedium,
    animation: 'loading 1s linear infinite'
  },
  bar_three: {
    backgroundColor: constants.colours.barDark,
    animation: 'loading 3s linear 2s infinite'
  },
  '@keyframes loading': {
    'from': {'left': '50%', 'width': '0', 'z-index': '100'},
    '33.3333%': {'left': '0', 'width': '100%', 'z-index': '10'},
    'to': {'left': '0', 'width': '100%'}
  }
}

export default loading_bar_css
