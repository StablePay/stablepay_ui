import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import NavbarPaymentPrice from './NavbarPaymentPrice';
import SelectCommon from '../common/SelectCommon';
import SelectToken from '../common/SelectToken';
import DetailPayment from './DetailPayment';
import TextButton from '../common/TextButton';
import { connect } from 'react-redux'
import { ERC20_MAP } from '../../web3/util/addresses';
import SnackbarsMessages from './Spinner/SnackbarsMessages';
import web3 from '../../web3';
import { loadBalance } from '../../store/actions/token';

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
    tokenName: null,
    tokenAddress: null,
    tokenBalance: null,
    currentAccount: null
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    this.setState({currentAccount: accounts[0]});
  }

  async onChangeToken(value) {
    console.log('Token ', value);
    let balance = 0;
    let erc20Address = null;
    if(value === 'ETH') {
      // Option ETH selected. 
       balance = await loadBalance(null, this.state.currentAccount);
    } else {
      // Option ERC20 selected.
      erc20Address = ERC20_MAP[value];
      balance = await loadBalance(erc20Address, this.state.currentAccount);
    }
    console.log(`Token Name:      ${value}.`);
    console.log(`Token Address:   ${erc20Address}.`);
    console.log(`Token Balance:   ${balance}.`);

    this.setState({
      tokenName: value,
      tokenAddress: erc20Address,
      tokenBalance: balance 
    });
  }

  onChangeWallet(value) {
    console.log('Wallet ', value);
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
            onChange= {value => this.onChangeWallet(value)}
            />
         <SelectToken
          data={this.props.TokenData}
          name='Token'
          helperText='Please Select token'
          onChange= {value => this.onChangeToken(value)}
          balance={this.state.tokenBalance}
          tokenName={this.state.tokenName}
        />
        <DetailPayment />
        <div className={classes.button}>  <TextButton name="confirm"/></div>

      <SnackbarsMessages  />
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