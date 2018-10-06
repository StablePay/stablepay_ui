import {
    ContractWrappers, BigNumber
} from '0x.js';
import { Web3Wrapper } from '@0xproject/web3-wrapper';
import web3 from '../../web3';
import { LOAD_TOKEN_BALANCE } from './constants';
import { KOVAN_CONFIGS } from '../../web3/util/configs';
import { DECIMALS } from '../../web3/util/constants';


export const loadBalance = async (tokenAddress, address) => {
    if(tokenAddress === null) {
        const balance = await web3.eth.getBalance(address);
        const balanceEth = web3.utils.fromWei(balance);

        const rounded = new BigNumber(balanceEth.toString()).toDigits(5);

        return rounded.toNumber();
    } else {
        const contractWrappers = new ContractWrappers(web3.currentProvider, { networkId: KOVAN_CONFIGS.networkId });
        const balanceBaseUnits = await contractWrappers.erc20Token.getBalanceAsync(tokenAddress, address);
    
        const balance = Web3Wrapper.toUnitAmount(balanceBaseUnits, DECIMALS);
        
        return balance.toNumber();
    }
}