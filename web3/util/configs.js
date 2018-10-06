

const { GANACHE_NETWORK_ID, KOVAN_NETWORK_ID, ROPSTEN_NETWORK_ID } = require( './constants');


const TX_DEFAULTS = { gas: 400000 };
const MNEMONIC = 'concert load couple harbor equip island argue ramp clarify fence smart topic';

const BASE_DERIVATION_PATH = `44'/60'/0'/0`;
const GANACHE_CONFIGS = {
    rpcUrl: 'http://127.0.0.1:8545',
    networkId: GANACHE_NETWORK_ID,
};
const KOVAN_CONFIGS = {
    rpcUrl: 'https://kovan.infura.io/',
    networkId: KOVAN_NETWORK_ID,
};

const NETWORK_CONFIGS = GANACHE_CONFIGS; // or KOVAN_CONFIGS or ROPSTEN_CONFIGS

module.exports = {
    TX_DEFAULTS,
    MNEMONIC,
    BASE_DERIVATION_PATH,
    GANACHE_CONFIGS,
    KOVAN_CONFIGS,
    NETWORK_CONFIGS
}