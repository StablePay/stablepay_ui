import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { startLoading, stopLoading } from '../../store/actions/ui';
import Navbar from './Navbar';
import NavbarPaymentPrice from './NavbarPaymentPrice';
import SelectToken from '../common/SelectToken';
import DetailPayment from './DetailPayment';
import TextButton from '../common/TextButton';
import { connect } from 'react-redux';
import LoadingIndicator from '../common/LoadingIndicator';
import { ERC20_MAP } from '../../web3/util/addresses';
import web3 from '../../web3';
import { loadBalance } from '../../store/actions/token';
import CircularIndetermiante from '../common/CircularIndetermiante';
import SelectWallet from '../common/SelectWallet';

const BASE_API_URL = 'https://www.mocky.io/v2/';
const ETH_ORDER_API = '5bb936213100006c003ed924';
const ZRX_ORDER_API = '5bb9359f31000065003ed923';

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
    currentAccount: null,
    signedOrder: null
  }

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    this.setState({currentAccount: accounts[0]});
  }

  async fetchOrder (apiOrderId) {
    const orderUrl = `${BASE_API_URL}${apiOrderId}`;
    console.log(orderUrl);
    const res = await axios.get(orderUrl);
    console.log(res);
    return res.data;
}

  async onChangeToken(value) {
    startLoading();
    console.log('Token ', value);
    let balance = 0;
    let erc20Address = null;
    let signedOrder = null;
    if(value === 'ETH') {
      // Option ETH selected. 
       balance = await loadBalance(null, this.state.currentAccount);
       signedOrder = await this.fetchOrder(ETH_ORDER_API);
    } else {
      // Option ERC20 selected.
      erc20Address = ERC20_MAP[value];
      balance = await loadBalance(erc20Address, this.state.currentAccount);
      signedOrder = await this.fetchOrder(ZRX_ORDER_API);
    }
    console.log(`Token Name:      ${value}.`);
    console.log(`Token Address:   ${erc20Address}.`);
    console.log(`Token Balance:   ${balance}.`);
    console.log(`SignedOrder:`);
    console.log(signedOrder);

    this.setState({
      tokenName: value,
      tokenAddress: erc20Address,
      tokenBalance: balance,
      signedOrder: signedOrder 
    });
    stopLoading();
  }

  onChangeWallet(value) {
    console.log('Wallet ', value);
  }

  render () {
    const { classes, loading, loadingMessage, showModal,onClose } = this.props;

    return (
      <div>
          <Navbar />
          <NavbarPaymentPrice      
          />
         <SelectWallet 
            WalletData={this.props.WalletData} 
            WalletBrowserData={this.props.WalletBrowserData}
            name='Wallet App Require'
            helperText='Please Select a Wallet'
            onChange={this.onChangeWallet}
          />
         <SelectToken
          data={this.props.TokenData}
          name='Token'
          helperText='Please Select token'
          onChange= {value => this.onChangeToken(value)}
          balance={this.state.tokenBalance}
          tokenName={this.state.tokenName}
        />
        <DetailPayment exchangeAmount={0.5} tokenName="Eth" />
        <div className={classes.button}>  <TextButton name="confirm"/></div>

        <LoadingIndicator show={showModal} description={loadingMessage} onClose={null}/>
        <CircularIndetermiante show={loading}/>
      </div>
    );
  }
 
}

MainPayment.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  WalletData: state.WalletData,
  TokenData: state.TokenData,
  WalletBrowserData: state.WalletBrowserData,
  loading: state.ui.loading,
  loadingMessage: state.ui.loadingMessage,
  showModal: state.ui.showModal
})
export default connect(mapStateToProps)(withStyles(styles)(MainPayment));