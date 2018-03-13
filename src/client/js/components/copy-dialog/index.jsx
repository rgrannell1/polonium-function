
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Clipboard from 'clipboard'

import constants from '../../constants.js'
import copy_dialog_css from './index.css.jsx'
import actions from '../../actions.js'

const CopyDialog = props => {
  const style = copy_dialog_css(props.colours)
  return (
    <div style={style.modal}>
      <h2
        id="modal_title"
        style={style.modal_title}>{props.title}</h2>
      <input
        id="derived_password"
        style={style.derived_password_field}
        type="password"
        value="xxxxx" />
      <input
        id="copy"
        style={style.copy_button}
        type="button"
        data-clipboard-target="#derived_password"
        value="Copy" />
    </div>
  )
}

CopyDialog.propTypes = {
  colours: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
}

const mapStateToProps = state => {
  return {
    colours: state.constants.colours,
    title: state.constants.copyDialog.title
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyDialog)
