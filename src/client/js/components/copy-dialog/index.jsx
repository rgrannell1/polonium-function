
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import copyDialogCss from './index.css.jsx'
import {hasProp, prop} from '../../utils.js'
import actions from '../../actions.js'

const onFocus = () => {
  document.getElementById('derived_password').select()
}

const clickCopyButton = () => {
  const elem = document.getElementById('derived_password') //.innerText
  elem.select()
  try {
    const success = document.execCommand('copy')
    if (success) {
      console.error('copied to clipboard.')
    } else {
      console.error('failed to copy password.')
    }
  } catch (err) {
    console.error('failed to copy password.')
  }
}

const CopyDialog = props => {
  if (!props.display) {
    return null
  }

  const style = copyDialogCss(props.colours)
  return (
    <div style={style.modal}>
      <h2
        id='modal_title'
        style={style.modal_title}>{props.title}</h2>
      <input
        id='derived_password'
        style={style.derived_password_field}
        type='text'
        autoFocus='autofocus'
        onFocus={onFocus}
        value={props.derivedPassword} />
      <input
        id='copy'
        style={style.copy_button}
        type='button'
        spellCheck='false'
        onClick={() => clickCopyButton()}
        value='Copy' />
      <input
        id='close_modal'
        style={style.close_modal}
        type='button'
        onClick={() => props.closeDialog()}
        value='X' />
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
    display: hasProp('app.derivedPassword.text', state) && state.app.derivedPassword.text,
    derivedPassword: prop('app.derivedPassword.text', state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeDialog () {
      dispatch(actions.close_dialog())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyDialog)
