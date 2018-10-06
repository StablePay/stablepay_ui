const { providers, Contract } = require('ethers');

const ContractWrapper = (abi,address,provider, accounts, index) => {
    const accountIndex = index || 0;
    if(accounts.length <= accountIndex) {
        throw new Error(`Accounts length ${accounts.length}. Max Index: ${accounts.length - 1}. Current Index: ${index}.`);
    }
    let web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner(accounts[accountIndex]);
    return new Contract(address, abi, signer);
}

const ContractWrapperByAccount = (abi,address,provider, account) => {
    let web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner(account);
    return new Contract(address, abi, signer);
}

export default {
    ContractWrapper,
    ContractWrapperByAccount
};