import Web3 from 'web3';

let web3temp;

const WEB3_INFURA_URL = 'https://kovan.infura.io/x8dGVFhCSTJoQ7WJ4OIP';

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3temp = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(WEB3_INFURA_URL);
  web3temp = new Web3(provider);
}

const web3 = web3temp;

export default web3;