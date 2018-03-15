
const password_form_css = colours => {
  return {
    website_input_error: {
      gridColumnStart: 2,
      gridColumnEnd: 5,
      gridRow: 3,
      color: colours.error,
      fontSize: '0.85em',
      marginTop: '0.5em',
      marginBottom: '1em',
    },
    password_input_error: {
      gridColumnStart: 2,
      gridColumnEnd: 5,
      gridRow: 5,
      color: colours.error,
      fontSize: '0.85em',
      marginTop: '0.5em',
      marginBottom: '1em',
    },
    form: {
      gridTemplateColumns: 'repeat(6, 1fr)',
      gridColumn: '2',
      gridRow: '2',
      display: 'grid',
      gridGap: '0px',
      marginTop: '100px',
      content: ''
    }
  }
}

export default password_form_css
