import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MainPayment from '../components/Payment/MainPayment';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Pay(props) {
  const { classes } = props;

  return (
    <div>
    <MainPayment />
    </div>
  );
}

Pay.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pay);