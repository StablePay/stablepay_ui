import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#2593e8',
    color: '#fff', 
    width: '300px',
    
  },
});
function TextButtons (props) {
  const { classes } = props;
  return (
    <Button variant="contained" size="large"  href={props.href} className={classes.button}>
         {props.name}
        </Button>
  )
}


export default withStyles(styles)(TextButtons)
