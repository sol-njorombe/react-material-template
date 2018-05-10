import React from 'react';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import { FormControl } from 'material-ui/Form';
import { withStyles } from 'material-ui/styles';

const iconStyle = theme => ({
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const myIcon = props => (
  <Icon className={props.classes.rightIcon}> { props.children } </Icon>
);

export const BtnIcon = withStyles(iconStyle)(myIcon);

const styles = () => ({
  root: {
    marginTop: '10px',
    marginBottom: '10px',
  },
});

const FormButton = props => (
  <FormControl fullWidth>
    <Button {...props} className={props.classes.root}>
      { props.children }
      { props.icontype && <BtnIcon>{props.icontype}</BtnIcon> }
    </Button>
  </FormControl>
);

export const BlockButton = withStyles(styles)(FormButton);
