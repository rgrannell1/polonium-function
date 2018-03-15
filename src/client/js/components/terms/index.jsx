
import React from 'react'

import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import terms_css from './index.css.jsx'

const Terms = props => {
  const style = terms_css(props.colours)
  return (
    <div style={style.container}>
      <article style={style.article}>
        <h2 style={style.h2}>Security & Privacy Policy</h2>

        <h3 style={style.h3}>Connection</h3>
        <p style={style.p}>Polonium uses HTTPS to ensure your data is secure during transmission.</p>

        <h3 style={style.h3}>Information we collect</h3>
        <p style={style.p}>We do not store any password-related submitted data; namely the content of the website & password fields, the derived keys, or the options provided the derivation of the keys. We do store metadata such as the IP address, browser details, time, subpages visited, and bitrate of the incoming connection. This data is only used for analytic and security purposes.</p>

        <h3 style={style.h3}>Device information</h3>
        <p style={style.p}>Details about your device information may be determined from your user-agent and other data submitted to the Polonium server. Client code will not be run to determine details about device information.</p>

        <h3 style={style.h3}>Location information</h3>
        <p style={style.p}>IP addresses & other information submitted to the Polonium server may be geolocated approximately, for analytic & security purposes.</p>

        <h3 style={style.h3}>Information transfer</h3>
        <p style={style.p}>At the moment, both the provided website & password are transmitted to the server. In future, this transfer will not occur & all cryptography will be performed in-browser.</p>
      </article>
    </div>
  )
}

Terms.propTypes = {

}

/**
 * Map the Redux state to this components properties
 *
 * @param  {Object} state the Redux state
 * @return {Object} the component properties
 */
const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Terms)
