
import j2c from '../../js/libs/j2c.js'
import constants from '../../js/constants.js'
import loading_bar_css from './loading-bar.css.jsx'

class LoadingBar extends React.Component {
  render () {
    const {active, store} = this.props
    const loadingBar = {}
    return (
      <div style={loadingBar}>
        <div style={Object.assign({}, loading_bar_css.bar, loading_bar_css.bar_one)}></div>
        <div style={Object.assign({}, loading_bar_css.bar, loading_bar_css.bar_two)}></div>
        <div style={Object.assign({}, loading_bar_css.bar, loading_bar_css.bar_three)}></div>
      </div>
    )
  }
}

export default LoadingBar
