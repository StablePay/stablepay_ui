import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MainPayment from '../components/Payment/MainPayment';
import { connect } from 'react-redux'

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
    <MainPayment WalletData={props.WalletData} TokenData={props.TokenData} />
    </div>
  );
}

Pay.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  WalletData: state.WalletData,
  TokenData: state.TokenData
  })
export default connect(mapStateToProps)(withStyles(styles)(Pay));