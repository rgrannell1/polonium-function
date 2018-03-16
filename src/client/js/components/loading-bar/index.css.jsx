
/**
 * The loading-bar css
 *
 * @param  {Object} colours an object containing colours
 * @return {Object} an inline style
 */
const loadingBarCss = colours => {
  return {
    loading_bar_active: {
      position: 'relative',
      height: '6px',
      width: '100%',
      backgroundColor: colours.barMedium
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
      content: '',
      backgroundColor: colours.barLight,
      animation: 'loading 3s linear infinite'
    },
    bar_two: {
      content: '',
      backgroundColor: colours.barMedium,
      animation: 'loading 1s linear infinite'
    },
    bar_three: {
      content: '',
      backgroundColor: colours.barDark,
      animation: 'loading 3s linear 2s infinite'
    },
    keyframeContent: `
      @keyframes loading {
        from {left: 50%; width: 0;z-index:100;}
        33.3333% {left: 0; width: 100%;z-index: 10;}
        to {left: 0; width: 100%;}
      }
    `
  }
}

export default loadingBarCss
