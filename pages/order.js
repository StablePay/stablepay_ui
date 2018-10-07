import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Web3Wrapper } from '@0xproject/web3-wrapper';
import {
    ContractWrappers, BigNumber,
} from '0x.js';
import web3 from '../web3';
import { KOVAN_CONFIGS } from '../web3/util/configs';
import { EXCHANGE, ZRXTOKEN, DAI, WETH9 } from '../web3/util/addresses';
import { NULL_ADDRESS, ZERO, DECIMALS } from '../web3/util/constants';
import { createOrder, getRandomFutureDateInSeconds, getExpirationTime } from '../web3/util/orderUtil';
import { startLoading, stopLoading } from '../store/actions/ui';
import { loadBalance } from '../store/actions/token';
import { fetchOrder } from '../store/actions/order';

class Order extends Component {
    static async getInitialProps({ query }) {
        console.log('query', query);
        const { address } = query;
 
        return { address };
    }

    state = {
        account: null,
        tokenBalance: null,
        tokenAddress: null,
        daiAmount: 5,
        expirationHours: 240,
        allowanceAmount: null
    }

    async componentDidMount() {
        const accounts = await web3.eth.getAccounts();
        const maker = accounts[0];
        const address = this.props.address || maker;
        console.log('account from', address);
        this.props.startLoading();
        this._loadBalance(DAI, address);
        await fetchOrder('ETH');

        const contractWrappers = new ContractWrappers(web3.currentProvider, { networkId: KOVAN_CONFIGS.networkId });
        const allowance = await contractWrappers.erc20Token.getProxyAllowanceAsync(DAI, address);
    
        const allowanceAmount = Web3Wrapper.toUnitAmount(allowance, DECIMALS);

        this.setState({
            allowanceAmount: allowanceAmount.toNumber()
        });

        this.props.stopLoading();
    }

    _loadBalance = async (tokenAddress, account) => {
        if (!account) return;

        const balance = await loadBalance(tokenAddress, account);
        this.setState(
            { 
                tokenBalance: balance,
                tokenAddress 
            }
        );
    }



    _onApprove = async () => {
        const accounts = await web3.eth.getAccounts();
        const maker = accounts[0];
        console.log('account from', accounts[0]);
        const contractWrappers = new ContractWrappers(web3.currentProvider, { networkId: KOVAN_CONFIGS.networkId });
        const approvalTxHash = await contractWrappers.erc20Token.setUnlimitedProxyAllowanceAsync(
            DAI,
            maker,
        );

        console.log('txhash', approvalTxHash);
        console.log('allowance approve');
    }

    _getUsdPrice = async (token) => {
        const res = await axios.get(`https://api.coinmarketcap.com/v1/ticker/${token}/`);
        const tokenPrice = res.data[0].price_usd;
        console.log(`${token} USD price: ${tokenPrice}`);
        return tokenPrice;
    }

    _createOrder = (makerAmount, makerAddress, takerAmount, erc20TakerAddress) => {
        const expiration = getExpirationTime(this.state.expirationHours);
        const order = {
            exchangeAddress: EXCHANGE,
            makerAddress: makerAddress.toLowerCase(),
            takerAddress: NULL_ADDRESS,
            senderAddress: NULL_ADDRESS,
            feeRecipientAddress: NULL_ADDRESS,
            expirationTimeSeconds: expiration,
            makerAssetAmount: makerAmount,
            takerAssetAmount: takerAmount,
            erc20MakerAddress: DAI,
            erc20TakerAddress: erc20TakerAddress,
            makerFee: ZERO,
            takerFee: ZERO,
        };
        return order;
    }

    _onSignOrder = async () => {
        const accounts = await web3.eth.getAccounts();
        console.log('account from', accounts[0]);
        const maker = accounts[0];

        // Calculating ZRX price
        const zrxPrice = await this._getUsdPrice('0x');
        console.log('ZRX price: ', zrxPrice);
        let zrxAmount = this.state.daiAmount / zrxPrice;
        zrxAmount = new BigNumber(zrxAmount.toPrecision(14));
        console.log('Total ZRX: ', zrxAmount);

        // Calculating ETH price
        const ethPrice = await this._getUsdPrice('ethereum');
        console.log('ETH price: ', ethPrice);
        let ethAmount = this.state.daiAmount / ethPrice;
        ethAmount = new BigNumber(ethAmount.toPrecision(14));
        console.log('Total ETH: ', ethAmount);

        // Creating order with ZRX token
        const zrxOrder = this._createOrder(this.state.daiAmount, maker, zrxAmount, ZRXTOKEN);

        console.log('ZRX Order');
        console.log(zrxOrder);
        const zrxSignedOrder = await createOrder(zrxOrder, web3.currentProvider);
        console.log('ZRX Signed Order');
        console.log(JSON.stringify(zrxSignedOrder));


        const wethOrder = this._createOrder(this.state.daiAmount, maker, ethAmount, WETH9);
        console.log('WETH Order');
        console.log(wethOrder);
        const wethSignedOrder = await createOrder(wethOrder, web3.currentProvider);
        console.log('WETH Signed Order');
        console.log(JSON.stringify(wethSignedOrder));
    }

    render () {
        console.log('token info', this.state);
        console.log('props', this.props);
        
        return (
            <div>
                  <div>
                <div>DAI BALANCE FOR ADDRESS</div>
                <div>{this.props.address}</div>
                <div>{ this.state.tokenBalance}</div>
            </div>
            <div>
                <div>
                    sign order
                    <div>
                    <button onClick={this._onSignOrder}>Sign</button>
                    </div> 
                </div>
                <div>
                    Approve
                    <div>
                    <button onClick={this._onApprove}>Approve</button>
                    </div> 
                </div>
                 
            </div>
            <div>
                <div>Proxy Allowance</div>
                <div>{ this.state.allowanceAmount}</div>
            </div>
        </div>
          
        );
    }
}

const mapStateToProps = ({ ui }) => {
    return {
        showSpinner: ui.showSpinner
    }
}

export default connect(mapStateToProps, { startLoading, stopLoading } )(Order);

