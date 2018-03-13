
const submit_button_css = colours => {
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
      border: `1px solid ${colours.font}`,
      color: colours.white,
      borderRadius: '4px',
      cursor: 'pointer',
    },
    'submit_button:focus': {
      border: 'none',
      outline: 'none'
    },
    submit_button_default: {
      background: colours.primary
    },
    submit_button_active: {
      background: colours.primaryDark,
      cursor: 'not-allowed'
    },
    submit_button_blocked: {
      background: colours.primary,
      cursor: 'not-allowed'
    }
  }
}

export default submit_button_css
