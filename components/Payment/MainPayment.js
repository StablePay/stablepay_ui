import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import NavbarPaymentPrice from './NavbarPaymentPrice';
import SelectCommon from '../common/SelectCommon';
import DetailPayment from './DetailPayment';
import TextButton from '../common/TextButton';
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px', 
  }, 
});

class MainPayment extends Component {
  state = {
    tokenAddress: null,
    tokenBalance: null
  }


  render () {
    const { classes } = this.props;

    return (
      <div>
          <Navbar />
          <NavbarPaymentPrice      
          />
          <SelectCommon 
           data={this.props.WalletData}
            name='Wallet App Require'
            helperText='Please Select a Wallet'
            />
         <SelectCommon
          data={this.props.TokenData}
          name='Token'
          helperText='Please Select token'
        />
        <DetailPayment />
        <div className={classes.button}>  <TextButton name="confirm"/></div>
      
      </div>
    );
  }
 
}

MainPayment.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  WalletData: state.WalletData,
  TokenData: state.TokenData
  })
export default connect(mapStateToProps)(withStyles(styles)(MainPayment));