
import React from 'react'

import {connect} from 'react-redux'

import termsCss from './index.css.jsx'

const Terms = props => {
  const style = termsCss(props.colours)
  const {li} = style
  return (
    <div style={style.container}>
      <article style={style.article}>
        <h2 style={style.h2}>Security & Privacy Policy</h2>

        <h3 style={style.h3}>Connection</h3>
        <p style={style.p}>Polonium uses HTTPS to ensure data is secure during transmission.</p>

        <h3 style={style.h3}>Stored information</h3>
        <p style={style.p}>For security & analytics we log:</p>
        <ul style={style.ul}>
          <li style={li}>IP addresses</li>
          <li style={li}>location information</li>
          <li style={li}>The browser user-agent</li>
          <li style={li}>The time</li>
          <li style={li}>Connection bitrates</li>
        </ul>
        <p style={style.p}>We do not store:</p>
        <ul>
          <li style={li}>The website field</li>
          <li style={li}>The master password field</li>
        </ul>

        <h3 style={style.h3}>Information transfer</h3>
        <p style={style.p}>At the moment, both the provided website & password are transmitted to the server. In future, this transfer will not occur & all cryptography will be performed in-browser.</p>
      </article>
    </div>
  )
}

/**
 * Map the Redux state to this components properties
 *
 * @param  {Object} state the Redux state
 * @return {Object} the component properties
 */
const mapStateToProps = state => {
  return {
    colours: state.constants.colours
  }
}

export default connect(mapStateToProps)(Terms)
