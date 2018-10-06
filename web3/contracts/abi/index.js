import web3 from '../../index';

import Erc20 from './ERC20.json';
import StablePay from './StablePay.json';

const abis = new Map();

abis.set('erc20',Erc20);
abis.set('stablePay',StablePay);

export default abis;