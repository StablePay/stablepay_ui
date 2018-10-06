import {
    ContractWrappers
} from '0x.js';
import { Web3Wrapper } from '@0xproject/web3-wrapper';
import web3 from '../../web3';
import { LOAD_TOKEN_BALANCE } from './constants';
import { KOVAN_CONFIGS } from '../../web3/util/configs';
import { DECIMALS } from '../../web3/util/constants';


export const loadBalance = async (tokenAddress, address) => {
    const contractWrappers = new ContractWrappers(web3.currentProvider, { networkId: KOVAN_CONFIGS.networkId });
    const balanceBaseUnits = await contractWrappers.erc20Token.getBalanceAsync(tokenAddress, address);

    const balance = Web3Wrapper.toUnitAmount(balanceBaseUnits, DECIMALS);

    console.log('balance', balance.toNumber());

    return balance.toNumber();
}