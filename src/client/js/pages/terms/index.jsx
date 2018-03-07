
import PropTypes from 'prop-types'

import Header from '../../components/header/index.jsx'
import Dropdown from '../../components/dropdown/index.jsx'
import LoadingBar from '../../components/loading-bar/index.jsx'
import Terms from '../../components/terms/index.jsx'

import terms_css from './index.css.jsx'

/**
 * The Polonium app component
 *
 * @param  {Object} props.
 * @param {string} props.title the title to display
 * @param {array} props.links  an array of link objects
 *
 * @return {Element}
 */
const TermsPage = props => {
  const style = terms_css(initialState.colours)
  return (
    <div style={style.container}>
      <Header title={props.title} />
      <LoadingBar active={true}></LoadingBar>
      <main>
        <Dropdown links={props.links} />
        <Terms/>
      </main>
    </div>
  )
}

TermsPage.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default TermsPage
