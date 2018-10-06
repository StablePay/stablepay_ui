import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  root: {
display: 'flex',
justifyContent: 'center',
// zIndex: '100px',
marginTop: "-330px"
  },

  progress: {
    margin: theme.spacing.unit * 2,
    color: '#2593e8',



  },
});

function CircularIndeterminate(props) {
  const { classes, show } = props;

  if (!show) {
    return null;
  }
  
  return (
    <div className={classes.root}>

      <CircularProgress className={classes.progress} size={50} />
  
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
