import React from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';


const styles = theme => ({
  root: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});


let FormButton = (props) => (
  <FormControl fullWidth>
    <Button {...props} className={props.classes.root} >
      {props.children} 
      { props.icontype ? 
        <Icon className={props.classes.rightIcon}>{props.icontype}</Icon> : null 
      } 
    </Button>
  </FormControl>
)


export const BlockButton = withStyles(styles)(FormButton);