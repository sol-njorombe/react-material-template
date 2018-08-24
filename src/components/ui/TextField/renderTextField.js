import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = () => ({
  root: {
    marginTop: '20px',
    marginBottom: '20px',
  },
});

export const renderTextField = withStyles(styles)(({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  const errorFlag = (touched && error) ? true: false;
  return (
    <FormControl fullWidth error={errorFlag}>
      <TextField
        error={errorFlag}
        label={label}
        {...input}
        {...custom}
      />
      { errorFlag && <FormHelperText>{error}</FormHelperText> }
    </FormControl>
  );
});

export default renderTextField;
