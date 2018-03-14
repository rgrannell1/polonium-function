
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import constants from '../../constants.js'
import copy_dialog_css from './index.css.jsx'
import actions from '../../actions.js'

const CopyDialog = props => {
  if (!props.display) {
    return null
  }

  const style = copy_dialog_css(props.colours)
  return (
    <div style={style.modal}>
      <h2
        id="modal_title"
        style={style.modal_title}>{props.title}</h2>
      <input
        id="derived_password"
        style={style.derived_password_field}
        type="text"
        value="xxxxx" />
      <input
        id="copy"
        style={style.copy_button}
        type="button"
        data-clipboard-target="#derived_password"
        value="Copy" />
      <input
        id="close_modal"
        style={style.close_modal}
        type="button"
        value="X" />
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
    title: state.constants.copyDialog.title,
    display: false
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyDialog)
