import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import NavbarPaymentPrice from './NavbarPaymentPrice';
import SelectCommon from '../common/SelectCommon';
import DetailPayment from './DetailPayment';
import TextButton from '../common/TextButton';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function MainPayment(props) {
  const { classes } = props;

  return (
    <div>
        <Navbar />
        <NavbarPaymentPrice      
        />
        <SelectCommon 
         data={props.WalletData}
          name='Wallet App Require'
          helperText='Please Select a Wallet'
          />
       <SelectCommon
        data={props.TokenData}
        name='Token'
        helperText='Please Select token'
      />
      <DetailPayment />
      <TextButton name="confirm"/>
    </div>
  );
}

MainPayment.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPayment);