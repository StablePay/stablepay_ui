import React, { Component } from 'react';
import {
    ContractWrappers,
} from '0x.js';
import web3 from '../web3';
import { KOVAN_CONFIGS } from '../web3/util/configs';
import { EXCHANGE, ZRXTOKEN, DAI } from '../web3/util/addresses';
import { NULL_ADDRESS, ZERO } from '../web3/util/constants';
import { createOrder, getRandomFutureDateInSeconds } from '../web3/util/orderUtil';


class Order extends Component {
    state = {
        
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
    _onSignOrder = async () => {
        const accounts = await web3.eth.getAccounts();
        console.log('account from', accounts[0]);
        const maker = accounts[0];
        const expiration = getRandomFutureDateInSeconds();
        const order = {
            exchangeAddress: EXCHANGE,
            makerAddress: maker.toLowerCase(),
            takerAddress: NULL_ADDRESS,
            senderAddress: NULL_ADDRESS,
            feeRecipientAddress: NULL_ADDRESS,
            expirationTimeSeconds: expiration,
            makerAssetAmount: 64,
            takerAssetAmount: 100,
            erc20MakerAddress: DAI,
            erc20TakerAddress: ZRXTOKEN,
            makerFee: ZERO,
            takerFee: ZERO,
        }

        console.log('order', order);
        console.log('web3 provider', web3.currentProvider);
        const signedOrder = await createOrder(order, web3.currentProvider);

        console.log('signed Order', JSON.stringify(signedOrder));


    }

    render () {
        return (
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
        )
    }
}

export default Order;
