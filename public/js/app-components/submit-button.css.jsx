
const submit_button_css = () => {
  return {
    submit_button: {
      marginTop: '40px',
      width: '100%',
      maxWidth: '218px',
      minWidth: '210px',
      padding: '0px 15px',
      height: '60px',
      gridColumnStart: 2,
      gridRow: 6,
      border: '1px solid rgb(64, 64, 64)',
      color: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    'submit_button:focus': {
      border: 'none',
      outline: 'none'
    },
    submit_button_default: {
      background: '#5d51d6'
    },
    submit_button_active: {
      background: 'red',
      cursor: 'not-allowed'
    },
    submit_button_invalid: {
      background: 'blue',
      pointerEvents: 'none',
      cursor: 'not-allowed'
    }
  }
}

export default submit_button_css
