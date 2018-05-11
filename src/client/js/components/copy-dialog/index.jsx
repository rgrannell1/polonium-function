
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import copyDialogCss from './index.css.jsx'
import {hasProp, prop} from '../../utils.js'
import actions from '../../actions.js'

const onFocus = () => {
  document.getElementById('derived_password').select()
}

const CopyDialog = props => {
  if (!props.display) {
    return null
  }

  const style = copyDialogCss(props.colours)
  const copyButtonStyle = Object.assign({}, style.copy_button)

  const {copyButton} = props
  let copyText = ''

  if (copyButton && copyButton.state === 'copied') {
    if (copyButton.hasError) {
      copyText = 'Failed!'
      Object.assign(copyButtonStyle, style.copy_button_error)
    } else {
      copyText = 'Copied'
      Object.assign(copyButtonStyle, style.copy_button_copied)
    }
  } else {
    copyText = 'Copy'
    Object.assign(copyButtonStyle, style.copy_button_default)
  }

  return (
    <div style={style.modal}>
      <h2
        id='modal_title'
        style={style.modal_title}>{props.title}</h2>
      <input
        id='derived_password'
        style={style.derived_password_field}
        data-test-id='derived_password_field'
        type='text'
        autoFocus='autofocus'
        spellCheck='false'
        onFocus={onFocus}
        value={props.derivedPassword} />
      <input
        id='copy'
        style={copyButtonStyle}
        data-test-id='copy_password_button'
        type='button'
        onClick={() => props.clickCopyButton()}
        value={copyText} />
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
    copyButton: prop('app.copyButton', state),
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
    },
    clickCopyButton () {
      const elem = document.getElementById('derived_password')
      elem.select()
      try {
        const success = document.execCommand('copy')
        if (success) {
          dispatch(actions.acknowledge_copy(false))
        } else {
          dispatch(actions.acknowledge_copy(true))
        }
      } catch (err) {
        dispatch(actions.acknowledge_copy(true))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CopyDialog)
