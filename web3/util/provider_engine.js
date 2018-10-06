const { RPCSubprovider, Web3ProviderEngine } = require('0x.js');
const { MnemonicWalletSubprovider } = require( '@0xproject/subproviders');

const { BASE_DERIVATION_PATH, MNEMONIC, NETWORK_CONFIGS } = require( './configs');

const mnemonicWallet = new MnemonicWalletSubprovider({
    mnemonic: MNEMONIC,
    baseDerivationPath: BASE_DERIVATION_PATH,
});

const pe = new Web3ProviderEngine();
pe.addProvider(mnemonicWallet);
pe.addProvider(new RPCSubprovider(NETWORK_CONFIGS.rpcUrl));
pe.start();

const providerEngine = pe;

export default {
    mnemonicWallet,
    pe,
    providerEngine
}
