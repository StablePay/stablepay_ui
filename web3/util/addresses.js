require('dotenv').config();

const properties = {
    EXCHANGE: process.env["EXCHANGE"],
    ZRXTOKEN: process.env["ZRXTOKEN"],
    DAI: process.env["DAI"],
    WETH9:process.env["WETH9"],
    ASSETPROXYOWNER:process.env["ASSETPROXYOWNER"],
    ERC20PROXY:process.env["ERC20PROXY"],
    DUMMYERC20TOKEN1:process.env["DUMMYERC20TOKEN1"],
    DUMMYERC20TOKEN2:process.env["DUMMYERC20TOKEN2"],
    STABLEPAY:process.env["STABLEPAY"]
}

console.log('properties', properties);

export const EXCHANGE = properties.EXCHANGE;
export const ZRXTOKEN = properties.ZRXTOKEN;
export const DAI = properties.DAI;
export const WETH9 = properties.WETH9;
export const ASSETPROXYOWNER = properties.ASSETPROXYOWNER;
export const ERC20PROXY = properties.ERC20PROXY;
export const STABLEPAY = properties.STABLEPAY;
export const ERC20_MAP = {
    "ZRX": properties.ZRXTOKEN,
    "DAI": properties.DAI,
    "WETH9": properties.WETH9
};
