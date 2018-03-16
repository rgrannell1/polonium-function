
import React from 'react'

import Header from '../../components/header/index.jsx'
import Dropdown from '../../components/dropdown/index.jsx'
import Terms from '../../components/terms/index.jsx'

import termsCss from './index.css.jsx'

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
  const style = termsCss(props.colours)
  return (
    <div style={style.container}>
      <Header title={props.title} />
      <main>
        <Dropdown links={props.links} />
        <Terms />
      </main>
    </div>
  )
}

export default TermsPage
