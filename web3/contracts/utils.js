import util from 'ethereumjs-util';
import web3 from '../index';
import abis from '../contracts/abi/';

export const stringToBytes32 = text => {
  return util.bufferToHex(util.setLengthRight(text, 32));
};


export const getContractInstance = ( name, address) => {
  const contractAbi = abis.get(name);

  if (!contractAbi) {
    throw Error('Error: expected valid contract name');
  }

  return new web3.eth.Contract(
    contractAbi.abi,
    address
  );
}  