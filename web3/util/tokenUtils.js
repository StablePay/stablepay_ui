import axios from 'axios';

const { 
    BigNumber
} = require('0x.js');
const {
    Web3Wrapper
} = require('@0xproject/web3-wrapper');
const {
    DECIMALS
} =  require('./constants');

const toBaseUnitAmount = (amount, decimals = DECIMALS) => {
    return Web3Wrapper.toBaseUnitAmount(new BigNumber(amount), decimals);
}

const toUnitAmount = (amount, decimals = DECIMALS) => {
    return Web3Wrapper.toUnitAmount(new BigNumber(amount), decimals);
}

const toWei = (amount) => {
    return Web3Wrapper.toWei(new BigNumber(amount));
}

const getUsdPrice = async (token) => {
    const res = await axios.get(`https://api.coinmarketcap.com/v1/ticker/${token}/`);
    const tokenPrice = res.data[0].price_usd;
    console.log(`${token} USD price: ${tokenPrice}`);
    return tokenPrice;
}

export const getTokenAmount = async (daiAmount, token) => {
    const tokenPrice = await getUsdPrice(token);
    console.log(`${token} price: ${tokenPrice}`);
    let tokenAmount = daiAmount / tokenPrice;
    tokenAmount = new BigNumber(tokenAmount.toPrecision(5)).toNumber();
    console.log(`Total ${token}: ${tokenAmount}`);
    return tokenAmount;
}
