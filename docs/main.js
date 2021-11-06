(self["webpackChunkethbox_dapp"] = self["webpackChunkethbox_dapp"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 16065:
/*!***********************************!*\
  !*** ./src/app/constants/abis.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STAKING": () => (/* binding */ STAKING),
/* harmony export */   "ETHBOX": () => (/* binding */ ETHBOX),
/* harmony export */   "TOKEN_DISPENSER": () => (/* binding */ TOKEN_DISPENSER),
/* harmony export */   "ERC20_ABI": () => (/* binding */ ERC20_ABI)
/* harmony export */ });
let STAKING = {
    ADDRESSES: {
        ETHEREUM: "0x37c82a143a9fafc2df10e774f1e4b8b96fd41559",
        BINANCE: "0x668Db61f9069F252EBe978dB75e9a1B103eBC23c"
    },
    ABI: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUnclaimedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"other","type":"address"}],"name":"getUnclaimedRewardFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"pause","type":"bool"}],"name":"setContractPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"staker","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ethboxStaking.staking_reward[]","name":"_rewards","type":"tuple[]"}],"name":"setRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}]
};

let ETHBOX = {
    ADDRESSES: {
        ETHEREUM: "0x501AC1D6103fB2643f2cB93985baAac6f81d1Bc9",
        ETHEREUM_TESTNET: "0xAAa491Cf3cA23D59a77eB56Ab487169F4B49e4e2",
        BINANCE: "0x98F8E39032B4dBEC2235B68Bd7CC2505D3793161",
        BINANCE_TESTNET: "0xF559344bF9A51bF778fB0Ff38cc690bAF7E61081",
        MATIC: "0xbD1E729074A14348c78E39b56992f54f0b5d37Ec",
        MATIC_TESTNET: "0x6c1cd6434B5Ee4A75605981387cBb3cdDc5596d0",
        REEF: "0x9928e7a8e766e1e5aa3f7c450bd4d513f8d9b141",
        REEF_TESTNET: "0xE21Dce52e291A788956A4Fd7446F9dc4Eb1f0CF4"
    },
    ABI: [{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"cancelBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"cancelBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"},{"internalType":"bytes32","name":"_passHash","type":"bytes32"}],"name":"clearBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"},{"internalType":"bytes32","name":"_passHash","type":"bytes32"}],"name":"clearBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"contract ERC20Interface","name":"_sendToken","type":"address"},{"internalType":"uint256","name":"_sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"_requestToken","type":"address"},{"internalType":"uint256","name":"_requestValue","type":"uint256"},{"internalType":"bytes32","name":"_passHashHash","type":"bytes32"}],"name":"createBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_recipientHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"_sendToken","type":"address"},{"internalType":"uint256","name":"_sendValue","type":"uint256"},{"internalType":"bytes32","name":"_passHashHash","type":"bytes32"}],"name":"createBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundAllBoxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setStopDeposits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"getBox","outputs":[{"components":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"requestToken","type":"address"},{"internalType":"uint256","name":"requestValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.Box","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesAll","outputs":[{"components":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"requestToken","type":"address"},{"internalType":"uint256","name":"requestValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.Box[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesAllWithPrivacy","outputs":[{"components":[{"internalType":"bytes32","name":"senderHash","type":"bytes32"},{"internalType":"bytes32","name":"recipientHash","type":"bytes32"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.BoxWithPrivacy[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesIncoming","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesIncomingWithPrivacy","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesOutgoing","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesOutgoingWithPrivacy","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"getBoxWithPrivacy","outputs":[{"components":[{"internalType":"bytes32","name":"senderHash","type":"bytes32"},{"internalType":"bytes32","name":"recipientHash","type":"bytes32"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.BoxWithPrivacy","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumBoxes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumBoxesWithPrivacy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
};

let TOKEN_DISPENSER = {
    ADDRESSES: {
        ETHEREUM_TESTNET: "0x919fff8bD2888602FfaeE77E656F42E5741Cdb9A",
        BINANCE_TESTNET: "0x0D4f413f643E23C5Cae7b3D5E9E80FE97e4fd392",
        MATIC_TESTNET: "0x963e8acF143eD9638376923Ad14b28D39D8FbF2D",
        REEF_TESTNET: "0xa48EdA4585b791550909a30d14fc4e375806B7ae"
    },
    ABI: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint8","name":"_token","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"giveToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenA","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenB","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenC","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
};

let ERC20_ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];


/***/ }),

/***/ 51011:
/*!*************************************!*\
  !*** ./src/app/constants/tokens.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chainTokenDictionary": () => (/* binding */ chainTokenDictionary)
/* harmony export */ });
let chainTokenDictionary = {
  // Ethereum mainnet
  1: [
    {
      "name": "Ethereum",
      "symbol": "ETH",
      "thumb": "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
      "address": "0x0000000000000000000000000000000000000000",
      "decimals": 18
    },
    {
      "name": "Ethbox Token",
      "symbol": "ebox",
      "thumb": "https://assets.coingecko.com/coins/images/14528/thumb/ethbox.PNG",
      "address": "0x33840024177a7daca3468912363bed8b425015c5",
      "decimals": 18
    },
    {
      "name": "USD Tether",
      "symbol": "usdt",
      "thumb": "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png",
      "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "decimals": 6
    },
    {
      "name": "Uniswap",
      "symbol": "uni",
      "thumb": "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "decimals": 18
    },
    {
      "name": "Chainlink",
      "symbol": "link",
      "thumb": "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png",
      "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "decimals": 18
    },
    {
      "name": "USD Coin",
      "symbol": "usdc",
      "thumb": "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png",
      "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "decimals": 6
    },
    {
      "name": "Wrapped Bitcoin",
      "symbol": "wbtc",
      "thumb": "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png",
      "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "decimals": 8
    },
    {
      "name": "Binance USD",
      "symbol": "busd",
      "thumb": "https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png",
      "address": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
      "decimals": 18
    },
    {
      "name": "OKB",
      "symbol": "okb",
      "thumb": "https://assets.coingecko.com/coins/images/4463/thumb/okb_token.png",
      "address": "0x75231f58b43240c9718dd58b4967c5114342a86c",
      "decimals": 18
    },
    {
      "name": "Crypto.com Coin",
      "symbol": "cro",
      "thumb": "https://assets.coingecko.com/coins/images/7310/thumb/cypto.png",
      "address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
      "decimals": 8
    },
    {
      "name": "Aave",
      "symbol": "aave",
      "thumb": "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png",
      "address": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
      "decimals": 18
    },
    {
      "name": "cUSDC",
      "symbol": "cusdc",
      "thumb": "https://assets.coingecko.com/coins/images/9442/thumb/Compound_USDC.png",
      "address": "0x39aa39c021dfbae8fac545936693ac917d5e7563",
      "decimals": 8
    },
    {
      "name": "cETH",
      "symbol": "ceth",
      "thumb": "https://assets.coingecko.com/coins/images/10643/thumb/ceth2.JPG",
      "address": "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
      "decimals": 8
    },
    {
      "name": "FTX Token",
      "symbol": "ftt",
      "thumb": "https://assets.coingecko.com/coins/images/9026/thumb/F.png",
      "address": "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9",
      "decimals": 18
    },
    {
      "name": "Maker",
      "symbol": "mkr",
      "thumb": "https://assets.coingecko.com/coins/images/1364/thumb/Mark_Maker.png",
      "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
      "decimals": 18
    },
    {
      "name": "Huobi Token",
      "symbol": "ht",
      "thumb": "https://assets.coingecko.com/coins/images/2822/thumb/huobi-token-logo.png",
      "address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
      "decimals": 18
    },
    {
      "name": "Dai",
      "symbol": "dai",
      "thumb": "https://assets.coingecko.com/coins/images/9956/thumb/dai-multi-collateral-mcd.png",
      "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "decimals": 18
    },
    {
      "name": "cDAI",
      "symbol": "cdai",
      "thumb": "https://assets.coingecko.com/coins/images/9281/thumb/cDAI.png",
      "address": "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
      "decimals": 8
    },
    {
      "name": "Compound",
      "symbol": "comp",
      "thumb": "https://assets.coingecko.com/coins/images/10775/thumb/COMP.png",
      "address": "0xc00e94cb662c3520282e6f5717214004a7f26888",
      "decimals": 18
    },
    {
      "name": "Chiliz",
      "symbol": "chz",
      "thumb": "https://assets.coingecko.com/coins/images/8834/thumb/Chiliz.png",
      "address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
      "decimals": 18
    },
    {
      "name": "Synthetix Network Token",
      "symbol": "snx",
      "thumb": "https://assets.coingecko.com/coins/images/3406/thumb/SNX.png",
      "address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
      "decimals": 18
    },
    {
      "name": "Holo",
      "symbol": "hot",
      "thumb": "https://assets.coingecko.com/coins/images/3348/thumb/Holologo_Profile.png",
      "address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
      "decimals": 18
    },
    {
      "name": "Celsius Network",
      "symbol": "cel",
      "thumb": "https://assets.coingecko.com/coins/images/3263/thumb/CEL_logo.png",
      "address": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
      "decimals": 4
    },
    {
      "name": "LEO Token",
      "symbol": "leo",
      "thumb": "https://assets.coingecko.com/coins/images/8418/thumb/leo-token.png",
      "address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
      "decimals": 18
    },
    {
      "name": "Enjin Coin",
      "symbol": "enj",
      "thumb": "https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png",
      "address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
      "decimals": 18
    },
    {
      "name": "NEXO",
      "symbol": "nexo",
      "thumb": "https://assets.coingecko.com/coins/images/3695/thumb/nexo.png",
      "address": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
      "decimals": 18
    },
    {
      "name": "Polygon",
      "symbol": "matic",
      "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
      "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
      "decimals": 18
    },
    {
      "name": "Sushi",
      "symbol": "sushi",
      "thumb": "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png",
      "address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      "decimals": 18
    },
    {
      "name": "TerraUSD",
      "symbol": "ust",
      "thumb": "https://assets.coingecko.com/coins/images/12681/thumb/UST.png",
      "address": "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
      "decimals": 18
    },
    {
      "name": "The Graph",
      "symbol": "grt",
      "thumb": "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png",
      "address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
      "decimals": 18
    },
    {
      "name": "Amp",
      "symbol": "amp",
      "thumb": "https://assets.coingecko.com/coins/images/12409/thumb/amp-200x200.png",
      "address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
      "decimals": 18
    },
    {
      "name": "Fei Protocol",
      "symbol": "fei",
      "thumb": "https://assets.coingecko.com/coins/images/14570/thumb/ZqsF51Re_400x400.png",
      "address": "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
      "decimals": 18
    },
    {
      "name": "yearn.finance",
      "symbol": "yfi",
      "thumb": "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png",
      "address": "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
      "decimals": 18
    },
    {
      "name": "Decentraland",
      "symbol": "mana",
      "thumb": "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png",
      "address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
      "decimals": 18
    },
    {
      "name": "Basic Attention Token",
      "symbol": "bat",
      "thumb": "https://assets.coingecko.com/coins/images/677/thumb/basic-attention-token.png",
      "address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
      "decimals": 18
    },
    {
      "name": "UMA",
      "symbol": "uma",
      "thumb": "https://assets.coingecko.com/coins/images/10951/thumb/UMA.png",
      "address": "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
      "decimals": 18
    },
    {
      "name": "Huobi BTC",
      "symbol": "hbtc",
      "thumb": "https://assets.coingecko.com/coins/images/12407/thumb/Unknown-5.png",
      "address": "0x0316eb71485b0ab14103307bf65a021042c6d380",
      "decimals": 18
    },
    {
      "name": "Liquity USD",
      "symbol": "lusd",
      "thumb": "https://assets.coingecko.com/coins/images/14666/thumb/Group_3.png",
      "address": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
      "decimals": 18
    },
    {
      "name": "Waves",
      "symbol": "waves",
      "thumb": "https://assets.coingecko.com/coins/images/425/thumb/waves.png",
      "address": "0x1cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a",
      "decimals": 18
    },
    {
      "name": "0x",
      "symbol": "zrx",
      "thumb": "https://assets.coingecko.com/coins/images/863/thumb/0x.png",
      "address": "0xe41d2489571d322189246dafa5ebde1f4699f498",
      "decimals": 18
    },
    {
      "name": "Reserve Rights Token",
      "symbol": "rsr",
      "thumb": "https://assets.coingecko.com/coins/images/8365/thumb/Reserve_Rights.png",
      "address": "0x8762db106b2c2a0bccb3a80d1ed41273552616e8",
      "decimals": 18
    },
    {
      "name": "Bancor Network Token",
      "symbol": "bnt",
      "thumb": "https://assets.coingecko.com/coins/images/736/thumb/bancor.png",
      "address": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
      "decimals": 18
    },
    {
      "name": "Paxos Standard",
      "symbol": "pax",
      "thumb": "https://assets.coingecko.com/coins/images/6013/thumb/paxos_standard.png",
      "address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
      "decimals": 18
    },
    {
      "name": "SwissBorg",
      "symbol": "chsb",
      "thumb": "https://assets.coingecko.com/coins/images/2117/thumb/YJUrRy7r_400x400.png",
      "address": "0xba9d4199fab4f26efe3551d490e3821486f135ba",
      "decimals": 8
    },
    {
      "name": "OMG Network",
      "symbol": "omg",
      "thumb": "https://assets.coingecko.com/coins/images/776/thumb/OMG_Network.jpg",
      "address": "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
      "decimals": 18
    },
    {
      "name": "Ankr",
      "symbol": "ankr",
      "thumb": "https://assets.coingecko.com/coins/images/4324/thumb/U85xTl2.png",
      "address": "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
      "decimals": 18
    },
    {
      "name": "KuCoin Token",
      "symbol": "kcs",
      "thumb": "https://assets.coingecko.com/coins/images/1047/thumb/sa9z79.png",
      "address": "0xf34960d9d60be18cc1d5afc1a6f012a723a28811",
      "decimals": 6
    },
    {
      "name": "Fantom",
      "symbol": "ftm",
      "thumb": "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png",
      "address": "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
      "decimals": 18
    },
    {
      "name": "HUSD",
      "symbol": "husd",
      "thumb": "https://assets.coingecko.com/coins/images/9567/thumb/HUSD.jpg",
      "address": "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
      "decimals": 8
    },
    {
      "name": "Bitmax Token",
      "symbol": "btmx",
      "thumb": "https://assets.coingecko.com/coins/images/5003/thumb/BTMX.jpg",
      "address": "0xcca0c9c383076649604ee31b20248bc04fdf61ca",
      "decimals": 18
    },
    {
      "name": "Pundi X [OLD]",
      "symbol": "npxs",
      "thumb": "https://assets.coingecko.com/coins/images/2170/thumb/pundi-x.png",
      "address": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3",
      "decimals": 18
    },
    {
      "name": "Curve DAO Token",
      "symbol": "crv",
      "thumb": "https://assets.coingecko.com/coins/images/12124/thumb/Curve.png",
      "address": "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "decimals": 18
    },
    {
      "name": "Pundi X",
      "symbol": "pundix",
      "thumb": "https://assets.coingecko.com/coins/images/14571/thumb/vDyefsXq_400x400.jpg",
      "address": "0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38",
      "decimals": 18
    },
    {
      "name": "xSUSHI",
      "symbol": "xsushi",
      "thumb": "https://assets.coingecko.com/coins/images/13725/thumb/xsushi.png",
      "address": "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
      "decimals": 18
    },
    {
      "name": "1inch",
      "symbol": "1inch",
      "thumb": "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png",
      "address": "0x111111111117dc0aa78b770fa6a738034120c302",
      "decimals": 18
    },
    {
      "name": "REN",
      "symbol": "ren",
      "thumb": "https://assets.coingecko.com/coins/images/3139/thumb/REN.png",
      "address": "0x408e41876cccdc0f92210600ef50372656052a38",
      "decimals": 18
    },
    {
      "name": "Livepeer",
      "symbol": "lpt",
      "thumb": "https://assets.coingecko.com/coins/images/7137/thumb/logo-circle-green.png",
      "address": "0x58b6a8a3302369daec383334672404ee733ab239",
      "decimals": 18
    },
    {
      "name": "Dent",
      "symbol": "dent",
      "thumb": "https://assets.coingecko.com/coins/images/1152/thumb/gLCEA2G.png",
      "address": "0x3597bfd533a99c9aa083587b074434e61eb0a258",
      "decimals": 8
    },
    {
      "name": "Voyager Token",
      "symbol": "vgx",
      "thumb": "https://assets.coingecko.com/coins/images/794/thumb/Voyager-vgx.png",
      "address": "0x5af2be193a6abca9c8817001f45744777db30756",
      "decimals": 8
    },
    {
      "name": "Bounce [old]",
      "symbol": "bot",
      "thumb": "https://assets.coingecko.com/coins/images/11984/thumb/photo_2020-10-19_09.17.57.jpeg",
      "address": "0x5beabaebb3146685dd74176f68a0721f91297d37",
      "decimals": 18
    },
    {
      "name": "Loopring",
      "symbol": "lrc",
      "thumb": "https://assets.coingecko.com/coins/images/913/thumb/LRC.png",
      "address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
      "decimals": 18
    },
    {
      "name": "Nexus Mutual",
      "symbol": "nxm",
      "thumb": "https://assets.coingecko.com/coins/images/11810/thumb/nexus-mutual.jpg",
      "address": "0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b",
      "decimals": 18
    },
    {
      "name": "renBTC",
      "symbol": "renbtc",
      "thumb": "https://assets.coingecko.com/coins/images/11370/thumb/renBTC.png",
      "address": "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
      "decimals": 8
    },
    {
      "name": "Status",
      "symbol": "SNT",
      "thumb": "https://assets.coingecko.com/coins/images/779/thumb/status.png",
      "address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
      "decimals": 18
    },
    {
      "name": "Balancer",
      "symbol": "bal",
      "thumb": "https://assets.coingecko.com/coins/images/11683/thumb/Balancer.png",
      "address": "0xba100000625a3754423978a60c9317c58a424e3d",
      "decimals": 18
    },
    {
      "name": "Lido Staked Ether",
      "symbol": "steth",
      "thumb": "https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png",
      "address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
      "decimals": 18
    },
    {
      "name": "Oxygen",
      "symbol": "oxy",
      "thumb": "https://assets.coingecko.com/coins/images/13509/thumb/8DjBZ79V_400x400.jpg",
      "address": "0x965697b4ef02f0de01384d0d4f9f782b1670c163",
      "decimals": 6
    },
    {
      "name": "cUSDT",
      "symbol": "cusdt",
      "thumb": "https://assets.coingecko.com/coins/images/11621/thumb/cUSDT.png",
      "address": "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
      "decimals": 8
    },
    {
      "name": "Mirror Protocol",
      "symbol": "mir",
      "thumb": "https://assets.coingecko.com/coins/images/13295/thumb/mirror_logo_transparent.png",
      "address": "0x09a3ecafa817268f77be1283176b946c4ff2e608",
      "decimals": 18
    },
    {
      "name": "GateToken",
      "symbol": "gt",
      "thumb": "https://assets.coingecko.com/coins/images/8183/thumb/gt.png",
      "address": "0xe66747a101bff2dba3697199dcce5b743b454759",
      "decimals": 18
    },
    {
      "name": "Quant",
      "symbol": "qnt",
      "thumb": "https://assets.coingecko.com/coins/images/3370/thumb/5ZOu7brX_400x400.jpg",
      "address": "0x4a220e6096b25eadb88358cb44068a3248254675",
      "decimals": 18
    },
    {
      "name": "ZKSwap",
      "symbol": "zks",
      "thumb": "https://assets.coingecko.com/coins/images/13585/thumb/hfmvDpha_400x400.jpg",
      "address": "0xe4815ae53b124e7263f08dcdbbb757d41ed658c6",
      "decimals": 18
    },
    {
      "name": "Tribe",
      "symbol": "tribe",
      "thumb": "https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG",
      "address": "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
      "decimals": 18
    },
    {
      "name": "Ocean Protocol",
      "symbol": "ocean",
      "thumb": "https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg",
      "address": "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
      "decimals": 18
    },
    {
      "name": "Kyber Network Crystal Legacy",
      "symbol": "kncl",
      "thumb": "https://assets.coingecko.com/coins/images/947/thumb/logo-kncl.png",
      "address": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
      "decimals": 18
    },
    {
      "name": "Axie Infinity",
      "symbol": "axs",
      "thumb": "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png",
      "address": "0xf5d669627376ebd411e34b98f19c868c8aba5ada",
      "decimals": 18
    },
    {
      "name": "Band Protocol",
      "symbol": "band",
      "thumb": "https://assets.coingecko.com/coins/images/9545/thumb/band-protocol.png",
      "address": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
      "decimals": 18
    },
    {
      "name": "Reef Finance",
      "symbol": "reef",
      "thumb": "https://assets.coingecko.com/coins/images/13504/thumb/Group_10572.png",
      "address": "0xfe3e6a25e6b192a42a44ecddcd13796471735acf",
      "decimals": 18
    },
    {
      "name": "cUNI",
      "symbol": "cuni",
      "thumb": "https://assets.coingecko.com/coins/images/12696/thumb/compound-uni.png",
      "address": "0x35a18000230da775cac24873d00ff85bccded550",
      "decimals": 8
    },
    {
      "name": "NKN",
      "symbol": "nkn",
      "thumb": "https://assets.coingecko.com/coins/images/3375/thumb/nkn.png",
      "address": "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
      "decimals": 18
    },
    {
      "name": "Golem",
      "symbol": "glm",
      "thumb": "https://assets.coingecko.com/coins/images/542/thumb/Golem_Submark_Positive_RGB.png",
      "address": "0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429",
      "decimals": 18
    },
    {
      "name": "Tokamak Network",
      "symbol": "ton",
      "thumb": "https://assets.coingecko.com/coins/images/12260/thumb/D919x5-s_400x400.png",
      "address": "0x2be5e8c109e2197d077d13a82daead6a9b3433c5",
      "decimals": 18
    },
    {
      "name": "StormX",
      "symbol": "stmx",
      "thumb": "https://assets.coingecko.com/coins/images/1369/thumb/StormX.png",
      "address": "0xbe9375c6a420d2eeb258962efb95551a5b722803",
      "decimals": 18
    },
    {
      "name": "DODO",
      "symbol": "dodo",
      "thumb": "https://assets.coingecko.com/coins/images/12651/thumb/dodo_logo.png",
      "address": "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd",
      "decimals": 18
    },
    {
      "name": "Numeraire",
      "symbol": "nmr",
      "thumb": "https://assets.coingecko.com/coins/images/752/thumb/numeraire.png",
      "address": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
      "decimals": 18
    },
    {
      "name": "Origin Protocol",
      "symbol": "ogn",
      "thumb": "https://assets.coingecko.com/coins/images/3296/thumb/op.jpg",
      "address": "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
      "decimals": 18
    },
    {
      "name": "Ampleforth",
      "symbol": "ampl",
      "thumb": "https://assets.coingecko.com/coins/images/4708/thumb/Ampleforth.png",
      "address": "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
      "decimals": 9
    },
    {
      "name": "Telcoin",
      "symbol": "tel",
      "thumb": "https://assets.coingecko.com/coins/images/1899/thumb/tel.png",
      "address": "0x467bccd9d29f223bce8043b84e8c8b282827790f",
      "decimals": 2
    },
    {
      "name": "Alpha Finance",
      "symbol": "alpha",
      "thumb": "https://assets.coingecko.com/coins/images/12738/thumb/AlphaToken_256x256.png",
      "address": "0xa1faa113cbe53436df28ff0aee54275c13b40975",
      "decimals": 18
    },
    {
      "name": "SKALE",
      "symbol": "skl",
      "thumb": "https://assets.coingecko.com/coins/images/13245/thumb/SKALE_token_300x300.png",
      "address": "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7",
      "decimals": 18
    },
    {
      "name": "Serum",
      "symbol": "srm",
      "thumb": "https://assets.coingecko.com/coins/images/11970/thumb/serum-logo.png",
      "address": "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff",
      "decimals": 6
    },
    {
      "name": "RedFOX Labs",
      "symbol": "rfox",
      "thumb": "https://assets.coingecko.com/coins/images/12956/thumb/logo-200.png",
      "address": "0xa1d6df714f91debf4e0802a542e13067f31b8262",
      "decimals": 18
    },
    {
      "name": "TrueUSD",
      "symbol": "tusd",
      "thumb": "https://assets.coingecko.com/coins/images/3449/thumb/tusd.png",
      "address": "0x0000000000085d4780b73119b644ae5ecd22b376",
      "decimals": 18
    },
    {
      "name": "Orbs",
      "symbol": "orbs",
      "thumb": "https://assets.coingecko.com/coins/images/4630/thumb/Orbs.jpg",
      "address": "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
      "decimals": 18
    },
    {
      "name": "FUNToken",
      "symbol": "fun",
      "thumb": "https://assets.coingecko.com/coins/images/761/thumb/funfair.png",
      "address": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
      "decimals": 8
    },
    {
      "name": "Civic",
      "symbol": "cvc",
      "thumb": "https://assets.coingecko.com/coins/images/788/thumb/civic.png",
      "address": "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
      "decimals": 8
    },
    {
      "name": "Alien Worlds",
      "symbol": "tlm",
      "thumb": "https://assets.coingecko.com/coins/images/14676/thumb/kY-C4o7RThfWrDQsLCAG4q4clZhBDDfJQVhWUEKxXAzyQYMj4Jmq1zmFwpRqxhAJFPOa0AsW_PTSshoPuMnXNwq3rU7Imp15QimXTjlXMx0nC088mt1rIwRs75GnLLugWjSllxgzvQ9YrP4tBgclK4_rb17hjnusGj_c0u2fx0AvVokjSNB-v2poTj0xT9BZRCbzRE3-lF1.jpg",
      "address": "0x888888848b652b3e3a0f34c96e00eec0f3a23f72",
      "decimals": 4
    },
    {
      "name": "SAND",
      "symbol": "sand",
      "thumb": "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg",
      "address": "0x3845badade8e6dff049820680d1f14bd3903a5d0",
      "decimals": 18
    },
    {
      "name": "Wootrade Network",
      "symbol": "woo",
      "thumb": "https://assets.coingecko.com/coins/images/12921/thumb/w2UiemF__400x400.jpg",
      "address": "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
      "decimals": 18
    },
    {
      "name": "Swipe",
      "symbol": "sxp",
      "thumb": "https://assets.coingecko.com/coins/images/9368/thumb/swipe.png",
      "address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
      "decimals": 18
    },
    {
      "name": "sETH",
      "symbol": "seth",
      "thumb": "https://assets.coingecko.com/coins/images/8843/thumb/sETH.png",
      "address": "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb",
      "decimals": 18
    }
  ],
  // Ethereum testnet
  4: [
    {
      name: "Ethereum",
      symbol: "ETH",
      thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "AAA",
      thumb: "assets/img/crash-test.png",
      address: "0xB89f9673c46b126d7A0052D972cdB9C448f92D35",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "BBB",
      thumb: "assets/img/crash-test.png",
      address: "0x0b91f9d9657e8edc725a519BC9e9fB3C785815a0",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "CCC",
      thumb: "assets/img/crash-test.png",
      address: "0x4B73517Ae7Ac55B46b8B993A41842Af399fbfa25",
      decimals: 18,
    }
  ],
  // Binance mainnet
  56: [
    {
      "name": "Binance Coin",
      "symbol": "BNB",
      "thumb": "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
      "address": "0x0000000000000000000000000000000000000000",
      "decimals": 18
    },
    {
      "name": "Ethbox Token",
      "symbol": "ebox",
      "thumb": "https://assets.coingecko.com/coins/images/14528/thumb/ethbox.PNG",
      "address": "0x33840024177a7daca3468912363bed8b425015c5",
      "decimals": 18
    },
    {
      "name": "Wrapped BNB",
      "symbol": "WBNB",
      "thumb": "https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png",
      "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      "decimals": 18
    },
    {
      "name": "BUSD Token",
      "symbol": "BUSD",
      "thumb": "https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png",
      "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      "decimals": 18
    },
    {
      "name": "SafeMoon",
      "symbol": "SAFEMOON",
      "thumb": "https://pancakeswap.finance/images/tokens/0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3.png",
      "address": "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3",
      "decimals": 9
    },
    {
      "name": "Tether USD",
      "symbol": "USDT",
      "thumb": "https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png",
      "address": "0x55d398326f99059fF775485246999027B3197955",
      "decimals": 18
    },
    {
      "name": "BELT Token",
      "symbol": "BELT",
      "thumb": "https://pancakeswap.finance/images/tokens/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png",
      "address": "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
      "decimals": 18
    },
    {
      "name": "Ethereum Token",
      "symbol": "ETH",
      "thumb": "https://pancakeswap.finance/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png",
      "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      "decimals": 18
    },
    {
      "name": "Bunny Token",
      "symbol": "BUNNY",
      "thumb": "https://pancakeswap.finance/images/tokens/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51.png",
      "address": "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
      "decimals": 18
    },
    {
      "name": "BTCB Token",
      "symbol": "BTCB",
      "thumb": "https://pancakeswap.finance/images/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png",
      "address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      "decimals": 18
    },
    {
      "name": "USD Coin",
      "symbol": "USDC",
      "thumb": "https://pancakeswap.finance/images/tokens/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
      "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      "decimals": 18
    },
    {
      "name": "Dai Token",
      "symbol": "DAI",
      "thumb": "https://pancakeswap.finance/images/tokens/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3.png",
      "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
      "decimals": 18
    },
    {
      "name": "Polkadot Token",
      "symbol": "DOT",
      "thumb": "https://pancakeswap.finance/images/tokens/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402.png",
      "address": "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
      "decimals": 18
    },
    {
      "name": "AUTOv2",
      "symbol": "AUTO",
      "thumb": "https://pancakeswap.finance/images/tokens/0xa184088a740c695E156F91f5cC086a06bb78b827.png",
      "address": "0xa184088a740c695E156F91f5cC086a06bb78b827",
      "decimals": 18
    },
    {
      "name": "VAI Stablecoin",
      "symbol": "VAI",
      "thumb": "https://pancakeswap.finance/images/tokens/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7.png",
      "address": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
      "decimals": 18
    },
    {
      "name": "Uniswap",
      "symbol": "UNI",
      "thumb": "https://pancakeswap.finance/images/tokens/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1.png",
      "address": "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
      "decimals": 18
    },
    {
      "name": "Wrapped UST Token",
      "symbol": "UST",
      "thumb": "https://pancakeswap.finance/images/tokens/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png",
      "address": "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
      "decimals": 18
    },
    {
      "name": "Cardano Token",
      "symbol": "ADA",
      "thumb": "https://pancakeswap.finance/images/tokens/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png",
      "address": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
      "decimals": 18
    },
    {
      "name": "Ellipsis",
      "symbol": "EPS",
      "thumb": "https://pancakeswap.finance/images/tokens/0xA7f552078dcC247C2684336020c03648500C6d9F.png",
      "address": "0xA7f552078dcC247C2684336020c03648500C6d9F",
      "decimals": 18
    },
    {
      "name": "ChainLink Token",
      "symbol": "LINK",
      "thumb": "https://pancakeswap.finance/images/tokens/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD.png",
      "address": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
      "decimals": 18
    },
    {
      "name": "Helmet.insure Governance Token",
      "symbol": "Helmet",
      "thumb": "https://pancakeswap.finance/images/tokens/0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8.png",
      "address": "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
      "decimals": 18
    },
    {
      "name": "AlphaToken",
      "symbol": "ALPHA",
      "thumb": "https://pancakeswap.finance/images/tokens/0xa1faa113cbE53436Df28FF0aEe54275c13B40975.png",
      "address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
      "decimals": 18
    },
    {
      "name": "XRP Token",
      "symbol": "XRP",
      "thumb": "https://pancakeswap.finance/images/tokens/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE.png",
      "address": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
      "decimals": 18
    },
    {
      "name": "ElonGate",
      "symbol": "ElonGate",
      "thumb": "https://pancakeswap.finance/images/tokens/0x2A9718defF471f3Bb91FA0ECEAB14154F150a385.png",
      "address": "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385",
      "decimals": 9
    },
    {
      "name": "Band Protocol Token",
      "symbol": "BAND",
      "thumb": "https://pancakeswap.finance/images/tokens/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18.png",
      "address": "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
      "decimals": 18
    },
    {
      "name": "Mobox",
      "symbol": "MBOX",
      "thumb": "https://pancakeswap.finance/images/tokens/0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377.png",
      "address": "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377",
      "decimals": 18
    },
    {
      "name": "Binance Beacon ETH",
      "symbol": "BETH",
      "thumb": "https://pancakeswap.finance/images/tokens/0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B.png",
      "address": "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B",
      "decimals": 18
    },
    {
      "name": "SafePal Token",
      "symbol": "SFP",
      "thumb": "https://pancakeswap.finance/images/tokens/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb.png",
      "address": "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
      "decimals": 18
    },
    {
      "name": "Venus",
      "symbol": "XVS",
      "thumb": "https://pancakeswap.finance/images/tokens/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63.png",
      "address": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
      "decimals": 18
    },
    {
      "name": "Swipe",
      "symbol": "SXP",
      "thumb": "https://pancakeswap.finance/images/tokens/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A.png",
      "address": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
      "decimals": 18
    },
    {
      "name": "Wault Finance",
      "symbol": "WAULT",
      "thumb": "https://pancakeswap.finance/images/tokens/0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9.png",
      "address": "0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9",
      "decimals": 18
    },
    {
      "name": "BGOV Token",
      "symbol": "BGOV",
      "thumb": "https://pancakeswap.finance/images/tokens/0xf8E026dC4C0860771f691EcFFBbdfe2fa51c77CF.png",
      "address": "0xf8E026dC4C0860771f691EcFFBbdfe2fa51c77CF",
      "decimals": 18
    },
    {
      "name": "AlpacaToken",
      "symbol": "ALPACA",
      "thumb": "https://pancakeswap.finance/images/tokens/0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F.png",
      "address": "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
      "decimals": 18
    },
    {
      "name": "Compound Coin",
      "symbol": "COMP",
      "thumb": "https://pancakeswap.finance/images/tokens/0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8.png",
      "address": "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
      "decimals": 18
    },
    {
      "name": "Trust Wallet",
      "symbol": "TWT",
      "thumb": "https://pancakeswap.finance/images/tokens/0x4B0F1812e5Df2A09796481Ff14017e6005508003.png",
      "address": "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
      "decimals": 18
    },
    {
      "name": "Woonkly Power",
      "symbol": "WOOP",
      "thumb": "https://pancakeswap.finance/images/tokens/0x8b303d5BbfBbf46F1a4d9741E491e06986894e18.png",
      "address": "0x8b303d5BbfBbf46F1a4d9741E491e06986894e18",
      "decimals": 18
    },
    {
      "name": "SushiToken",
      "symbol": "SUSHI",
      "thumb": "https://pancakeswap.finance/images/tokens/0x947950BcC74888a40Ffa2593C5798F11Fc9124C4.png",
      "address": "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
      "decimals": 18
    },
    {
      "name": "Nerve",
      "symbol": "NRV",
      "thumb": "https://pancakeswap.finance/images/tokens/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096.png",
      "address": "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
      "decimals": 18
    },
    {
      "name": "Badger Sett Badger",
      "symbol": "bBADGER",
      "thumb": "https://pancakeswap.finance/images/tokens/0x1F7216fdB338247512Ec99715587bb97BBf96eae.png",
      "address": "0x1F7216fdB338247512Ec99715587bb97BBf96eae",
      "decimals": 18
    },
    {
      "name": "SafeMars",
      "symbol": "SAFEMARS",
      "thumb": "https://pancakeswap.finance/images/tokens/0x3aD9594151886Ce8538C1ff615EFa2385a8C3A88.png",
      "address": "0x3aD9594151886Ce8538C1ff615EFa2385a8C3A88",
      "decimals": 9
    },
    {
      "name": "DODO bird",
      "symbol": "DODO",
      "thumb": "https://pancakeswap.finance/images/tokens/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2.png",
      "address": "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
      "decimals": 18
    },
    {
      "name": "Litentry",
      "symbol": "LIT",
      "thumb": "https://pancakeswap.finance/images/tokens/0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723.png",
      "address": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
      "decimals": 18
    },
    {
      "name": "Reef.finance",
      "symbol": "REEF",
      "thumb": "https://pancakeswap.finance/images/tokens/0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e.png",
      "address": "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
      "decimals": 18
    },
    {
      "name": "TokenPocket Token",
      "symbol": "TPT",
      "thumb": "https://pancakeswap.finance/images/tokens/0xECa41281c24451168a37211F0bc2b8645AF45092.png",
      "address": "0xECa41281c24451168a37211F0bc2b8645AF45092",
      "decimals": 4
    },
    {
      "name": "Wrapped SOTE",
      "symbol": "wSOTE",
      "thumb": "https://pancakeswap.finance/images/tokens/0x541E619858737031A1244A5d0Cd47E5ef480342c.png",
      "address": "0x541E619858737031A1244A5d0Cd47E5ef480342c",
      "decimals": 18
    },
    {
      "name": "Bella Protocol",
      "symbol": "BEL",
      "thumb": "https://pancakeswap.finance/images/tokens/0x8443f091997f06a61670B735ED92734F5628692F.png",
      "address": "0x8443f091997f06a61670B735ED92734F5628692F",
      "decimals": 18
    },
    {
      "name": "bDollar",
      "symbol": "BDO",
      "thumb": "https://pancakeswap.finance/images/tokens/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454.png",
      "address": "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
      "decimals": 18
    },
    {
      "name": "Goose Golden Egg",
      "symbol": "EGG",
      "thumb": "https://pancakeswap.finance/images/tokens/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6.png",
      "address": "0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
      "decimals": 18
    },
    {
      "name": "Berry Tributes",
      "symbol": "BRY",
      "thumb": "https://pancakeswap.finance/images/tokens/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830.png",
      "address": "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
      "decimals": 18
    },
    {
      "name": "Zilliqa",
      "symbol": "ZIL",
      "thumb": "https://pancakeswap.finance/images/tokens/0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787.png",
      "address": "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
      "decimals": 12
    },
    {
      "name": "Fuel Token",
      "symbol": "Fuel",
      "thumb": "https://pancakeswap.finance/images/tokens/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A.png",
      "address": "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
      "decimals": 18
    },
    {
      "name": "Tokocrypto Token",
      "symbol": "TKO",
      "thumb": "https://pancakeswap.finance/images/tokens/0x9f589e3eabe42ebC94A44727b3f3531C0c877809.png",
      "address": "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
      "decimals": 18
    },
    {
      "name": "Switcheo Token",
      "symbol": "SWTH",
      "thumb": "https://pancakeswap.finance/images/tokens/0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C.png",
      "address": "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
      "decimals": 8
    },
    {
      "name": "BSCX",
      "symbol": "BSCX",
      "thumb": "https://pancakeswap.finance/images/tokens/0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587.png",
      "address": "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
      "decimals": 18
    },
    {
      "name": "SafeGalaxy",
      "symbol": "SAFEGALAXY",
      "thumb": "https://pancakeswap.finance/images/tokens/0x6b51231c43B1604815313801dB5E9E614914d6e4.png",
      "address": "0x6b51231c43B1604815313801dB5E9E614914d6e4",
      "decimals": 9
    },
    {
      "name": "StandardBTCHashrateToken",
      "symbol": "BTCST",
      "thumb": "https://pancakeswap.finance/images/tokens/0x78650B139471520656b9E7aA7A5e9276814a38e9.png",
      "address": "0x78650B139471520656b9E7aA7A5e9276814a38e9",
      "decimals": 17
    },
    {
      "name": "Injective Protocol",
      "symbol": "INJ",
      "thumb": "https://pancakeswap.finance/images/tokens/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png",
      "address": "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
      "decimals": 18
    },
    {
      "name": "Eleven.finance",
      "symbol": "ELE",
      "thumb": "https://pancakeswap.finance/images/tokens/0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0.png",
      "address": "0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0",
      "decimals": 18
    },
    {
      "name": "IoTeX Network",
      "symbol": "IOTX",
      "thumb": "https://pancakeswap.finance/images/tokens/0x9678E42ceBEb63F23197D726B29b1CB20d0064E5.png",
      "address": "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
      "decimals": 18
    },
    {
      "name": "Linear Token",
      "symbol": "LINA",
      "thumb": "https://pancakeswap.finance/images/tokens/0x762539b45A1dCcE3D36d080F74d1AED37844b878.png",
      "address": "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
      "decimals": 18
    },
    {
      "name": "Nominex",
      "symbol": "NMX",
      "thumb": "https://pancakeswap.finance/images/tokens/0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65.png",
      "address": "0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65",
      "decimals": 18
    },
    {
      "name": "SafeStar",
      "symbol": "SAFESTAR",
      "thumb": "https://pancakeswap.finance/images/tokens/0x3C00F8FCc8791fa78DAA4A480095Ec7D475781e2.png",
      "address": "0x3C00F8FCc8791fa78DAA4A480095Ec7D475781e2",
      "decimals": 9
    },
    {
      "name": "τBitcoin",
      "symbol": "τBTC",
      "thumb": "https://pancakeswap.finance/images/tokens/0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c.png",
      "address": "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c",
      "decimals": 9
    },
    {
      "name": "dego.finance",
      "symbol": "DEGO",
      "thumb": "https://pancakeswap.finance/images/tokens/0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC.png",
      "address": "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
      "decimals": 18
    },
    {
      "name": "OPEN Governance Token",
      "symbol": "bOPEN",
      "thumb": "https://pancakeswap.finance/images/tokens/0xF35262a9d427F96d2437379eF090db986eaE5d42.png",
      "address": "0xF35262a9d427F96d2437379eF090db986eaE5d42",
      "decimals": 18
    },
    {
      "name": "Cosmos Token",
      "symbol": "ATOM",
      "thumb": "https://pancakeswap.finance/images/tokens/0x0Eb3a705fc54725037CC9e008bDede697f62F335.png",
      "address": "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
      "decimals": 18
    },
    {
      "name": "FOX",
      "symbol": "FOX",
      "thumb": "https://pancakeswap.finance/images/tokens/0xFAd8E46123D7b4e77496491769C167FF894d2ACB.png",
      "address": "0xFAd8E46123D7b4e77496491769C167FF894d2ACB",
      "decimals": 9
    },
    {
      "name": "beefy.finance",
      "symbol": "BIFI",
      "thumb": "https://pancakeswap.finance/images/tokens/0xCa3F508B8e4Dd382eE878A314789373D80A5190A.png",
      "address": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
      "decimals": 18
    },
    {
      "name": "Badger Sett Digg",
      "symbol": "bDIGG",
      "thumb": "https://pancakeswap.finance/images/tokens/0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA.png",
      "address": "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA",
      "decimals": 18
    },
    {
      "name": "ALICE",
      "symbol": "ALICE",
      "thumb": "https://pancakeswap.finance/images/tokens/0xAC51066d7bEC65Dc4589368da368b212745d63E8.png",
      "address": "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
      "decimals": 6
    },
    {
      "name": "Standard on xDai on BSC",
      "symbol": "xMARK",
      "thumb": "https://pancakeswap.finance/images/tokens/0x26A5dFab467d4f58fB266648CAe769503CEC9580.png",
      "address": "0x26A5dFab467d4f58fB266648CAe769503CEC9580",
      "decimals": 9
    },
    {
      "name": "SWINGBY token",
      "symbol": "SWINGBY",
      "thumb": "https://pancakeswap.finance/images/tokens/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739.png",
      "address": "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739",
      "decimals": 18
    },
    {
      "name": "Nuls",
      "symbol": "NULS",
      "thumb": "https://pancakeswap.finance/images/tokens/0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B.png",
      "address": "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B",
      "decimals": 8
    },
    {
      "name": "Bogged Finance",
      "symbol": "BOG",
      "thumb": "https://pancakeswap.finance/images/tokens/0xD7B729ef857Aa773f47D37088A1181bB3fbF0099.png",
      "address": "0xD7B729ef857Aa773f47D37088A1181bB3fbF0099",
      "decimals": 18
    },
    {
      "name": "RAMP DEFI",
      "symbol": "RAMP",
      "thumb": "https://pancakeswap.finance/images/tokens/0x8519EA49c997f50cefFa444d240fB655e89248Aa.png",
      "address": "0x8519EA49c997f50cefFa444d240fB655e89248Aa",
      "decimals": 18
    },
    {
      "name": "Frontier Token",
      "symbol": "FRONT",
      "thumb": "https://pancakeswap.finance/images/tokens/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png",
      "address": "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
      "decimals": 18
    },
    {
      "name": "IceToken",
      "symbol": "ICE",
      "thumb": "https://pancakeswap.finance/images/tokens/0xf16e81dce15B08F326220742020379B855B87DF9.png",
      "address": "0xf16e81dce15B08F326220742020379B855B87DF9",
      "decimals": 18
    },
    {
      "name": "Multiplier",
      "symbol": "bMXX",
      "thumb": "https://pancakeswap.finance/images/tokens/0x4131b87F74415190425ccD873048C708F8005823.png",
      "address": "0x4131b87F74415190425ccD873048C708F8005823",
      "decimals": 18
    },
    {
      "name": "Sheesha Finance",
      "symbol": "SHEESHA",
      "thumb": "https://pancakeswap.finance/images/tokens/0x232FB065D9d24c34708eeDbF03724f2e95ABE768.png",
      "address": "0x232FB065D9d24c34708eeDbF03724f2e95ABE768",
      "decimals": 18
    },
    {
      "name": "UNFI",
      "symbol": "UNFI",
      "thumb": "https://pancakeswap.finance/images/tokens/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B.png",
      "address": "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
      "decimals": 18
    },
    {
      "name": "The Force Token",
      "symbol": "FOR",
      "thumb": "https://pancakeswap.finance/images/tokens/0x658A109C5900BC6d2357c87549B651670E5b0539.png",
      "address": "0x658A109C5900BC6d2357c87549B651670E5b0539",
      "decimals": 18
    },
    {
      "name": "BitcoinAsset",
      "symbol": "BTA",
      "thumb": "https://pancakeswap.finance/images/tokens/0xAd9787017e82f6368BbE4893b475CaadA2258564.png",
      "address": "0xAd9787017e82f6368BbE4893b475CaadA2258564",
      "decimals": 18
    },
    {
      "name": "Moon Token",
      "symbol": "MOONTOKEN",
      "thumb": "https://pancakeswap.finance/images/tokens/0x81E4d494b85A24a58a6BA45c9B418b32a4E039de.png",
      "address": "0x81E4d494b85A24a58a6BA45c9B418b32a4E039de",
      "decimals": 18
    },
    {
      "name": "EOS Token",
      "symbol": "EOS",
      "thumb": "https://pancakeswap.finance/images/tokens/0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6.png",
      "address": "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
      "decimals": 18
    },
    {
      "name": "Hakka Finance on xDai on BSC",
      "symbol": "HAKKA",
      "thumb": "https://pancakeswap.finance/images/tokens/0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC.png",
      "address": "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",
      "decimals": 18
    },
    {
      "name": "yearn.finance",
      "symbol": "YFI",
      "thumb": "https://pancakeswap.finance/images/tokens/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e.png",
      "address": "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
      "decimals": 18
    },
    {
      "name": "pTokens BTC",
      "symbol": "pBTC",
      "thumb": "https://pancakeswap.finance/images/tokens/0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C.png",
      "address": "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C",
      "decimals": 18
    },
    {
      "name": "Cyclone Protocol",
      "symbol": "CYC",
      "thumb": "https://pancakeswap.finance/images/tokens/0x810EE35443639348aDbbC467b33310d2AB43c168.png",
      "address": "0x810EE35443639348aDbbC467b33310d2AB43c168",
      "decimals": 18
    },
    {
      "name": "DFuture Token",
      "symbol": "DFT",
      "thumb": "https://pancakeswap.finance/images/tokens/0x42712dF5009c20fee340B245b510c0395896cF6e.png",
      "address": "0x42712dF5009c20fee340B245b510c0395896cF6e",
      "decimals": 18
    },
    {
      "name": "SafeBTC",
      "symbol": "SAFEBTC",
      "thumb": "https://pancakeswap.finance/images/tokens/0x380624A4a7e69dB1cA07deEcF764025FC224D056.png",
      "address": "0x380624A4a7e69dB1cA07deEcF764025FC224D056",
      "decimals": 9
    },
    {
      "name": "AllianceBlock Token",
      "symbol": "bALBT",
      "thumb": "https://pancakeswap.finance/images/tokens/0x72fAa679E1008Ad8382959FF48E392042A8b06f7.png",
      "address": "0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
      "decimals": 18
    },
    {
      "name": "yieldwatch",
      "symbol": "WATCH",
      "thumb": "https://pancakeswap.finance/images/tokens/0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0.png",
      "address": "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0",
      "decimals": 18
    },
    {
      "name": "Euler.Tools",
      "symbol": "EULER",
      "thumb": "https://pancakeswap.finance/images/tokens/0x3920123482070C1a2dff73AaD695c60e7c6F6862.png",
      "address": "0x3920123482070C1a2dff73AaD695c60e7c6F6862",
      "decimals": 18
    },
    {
      "name": "Zeppelin.dao",
      "symbol": "ZEP",
      "thumb": "https://pancakeswap.finance/images/tokens/0x2E291e1c9f85a86d0C58Ae15621aaC005a8b2EAD.png",
      "address": "0x2E291e1c9f85a86d0C58Ae15621aaC005a8b2EAD",
      "decimals": 9
    },
    {
      "name": "Tixl Token",
      "symbol": "TXL",
      "thumb": "https://pancakeswap.finance/images/tokens/0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5.png",
      "address": "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5",
      "decimals": 18
    },
    {
      "name": "LTO Network",
      "symbol": "LTO",
      "thumb": "https://pancakeswap.finance/images/tokens/0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd.png",
      "address": "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd",
      "decimals": 18
    },
    {
      "name": "UniTrade",
      "symbol": "TRADE",
      "thumb": "https://pancakeswap.finance/images/tokens/0x7af173F350D916358AF3e218Bdf2178494Beb748.png",
      "address": "0x7af173F350D916358AF3e218Bdf2178494Beb748",
      "decimals": 18
    },
    {
      "name": "DeXe",
      "symbol": "DEXE",
      "thumb": "https://pancakeswap.finance/images/tokens/0x039cB485212f996A9DBb85A9a75d898F94d38dA6.png",
      "address": "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
      "decimals": 18
    },
    {
      "name": "pTokens CGG",
      "symbol": "CGG",
      "thumb": "https://pancakeswap.finance/images/tokens/0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2.png",
      "address": "0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2",
      "decimals": 18
    },
    {
      "name": "BoringDAO Token",
      "symbol": "BOR",
      "thumb": "https://pancakeswap.finance/images/tokens/0x92D7756c60dcfD4c689290E8A9F4d263b3b32241.png",
      "address": "0x92D7756c60dcfD4c689290E8A9F4d263b3b32241",
      "decimals": 18
    },
    {
      "name": "Exeedme",
      "symbol": "XED",
      "thumb": "https://pancakeswap.finance/images/tokens/0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f.png",
      "address": "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f",
      "decimals": 18
    }
  ],
  // Binance testnet
  97: [
    {
      name: "Binance Coin",
      symbol: "BNB",
      thumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "AAA",
      thumb: "assets/img/crash-test.png",
      address: "0xbF2EBD4b347732F96C95f2D3116A34095baB3F90",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "BBB",
      thumb: "assets/img/crash-test.png",
      address: "0x6b0b8E503696076AAB140C10c689f22DC15FF87D",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "CCC",
      thumb: "assets/img/crash-test.png",
      address: "0x69f90E517C21E3117e1535fA2092dC1f3633F560",
      decimals: 18,
    }
  ],
  // Matic mainnet
  137: [
    {
      name: "Polygon",
      symbol: "MATIC",
      thumb:
        "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
      address: "0x0000000000000000000000000000000000000000",
      decimals: "18",
    }
  ],
  // Matic testnet
  80001: [
    {
      name: "Polygon",
      symbol: "MATIC",
      thumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
      address: "0x0000000000000000000000000000000000000000",
      decimals: "18",
    },
    {
      name: "Test Token",
      symbol: "AAA",
      thumb: "assets/img/crash-test.png",
      address: "0xE38A5C3da5FFf6E2865BF64cF6674265cFfd9e7f",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "BBB",
      thumb: "assets/img/crash-test.png",
      address: "0xb40d2f3B8e2465DF9132ae2DF43E80Dbb67d3369",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "CCC",
      thumb: "assets/img/crash-test.png",
      address: "0x7190Bb56c586Bf9Dd8013C450af8C51af5EaE156",
      decimals: 18,
    }
  ],
  // Reef mainnet
  "reef-mainnet": [
    {
      name: "Reef",
      symbol: "REEF",
      thumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
    }
  ],
  // Reef testnet
  "reef-testnet": [
    {
      name: "Reef",
      symbol: "REEF",
      thumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "AAA",
      thumb: "assets/img/crash-test.png",
      address: "0xd8ee8B891B2800ea03D4AbBa2033b0AC80d85f79",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "BBB",
      thumb: "assets/img/crash-test.png",
      address: "0xe14b1a577110d94fDe19CFd01659E8041da71d83",
      decimals: 18,
    },
    {
      name: "Test Token",
      symbol: "CCC",
      thumb: "assets/img/crash-test.png",
      address: "0xCcCb0F09A72bbf7f8593D5e74d0aD7f3D687aD98",
      decimals: 18,
    }
  ]
};


/***/ }),

/***/ 34084:
/*!**************************************!*\
  !*** ./src/app/constants/various.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADDRESS_ZERO": () => (/* binding */ ADDRESS_ZERO),
/* harmony export */   "ZERO": () => (/* binding */ ZERO),
/* harmony export */   "MAX_VALUE": () => (/* binding */ MAX_VALUE)
/* harmony export */ });
let ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
let ZERO = '0';
let MAX_VALUE = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _components_boxes_received_list_boxes_received_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/boxes-received-list/boxes-received-list.component */ 81319);
/* harmony import */ var _components_boxes_sent_list_boxes_sent_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/boxes-sent-list/boxes-sent-list.component */ 74237);
/* harmony import */ var _components_governance_governance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/governance/governance.component */ 617);
/* harmony import */ var _components_over_the_counter_over_the_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/over-the-counter/over-the-counter.component */ 85962);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 83581);
/* harmony import */ var _components_send_send_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/send/send.component */ 98860);
/* harmony import */ var _components_staking_staking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/staking/staking.component */ 40852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    { path: '', component: _components_send_send_component__WEBPACK_IMPORTED_MODULE_5__.SendComponent },
    { path: 'send', component: _components_send_send_component__WEBPACK_IMPORTED_MODULE_5__.SendComponent },
    { path: 'over-the-counter', component: _components_over_the_counter_over_the_counter_component__WEBPACK_IMPORTED_MODULE_3__.OverTheCounterComponent },
    { path: 'boxes/received', component: _components_boxes_received_list_boxes_received_list_component__WEBPACK_IMPORTED_MODULE_0__.BoxesReceivedListComponent },
    { path: 'boxes/sent', component: _components_boxes_sent_list_boxes_sent_list_component__WEBPACK_IMPORTED_MODULE_1__.BoxesSentListComponent },
    { path: 'staking', component: _components_staking_staking_component__WEBPACK_IMPORTED_MODULE_6__.StakingComponent },
    { path: 'governance', component: _components_governance_governance_component__WEBPACK_IMPORTED_MODULE_2__.GovernanceComponent },
    { path: '**', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/contract.service */ 36569);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loading-indicator/loading-indicator.component */ 28069);
/* harmony import */ var _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/top-bar/top-bar.component */ 24406);
/* harmony import */ var _components_bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bottom-bar/bottom-bar.component */ 42029);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_view_console_view_console_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/view-console/view-console.component */ 80660);
/* harmony import */ var _components_toaster_notifier_toaster_notifier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/toaster-notifier/toaster-notifier.component */ 34566);









function AppComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Get test tokens ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_div_32_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r2.contractServ.give100TestToken(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "100");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Token AAA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_div_32_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.contractServ.give100TestToken(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "100");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Token BBB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_div_32_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.contractServ.give100TestToken(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "100");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " Token CCC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(contractServ, router) {
        this.contractServ = contractServ;
        this.router = router;
        this.title = 'ethbox-dapp';
    }
    ngAfterViewInit() {
        let menuTrigger = document.querySelector("#menu-trigger");
        let mainContent = document.querySelector("#main-content");
        menuTrigger.addEventListener("click", () => {
            function uncheckTrigger() {
                menuTrigger.checked = false;
                mainContent.removeEventListener("click", uncheckTrigger);
            }
            if (menuTrigger.checked) {
                mainContent.addEventListener("click", uncheckTrigger);
            }
            else {
                mainContent.removeEventListener("click", uncheckTrigger);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 36, vars: 5, consts: [["hidden", "", "id", "menu-trigger", "type", "checkbox"], ["triggerMenu", ""], ["for", "menu-trigger"], ["id", "main-content-wrapper"], ["id", "main-content-shadow"], ["id", "main-content"], ["id", "main-slide-menu"], ["href", "/", 1, "p-3", "d-block", "text-uppercase", "text-reset", "text-decoration-none"], [1, "bi", "bi-box-arrow-left", "me-1"], ["href", "#", "routerLink", "/", "routerLinkActive", "active", 1, "m-3", "d-block", "text-uppercase", "text-reset", "text-decoration-none", 3, "routerLinkActiveOptions", "mouseenter", "click"], [1, "bi", "bi-box", "me-1"], ["href", "#", "routerLink", "/over-the-counter", "routerLinkActive", "active", 1, "m-3", "d-block", "text-uppercase", "text-reset", "text-decoration-none", 3, "mouseenter", "click"], [1, "bi", "bi-shuffle", "me-1"], ["href", "#", "routerLink", "/boxes/received", "routerLinkActive", "active", 1, "m-3", "d-block", "text-uppercase", "text-reset", "text-decoration-none", 3, "mouseenter", "click"], [1, "bi", "bi-list-task", "me-1"], ["href", "#", "routerLink", "/boxes/sent", "routerLinkActive", "active", 1, "m-3", "d-block", "text-uppercase", "text-reset", "text-decoration-none", 3, "mouseenter", "click"], [1, "bi", "bi-clock-history", "me-1"], ["href", "#", "routerLink", "/staking", "routerLinkActive", "active", 1, "m-3", "d-block", "text-uppercase", "text-reset", "text-decoration-none", 3, "mouseenter", "click"], [1, "bi", "bi-cash-stack", "me-1"], ["href", "#", "routerLink", "/governance", "routerLinkActive", "active", 1, "m-3", "d-block", "text-uppercase", "text-reset", "text-decoration-none", 3, "mouseenter", "click"], [1, "bi", "bi-people", "me-1"], ["class", "p-3", 4, "ngIf"], [1, "p-3"], [1, "text-uppercase", "my-3", "fst-italic"], [1, "spinner-grow", "spinner-grow-sm", "text-danger", "me-1"], [1, "bi", "bi-arrow-down"], [1, "d-grid", "gap-3", "p-3", 2, "justify-content", "start"], [1, "btn", "btn-outline-eboxprimary", "rounded-alot", 3, "click"], [1, "fs-5", "me-2", "text-warning"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading-indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-bottom-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Main Site ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function AppComponent_Template_a_mouseenter_14_listener() { return ctx.router.navigate([""]); })("click", function AppComponent_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); return _r0.checked = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function AppComponent_Template_a_mouseenter_17_listener() { return ctx.router.navigate(["over-the-counter"]); })("click", function AppComponent_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); return _r0.checked = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " OTC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function AppComponent_Template_a_mouseenter_20_listener() { return ctx.router.navigate(["boxes", "received"]); })("click", function AppComponent_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); return _r0.checked = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Incoming ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function AppComponent_Template_a_mouseenter_23_listener() { return ctx.router.navigate(["boxes", "sent"]); })("click", function AppComponent_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); return _r0.checked = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, " Outgoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function AppComponent_Template_a_mouseenter_26_listener() { return ctx.router.navigate(["staking"]); })("click", function AppComponent_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); return _r0.checked = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Staking ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function AppComponent_Template_a_mouseenter_29_listener() { return ctx.router.navigate(["governance"]); })("click", function AppComponent_Template_a_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); return _r0.checked = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Governance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, AppComponent_div_32_Template, 18, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "app-view-console");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "app-toaster-notifier");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 2, ctx.contractServ.isAppReady$) && (ctx.contractServ.isEthereumTestnet() || ctx.contractServ.isBinanceTestnet() || ctx.contractServ.isMaticTestnet() || ctx.contractServ.isReefTestnet()));
    } }, directives: [_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorComponent, _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__.TopBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _components_bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_3__.BottomBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_view_console_view_console_component__WEBPACK_IMPORTED_MODULE_4__.ViewConsoleComponent, _components_toaster_notifier_toaster_notifier_component__WEBPACK_IMPORTED_MODULE_5__.ToasterNotifierComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: ["#main-content-wrapper[_ngcontent-%COMP%] {\r\n  perspective: 100em;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-image:\r\n    linear-gradient(\r\n      #fff 0%,\r\n      44%,\r\n      #444 60%,\r\n      #333 60%,\r\n      66%,\r\n      #fff\r\n    );\r\n  transition: all .3s ease;\r\n}\r\n\r\n#main-content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  transform-origin: right;\r\n  transform: rotateY(0);\r\n  background-color: #222;\r\n  transition: all .3s ease;\r\n}\r\n\r\n#main-content-shadow[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  transform-origin: right;\r\n  transform:\r\n    rotateY(-60deg)\r\n    rotateX(90deg)\r\n    translateY(50%);\r\n  width: 100%;\r\n  height: 100%;\r\n  background-image: linear-gradient(\r\n    #0002,\r\n    #0000\r\n  );\r\n}\r\n\r\nlabel[for=\"menu-trigger\"][_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 7px;\r\n  left: 12px;\r\n  z-index: 99;\r\n  padding: 16px;\r\n  line-height: 1;\r\n  background-color: #fffa;\r\n  border: 1px solid #ddd;\r\n  border-radius: 1em;\r\n}\r\n\r\nlabel[for=\"menu-trigger\"][_ngcontent-%COMP%]::before {\r\n  content: \"\u2630\";\r\n}\r\n\r\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ label[for=\"menu-trigger\"][_ngcontent-%COMP%]::before {\r\n  content: \"\u2715\";\r\n}\r\n\r\n#main-slide-menu[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 2;\r\n  transform: translateX(-100%);\r\n  display: grid;\r\n  justify-content: space-around;\r\n  align-content: center;\r\n  padding: 1em;\r\n  min-width: 50%;\r\n  height: 100vh;\r\n  color: #111;\r\n  background-image: \r\n    linear-gradient(\r\n      90deg, #fffa, 75%, #0000\r\n    );\r\n  overflow: auto;\r\n  transition: all .3s ease;\r\n}\r\n\r\n#main-slide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  letter-spacing: 4px;\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all .3s ease;\r\n}\r\n\r\n#main-slide-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  margin: 2rem 0 2rem 2rem!important;\r\n  font-size: 2.5rem;\r\n  text-shadow: 0 5px 10px #0008;\r\n}\r\n\r\n#main-slide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #f1c!important;\r\n}\r\n\r\n#main-slide-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 0;\r\n}\r\n\r\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ #main-slide-menu[_ngcontent-%COMP%] {\r\n  transform: translateX(0);\r\n}\r\n\r\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ #main-content-wrapper[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  filter: blur(3px);\r\n}\r\n\r\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ #main-content-wrapper[_ngcontent-%COMP%]:hover {\r\n  filter: blur(0);\r\n}\r\n\r\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ #main-content-wrapper[_ngcontent-%COMP%]:hover    ~ #main-slide-menu[_ngcontent-%COMP%] {\r\n  filter: blur(3px);\r\n}\r\n\r\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ #main-content-wrapper[_ngcontent-%COMP%]   #main-content[_ngcontent-%COMP%] {\r\n  transform: rotateY(-60deg);\r\n  opacity: .85;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n#menu-trigger[_ngcontent-%COMP%]:checked    ~ #main-content-wrapper[_ngcontent-%COMP%]   #main-content-shadow[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #main-slide-menu[_ngcontent-%COMP%] {\r\n    align-content: start;\r\n    width: 100%;\r\n  }\r\n\r\n  #main-slide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    letter-spacing: 3px;\r\n  }\r\n\r\n  #main-slide-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2I7Ozs7Ozs7O0tBUUc7RUFDSCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix1QkFBdUI7RUFDdkI7OzttQkFHaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWjs7O0dBR0M7QUFDSDs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2QsYUFBYTtFQUNiLFdBQVc7RUFDWDs7O0tBR0c7RUFDSCxjQUFjO0VBQ2Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgcGVyc3BlY3RpdmU6IDEwMGVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgI2ZmZiAwJSxcclxuICAgICAgNDQlLFxyXG4gICAgICAjNDQ0IDYwJSxcclxuICAgICAgIzMzMyA2MCUsXHJcbiAgICAgIDY2JSxcclxuICAgICAgI2ZmZlxyXG4gICAgKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XHJcbn1cclxuXHJcbiNtYWluLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDApO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG59XHJcblxyXG4jbWFpbi1jb250ZW50LXNoYWRvdyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgdHJhbnNmb3JtOlxyXG4gICAgcm90YXRlWSgtNjBkZWcpXHJcbiAgICByb3RhdGVYKDkwZGVnKVxyXG4gICAgdHJhbnNsYXRlWSg1MCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAjMDAwMixcclxuICAgICMwMDAwXHJcbiAgKTtcclxufVxyXG5cclxubGFiZWxbZm9yPVwibWVudS10cmlnZ2VyXCJdIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbGVmdDogMTJweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG59XHJcblxyXG5sYWJlbFtmb3I9XCJtZW51LXRyaWdnZXJcIl06OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCLimLBcIjtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlcjpjaGVja2VkIH4gbGFiZWxbZm9yPVwibWVudS10cmlnZ2VyXCJdOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pyVXCI7XHJcbn1cclxuXHJcbiNtYWluLXNsaWRlLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBtaW4td2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGNvbG9yOiAjMTExO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICA5MGRlZywgI2ZmZmEsIDc1JSwgIzAwMDBcclxuICAgICk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xyXG59XHJcblxyXG4jbWFpbi1zbGlkZS1tZW51IGEge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcclxufVxyXG5cclxuI21haW4tc2xpZGUtbWVudSBhLmFjdGl2ZSB7XHJcbiAgbWFyZ2luOiAycmVtIDAgMnJlbSAycmVtIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxuICB0ZXh0LXNoYWRvdzogMCA1cHggMTBweCAjMDAwODtcclxufVxyXG5cclxuI21haW4tc2xpZGUtbWVudSBhOmhvdmVyIHtcclxuICBjb2xvcjogI2YxYyFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNtYWluLXNsaWRlLW1lbnU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlcjpjaGVja2VkIH4gI21haW4tc2xpZGUtbWVudSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4jbWVudS10cmlnZ2VyOmNoZWNrZWQgfiAjbWFpbi1jb250ZW50LXdyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmlsdGVyOiBibHVyKDNweCk7XHJcbn1cclxuXHJcbiNtZW51LXRyaWdnZXI6Y2hlY2tlZCB+ICNtYWluLWNvbnRlbnQtd3JhcHBlcjpob3ZlciB7XHJcbiAgZmlsdGVyOiBibHVyKDApO1xyXG59XHJcblxyXG4jbWVudS10cmlnZ2VyOmNoZWNrZWQgfiAjbWFpbi1jb250ZW50LXdyYXBwZXI6aG92ZXIgfiAjbWFpbi1zbGlkZS1tZW51IHtcclxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG5cclxuI21lbnUtdHJpZ2dlcjpjaGVja2VkIH4gI21haW4tY29udGVudC13cmFwcGVyICNtYWluLWNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgtNjBkZWcpO1xyXG4gIG9wYWNpdHk6IC44NTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNtZW51LXRyaWdnZXI6Y2hlY2tlZCB+ICNtYWluLWNvbnRlbnQtd3JhcHBlciAjbWFpbi1jb250ZW50LXNoYWRvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICNtYWluLXNsaWRlLW1lbnUge1xyXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gICNtYWluLXNsaWRlLW1lbnUgYSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gIH1cclxuXHJcbiAgI21haW4tc2xpZGUtbWVudSBhLmFjdGl2ZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/top-bar/top-bar.component */ 24406);
/* harmony import */ var _components_bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bottom-bar/bottom-bar.component */ 42029);
/* harmony import */ var _components_send_send_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/send/send.component */ 98860);
/* harmony import */ var _components_boxes_received_list_boxes_received_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/boxes-received-list/boxes-received-list.component */ 81319);
/* harmony import */ var _components_over_the_counter_over_the_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/over-the-counter/over-the-counter.component */ 85962);
/* harmony import */ var _components_boxes_sent_list_boxes_sent_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/boxes-sent-list/boxes-sent-list.component */ 74237);
/* harmony import */ var _components_staking_staking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/staking/staking.component */ 40852);
/* harmony import */ var _components_password_strength_visualizer_password_strength_visualizer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/password-strength-visualizer/password-strength-visualizer.component */ 92940);
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ 83581);
/* harmony import */ var _components_boxes_received_list_box_received_box_received_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/boxes-received-list/box-received/box-received.component */ 11304);
/* harmony import */ var _components_bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bg-changer/bg-changer.component */ 46567);
/* harmony import */ var _components_boxes_sent_list_box_sent_box_sent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/boxes-sent-list/box-sent/box-sent.component */ 41582);
/* harmony import */ var _components_token_selector_token_selector_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/token-selector/token-selector.component */ 75473);
/* harmony import */ var _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/coming-soon/coming-soon.component */ 50509);
/* harmony import */ var _components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/loading-indicator/loading-indicator.component */ 28069);
/* harmony import */ var _components_address_book_address_book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/address-book/address-book.component */ 25931);
/* harmony import */ var _components_toaster_notifier_toaster_notifier_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/toaster-notifier/toaster-notifier.component */ 34566);
/* harmony import */ var _components_governance_governance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/governance/governance.component */ 617);
/* harmony import */ var _components_governance_governance_proposal_governance_proposal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/governance/governance-proposal/governance-proposal.component */ 85558);
/* harmony import */ var _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pipes/to-fixed.pipe */ 35893);
/* harmony import */ var _components_governance_governance_area_governance_area_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/governance/governance-area/governance-area.component */ 70607);
/* harmony import */ var _components_view_console_view_console_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/view-console/view-console.component */ 80660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2316);


























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__.TopBarComponent,
        _components_bottom_bar_bottom_bar_component__WEBPACK_IMPORTED_MODULE_3__.BottomBarComponent,
        _components_send_send_component__WEBPACK_IMPORTED_MODULE_4__.SendComponent,
        _components_boxes_received_list_boxes_received_list_component__WEBPACK_IMPORTED_MODULE_5__.BoxesReceivedListComponent,
        _components_over_the_counter_over_the_counter_component__WEBPACK_IMPORTED_MODULE_6__.OverTheCounterComponent,
        _components_boxes_sent_list_boxes_sent_list_component__WEBPACK_IMPORTED_MODULE_7__.BoxesSentListComponent,
        _components_staking_staking_component__WEBPACK_IMPORTED_MODULE_8__.StakingComponent,
        _components_password_strength_visualizer_password_strength_visualizer_component__WEBPACK_IMPORTED_MODULE_9__.PasswordStrengthVisualizerComponent,
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__.PageNotFoundComponent,
        _components_boxes_received_list_box_received_box_received_component__WEBPACK_IMPORTED_MODULE_11__.BoxReceivedComponent,
        _components_bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_12__.BgChangerComponent,
        _components_boxes_sent_list_box_sent_box_sent_component__WEBPACK_IMPORTED_MODULE_13__.BoxSentComponent,
        _components_token_selector_token_selector_component__WEBPACK_IMPORTED_MODULE_14__.TokenSelectorComponent,
        _components_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_15__.ComingSoonComponent,
        _components_toaster_notifier_toaster_notifier_component__WEBPACK_IMPORTED_MODULE_18__.ToasterNotifierComponent,
        _components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_16__.LoadingIndicatorComponent,
        _components_address_book_address_book_component__WEBPACK_IMPORTED_MODULE_17__.AddressBookComponent,
        _components_governance_governance_component__WEBPACK_IMPORTED_MODULE_19__.GovernanceComponent,
        _components_governance_governance_proposal_governance_proposal_component__WEBPACK_IMPORTED_MODULE_20__.GovernanceProposalComponent,
        _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_21__.ToFixedPipe,
        _components_governance_governance_area_governance_area_component__WEBPACK_IMPORTED_MODULE_22__.GovernanceAreaComponent,
        _components_view_console_view_console_component__WEBPACK_IMPORTED_MODULE_23__.ViewConsoleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 25931:
/*!*******************************************************************!*\
  !*** ./src/app/components/address-book/address-book.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressBookComponent": () => (/* binding */ AddressBookComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading-indicator.service */ 4762);
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/contract.service */ 36569);
/* harmony import */ var src_app_services_address_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/address-book.service */ 76383);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);






function AddressBookComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddressBookComponent_div_31_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const addr_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.onAddressSelected.emit(addr_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddressBookComponent_div_31_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const addr_r4 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.onDelClicked(addr_r4.address); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Del ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const addr_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](addr_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](addr_r4.address);
} }
class AddressBookComponent {
    constructor(loadingIndicatorServ, contractServ, addressBookServ) {
        this.loadingIndicatorServ = loadingIndicatorServ;
        this.contractServ = contractServ;
        this.addressBookServ = addressBookServ;
        this.onAddressSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.randomId = `address-book_${Math.random().toString(36).substring(2)}`;
        this.name = '';
        this.address = '';
        this.search = '';
    }
    ngOnInit() {
        this.addresses = this.addressBookServ.getAddressesFromLS();
        this.filteredAddresses = this.addresses;
    }
    ngAfterViewInit() {
        // Moves the modal to the body (backdrop hackfix)
        let modal = document.getElementById(this.randomId);
        document.body.appendChild(modal);
    }
    ngOnDestroy() {
        // Removes the modal from the body (backdrop hackfix)
        document.getElementById(this.randomId).remove();
    }
    onAddClicked() {
        let addresses = this.addressBookServ.addAddress(this.name, this.address);
        if (addresses) {
            this.addresses = addresses;
            this.name = null;
            this.address = null;
            this.filterAddresses();
        }
    }
    onDelClicked(address) {
        let addresses = this.addressBookServ.removeAddress(address);
        if (addresses) {
            this.addresses = addresses;
            this.filterAddresses();
        }
    }
    filterAddresses() {
        this.filteredAddresses = this.addresses
            .filter(addr => {
            let lcSearch = this.search.trim().toLowerCase();
            let lcLabel = addr.label.toLowerCase();
            let lcAddress = addr.address.toLowerCase();
            return !this.search || lcLabel.includes(lcSearch) || lcAddress.includes(lcSearch);
        });
    }
}
AddressBookComponent.ɵfac = function AddressBookComponent_Factory(t) { return new (t || AddressBookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_1__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_address_book_service__WEBPACK_IMPORTED_MODULE_2__.AddressBookService)); };
AddressBookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddressBookComponent, selectors: [["app-address-book"]], outputs: { onAddressSelected: "onAddressSelected" }, decls: 32, vars: 11, consts: [[1, "d-flex", "flex-column", "align-items-center"], ["data-bs-toggle", "modal", 1, "btn", "text-white", 3, "disabled"], [1, "bi", "bi-bookmarks-fill"], [1, "modal", 3, "id"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content", "rounded-alot", 2, "height", "95vh"], [1, "modal-header"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "modal-title"], ["data-bs-dismiss", "modal", 1, "btn-close"], [1, "row", "g-3", "mb-3"], [1, "col-12", "col-md"], ["type", "text", "placeholder", "Name", 1, "form-control", "rounded-alot", 3, "value", "input"], ["nameInput", ""], ["type", "text", "placeholder", "Address", 1, "form-control", "rounded-alot", 3, "value", "input"], ["addressInput", ""], [1, "col-12", "col-md-auto"], [1, "btn", "btn-outline-eboxprimary", "rounded-alot", "w-100", 3, "click"], [1, "bi", "bi-bookmark-plus"], ["type", "text", "placeholder", "Search in the list", 1, "form-control", "rounded-alot", 3, "input"], ["searchInput", ""], [1, "modal-body"], ["class", "align-items-center border d-flex mb-3 p-3 rounded-alot", 4, "ngFor", "ngForOf"], [1, "align-items-center", "border", "d-flex", "mb-3", "p-3", "rounded-alot"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "col-12"], ["href", "#", "data-bs-dismiss", "modal", 1, "mb-3", "mb-md-0", "me-auto", "text-decoration-none", "text-reset", "text-truncate", "col-12", "col-sm-9", 3, "click"], [1, "fs-5"], [1, "btn", "btn-outline-eboxprimary", "rounded-alot", "col-12", "col-md-auto", 3, "click"], [1, "bi", "bi-bookmark-x"]], template: function AddressBookComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Address Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddressBookComponent_Template_input_input_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20); return ctx.name = _r0.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddressBookComponent_Template_input_input_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](23); return ctx.address = _r1.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddressBookComponent_Template_button_click_25_listener() { return ctx.onAddClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddressBookComponent_Template_input_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29); ctx.search = _r2.value; return ctx.filterAddresses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddressBookComponent_div_31_Template, 11, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 7, ctx.contractServ.isAppReady$) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 9, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-bs-target", "#" + ctx.randomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.randomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("There are ", ctx.addresses.length, " addresses saved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredAddresses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRyZXNzLWJvb2suY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 46567:
/*!***************************************************************!*\
  !*** ./src/app/components/bg-changer/bg-changer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BgChangerComponent": () => (/* binding */ BgChangerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BgChangerComponent {
    constructor() { }
}
BgChangerComponent.ɵfac = function BgChangerComponent_Factory(t) { return new (t || BgChangerComponent)(); };
BgChangerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BgChangerComponent, selectors: [["app-bg-changer"]], inputs: { imgSrc: "imgSrc" }, decls: 1, vars: 2, consts: [["id", "bg-changer", 1, "bg-cover", "parallax"]], template: function BgChangerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.imgSrc + ")");
    } }, styles: ["#bg-changer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n\theight: 100%;\r\n  position: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n  z-index: -100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJnLWNoYW5nZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWixZQUFZO0VBQ1gsZUFBZTtDQUNoQixNQUFNO0NBQ04sT0FBTztFQUNOLGFBQWE7QUFDZiIsImZpbGUiOiJiZy1jaGFuZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmctY2hhbmdlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuICB6LWluZGV4OiAtMTAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 42029:
/*!***************************************************************!*\
  !*** ./src/app/components/bottom-bar/bottom-bar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomBarComponent": () => (/* binding */ BottomBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);


function BottomBarComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomBarComponent_img_8_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleDarkMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BottomBarComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BottomBarComponent_img_9_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleDarkMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BottomBarComponent {
    constructor() {
        this.darkMode = false;
    }
    ngOnInit() {
        let _darkMode = JSON.parse(localStorage.getItem("darkMode"));
        if (_darkMode) {
            this.darkMode = _darkMode;
        }
        this.setTheme();
    }
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem("darkMode", JSON.stringify(this.darkMode));
        this.setTheme();
    }
    setTheme() {
        let html = document.querySelector("html");
        if (this.darkMode) {
            html.setAttribute("theme", "dark-mode");
        }
        else {
            html.setAttribute("theme", "light-mode");
        }
    }
}
BottomBarComponent.ɵfac = function BottomBarComponent_Factory(t) { return new (t || BottomBarComponent)(); };
BottomBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomBarComponent, selectors: [["app-bottom-bar"]], decls: 17, vars: 2, consts: [[1, "container-fluid"], [1, "bg-lightalpha", "row", "row-cols-1", "row-cols-md-2"], [1, "align-items-center", "bar-height", "col", "d-flex", "justify-content-center", "justify-content-md-start"], ["href", "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x33840024177a7daca3468912363bed8b425015c5&use=V2", "target", "_blank", 1, "scale-on-hover", "btn", "fs-5"], ["src", "assets/img/uniswap.png", 1, "taptarget-height"], ["href", "https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x33840024177a7daca3468912363bed8b425015c5", "target", "_blank", 1, "scale-on-hover", "btn", "fs-5"], ["src", "assets/img/pancakeswap.png", 1, "taptarget-height"], [1, "btn"], ["style", "height: 24px", "src", "assets/img/light-mode.png", 3, "click", 4, "ngIf"], ["style", "height: 24px", "src", "assets/img/dark-mode.png", 3, "click", 4, "ngIf"], [1, "align-items-center", "bar-height", "col", "d-flex", "justify-content-center", "justify-content-md-end"], ["href", "https://www.github.com/ethbox-official", "target", "_blank", 1, "scale-on-hover", "btn", "fs-3"], [1, "bi", "bi-github"], ["href", "https://www.t.me/ethbox_official", "target", "_blank", 1, "scale-on-hover", "btn", "fs-3", "text-info"], [1, "bi", "bi-telegram"], ["href", "https://www.twitter.com/ethbox_official", "target", "_blank", 1, "scale-on-hover", "btn", "fs-3", "text-info"], [1, "bi", "bi-twitter"], ["src", "assets/img/light-mode.png", 2, "height", "24px", 3, "click"], ["src", "assets/img/dark-mode.png", 2, "height", "24px", 3, "click"]], template: function BottomBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BottomBarComponent_img_8_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BottomBarComponent_img_9_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.darkMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3R0b20tYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 11304:
/*!***************************************************************************************!*\
  !*** ./src/app/components/boxes-received-list/box-received/box-received.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxReceivedComponent": () => (/* binding */ BoxReceivedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/contract.service */ 36569);
/* harmony import */ var src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading-indicator.service */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/to-fixed.pipe */ 35893);






function BoxReceivedComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 37);
} }
function BoxReceivedComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 38);
} }
function BoxReceivedComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 39);
} }
function BoxReceivedComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 40);
} }
function BoxReceivedComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 41);
} }
function BoxReceivedComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 42);
} }
function BoxReceivedComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 43);
} }
function BoxReceivedComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.box.requestDecimalValue.length < 7 ? ctx_r7.box.requestDecimalValue : ctx_r7.box.requestDecimalValue.slice(0, 6) + "...", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.box.requestTokenInfo.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r7.box.requestTokenInfo.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BoxReceivedComponent_div_27_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r15.box.addressBookName.slice(0, 17), " ");
} }
function BoxReceivedComponent_div_27_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r17.box.sender.slice(0, 8), "...", ctx_r17.box.sender.slice(-6), " ");
} }
function BoxReceivedComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoxReceivedComponent_div_27_ng_container_1_Template, 2, 1, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoxReceivedComponent_div_27_ng_template_2_Template, 1, 2, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.box.addressBookName)("ngIfElse", _r16);
} }
function BoxReceivedComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BoxReceivedComponent_a_37_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r18.box.addressBookName.slice(0, 11), " ");
} }
function BoxReceivedComponent_a_37_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r20.box.sender.slice(0, 8), "...", ctx_r20.box.sender.slice(-6), " ");
} }
function BoxReceivedComponent_a_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoxReceivedComponent_a_37_span_1_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoxReceivedComponent_a_37_ng_template_2_Template, 1, 2, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r10.contractServ.networkInfo(ctx_r10.contractServ.connection.chainId$.getValue()).accountScannerUrl(ctx_r10.box.sender), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.box.addressBookName)("ngIfElse", _r19);
} }
function BoxReceivedComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Requested ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-white", !ctx_r11.box.taken)("bg-eboxdark", !ctx_r11.box.taken)("bg-completed", ctx_r11.box.taken)("text-muted", ctx_r11.box.taken);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.box.requestDecimalValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 15, ctx_r11.requestTokenBalance == null ? null : ctx_r11.requestTokenBalance.decimalValue, 3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.box.requestTokenInfo == null ? null : ctx_r11.box.requestTokenInfo.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r11.box.requestTokenInfo == null ? null : ctx_r11.box.requestTokenInfo.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r11.contractServ.networkInfo(ctx_r11.contractServ.connection.chainId$.getValue()).accountScannerUrl(ctx_r11.box.requestTokenInfo.address), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r11.box.requestTokenInfo.address.slice(0, 8), "...", ctx_r11.box.requestTokenInfo.address.slice(-6), " ");
} }
function BoxReceivedComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-white", !ctx_r12.box.taken)("bg-eboxdark", !ctx_r12.box.taken)("bg-completed", ctx_r12.box.taken)("text-muted", ctx_r12.box.taken);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r12.message);
} }
function BoxReceivedComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Passphrase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function BoxReceivedComponent_div_57_Template_input_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.onPasswordInput(_r21.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-muted", ctx_r13.isBoxUnlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx_r13.isBoxUnlocked ? "No passphrase needed" : "Insert the passphrase")("disabled", ctx_r13.isBoxUnlocked ? "disabled" : null);
} }
function BoxReceivedComponent_div_58_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxReceivedComponent_div_58_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r26.contractServ.acceptBox(ctx_r26.box, ctx_r26.password); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Accept box ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("btn-eboxpulser", ctx_r24.isBoxUnlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r24.isBoxUnlocked || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx_r24.loadingIndicatorServ.isLoading$) ? "disabled" : null);
} }
function BoxReceivedComponent_div_58_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxReceivedComponent_div_58_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r28.contractServ.acceptBoxWithPrivacy(ctx_r28.box, ctx_r28.password); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Accept privacy box ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("btn-eboxpulser", ctx_r25.isBoxUnlocked);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r25.isBoxUnlocked || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx_r25.loadingIndicatorServ.isLoading$) ? "disabled" : null);
} }
function BoxReceivedComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoxReceivedComponent_div_58_button_1_Template, 3, 5, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoxReceivedComponent_div_58_button_2_Template, 3, 5, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.box.hasPrivacy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.box.hasPrivacy);
} }
class BoxReceivedComponent {
    constructor(contractServ, loadingIndicatorServ) {
        this.contractServ = contractServ;
        this.loadingIndicatorServ = loadingIndicatorServ;
        this.password = '';
        this.isExpanded = false;
        this.message = "Loading...";
    }
    ngOnInit() {
        this.isBoxUnlocked = this.contractServ.isValidPassword(this.box, this.password);
    }
    onBoxToggle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isExpanded = !this.isExpanded;
            // Only updates balances when expanded
            if (this.isExpanded) {
                this.sendTokenBalance = yield this.contractServ
                    .getTokenBalance(this.box.sendTokenInfo.address);
                if (this.box.requestToken) {
                    this.requestTokenBalance = yield this.contractServ
                        .getTokenBalance(this.box.requestTokenInfo.address);
                }
                // Get the message from Pipedream
                let { message } = yield this.contractServ.receiveBoxFromPipedream(this.box);
                this.message = message || "-";
                console.log("Opened box", this.box);
            }
        });
    }
    onPasswordInput(value) {
        this.password = value;
        this.isBoxUnlocked = this.contractServ.isValidPassword(this.box, this.password);
    }
}
BoxReceivedComponent.ɵfac = function BoxReceivedComponent_Factory(t) { return new (t || BoxReceivedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorService)); };
BoxReceivedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BoxReceivedComponent, selectors: [["app-box-received"]], inputs: { box: "box" }, decls: 59, vars: 51, consts: [[1, "box-wrapper", "position-relative"], ["class", "highlight", 4, "ngIf"], [1, "bg-lightalpha", "rounded-alot"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "justify-content-center", "justify-content-md-between", "gap-3", "p-3", "position-relative"], [1, "col-md-4", "d-flex", "flex-column", "flex-md-row", "align-items-center"], ["style", "height: 64px", "src", "assets/img/box-privacy-close.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/box-privacy-open.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/box-close.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/box-open.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/boxes-exchange-close.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/boxes-exchange-open.png", 4, "ngIf"], [1, "ms-md-3", "text-center", "text-md-start"], [1, "fs-4"], [1, "text-muted"], ["data-bs-toggle", "collapse", 1, "stretched-link", "text-reset", "text-decoration-none", 3, "href", "click"], [1, "fs-5", "font-monospace", "flex-grow-1"], [1, "d-flex", "align-items-center", "justify-content-end", "gap-2"], [1, "fw-bold"], [2, "width", "1.5rem", "height", "1.5rem", 3, "src"], ["class", "d-flex align-items-center justify-content-end gap-2", 4, "ngIf"], [1, "col-md-4", "text-center", "text-md-end"], ["class", "fs-4", 4, "ngIf"], [1, "collapse", 3, "id"], [1, "p-3"], [1, "d-grid", "gap-2", "mb-3"], [1, "text-muted", "d-flex", "align-items-end", "justify-content-between", "px-3"], [4, "ngIf"], ["target", "_blank", "class", "text-reset", 3, "href", 4, "ngIf"], [1, "text-end"], [1, "rounded-alot", "position-relative", "p-3"], [1, "lead"], [1, "token-info-wrapper", "rounded-alot", "text-end"], ["target", "_blank", 1, "text-reset", "text-break", 3, "href"], ["class", "rounded-alot position-relative p-3", 3, "text-white", "bg-eboxdark", "bg-completed", "text-muted", 4, "ngIf"], ["class", "p-3 mb-3 rounded-alot", 3, "text-white", "bg-eboxdark", "bg-completed", "text-muted", 4, "ngIf"], ["class", "bg-eboxdark text-white rounded-alot position-relative p-3", 4, "ngIf"], ["class", "text-end", 4, "ngIf"], [1, "highlight"], ["src", "assets/img/box-privacy-close.png", 2, "height", "64px"], ["src", "assets/img/box-privacy-open.png", 2, "height", "64px"], ["src", "assets/img/box-close.png", 2, "height", "64px"], ["src", "assets/img/box-open.png", 2, "height", "64px"], ["src", "assets/img/boxes-exchange-close.png", 2, "height", "64px"], ["src", "assets/img/boxes-exchange-open.png", 2, "height", "64px"], [4, "ngIf", "ngIfElse"], ["address", ""], ["target", "_blank", 1, "text-reset", 3, "href"], [1, "p-3", "mb-3", "rounded-alot"], ["for", "message-textarea", 1, "w-100"], [1, "d-flex", "flex-column", "flex-lg-row", "my-2", "my-lg-0", "gap-2"], ["disabled", "", 1, "input-nostyle", "flex-grow-1", 3, "value"], [1, "bg-eboxdark", "text-white", "rounded-alot", "position-relative", "p-3"], [1, "fs-5"], ["type", "password", 1, "flex-grow-1", "w-100", "input-nostyle", 3, "placeholder", "disabled", "input"], ["passwordInput", ""], ["class", "col-12 col-md-auto btn btn-eboxprimary rounded-alot", 3, "disabled", "btn-eboxpulser", "click", 4, "ngIf"], [1, "col-12", "col-md-auto", "btn", "btn-eboxprimary", "rounded-alot", 3, "disabled", "click"]], template: function BoxReceivedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoxReceivedComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BoxReceivedComponent_img_5_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BoxReceivedComponent_img_6_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BoxReceivedComponent_img_7_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BoxReceivedComponent_img_8_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BoxReceivedComponent_img_9_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, BoxReceivedComponent_img_10_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxReceivedComponent_Template_a_click_15_listener() { return ctx.onBoxToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, BoxReceivedComponent_div_25_Template, 6, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, BoxReceivedComponent_div_27_Template, 4, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " From: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, BoxReceivedComponent_span_36_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, BoxReceivedComponent_a_37_Template, 4, 3, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "small", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Your balance(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Value sent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "toFixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, BoxReceivedComponent_div_55_Template, 15, 18, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BoxReceivedComponent_div_56_Template, 5, 9, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, BoxReceivedComponent_div_57_Template, 6, 4, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, BoxReceivedComponent_div_58_Template, 3, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken && ctx.isBoxUnlocked);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("shadow", !ctx.box.taken)("text-muted", ctx.box.taken)("bg-disabled", ctx.box.taken);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken && ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.taken && ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken && !ctx.box.hasPrivacy && ctx.box.requestValue === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.taken && !ctx.box.hasPrivacy && ctx.box.requestValue === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken && ctx.box.requestValue !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.taken && ctx.box.requestValue !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.box.requestValue !== "0" ? "OTC Trade" : "One-way", " ", ctx.box.hasPrivacy ? "Privacy" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "#box-collapse_" + ctx.box.timestamp, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("bi ", ctx.isExpanded ? "bi-arrows-collapse" : "bi-arrows-expand", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isExpanded ? "Collapse" : "Expand", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.box.sendDecimalValue.length < 7 ? ctx.box.sendDecimalValue : ctx.box.sendDecimalValue.slice(0, 6) + "...", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.box.sendTokenInfo.symbol, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.box.sendTokenInfo.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.requestValue !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.box.readableTimestamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "box-collapse_" + ctx.box.timestamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-white", !ctx.box.taken)("bg-eboxdark", !ctx.box.taken)("bg-completed", ctx.box.taken)("text-muted", ctx.box.taken);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.box.sendDecimalValue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](48, 48, ctx.sendTokenBalance == null ? null : ctx.sendTokenBalance.decimalValue, 3), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.box.sendTokenInfo == null ? null : ctx.box.sendTokenInfo.symbol, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.box.sendTokenInfo == null ? null : ctx.box.sendTokenInfo.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.contractServ.networkInfo(ctx.contractServ.connection.chainId$.getValue()).accountScannerUrl(ctx.box.sendTokenInfo.address), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.box.sendTokenInfo.address.slice(0, 8), "...", ctx.box.sendTokenInfo.address.slice(-6), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.requestValue !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contractServ.isTestnet());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_2__.ToFixedPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["@media screen and (min-width: 768px) {\r\n    .token-info-wrapper[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 50%;\r\n        right: 1rem;\r\n        transform: translateY(-50%);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJveC1yZWNlaXZlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFdBQVc7UUFDWCwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJib3gtcmVjZWl2ZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudG9rZW4taW5mby13cmFwcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 81319:
/*!*********************************************************************************!*\
  !*** ./src/app/components/boxes-received-list/boxes-received-list.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxesReceivedListComponent": () => (/* binding */ BoxesReceivedListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/contract.service */ 36569);
/* harmony import */ var src_app_services_address_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/address-book.service */ 76383);
/* harmony import */ var _bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bg-changer/bg-changer.component */ 46567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _box_received_box_received_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box-received/box-received.component */ 11304);







function BoxesReceivedListComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.message);
} }
function BoxesReceivedListComponent_app_box_received_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-box-received", 29);
} if (rf & 2) {
    const box_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMapInterpolate1"]("--animation-order: ", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("box", box_r5);
} }
class BoxesReceivedListComponent {
    constructor(contractServ, addressBookServ) {
        this.contractServ = contractServ;
        this.addressBookServ = addressBookServ;
        this.paginatedBoxes = null;
        this.paginationText = '0-0 / 0';
        this.order = 'desc';
        this.subscriptions = [];
        this.pageIndex = 0;
        this.pageSize = 15;
    }
    ngOnInit() {
        // Setting up the reactive code to show some messages to the user and eventually load the boxes into the component
        [
            this.contractServ.chainId$,
            this.contractServ.isChainSupported$,
            this.contractServ.selectedAccount$,
            this.contractServ.isAppReady$,
            this.contractServ.boxInteraction$,
            this.contractServ.incomingBoxes$
        ].forEach(obs => this.subscriptions.push(obs.subscribe(() => {
            // Resetting the component
            this.paginatedBoxes = null;
            this.filteredBoxes = null;
            this.fetchedBoxes = null;
            // Updating local variables
            this.chainId = this.contractServ.chainId$.getValue();
            this.isChainSupported = this.contractServ.isChainSupported$.getValue();
            this.selectedAccount = this.contractServ.selectedAccount$.getValue();
            this.isAppReady = this.contractServ.isAppReady$.getValue();
            // Calculating a message for the user
            if (!this.chainId || !this.selectedAccount) {
                this.message = 'Please connect your wallet first!';
                return;
            }
            if (!this.isChainSupported) {
                this.message = 'Wrong network – Please use Ethereum, BSC or Polygon!';
                return;
            }
            if (!this.isAppReady) {
                this.message = 'Initializing ethbox smart contract...';
                return;
            }
            this.message = 'Loading...';
            // Get boxes and the address book
            let boxes = this.contractServ.incomingBoxes$.getValue();
            this.addressBookMap = this.addressBookServ.getAddressesMap();
            if (!boxes) {
                return;
            }
            if (boxes.length === 0) {
                this.message = 'No incoming transactions!';
                return;
            }
            this.fetchedBoxes = boxes
                .map(box => (Object.assign({ addressBookName: this.addressBookMap[box.sender] }, box)));
            this.filterBoxes();
        })));
    }
    ngOnDestroy() {
        // When the component gets destroyed unsubscribe from everything to prevent memory leaks
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    onPaginationPreviousClick() {
        if (this.pageIndex < 1) {
            return;
        }
        this.pageIndex--;
        this.updatePagination();
    }
    onPaginationNextClick() {
        if (this.pageIndex * this.pageSize + this.pageSize > this.filteredBoxes.length - 1) {
            return;
        }
        this.pageIndex++;
        this.updatePagination();
    }
    updatePagination() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let start = this.pageIndex * this.pageSize, end = this.pageIndex * this.pageSize + this.pageSize;
            if (end > this.filteredBoxes.length) {
                end = this.filteredBoxes.length;
            }
            this.paginationText = `${start + 1}-${end} / ${this.filteredBoxes.length}`;
            let boxesInView = this.filteredBoxes.slice(start, end);
            // Remove "Loading..." message
            this.message = null;
            this.paginatedBoxes = boxesInView;
        });
    }
    filterBoxes() {
        if (!this.fetchedBoxes) {
            return;
        }
        // Should I move the predicates below into contract.service.ts?
        this.filteredBoxes = this.fetchedBoxes
            .filter(box => {
            let isTaken = box.taken && box.taken == true;
            switch (this.state) {
                case "pending":
                    return !isTaken;
                case "completed":
                    return isTaken;
                default:
                    return true;
            }
        })
            .filter(box => {
            let isExchange = box.requestValue && box.requestValue != "0";
            let isWithdraw = !box.requestValue || box.requestValue == "0";
            switch (this.type) {
                case "withdraw":
                    return isWithdraw;
                case "exchange":
                    return isExchange;
                default:
                    return true;
            }
        });
        if (this.order) {
            this.filteredBoxes.sort((a, b) => this.order == 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp);
        }
        this.pageIndex = 0;
        this.updatePagination();
    }
    // This piece of code tells Angular how to track boxes efficiently
    // when and where to touch the DOM
    boxId(index, box) {
        return `${box.sender}-${box.recipient}-${box.taken}-${box.timestamp}`;
    }
}
BoxesReceivedListComponent.ɵfac = function BoxesReceivedListComponent_Factory(t) { return new (t || BoxesReceivedListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_address_book_service__WEBPACK_IMPORTED_MODULE_1__.AddressBookService)); };
BoxesReceivedListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BoxesReceivedListComponent, selectors: [["app-boxes-received-list"]], decls: 48, vars: 8, consts: [[3, "imgSrc"], [1, "main", "py-5", "px-3"], [1, "container-medium", "text-center", "mb-5"], [1, "lead"], [1, "container-medium", "mb-5"], [1, "row", "row-cols-1", "row-cols-md-auto", "g-2"], [1, "col"], [1, "bg-lightalpha", "form-select", "rounded-alot", 3, "disabled", "input"], ["stateInput", ""], ["value", "", "selected", ""], ["value", "pending"], ["value", "completed"], ["typeInput", ""], ["value", "withdraw"], ["value", "exchange"], [1, "col", "me-auto"], ["orderInput", ""], ["value", "desc", "selected", ""], ["value", "asc"], [1, "pagination", "mb-0", "justify-content-center", "rounded-alot"], [1, "page-item"], ["href", "#", 1, "bg-light", "page-link", "rounded-alot-start", 3, "click"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", 1, "bg-lightalpha", "page-link"], ["href", "#", 1, "bg-light", "rounded-alot-end", "page-link", 3, "click"], ["class", "container-medium text-center", 4, "ngIf"], [1, "container-medium", "d-grid", "gap-2"], ["class", "box", 3, "box", "style", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "container-medium", "text-center"], [1, "box", 3, "box"]], template: function BoxesReceivedListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-bg-changer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Incoming Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " All the boxes sent to you by others are listed here, and can easily be searched and filtered to only show open or completed transactions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BoxesReceivedListComponent_Template_select_input_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); ctx.state = _r0.value; return ctx.filterBoxes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Open / completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "select", 7, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BoxesReceivedListComponent_Template_select_input_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20); ctx.type = _r1.value; return ctx.filterBoxes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "One-way");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "OTC Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "select", 7, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BoxesReceivedListComponent_Template_select_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29); ctx.order = _r2.value; return ctx.filterBoxes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Date: descending");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Date: ascending");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BoxesReceivedListComponent_Template_a_click_37_listener($event) { $event.preventDefault(); return ctx.onPaginationPreviousClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BoxesReceivedListComponent_Template_a_click_43_listener($event) { $event.preventDefault(); return ctx.onPaginationNextClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, BoxesReceivedListComponent_div_45_Template, 3, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, BoxesReceivedListComponent_app_box_received_47_Template, 1, 4, "app-box-received", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("imgSrc", "assets/img/receive.jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isAppReady ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isAppReady ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isAppReady ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.paginationText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.paginatedBoxes)("ngForTrackBy", ctx.boxId);
    } }, directives: [_bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_2__.BgChangerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _box_received_box_received_component__WEBPACK_IMPORTED_MODULE_3__.BoxReceivedComponent], styles: [".box[_ngcontent-%COMP%] {\r\n    animation-name: fade-in-from-left;\r\n    animation-duration: 350ms;\r\n    animation-delay: calc(var(--animation-order) * 100ms);\r\n    animation-fill-mode: both;\r\n    animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes fade-in-from-left {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(0.6) translateY(-8px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJveGVzLXJlY2VpdmVkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIscURBQXFEO0lBQ3JELHlCQUF5QjtJQUN6QixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixzQ0FBc0M7SUFDMUM7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImJveGVzLXJlY2VpdmVkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGUtaW4tZnJvbS1sZWZ0O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNTBtcztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRpb24tb3JkZXIpICogMTAwbXMpO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4tZnJvbS1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 41582:
/*!***************************************************************************!*\
  !*** ./src/app/components/boxes-sent-list/box-sent/box-sent.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxSentComponent": () => (/* binding */ BoxSentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/contract.service */ 36569);
/* harmony import */ var src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/loading-indicator.service */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/to-fixed.pipe */ 35893);






function BoxSentComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 35);
} }
function BoxSentComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 36);
} }
function BoxSentComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 37);
} }
function BoxSentComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 38);
} }
function BoxSentComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 39);
} }
function BoxSentComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 40);
} }
function BoxSentComponent_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r6.box.sendTokenInfo.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BoxSentComponent_div_24_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r15.box.requestTokenInfo.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BoxSentComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BoxSentComponent_div_24_img_5_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.box.requestDecimalValue.length < 7 ? ctx_r7.box.requestDecimalValue : ctx_r7.box.requestDecimalValue.slice(0, 6) + "...", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.box.requestTokenInfo.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.box.requestTokenInfo.thumb);
} }
function BoxSentComponent_div_26_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r16.box.addressBookName.slice(0, 17), " ");
} }
function BoxSentComponent_div_26_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r18.box.recipient.slice(0, 8), "...", ctx_r18.box.recipient.slice(-6), " ");
} }
function BoxSentComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoxSentComponent_div_26_ng_container_1_Template, 2, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoxSentComponent_div_26_ng_template_2_Template, 1, 2, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.box.addressBookName)("ngIfElse", _r17);
} }
function BoxSentComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Private");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BoxSentComponent_a_36_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r19.box.addressBookName.slice(0, 11), " ");
} }
function BoxSentComponent_a_36_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r21.box.recipient.slice(0, 8), "...", ctx_r21.box.recipient.slice(-6), " ");
} }
function BoxSentComponent_a_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoxSentComponent_a_36_span_1_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoxSentComponent_a_36_ng_template_2_Template, 1, 2, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r10.contractServ.networkInfo(ctx_r10.contractServ.connection.chainId$.getValue()).accountScannerUrl(ctx_r10.box.recipient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.box.addressBookName)("ngIfElse", _r20);
} }
function BoxSentComponent_img_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r11.box.sendTokenInfo.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BoxSentComponent_div_54_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r22.box.requestTokenInfo.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BoxSentComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Requested ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, BoxSentComponent_div_54_img_11_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-white", !ctx_r12.box.taken)("bg-eboxdark", !ctx_r12.box.taken)("bg-completed", ctx_r12.box.taken)("text-muted", ctx_r12.box.taken);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12.box.requestDecimalValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 15, ctx_r12.requestTokenBalance == null ? null : ctx_r12.requestTokenBalance.decimalValue, 3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12.box.requestTokenInfo == null ? null : ctx_r12.box.requestTokenInfo.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.box.requestTokenInfo.thumb);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r12.contractServ.networkInfo(ctx_r12.contractServ.connection.chainId$.getValue()).accountScannerUrl(ctx_r12.box.requestTokenInfo.address), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r12.box.requestTokenInfo.address.slice(0, 8), "...", ctx_r12.box.requestTokenInfo.address.slice(-6), " ");
} }
function BoxSentComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "textarea", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-white", !ctx_r13.box.taken)("bg-eboxdark", !ctx_r13.box.taken)("bg-completed", ctx_r13.box.taken)("text-muted", ctx_r13.box.taken);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r13.message);
} }
function BoxSentComponent_div_56_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxSentComponent_div_56_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.contractServ.cancelBox(ctx_r25.box.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Cancel box ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r23.loadingIndicatorServ.isLoading$) ? "disabled" : null);
} }
function BoxSentComponent_div_56_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxSentComponent_div_56_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r27.contractServ.cancelBoxWithPrivacy(ctx_r27.box.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Cancel privacy box ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r24.loadingIndicatorServ.isLoading$) ? "disabled" : null);
} }
function BoxSentComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BoxSentComponent_div_56_button_1_Template, 3, 3, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BoxSentComponent_div_56_button_2_Template, 3, 3, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.box.hasPrivacy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.box.hasPrivacy);
} }
class BoxSentComponent {
    constructor(contractServ, loadingIndicatorServ) {
        this.contractServ = contractServ;
        this.loadingIndicatorServ = loadingIndicatorServ;
        this.isExpanded = false;
        this.message = "Loading...";
    }
    onBoxToggle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.isExpanded = !this.isExpanded;
            // Only updates balances when expanded
            if (this.isExpanded) {
                this.sendTokenBalance = yield this.contractServ
                    .getTokenBalance(this.box.sendTokenInfo.address);
                if (this.box.requestToken) {
                    this.requestTokenBalance = yield this.contractServ
                        .getTokenBalance(this.box.requestTokenInfo.address);
                }
                // Get the message from Pipedream
                let { message } = yield this.contractServ.receiveBoxFromPipedream(this.box);
                this.message = message || "-";
                console.log("Opened box", this.box);
            }
        });
    }
}
BoxSentComponent.ɵfac = function BoxSentComponent_Factory(t) { return new (t || BoxSentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorService)); };
BoxSentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BoxSentComponent, selectors: [["app-box-sent"]], inputs: { box: "box" }, decls: 57, vars: 49, consts: [[1, "box-wrapper", "position-relative"], [1, "bg-lightalpha", "rounded-alot"], [1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "justify-content-center", "justify-content-md-between", "gap-3", "p-3", "position-relative"], [1, "col-md-4", "d-flex", "flex-column", "flex-md-row", "align-items-center"], ["style", "height: 64px", "src", "assets/img/box-privacy-close.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/box-privacy-open.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/box-close.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/box-open.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/boxes-exchange-close.png", 4, "ngIf"], ["style", "height: 64px", "src", "assets/img/boxes-exchange-open.png", 4, "ngIf"], [1, "ms-md-3", "text-center", "text-md-start"], [1, "fs-4"], [1, "text-muted"], ["data-bs-toggle", "collapse", 1, "stretched-link", "text-reset", "text-decoration-none", 3, "href", "click"], [1, "fs-5", "font-monospace", "flex-grow-1"], [1, "d-flex", "align-items-center", "justify-content-end", "gap-2"], [1, "fw-bold"], ["style", "width: 1.5rem; height: 1.5rem", 3, "src", 4, "ngIf"], ["class", "d-flex align-items-center justify-content-end gap-2", 4, "ngIf"], [1, "col-md-4", "text-center", "text-md-end"], ["class", "fs-4", 4, "ngIf"], [1, "collapse", 3, "id"], [1, "p-3"], [1, "d-grid", "gap-2", "mb-3"], [1, "text-muted", "d-flex", "align-items-end", "justify-content-between", "px-3"], [4, "ngIf"], ["target", "_blank", "class", "text-reset", 3, "href", 4, "ngIf"], [1, "text-end"], [1, "rounded-alot", "position-relative", "p-3"], [1, "lead"], [1, "token-info-wrapper", "rounded-alot", "text-end"], ["target", "_blank", 1, "text-reset", "text-break", 3, "href"], ["class", "rounded-alot position-relative p-3", 3, "text-white", "bg-eboxdark", "bg-completed", "text-muted", 4, "ngIf"], ["class", "p-3 mb-3 rounded-alot", 3, "text-white", "bg-eboxdark", "bg-completed", "text-muted", 4, "ngIf"], ["class", "text-end", 4, "ngIf"], ["src", "assets/img/box-privacy-close.png", 2, "height", "64px"], ["src", "assets/img/box-privacy-open.png", 2, "height", "64px"], ["src", "assets/img/box-close.png", 2, "height", "64px"], ["src", "assets/img/box-open.png", 2, "height", "64px"], ["src", "assets/img/boxes-exchange-close.png", 2, "height", "64px"], ["src", "assets/img/boxes-exchange-open.png", 2, "height", "64px"], [2, "width", "1.5rem", "height", "1.5rem", 3, "src"], [4, "ngIf", "ngIfElse"], ["address", ""], ["target", "_blank", 1, "text-reset", 3, "href"], [1, "p-3", "mb-3", "rounded-alot"], ["for", "message-textarea", 1, "w-100"], [1, "d-flex", "flex-column", "flex-lg-row", "my-2", "my-lg-0", "gap-2"], ["disabled", "", 1, "input-nostyle", "flex-grow-1", 3, "value"], ["class", "col-12 col-md-auto btn btn-outline-eboxprimary rounded-alot", 3, "disabled", "click", 4, "ngIf"], [1, "col-12", "col-md-auto", "btn", "btn-outline-eboxprimary", "rounded-alot", 3, "disabled", "click"]], template: function BoxSentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, BoxSentComponent_img_4_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BoxSentComponent_img_5_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BoxSentComponent_img_6_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BoxSentComponent_img_7_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, BoxSentComponent_img_8_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BoxSentComponent_img_9_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BoxSentComponent_Template_a_click_14_listener() { return ctx.onBoxToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, BoxSentComponent_img_23_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, BoxSentComponent_div_24_Template, 6, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, BoxSentComponent_div_26_Template, 4, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " To: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, BoxSentComponent_span_35_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, BoxSentComponent_a_36_Template, 4, 3, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "small", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Your balance(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Value sent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "toFixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, BoxSentComponent_img_50_Template, 1, 1, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, BoxSentComponent_div_54_Template, 15, 18, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, BoxSentComponent_div_55_Template, 5, 9, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, BoxSentComponent_div_56_Template, 3, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("shadow", !ctx.box.taken)("text-muted", ctx.box.taken)("bg-disabled", ctx.box.taken);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken && ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.taken && ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken && !ctx.box.hasPrivacy && ctx.box.requestValue === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.taken && !ctx.box.hasPrivacy && ctx.box.requestValue === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken && ctx.box.requestValue !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.taken && ctx.box.requestValue !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.box.requestValue !== "0" ? "OTC Trade" : "One-way", " ", ctx.box.hasPrivacy ? "Privacy" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", "#box-collapse_" + ctx.box.timestamp, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("bi ", ctx.isExpanded ? "bi-arrows-collapse" : "bi-arrows-expand", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isExpanded ? "Collapse" : "Expand", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.box.sendDecimalValue.length < 7 ? ctx.box.sendDecimalValue : ctx.box.sendDecimalValue.slice(0, 6) + "...", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.box.sendTokenInfo.symbol, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.sendTokenInfo.thumb);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.requestValue !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.box.readableTimestamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", "box-collapse_" + ctx.box.timestamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.hasPrivacy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-white", !ctx.box.taken)("bg-eboxdark", !ctx.box.taken)("bg-completed", ctx.box.taken)("text-muted", ctx.box.taken);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.box.sendDecimalValue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](47, 46, ctx.sendTokenBalance == null ? null : ctx.sendTokenBalance.decimalValue, 3), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.box.sendTokenInfo == null ? null : ctx.box.sendTokenInfo.symbol, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.sendTokenInfo.thumb);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.contractServ.networkInfo(ctx.contractServ.connection.chainId$.getValue()).accountScannerUrl(ctx.box.sendTokenInfo.address), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.box.sendTokenInfo.address.slice(0, 8), "...", ctx.box.sendTokenInfo.address.slice(-6), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.box.requestValue !== "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.contractServ.isTestnet());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.box.taken);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_2__.ToFixedPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["@media screen and (min-width: 768px) {\r\n    .token-info-wrapper[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 50%;\r\n        right: 1rem;\r\n        transform: translateY(-50%);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJveC1zZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsV0FBVztRQUNYLDJCQUEyQjtJQUMvQjtBQUNKIiwiZmlsZSI6ImJveC1zZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRva2VuLWluZm8td3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 74237:
/*!*************************************************************************!*\
  !*** ./src/app/components/boxes-sent-list/boxes-sent-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoxesSentListComponent": () => (/* binding */ BoxesSentListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/contract.service */ 36569);
/* harmony import */ var src_app_services_address_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/address-book.service */ 76383);
/* harmony import */ var _bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bg-changer/bg-changer.component */ 46567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _box_sent_box_sent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box-sent/box-sent.component */ 41582);







function BoxesSentListComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.message);
} }
function BoxesSentListComponent_app_box_sent_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-box-sent", 29);
} if (rf & 2) {
    const box_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMapInterpolate1"]("--animation-order: ", i_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("box", box_r5);
} }
class BoxesSentListComponent {
    constructor(contractServ, addressBookServ) {
        this.contractServ = contractServ;
        this.addressBookServ = addressBookServ;
        this.paginatedBoxes = null;
        this.paginationText = '0-0 / 0';
        this.order = 'desc';
        this.subscriptions = [];
        this.pageIndex = 0;
        this.pageSize = 15;
    }
    ngOnInit() {
        // Setting up the reactive code to show some messages to the user and eventually load the boxes into the component
        [
            this.contractServ.chainId$,
            this.contractServ.isChainSupported$,
            this.contractServ.selectedAccount$,
            this.contractServ.isAppReady$,
            this.contractServ.boxInteraction$,
            this.contractServ.outgoingBoxes$
        ].forEach(obs => this.subscriptions.push(obs.subscribe(() => {
            // Resetting the component
            this.paginatedBoxes = null;
            this.filteredBoxes = null;
            this.fetchedBoxes = null;
            // Updating local variables
            this.chainId = this.contractServ.chainId$.getValue();
            this.isChainSupported = this.contractServ.isChainSupported$.getValue();
            this.selectedAccount = this.contractServ.selectedAccount$.getValue();
            this.isAppReady = this.contractServ.isAppReady$.getValue();
            // Calculating a message for the user
            if (!this.chainId || !this.selectedAccount) {
                this.message = 'Please connect your wallet first!';
                return;
            }
            if (!this.isChainSupported) {
                this.message = 'Wrong network – Please use Ethereum, BSC or Polygon!';
                return;
            }
            if (!this.isAppReady) {
                this.message = 'Initializing ethbox smart contract...';
                return;
            }
            this.message = 'Loading...';
            // Get boxes and the address book
            let boxes = this.contractServ.outgoingBoxes$.getValue();
            this.addressBookMap = this.addressBookServ.getAddressesMap();
            if (!boxes) {
                return;
            }
            if (boxes.length === 0) {
                this.message = 'No incoming transactions!';
                return;
            }
            this.fetchedBoxes = boxes
                .map(box => (Object.assign({ addressBookName: this.addressBookMap[box.recipient] }, box)));
            this.filterBoxes();
        })));
    }
    ngOnDestroy() {
        // When the component gets destroyed unsubscribe from everything to prevent memory leaks
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    onPaginationPreviousClick() {
        if (this.pageIndex < 1) {
            return;
        }
        this.pageIndex--;
        this.updatePagination();
    }
    onPaginationNextClick() {
        if (this.pageIndex * this.pageSize + this.pageSize > this.filteredBoxes.length - 1) {
            return;
        }
        this.pageIndex++;
        this.updatePagination();
    }
    updatePagination() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let start = this.pageIndex * this.pageSize, end = this.pageIndex * this.pageSize + this.pageSize;
            if (end > this.filteredBoxes.length) {
                end = this.filteredBoxes.length;
            }
            this.paginationText = `${start + 1}-${end} / ${this.filteredBoxes.length}`;
            let boxesInView = this.filteredBoxes.slice(start, end);
            // Remove "Loading..." message
            this.message = null;
            this.paginatedBoxes = boxesInView;
        });
    }
    filterBoxes() {
        if (!this.fetchedBoxes) {
            return;
        }
        // Should I move the predicates below into contract.service.ts?
        this.filteredBoxes = this.fetchedBoxes
            .filter(box => {
            let isTaken = box.taken && box.taken == true;
            switch (this.state) {
                case "pending":
                    return !isTaken;
                case "completed":
                    return isTaken;
                default:
                    return true;
            }
        })
            .filter(box => {
            let isExchange = box.requestValue && box.requestValue != "0";
            let isWithdraw = !box.requestValue || box.requestValue == "0";
            switch (this.type) {
                case "withdraw":
                    return isWithdraw;
                case "exchange":
                    return isExchange;
                default:
                    return true;
            }
        });
        if (this.order) {
            this.filteredBoxes.sort((a, b) => this.order == 'asc' ? a.timestamp - b.timestamp : b.timestamp - a.timestamp);
        }
        this.pageIndex = 0;
        this.updatePagination();
    }
    // This piece of code tells Angular how to track boxes efficiently
    // when and where to touch the DOM
    boxId(index, box) {
        return `${box.sender}-${box.recipient}-${box.taken}-${box.timestamp}`;
    }
}
BoxesSentListComponent.ɵfac = function BoxesSentListComponent_Factory(t) { return new (t || BoxesSentListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_address_book_service__WEBPACK_IMPORTED_MODULE_1__.AddressBookService)); };
BoxesSentListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BoxesSentListComponent, selectors: [["app-boxes-sent-list"]], decls: 48, vars: 8, consts: [[3, "imgSrc"], [1, "main", "py-5", "px-3"], [1, "container-medium", "text-center", "mb-5"], [1, "lead"], [1, "container-medium", "mb-5"], [1, "row", "row-cols-1", "row-cols-md-auto", "g-2"], [1, "col"], [1, "bg-lightalpha", "form-select", "rounded-alot", 3, "disabled", "input"], ["stateInput", ""], ["value", "", "selected", ""], ["value", "pending"], ["value", "completed"], ["typeInput", ""], ["value", "withdraw"], ["value", "exchange"], [1, "col", "me-auto"], ["orderInput", ""], ["value", "desc", "selected", ""], ["value", "asc"], [1, "pagination", "mb-0", "justify-content-center", "rounded-alot"], [1, "page-item"], ["href", "#", 1, "bg-light", "page-link", "rounded-alot-start", 3, "click"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", 1, "bg-lightalpha", "page-link"], ["href", "#", 1, "bg-light", "rounded-alot-end", "page-link", 3, "click"], ["class", "container-medium text-center", 4, "ngIf"], [1, "container-medium", "d-grid", "gap-2"], ["class", "box", 3, "box", "style", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "container-medium", "text-center"], [1, "box", 3, "box"]], template: function BoxesSentListComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-bg-changer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Outgoing Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " All the boxes sent to you by others are listed here, and can easily be searched and filtered to only show open or completed transactions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BoxesSentListComponent_Template_select_input_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11); ctx.state = _r0.value; return ctx.filterBoxes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Open / completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "select", 7, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BoxesSentListComponent_Template_select_input_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20); ctx.type = _r1.value; return ctx.filterBoxes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "One-way");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "OTC Trade");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "select", 7, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function BoxesSentListComponent_Template_select_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](29); ctx.order = _r2.value; return ctx.filterBoxes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Date: descending");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Date: ascending");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BoxesSentListComponent_Template_a_click_37_listener($event) { $event.preventDefault(); return ctx.onPaginationPreviousClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BoxesSentListComponent_Template_a_click_43_listener($event) { $event.preventDefault(); return ctx.onPaginationNextClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, BoxesSentListComponent_div_45_Template, 3, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, BoxesSentListComponent_app_box_sent_47_Template, 1, 4, "app-box-sent", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("imgSrc", "assets/img/history.jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isAppReady ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isAppReady ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.isAppReady ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.paginationText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.paginatedBoxes)("ngForTrackBy", ctx.boxId);
    } }, directives: [_bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_2__.BgChangerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _box_sent_box_sent_component__WEBPACK_IMPORTED_MODULE_3__.BoxSentComponent], styles: [".box[_ngcontent-%COMP%] {\r\n    animation-name: fade-in-from-left;\r\n    animation-duration: 350ms;\r\n    animation-delay: calc(var(--animation-order) * 100ms);\r\n    animation-fill-mode: both;\r\n    animation-timing-function: ease-in-out;\r\n}\r\n\r\n@keyframes fade-in-from-left {\r\n    0% {\r\n        opacity: 0;\r\n        transform: scale(0.6) translateY(-8px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJveGVzLXNlbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixxREFBcUQ7SUFDckQseUJBQXlCO0lBQ3pCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLHNDQUFzQztJQUMxQztJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoiYm94ZXMtc2VudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluLWZyb20tbGVmdDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMzUwbXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tYW5pbWF0aW9uLW9yZGVyKSAqIDEwMG1zKTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlLWluLWZyb20tbGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSgtOHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 50509:
/*!*****************************************************************!*\
  !*** ./src/app/components/coming-soon/coming-soon.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingSoonComponent": () => (/* binding */ ComingSoonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bg-changer/bg-changer.component */ 46567);


class ComingSoonComponent {
    constructor() { }
}
ComingSoonComponent.ɵfac = function ComingSoonComponent_Factory(t) { return new (t || ComingSoonComponent)(); };
ComingSoonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 5, vars: 1, consts: [[3, "imgSrc"], [1, "centerer", "main"], [1, "text-center"], [1, "display-1"]], template: function ComingSoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-bg-changer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Coming soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imgSrc", "assets/img/bg-blob-seashore.jpg");
    } }, directives: [_bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_0__.BgChangerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21pbmctc29vbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 70607:
/*!************************************************************************************!*\
  !*** ./src/app/components/governance/governance-area/governance-area.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GovernanceAreaComponent": () => (/* binding */ GovernanceAreaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _governance_proposal_governance_proposal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../governance-proposal/governance-proposal.component */ 85558);



function GovernanceAreaComponent_div_8_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " (Finished) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function GovernanceAreaComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GovernanceAreaComponent_div_8_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const proposal_r1 = restoredCtx.$implicit; return proposal_r1._isCollapsed = !proposal_r1._isCollapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GovernanceAreaComponent_div_8_small_8_Template, 2, 0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GovernanceAreaComponent_div_8_Template_a_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const proposal_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.injectEligibleUsers(proposal_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Eligible voters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-governance-proposal", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proposal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Voting #", proposal_r1.n, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "#collapse_", proposal_r1._id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bi-arrows-expand", proposal_r1._isCollapsed)("bi-arrows-collapse", !proposal_r1._isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", proposal_r1.hasExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", proposal_r1.answers.length, " Options");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](proposal_r1.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", !proposal_r1.hasExpired);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "collapse_" + proposal_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("proposal", proposal_r1);
} }
class GovernanceAreaComponent {
    constructor() { }
    ngOnInit() {
    }
    injectEligibleUsers(proposal) {
        console.log(proposal);
        let lengthLabel = document.querySelector("#numberOfEligibleUsers");
        let eligibleUsersList = document.querySelector("#eligibleUsersList");
        lengthLabel.innerText = (proposal.eligibleUsers || { length: 0 }).length;
        eligibleUsersList.innerHTML = "";
        proposal.eligibleUsers.forEach(voter => {
            let voterWrapper = document.createElement("DIV");
            voterWrapper.innerHTML = `<div class="bg-eboxdark text-white p-3 rounded-alot mb-3">
    <div class="mb-2">
        <div class="fs-5 fw-bold mb-1">Address</div>
        <div class="text-truncate font-monospace">
            <a href="https://etherscan.io/address/${voter.address}" target="_blank" class="text-reset">
                ${voter.address}
            </a>
        </div>
    </div>
    <div class="bg-white mx-auto p-3 rounded-alot text-center">
        <div class="text-eboxprimary">
        <div>
            <div class="fs-5 fw-bold mb-1">Voting power</div>
            <div class="display-6 fw-bold">
                ${Number(voter.voting_power).toFixed(0)}
            </div>
        </div>
        </div>
    </div>
</div>`;
            eligibleUsersList.appendChild(voterWrapper.firstElementChild);
        });
    }
}
GovernanceAreaComponent.ɵfac = function GovernanceAreaComponent_Factory(t) { return new (t || GovernanceAreaComponent)(); };
GovernanceAreaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GovernanceAreaComponent, selectors: [["app-governance-area"]], inputs: { title: "title", proposals: "proposals" }, decls: 9, vars: 3, consts: [[1, "bg-white", "rounded-alot", "shadow"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "p-3", "position-relative"], [1, "fs-2", "text-eboxprimary"], [1, "me-2"], [1, "d-grid", "gap-2", "p-3", "pt-0"], ["class", "bg-eboxdark text-white rounded-alot p-3", 4, "ngFor", "ngForOf"], [1, "bg-eboxdark", "text-white", "rounded-alot", "p-3"], [1, "position-relative", 3, "click"], [1, "d-flex", "flex-wrap", "align-items-center", "justify-content-between", "gap-2", "mb-2"], [1, "fs-5", "fw-bold"], ["data-bs-toggle", "collapse", 1, "stretched-link", "text-reset", "text-decoration-none", "me-2", 3, "href"], [1, "bi"], [4, "ngIf"], [1, "collapse", 3, "id"], [1, "text-center", "mt-3", "mb-2"], ["href", "#eligibleUsersModal", "data-bs-toggle", "modal", 1, "text-reset", 3, "click"], [3, "proposal"]], template: function GovernanceAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GovernanceAreaComponent_div_8_Template, 18, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.proposals.length, " Votings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.proposals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _governance_proposal_governance_proposal_component__WEBPACK_IMPORTED_MODULE_0__.GovernanceProposalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb3Zlcm5hbmNlLWFyZWEuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 85558:
/*!********************************************************************************************!*\
  !*** ./src/app/components/governance/governance-proposal/governance-proposal.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GovernanceProposalComponent": () => (/* binding */ GovernanceProposalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/contract.service */ 36569);
/* harmony import */ var src_app_services_governance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/governance.service */ 81747);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/to-fixed.pipe */ 35893);






function GovernanceProposalComponent_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMapInterpolate1"]("width: ", 100 * ctx_r3.proposal.votes.votes[i_r2].answer / ctx_r3.proposal.votes.sum, "%; height: 1rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 4, 100 * ctx_r3.proposal.votes.votes[i_r2].answer / ctx_r3.proposal.votes.sum, 2), "% ");
} }
function GovernanceProposalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function GovernanceProposalComponent_div_13_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.selectedChoice = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, GovernanceProposalComponent_div_13_div_5_Template, 5, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.alphabet[i_r2], ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.proposalId + "-input-" + i_r2)("name", ctx_r0.proposalId + "_answers")("value", i_r2 + 1)("disabled", ctx_r0.isButtonDisabled ? "disabled" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", ctx_r0.proposalId + "-input-" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", answer_r1.answer, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.proposal.votes == null ? null : ctx_r0.proposal.votes.votes);
} }
class GovernanceProposalComponent {
    constructor(contractServ, governanceServ) {
        this.contractServ = contractServ;
        this.governanceServ = governanceServ;
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
        this.proposalId = `proposal_${Math.random().toString(36).substring(2)}`;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.startDatetime = new Date(this.proposal.time_start * 1e3).toUTCString().replace("GMT", "UTC");
        this.endDatetime = new Date(this.proposal.time_end * 1e3).toUTCString().replace("GMT", "UTC");
        [
            this.contractServ.chainId$,
            this.contractServ.isEthereumMainnet$,
            this.contractServ.selectedAccount$
        ].forEach(obs => obs.subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // Updating local variables
            this.chainId = this.contractServ.chainId$.getValue();
            this.isEthereumMainnet = true; //this.contractServ.isEthereumMainnet$.getValue();
            this.selectedAccount = this.contractServ.selectedAccount$.getValue();
            // Calculating a message for the user
            if (!this.chainId || !this.selectedAccount) {
                this.buttonMessage = 'Please connect your wallet first!';
                this.buttonFunction = () => this.contractServ.connect();
                this.isButtonDisabled = false;
                return;
            }
            if (!this.isEthereumMainnet) {
                this.buttonMessage = 'Wrong network – Please use the Ethereum Mainnet!';
                this.isButtonDisabled = true;
                return;
            }
            // Checking if the proposal has expired
            if (this.proposal.hasExpired) {
                this.buttonMessage = 'Voting has finished!';
                this.isButtonDisabled = true;
                return;
            }
            // Setting and checking if user is eligible
            this.proposal.isEligible = yield this.governanceServ.isEligible({
                votingNumber: this.proposal.n,
                area: this.proposal.area
            });
            if (!this.proposal.isEligible) {
                this.buttonMessage = 'Not eligible';
                this.isButtonDisabled = true;
                return;
            }
            // Setting and checking if user has already voted
            this.proposal.hasVoted = yield this.governanceServ.hasVoted({
                votingNumber: this.proposal.n,
                area: this.proposal.area
            });
            if (this.proposal.hasVoted) {
                this.buttonMessage = 'Already voted';
                this.isButtonDisabled = true;
                return;
            }
            // If the voting hasn't started disable the button along with a meaningful message
            if (this.proposal.time_start * 1e3 > Date.now()) {
                this.buttonMessage = "Voting hasn't started yet";
                this.isButtonDisabled = true;
                return;
            }
            // All checks are passed
            this.buttonMessage = 'Vote';
            this.buttonFunction = () => this.governanceServ.vote(this.proposal, this.selectedChoice);
            this.isButtonDisabled = false;
        })));
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    injectVoters(proposal) {
        console.log(proposal);
        let lengthLabel = document.querySelector("#numberOfVoters");
        let votersList = document.querySelector("#votersList");
        lengthLabel.innerText = (proposal.votersDetail || { length: 0 }).length;
        votersList.innerHTML = "";
        proposal.votersDetail.forEach(voter => {
            let voterWrapper = document.createElement("DIV");
            voterWrapper.innerHTML = `<li class="bg-eboxdark text-white p-3 rounded-alot mb-3">
    <div class="text-end mb-2">${new Date(voter.time * 1e3).toLocaleDateString()}</div>
    <div class="mb-2">
        <div class="fs-5 fw-bold mb-1">Address</div>
        <div class="text-truncate font-monospace">
            <a href="https://etherscan.io/address/${voter.address}" target="_blank" class="text-reset">
                ${voter.address}
            </a>
        </div>
    </div>
    <div class="mb-3">
        <div class="fs-5 fw-bold mb-1">Signed message</div>
        <div class="text-truncate font-monospace">
            ${voter.signed_msg}
        </div>
    </div>
    <div class="bg-white mx-auto p-3 rounded-alot text-center">
        <div class="text-eboxprimary">
        <div class="mb-2">
            <div class="fs-5 fw-bold mb-1">Voted for</div>
            <div class="display-6 fw-bold">${"abcdefghijklmnopqrstuvwxyz"[voter.vote - 1]}</div>
        </div>
        <div>
            <div class="fs-5 fw-bold mb-1">Voting power</div>
            <div class="display-6 fw-bold">
                ${Number(voter.voting_power).toFixed(0)}
            </div>
        </div>
        </div>
    </div>
</li>`;
            votersList.appendChild(voterWrapper.firstElementChild);
        });
    }
}
GovernanceProposalComponent.ɵfac = function GovernanceProposalComponent_Factory(t) { return new (t || GovernanceProposalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_governance_service__WEBPACK_IMPORTED_MODULE_1__.GovernanceService)); };
GovernanceProposalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GovernanceProposalComponent, selectors: [["app-governance-proposal"]], inputs: { proposal: "proposal" }, decls: 20, vars: 5, consts: [[1, "bg-white", "text-dark", "rounded-alot", "p-3"], [1, "d-grid", "gap-2", "mb-3", "text-center"], [1, "lh-1"], [1, "text-muted"], [1, "d-grid", "gap-2", "mb-3"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "d-inline-flex", "flex-column", "align-items-center"], ["href", "#votersModal", "data-bs-toggle", "modal", 1, "text-reset", "mb-2", 3, "click"], [1, "btn", "btn-eboxprimary", "rounded-alot", 3, "disabled", "click"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "id", "name", "value", "disabled", "change"], [1, "form-check-label", "mb-1", 3, "for"], ["class", "progress bg-light rounded-alot align-items-center", 4, "ngIf"], [1, "progress", "bg-light", "rounded-alot", "align-items-center"], [1, "progress-bar", "bg-eboxprimary", "rounded-alot"], [1, "ms-2"]], template: function GovernanceProposalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "End");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, GovernanceProposalComponent_div_13_Template, 6, 8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GovernanceProposalComponent_Template_a_click_16_listener() { return ctx.injectVoters(ctx.proposal); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Detailed voting results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GovernanceProposalComponent_Template_button_click_18_listener() { return ctx.buttonFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.proposal.startDatetime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.proposal.endDatetime);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.proposal.answers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isButtonDisabled ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.buttonMessage, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_2__.ToFixedPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb3Zlcm5hbmNlLXByb3Bvc2FsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 617:
/*!***************************************************************!*\
  !*** ./src/app/components/governance/governance.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GovernanceComponent": () => (/* binding */ GovernanceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading-indicator.service */ 4762);
/* harmony import */ var src_app_services_governance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/governance.service */ 81747);
/* harmony import */ var _bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bg-changer/bg-changer.component */ 46567);
/* harmony import */ var _governance_area_governance_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./governance-area/governance-area.component */ 70607);






class GovernanceComponent {
    constructor(loadingIndicatorServ, governanceServ) {
        this.loadingIndicatorServ = loadingIndicatorServ;
        this.governanceServ = governanceServ;
        this.datetime = new Date().toUTCString().replace("GMT", "UTC");
        this.governance = [];
        this.community = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.clockTimer = setInterval(() => this.datetime = (new Date()).toUTCString().replace("GMT", "UTC"), 1000);
            this.loadingIndicatorServ.on();
            Promise.all([
                this.governanceServ.getVotings({ isCommunity: false }),
                this.governanceServ.getVotings({ isCommunity: true })
            ]).then(([governance, community]) => {
                this.governance = this.enrichProposal(governance, false);
                this.community = this.enrichProposal(community, true);
                this.loadingIndicatorServ.off();
            });
            // Append to the body the two modals for eligible users and voters
            let eligibleUsersModalWrapper = document.createElement("DIV");
            eligibleUsersModalWrapper.innerHTML = `<div class="modal fade text-dark" id="eligibleUsersModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content rounded-alot">
            <div class="modal-header">
                <h5 class="modal-title">Eligible voters</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3 text-center">
                    <small>There are <span id="numberOfEligibleUsers"></span> eligible voters.</small>
                </div>
                <ul class="p-0" id="eligibleUsersList"></ul>
            </div>
        </div>
    </div>
</div>`;
            let votersModalWrapper = document.createElement("DIV");
            votersModalWrapper.innerHTML = `<div class="modal fade text-start" id="votersModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content rounded-alot">
            <div class="modal-header">
                <h5 class="modal-title">Detailed voting results</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3 text-center">
                <small>A total of <span id="numberOfVoters" votes were cast.</small>
                </div>
                <ul class="p-0" id="votersList"></ul>
            </div>
        </div>
    </div>
</div>`;
            document.body.appendChild(eligibleUsersModalWrapper.firstElementChild);
            document.body.appendChild(votersModalWrapper.firstElementChild);
        });
    }
    ngOnDestroy() {
        clearInterval(this.clockTimer);
        // Remove eligible users and voters modals from body
        document.body.removeChild(document.querySelector("#eligibleUsersModal"));
        document.body.removeChild(document.querySelector("#votersModal"));
    }
    enrichProposal(proposals, isCommunity) {
        for (let p of proposals) {
            p._id = 'proposal_' + Math.random().toString(36).substring(2);
            p._isCollapsed = true;
            p.startDatetime = new Date(p.time_start * 1e3).toUTCString().replace("GMT", "UTC");
            p.endDatetime = new Date(p.time_end * 1e3).toUTCString().replace("GMT", "UTC");
            p.hasExpired = Date.now() > p.time_end * 1e3;
            p.isEligible = false;
            p.hasVoted = false;
            p.eligibleUsers = [];
            p.votersDetail = [];
            this.governanceServ.getVotes({
                votingNumber: p.n,
                isCommunity: isCommunity
            })
                .then(r => p.votes = r);
            this.governanceServ.getVoters({
                votingNumber: p.n,
                isCommunity: isCommunity
            })
                .then(r => p.eligibleUsers = r);
            this.governanceServ.getVotesDetails({
                votingNumber: p.n,
                isCommunity: isCommunity
            })
                .then(r => p.votersDetail = r);
        }
        // I'm reversing the proposals as they come in reverse cronological order
        return proposals.reverse();
    }
}
GovernanceComponent.ɵfac = function GovernanceComponent_Factory(t) { return new (t || GovernanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_governance_service__WEBPACK_IMPORTED_MODULE_1__.GovernanceService)); };
GovernanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GovernanceComponent, selectors: [["app-governance"]], decls: 21, vars: 4, consts: [[3, "imgSrc"], [1, "main", "py-5", "px-3"], [1, "container-medium", "text-center", "mb-5"], [1, "lead"], ["href", "https://ethbox.medium.com/ethbox-introducing-governance-540f237cda3e", "target", "_blank", 1, "text-reset"], [1, "container", "col-xxl-8"], [1, "row", "g-3"], [1, "col-lg-6"], ["title", "Governance", 3, "proposals"], ["title", "Community", 3, "proposals"]], template: function GovernanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-bg-changer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Governance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Everyone holding 1 EBOX or above is eligible to voice their opinion in community-related decisions. Votes are weighted accordingly with token balance. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "For further understanding, please have a look at our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Medium article");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " on governance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-governance-area", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "app-governance-area", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("imgSrc", "assets/img/governance.jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.datetime);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("proposals", ctx.governance);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("proposals", ctx.community);
    } }, directives: [_bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_2__.BgChangerComponent, _governance_area_governance_area_component__WEBPACK_IMPORTED_MODULE_3__.GovernanceAreaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb3Zlcm5hbmNlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 28069:
/*!*****************************************************************************!*\
  !*** ./src/app/components/loading-indicator/loading-indicator.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingIndicatorComponent": () => (/* binding */ LoadingIndicatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loading-indicator.service */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);



function LoadingIndicatorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
} }
class LoadingIndicatorComponent {
    constructor(loadingIndicatorServ) {
        this.loadingIndicatorServ = loadingIndicatorServ;
    }
}
LoadingIndicatorComponent.ɵfac = function LoadingIndicatorComponent_Factory(t) { return new (t || LoadingIndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorService)); };
LoadingIndicatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingIndicatorComponent, selectors: [["app-loading-indicator"]], decls: 2, vars: 3, consts: [["class", "progress-line position-fixed", "style", "bottom: 0; right: 0; z-index: 999", 4, "ngIf"], [1, "progress-line", "position-fixed", 2, "bottom", "0", "right", "0", "z-index", "999"]], template: function LoadingIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingIndicatorComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.loadingIndicatorServ.isLoading$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe], styles: [".progress-line[_ngcontent-%COMP%], .progress-line[_ngcontent-%COMP%]::before {\r\n    height: 0.75rem;\r\n    width: 100%;\r\n    margin: 0;\r\n}\r\n\r\n.progress-line[_ngcontent-%COMP%] {\r\n    background-color: #afd0ff;\r\n    display: flex;\r\n}\r\n\r\n.progress-line[_ngcontent-%COMP%]::before {\r\n    background: linear-gradient(to right, #afd0ff, #dc13af);\r\n    content: \"\";\r\n    animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\r\n}\r\n\r\n@keyframes running-progress {\r\n    0% {\r\n        margin-left: 0px;\r\n        margin-right: 100%;\r\n    }\r\n    50% {\r\n        margin-left: 25%;\r\n        margin-right: 0%;\r\n    }\r\n    100% {\r\n        margin-left: 100%;\r\n        margin-right: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVEQUF1RDtJQUN2RCxXQUFXO0lBQ1gsb0VBQW9FO0FBQ3hFOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImxvYWRpbmctaW5kaWNhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtbGluZSxcclxuLnByb2dyZXNzLWxpbmU6OmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnByb2dyZXNzLWxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmZDBmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1saW5lOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYWZkMGZmLCAjZGMxM2FmKTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBhbmltYXRpb246IHJ1bm5pbmctcHJvZ3Jlc3MgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBydW5uaW5nLXByb2dyZXNzIHtcclxuICAgIDAlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 85962:
/*!***************************************************************************!*\
  !*** ./src/app/components/over-the-counter/over-the-counter.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverTheCounterComponent": () => (/* binding */ OverTheCounterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ 84098);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contract.service */ 36569);
/* harmony import */ var src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loading-indicator.service */ 4762);
/* harmony import */ var _password_strength_visualizer_password_strength_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../password-strength-visualizer/password-strength-visualizer.component */ 92940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address-book/address-book.component */ 25931);
/* harmony import */ var _token_selector_token_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../token-selector/token-selector.component */ 75473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










const _c0 = ["recipientInput"];
const _c1 = ["passwordInput"];
const _c2 = ["sendValueInput"];
const _c3 = ["requestValueInput"];
const _c4 = ["messageTextarea"];
function OverTheCounterComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function OverTheCounterComponent_div_60_Template_textarea_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.message = _r6.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r4.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 1, ctx_r4.loadingIndicatorServ.isLoading$) ? "disabled" : null);
} }
const _c5 = function () { return { img: "assets/img/over-the-counter.jpg", bg: "assets/img/bg-blob-emerald.jpg" }; };
class OverTheCounterComponent {
    constructor(contractServ, loadingIndicatorServ) {
        this.contractServ = contractServ;
        this.loadingIndicatorServ = loadingIndicatorServ;
        this.isAdvancedUser = JSON.parse(localStorage.getItem("isAdvancedUser")) || false;
        this.keepInputs = JSON.parse(localStorage.getItem("shouldSendKeepInputs")) || false;
        this.password = '';
        this.isButtonDisabled = true;
        this.recipientInputColor = "text-muted";
        this.sendValueInputColor = "text-muted";
        this.requestValueInputColor = "text-muted";
        this.subscriptions = [];
    }
    ngOnInit() {
        // Setting up the reactive code to load and reload boxes
        [
            this.contractServ.chainId$,
            this.contractServ.isChainSupported$,
            this.contractServ.selectedAccount$,
            this.contractServ.isAppReady$,
            this.contractServ.boxInteraction$,
            this.contractServ.approvalInteraction$
        ].forEach(obs => this.subscriptions.push(obs.subscribe(() => this.syncButtonFunctionality())));
    }
    ngOnDestroy() {
        // When the component gets destroyed unsubscribe from everything to prevent memory leaks
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    setAdvancedUser() {
        this.isAdvancedUser = !this.isAdvancedUser;
        localStorage.setItem("isAdvancedUser", JSON.stringify(this.isAdvancedUser));
    }
    setKeepInputs(checkbox) {
        this.keepInputs = checkbox.checked;
        localStorage.setItem("shouldSendKeepInputs", JSON.stringify(checkbox.checked));
    }
    // This is where the button gets its text and functionality updated
    syncButtonFunctionality() {
        // Updating local variables
        this.chainId = this.contractServ.chainId$.getValue();
        this.isChainSupported = this.contractServ.isChainSupported$.getValue();
        this.selectedAccount = this.contractServ.selectedAccount$.getValue();
        this.isAppReady = this.contractServ.isAppReady$.getValue();
        // Calculating a message for the user
        if (!this.chainId || !this.selectedAccount) {
            this.buttonMessage = 'Please connect your wallet first!';
            this.buttonFunction = () => this.contractServ.connect();
            this.isButtonDisabled = false;
            return;
        }
        if (!this.isChainSupported) {
            this.buttonMessage = 'Wrong network – Please use Ethereum, BSC, Polygon or Reef!';
            this.isButtonDisabled = true;
            return;
        }
        if (!this.isAppReady) {
            this.buttonMessage = 'Initializing ethbox smart contract...';
            this.isButtonDisabled = true;
            return;
        }
        // About the passphrase
        // First on top because it's NON mandatory
        let { score: passStrength } = window.zxcvbn(this.password);
        Array.from(document.querySelectorAll(".pass-rect-strength"))
            .forEach((e, i) => {
            if (!this.password || i > passStrength) {
                e.classList.add("d-none");
            }
            else {
                e.classList.remove("d-none");
            }
        });
        // About the recipient
        if (!this.recipient) {
            this.recipientInputColor = "text-warning";
            this.recipientInputText = "Recipient is required";
            this.buttonMessage = 'Recipient is required';
            this.isButtonDisabled = true;
            return;
        }
        if (!this.contractServ.isValidAddress(this.recipient)) {
            this.recipientInputColor = "text-danger";
            this.recipientInputText = "Recipient is invalid";
            this.buttonMessage = 'Recipient is invalid';
            this.isButtonDisabled = true;
            return;
        }
        // Recipient tests are passed
        this.recipientInputText = null;
        // Showing a message for self-boxes
        if (this.recipient === this.selectedAccount) {
            this.recipientInputColor = "text-muted";
            this.recipientInputText = "Recipient is your own address";
        }
        if (!this.sendTokenSelected || !this.requestTokenSelected) {
            this.buttonMessage = 'Choose tokens';
            this.isButtonDisabled = true;
        }
        // About the send token
        if (!this.sendTokenSelected) {
            this.sendValueInputColor = "text-warning";
            this.sendValueInputText = "Choose send token";
            return;
        }
        if (this.sendTokenSelected && !this.sendTokenBalance) {
            this.sendValueInputColor = "text-muted";
            this.sendValueInputText = "Loading token balance...";
            this.buttonMessage = 'Loading token balance...';
            this.isButtonDisabled = true;
            return;
        }
        // If the token is selected, the balance has been read but the user has not enough allowance
        if (this.sendTokenSelected
            && this.sendTokenBalance.decimalAllowance == '0'
            || (new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(this.sendValue)).gt(this.sendTokenBalance.decimalAllowance)) {
            this.sendValueInputColor = "text-warning";
            this.sendValueInputText = `You have to approve ${this.sendTokenSelected.symbol}`;
            this.buttonMessage = `Approve ${this.sendTokenSelected.symbol}`;
            this.buttonFunction = () => this.contractServ.approveMax(this.sendTokenSelected.address);
            this.isButtonDisabled = false;
            return;
        }
        // About the send value
        if (!this.sendValue) {
            this.sendValueInputColor = "text-warning";
            this.sendValueInputText = "Send amount is required";
            this.buttonMessage = 'Send amount is required';
            this.isButtonDisabled = true;
            return;
        }
        if (this.isValueInvalid(this.sendValue)) {
            this.sendValueInputColor = "text-danger";
            this.sendValueInputText = "Send amount is invalid";
            this.buttonMessage = 'Send amount is invalid';
            this.isButtonDisabled = true;
            return;
        }
        if (this.isValueTooLow(this.sendValue, this.sendTokenSelected.decimals)) {
            this.sendValueInputColor = "text-danger";
            this.sendValueInputText = "Send amount is too low";
            this.buttonMessage = 'Send amount is too low';
            this.isButtonDisabled = true;
            return;
        }
        if (this.isValueTooHigh(this.sendValue, this.sendTokenBalance.decimalValue)) {
            this.sendValueInputColor = "text-danger";
            this.sendValueInputText = "Send amount is too high";
            this.buttonMessage = 'Send amount is too high';
            this.isButtonDisabled = true;
            return;
        }
        // Send Value tests are passed
        this.sendValueInputText = null;
        // About the request token
        if (!this.requestTokenSelected) {
            this.requestValueInputColor = "text-warning";
            this.requestValueInputText = "Choose request token";
            return;
        }
        // About the request value
        if (!this.requestValue) {
            this.requestValueInputColor = "text-danger";
            this.requestValueInputText = "Request amount is required";
            this.buttonMessage = 'Request amount is required';
            this.isButtonDisabled = true;
            return;
        }
        if (this.isValueInvalid(this.requestValue)) {
            this.requestValueInputColor = "text-danger";
            this.requestValueInputText = "Request amount is invalid";
            this.buttonMessage = 'Request amount is invalid';
            this.isButtonDisabled = true;
            return;
        }
        if (this.isValueTooLow(this.requestValue, this.requestTokenSelected.decimals)) {
            this.requestValueInputColor = "text-danger";
            this.requestValueInputText = "Request amount is too low";
            this.buttonMessage = 'Request amount is too low';
            this.isButtonDisabled = true;
            return;
        }
        // Request Value tests are passed
        this.requestValueInputText = null;
        // All checks are passed
        this.buttonMessage = 'Send';
        this.buttonFunction = () => this.sendBox();
        this.isButtonDisabled = false;
    }
    isValueInvalid(value) {
        return !/^\d*\.?\d+$/.test(value);
    }
    isValueTooLow(value, decimals) {
        let multiplier = 1 + '0'.repeat(decimals);
        let lowestAllowedDecimal = (new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(1)).dividedBy(multiplier);
        return (new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(value)).lt(lowestAllowedDecimal);
    }
    isValueTooHigh(value, decimalValue) {
        return (new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(value)).gt(decimalValue);
    }
    sendBox() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Recipient is', this.recipient);
            console.log('Passphrase is', this.password);
            console.log('Send token address is', this.sendTokenSelected.address);
            console.log('Send amount is', this.sendValue);
            console.log('Request token address is', this.requestTokenSelected.address);
            console.log('Request amount is', this.requestValue);
            try {
                let receipt = yield this.contractServ.createBox({
                    password: this.password,
                    recipient: this.recipient,
                    sender: this.contractServ.selectedAccount$.getValue(),
                    sendTokenAddress: this.sendTokenSelected.address,
                    sendDecimalValue: this.sendValue,
                    requestTokenAddress: this.requestTokenSelected.address,
                    requestDecimalValue: this.requestValue,
                    message: this.message
                });
                // Clean the inputs if keepInputs is false
                if (!this.keepInputs) {
                    // To reset the inputs and everything tied to those I have to:
                    // 1. Reset the nativeElement value
                    // 2. Dispatch an input event
                    let inputsToClean = [
                        this.recipientInput.nativeElement,
                        this.passphraseInput.nativeElement,
                        this.sendAmountInput.nativeElement,
                        this.receiveAmountInput.nativeElement
                    ];
                    if (this.contractServ.isTestnet()) {
                        inputsToClean.push(this.messageTextarea.nativeElement);
                    }
                    inputsToClean.
                        forEach(e => {
                        e.value = "";
                        e.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }));
                    });
                }
            }
            catch (e) {
                // NOP because the error is already shown to the user by the toaster
            }
        });
    }
}
OverTheCounterComponent.ɵfac = function OverTheCounterComponent_Factory(t) { return new (t || OverTheCounterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_1__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_2__.LoadingIndicatorService)); };
OverTheCounterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OverTheCounterComponent, selectors: [["app-over-the-counter"]], viewQuery: function OverTheCounterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.recipientInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.passphraseInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sendAmountInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.receiveAmountInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.messageTextarea = _t.first);
    } }, decls: 79, vars: 38, consts: [[3, "data"], [1, "main", "centerer", "py-5", "px-3"], [1, "container-small"], [1, "bg-lightalpha", "rounded-alot", "shadow-lg"], [1, "align-items-center", "d-flex", "p-3"], [1, "flex-grow-1"], [1, "bi", "bi-shuffle"], [1, "text-muted"], ["href", "#", "routerLink", "/boxes/sent", 1, "btn", "btn-lg"], [1, "bi", "bi-clock-history"], [1, "d-flex", "flex-column", "p-3"], [1, "p-3", "bg-eboxdark", "mb-3", "rounded-alot", "text-white"], ["for", "recipient-input", 1, "w-100"], [1, "d-flex"], ["id", "recipient-input", "type", "text", "placeholder", "Insert recipient address", 1, "flex-grow-1", "me-3", "input-nostyle", 3, "disabled", "input"], ["recipientInput", ""], [3, "onAddressSelected"], ["for", "password-input", 1, "w-100"], ["id", "password-input", "type", "password", "placeholder", "Choose a passphrase", 1, "flex-grow-1", "me-3", "input-nostyle", 3, "disabled", "input"], ["passwordInput", ""], [1, "btn", "text-white", 3, "disabled", "mousedown", "mouseup"], [1, "bi", "bi-eye"], [1, "d-flex", "gap-1"], [1, "pass-rect-strength", "d-none", 2, "background-color", "red", "width", "15px", "height", "5px"], [1, "pass-rect-strength", "d-none", 2, "background-color", "orange", "width", "15px", "height", "5px"], [1, "pass-rect-strength", "d-none", 2, "background-color", "yellow", "width", "15px", "height", "5px"], [1, "pass-rect-strength", "d-none", 2, "background-color", "greenyellow", "width", "15px", "height", "5px"], [1, "pass-rect-strength", "d-none", 2, "background-color", "green", "width", "15px", "height", "5px"], ["for", "send-amount-input", 1, "w-100"], [1, "d-flex", "flex-column", "flex-lg-row", "my-2", "my-lg-0", "gap-2"], ["id", "send-amount-input", "type", "text", "placeholder", "0.0", 1, "input-nostyle", "flex-grow-1", 3, "disabled", "input"], ["sendValueInput", ""], [3, "onTokenSelected", "onTokenBalanceUpdated"], ["for", "request-amount-input", 1, "w-100"], ["id", "request-amount-input", "type", "text", "placeholder", "0.0", 1, "input-nostyle", "flex-grow-1", 3, "disabled", "input"], ["requestValueInput", ""], [3, "isBalanceEnabled", "onTokenSelected"], ["class", "p-3 bg-eboxdark mb-3 rounded-alot text-white", 4, "ngIf"], [1, "text-end"], ["data-bs-toggle", "collapse", "href", "#advanced-options", 1, "btn", "btn-outline-eboxprimary", "rounded-alot", 3, "click"], [1, "bi", "bi-three-dots-vertical"], ["id", "advanced-options", 1, "collapse"], [1, "d-flex", "flex-column", "gap-3", "border", "p-3", "mt-3", "rounded-alot"], [1, "bg-eboxdark", "p-3", "rounded-alot", "text-white"], ["type", "checkbox", "value", "", "id", "privacy-checkbox", "disabled", "", 1, "form-check-input", "me-3"], ["for", "privacy-checkbox", 1, "form-check-label"], ["type", "checkbox", "id", "keep-inputs", 1, "form-check-input", "me-3", 3, "checked", "change"], ["keepInputsCheckbox", ""], ["for", "keep-inputs", 1, "form-check-label"], [1, "btn", "btn-eboxprimary", "rounded-alot", "p-3", "mt-3", 3, "disabled", "click"], ["for", "message-textarea", 1, "w-100"], ["id", "message-textarea", "placeholder", "An optional message", 1, "input-nostyle", "flex-grow-1", 3, "disabled", "input"], ["messageTextarea", ""]], template: function OverTheCounterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-password-strength-visualizer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " OTC Trade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Exchange ETH and ERC-20 tokens trustlessly through ethbox. The transaction will only be fulfilled once both parties have deposited their funds.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " Recipient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function OverTheCounterComponent_Template_input_input_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19); ctx.recipient = _r0.value; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "app-address-book", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onAddressSelected", function OverTheCounterComponent_Template_app_address_book_onAddressSelected_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19); ctx.recipient = $event.address; _r0.value = $event.address; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Passphrase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function OverTheCounterComponent_Template_input_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29); ctx.password = _r1.value; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mousedown", function OverTheCounterComponent_Template_button_mousedown_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29); return _r1.setAttribute("type", "text"); })("mouseup", function OverTheCounterComponent_Template_button_mouseup_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](29); return _r1.setAttribute("type", "password"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "small", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Send amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function OverTheCounterComponent_Template_input_input_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](45); ctx.sendValue = _r2.value; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "app-token-selector", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTokenSelected", function OverTheCounterComponent_Template_app_token_selector_onTokenSelected_47_listener($event) { ctx.sendTokenSelected = $event; return ctx.syncButtonFunctionality(); })("onTokenBalanceUpdated", function OverTheCounterComponent_Template_app_token_selector_onTokenBalanceUpdated_47_listener($event) { ctx.sendTokenBalance = $event; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, " Request amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function OverTheCounterComponent_Template_input_input_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](55); ctx.requestValue = _r3.value; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](56, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "app-token-selector", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onTokenSelected", function OverTheCounterComponent_Template_app_token_selector_onTokenSelected_57_listener($event) { ctx.requestTokenSelected = $event; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, OverTheCounterComponent_div_60_Template, 7, 3, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OverTheCounterComponent_Template_a_click_62_listener() { return ctx.setAdvancedUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Advanced options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, " Enable privacy mode (not yet available) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "input", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function OverTheCounterComponent_Template_input_change_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](73); return ctx.setKeepInputs(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " Keep inputs after sending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function OverTheCounterComponent_Template_button_click_76_listener() { return ctx.buttonFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](77, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](37, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 25, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.recipientInputColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.recipientInputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 27, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](32, 29, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 31, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.sendValueInputColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.sendValueInputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](56, 33, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isBalanceEnabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.requestValueInputColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.requestValueInputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.contractServ.isTestnet());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("show", ctx.isAdvancedUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.keepInputs ? "checked" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isButtonDisabled || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](77, 35, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.buttonMessage, " ");
    } }, directives: [_password_strength_visualizer_password_strength_visualizer_component__WEBPACK_IMPORTED_MODULE_3__.PasswordStrengthVisualizerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_4__.AddressBookComponent, _token_selector_token_selector_component__WEBPACK_IMPORTED_MODULE_5__.TokenSelectorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVyLXRoZS1jb3VudGVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 83581:
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bg-changer/bg-changer.component */ 46567);


class PageNotFoundComponent {
    constructor() { }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 7, vars: 1, consts: [[3, "imgSrc"], [1, "centerer", "main"], [1, "text-center"], [1, "display-1"], [1, "lead"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-bg-changer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imgSrc", "assets/img/bg-blob-seashore.jpg");
    } }, directives: [_bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_0__.BgChangerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 92940:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/password-strength-visualizer/password-strength-visualizer.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrengthVisualizerComponent": () => (/* binding */ PasswordStrengthVisualizerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PasswordStrengthVisualizerComponent {
    constructor() {
        this.onWindowResize = () => {
            this.setCanvasSize();
            this.render();
        };
        this.img = new Image();
        this.pxFactor = 100;
    }
    ngAfterViewInit() {
        this.passwordInput = document.querySelector('#password-input');
        this.canvas = document.querySelector('#password-canvas');
        this.posterImg = this.canvas.getAttribute('data-img-src');
        // The following code was taken and modified from http://jsfiddle.net/u6apxgfk/390/ and merged with https://codepen.io/bassta/pen/OPVzyB?editors=1010
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener('resize', this.onWindowResize);
        this.passwordInput.addEventListener('input', this.onPasswordInput.bind(this));
        this.img.onload = () => {
            let imgWidth = this.img.width;
            let imgHeight = this.img.height;
            this.imgRatio = imgWidth / imgHeight;
            this.setCanvasSize();
            this.render();
        };
        this.img.src = this.posterImg;
    }
    onPasswordInput() {
        let val = this.passwordInput.value;
        let result = window.zxcvbn(val);
        // We want to reveal the image as the password gets stronger. Since the zxcvbn.score has
        // only 5 different values (0-4) we will use the zxcvbn.guesses_log10 output.
        // The guesses_log10 will be >= 11 when the password is considered strong,
        // so we want to map a factor of 3 (pixelated) to 100 (clear image) to 
        // a value of 0 to 11 of guesses_log10.
        // This result will be used in the render function.
        this.pxFactor = -97 / 11 * Math.min(11, Math.round(result.guesses_log10)) + 100;
        // so we see most of the time pixels rather than approaching a clear image sooner..
        if (this.pxFactor != 3 && this.pxFactor != 100) {
            this.pxFactor -= this.pxFactor / 100 * 50;
        }
        this.render();
    }
    setCanvasSize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    render() {
        let w = this.canvas.offsetWidth;
        let h = this.canvas.offsetHeight;
        this.newWidth = w;
        this.newHeight = h;
        this.newX = 0;
        this.newY = 0;
        this.wrapperRatio = this.newWidth / this.newHeight;
        if (this.wrapperRatio > this.imgRatio) {
            this.newHeight = Math.round(w / this.imgRatio);
            this.newY = (h - this.newHeight) / 2;
        }
        else {
            this.newWidth = Math.round(h * this.imgRatio);
            this.newX = (w - this.newWidth) / 2;
        }
        // pxFactor will depend on the current typed password.
        // values will be in the range [1,100].
        let size = this.pxFactor * 0.01;
        // turn off image smoothing - this will give the pixelated effect
        this.ctx.mozImageSmoothingEnabled = size === 1 ? true : false;
        this.ctx.webkitImageSmoothingEnabled = size === 1 ? true : false;
        this.ctx.imageSmoothingEnabled = size === 1 ? true : false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw original image to the scaled size
        this.ctx.drawImage(this.img, 0, 0, w * size, h * size);
        // then draw that scaled image thumb back to fill canvas
        // As smoothing is off the result will be pixelated
        this.ctx.drawImage(this.canvas, 0, 0, w * size, h * size, this.newX, this.newY, this.newWidth + .05 * w, this.newHeight + .05 * h);
    }
    ngOnDestroy() {
        window.removeEventListener('resize', this.onWindowResize);
    }
}
PasswordStrengthVisualizerComponent.ɵfac = function PasswordStrengthVisualizerComponent_Factory(t) { return new (t || PasswordStrengthVisualizerComponent)(); };
PasswordStrengthVisualizerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordStrengthVisualizerComponent, selectors: [["app-password-strength-visualizer"]], inputs: { data: "data" }, decls: 1, vars: 2, consts: [["id", "password-canvas", 1, "bg-cover"]], template: function PasswordStrengthVisualizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattributeInterpolate1"]("style", "background-image: url( ", ctx.data.bg, " )", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeStyle"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-img-src", ctx.data.img);
    } }, styles: ["#password-canvas[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n\theight: 100%;\r\n  position: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n  z-index: -100;\r\n\timage-rendering: optimizeSpeed;\r\n\timage-rendering: -moz-crisp-edges;\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\timage-rendering: -o-crisp-edges;\r\n\timage-rendering: crisp-edges;\r\n\t-ms-interpolation-mode: nearest-neighbor;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLXN0cmVuZ3RoLXZpc3VhbGl6ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWixZQUFZO0VBQ1gsZUFBZTtDQUNoQixNQUFNO0NBQ04sT0FBTztFQUNOLGFBQWE7Q0FDZCw4QkFBOEI7Q0FDOUIsaUNBQWlDO0NBQ2pDLDBDQUEwQztDQUMxQywrQkFBK0I7Q0FDL0IsNEJBQTRCO0NBQzVCLHdDQUF3QztBQUN6QyIsImZpbGUiOiJwYXNzd29yZC1zdHJlbmd0aC12aXN1YWxpemVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFzc3dvcmQtY2FudmFzIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IC0xMDA7XHJcblx0aW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG5cdGltYWdlLXJlbmRlcmluZzogLW1vei1jcmlzcC1lZGdlcztcclxuXHRpbWFnZS1yZW5kZXJpbmc6IC13ZWJraXQtb3B0aW1pemUtY29udHJhc3Q7XHJcblx0aW1hZ2UtcmVuZGVyaW5nOiAtby1jcmlzcC1lZGdlcztcclxuXHRpbWFnZS1yZW5kZXJpbmc6IGNyaXNwLWVkZ2VzO1xyXG5cdC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IG5lYXJlc3QtbmVpZ2hib3I7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 98860:
/*!***************************************************!*\
  !*** ./src/app/components/send/send.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendComponent": () => (/* binding */ SendComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _constants_various__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/various */ 34084);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bignumber.js */ 84098);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contract.service */ 36569);
/* harmony import */ var src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loading-indicator.service */ 4762);
/* harmony import */ var _password_strength_visualizer_password_strength_visualizer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../password-strength-visualizer/password-strength-visualizer.component */ 92940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../address-book/address-book.component */ 25931);
/* harmony import */ var _token_selector_token_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../token-selector/token-selector.component */ 75473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);











const _c0 = ["recipientInput"];
const _c1 = ["passwordInput"];
const _c2 = ["sendValueInput"];
const _c3 = ["messageTextarea"];
function SendComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function SendComponent_div_50_Template_textarea_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r6.message = _r5.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r3.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 1, ctx_r3.loadingIndicatorServ.isLoading$) ? "disabled" : null);
} }
const _c4 = function () { return { img: "assets/img/send.jpg", bg: "assets/img/bg-blob-emerald.jpg" }; };
const _c5 = function () { return ["/boxes", "sent"]; };
class SendComponent {
    constructor(contractServ, loadingIndicatorServ) {
        this.contractServ = contractServ;
        this.loadingIndicatorServ = loadingIndicatorServ;
        this.isAdvancedUser = JSON.parse(localStorage.getItem("isAdvancedUser")) || false;
        this.keepInputs = JSON.parse(localStorage.getItem("shouldSendKeepInputs")) || false;
        this.isPrivacyEnabled = false;
        this.password = '';
        this.isButtonDisabled = true;
        this.recipientInputColor = "text-muted";
        this.sendValueInputColor = "text-muted";
        this.subscriptions = [];
    }
    ngOnInit() {
        // Setting up the reactive code to load and reload boxes
        [
            this.contractServ.chainId$,
            this.contractServ.isChainSupported$,
            this.contractServ.selectedAccount$,
            this.contractServ.isAppReady$,
            this.contractServ.boxInteraction$,
            this.contractServ.approvalInteraction$
        ].forEach(obs => this.subscriptions.push(obs.subscribe(() => this.syncButtonFunctionality())));
    }
    ngOnDestroy() {
        // When the component gets destroyed unsubscribe from everything to prevent memory leaks
        this.subscriptions.forEach(s => s.unsubscribe());
    }
    setAdvancedUser() {
        this.isAdvancedUser = !this.isAdvancedUser;
        localStorage.setItem("isAdvancedUser", JSON.stringify(this.isAdvancedUser));
    }
    setKeepInputs(checkbox) {
        this.keepInputs = checkbox.checked;
        localStorage.setItem("shouldSendKeepInputs", JSON.stringify(checkbox.checked));
    }
    // This is where the button gets its text and functionality updated
    syncButtonFunctionality() {
        // Updating local variables
        this.chainId = this.contractServ.chainId$.getValue();
        this.isChainSupported = this.contractServ.isChainSupported$.getValue();
        this.selectedAccount = this.contractServ.selectedAccount$.getValue();
        this.isAppReady = this.contractServ.isAppReady$.getValue();
        // Calculating a message for the user
        if (!this.chainId || !this.selectedAccount) {
            this.buttonMessage = 'Please connect your wallet first!';
            this.buttonFunction = () => this.contractServ.connect();
            this.isButtonDisabled = false;
            return;
        }
        if (!this.isChainSupported) {
            this.buttonMessage = 'Wrong network – Please use Ethereum, BSC, Polygon or Reef!';
            this.isButtonDisabled = true;
            return;
        }
        if (!this.isAppReady) {
            this.buttonMessage = 'Initializing ethbox smart contract...';
            this.isButtonDisabled = true;
            return;
        }
        // About the passphrase
        // First on top because it's NON mandatory
        let { score: passStrength } = window.zxcvbn(this.password);
        Array.from(document.querySelectorAll(".pass-rect-strength"))
            .forEach((e, i) => {
            if (!this.password || i > passStrength) {
                e.classList.add("d-none");
            }
            else {
                e.classList.remove("d-none");
            }
        });
        // About the recipient
        if (!this.recipient) {
            this.recipientInputColor = "text-warning";
            this.recipientInputText = "Recipient is required";
            this.buttonMessage = 'Recipient is required';
            this.isButtonDisabled = true;
            return;
        }
        if (!this.contractServ.isValidAddress(this.recipient)) {
            this.recipientInputColor = "text-danger";
            this.recipientInputText = "Recipient is invalid";
            this.buttonMessage = 'Recipient is invalid';
            this.isButtonDisabled = true;
            return;
        }
        // Recipient tests are passed
        this.recipientInputText = null;
        // Showing a message for self-boxes
        if (this.recipient === this.selectedAccount) {
            this.recipientInputColor = "text-muted";
            this.recipientInputText = "Recipient is your own address";
        }
        // About the send token
        if (!this.sendTokenSelected) {
            this.sendValueInputColor = "text-warning";
            this.sendValueInputText = "Choose a token";
            this.buttonMessage = 'Choose a token';
            this.isButtonDisabled = true;
            return;
        }
        if (this.sendTokenSelected && !this.sendTokenBalance) {
            this.sendValueInputColor = "text-muted";
            this.sendValueInputText = "Loading token balance...";
            this.buttonMessage = 'Loading token balance...';
            this.isButtonDisabled = true;
            return;
        }
        // If the token is selected, the balance has been read but the user has not enough allowance
        if (this.sendTokenSelected
            && this.sendTokenBalance.decimalAllowance == '0'
            || (new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(this.sendValue)).gt(this.sendTokenBalance.decimalAllowance)) {
            this.sendValueInputColor = "text-warning";
            this.sendValueInputText = `You have to approve ${this.sendTokenSelected.symbol}`;
            this.buttonMessage = `Approve ${this.sendTokenSelected.symbol}`;
            this.buttonFunction = () => this.contractServ.approveMax(this.sendTokenSelected.address);
            this.isButtonDisabled = false;
            return;
        }
        // About the send value
        if (!this.sendValue) {
            this.sendValueInputColor = "text-warning";
            this.sendValueInputText = "Send amount is required";
            this.buttonMessage = 'Send amount is required';
            this.isButtonDisabled = true;
            return;
        }
        if (this.isValueInvalid(this.sendValue)) {
            this.sendValueInputColor = "text-danger";
            this.sendValueInputText = "Send amount is invalid";
            this.buttonMessage = 'Send amount is invalid';
            this.isButtonDisabled = true;
            return;
        }
        if (this.isValueTooLow(this.sendValue, this.sendTokenSelected.decimals)) {
            this.sendValueInputColor = "text-danger";
            this.sendValueInputText = "Send amount is too low";
            this.buttonMessage = 'Send amount is too low';
            this.isButtonDisabled = true;
            return;
        }
        if (this.isValueTooHigh(this.sendValue, this.sendTokenBalance.decimalValue)) {
            this.sendValueInputColor = "text-danger";
            this.sendValueInputText = "Send amount is too high";
            this.buttonMessage = 'Send amount is too high';
            this.isButtonDisabled = true;
            return;
        }
        // Send Value tests are passed
        this.sendValueInputText = null;
        // All checks are passed
        this.buttonMessage = 'Send';
        this.buttonFunction = () => this.sendBox();
        this.isButtonDisabled = false;
    }
    isValueInvalid(value) {
        return !/^\d*\.?\d+$/.test(value);
    }
    isValueTooLow(value, decimals) {
        let multiplier = 1 + '0'.repeat(decimals);
        let lowestAllowedDecimal = (new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(1)).dividedBy(multiplier);
        return (new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(value)).lt(lowestAllowedDecimal);
    }
    isValueTooHigh(value, decimalValue) {
        return (new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(value)).gt(decimalValue);
    }
    sendBox() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Privacy is', this.isPrivacyEnabled);
            console.log('Passphrase is', this.password);
            console.log('Recipient is', this.recipient);
            console.log('Send token address is', this.sendTokenSelected.address);
            console.log('Send amount is', this.sendValue);
            try {
                let receipt;
                if (this.isPrivacyEnabled) {
                    let receipt = yield this.contractServ.createBoxWithPrivacy({
                        password: this.password,
                        recipient: this.recipient,
                        sender: this.contractServ.selectedAccount$.getValue(),
                        sendTokenAddress: this.sendTokenSelected.address,
                        sendDecimalValue: this.sendValue,
                        requestTokenAddress: _constants_various__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_ZERO,
                        requestDecimalValue: _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO,
                        message: this.message
                    });
                    return;
                }
                else {
                    let receipt = yield this.contractServ.createBox({
                        password: this.password,
                        recipient: this.recipient,
                        sender: this.contractServ.selectedAccount$.getValue(),
                        sendTokenAddress: this.sendTokenSelected.address,
                        sendDecimalValue: this.sendValue,
                        requestTokenAddress: _constants_various__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_ZERO,
                        requestDecimalValue: _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO,
                        message: this.message
                    });
                }
                // Clean the inputs if keepInputs is false
                if (!this.keepInputs) {
                    // To reset the inputs and everything tied to those I have to:
                    // 1. Reset the nativeElement value
                    // 2. Dispatch an input event
                    let inputsToClean = [
                        this.recipientInput.nativeElement,
                        this.passphraseInput.nativeElement,
                        this.sendAmountInput.nativeElement
                    ];
                    if (this.contractServ.isTestnet()) {
                        inputsToClean.push(this.messageTextarea.nativeElement);
                    }
                    inputsToClean.
                        forEach(e => {
                        e.value = "";
                        e.dispatchEvent(new Event("input", { bubbles: true, cancelable: true }));
                    });
                }
            }
            catch (e) {
                // NOP because the error is already shown to the user by the toaster
            }
        });
    }
}
SendComponent.ɵfac = function SendComponent_Factory(t) { return new (t || SendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_2__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_3__.LoadingIndicatorService)); };
SendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SendComponent, selectors: [["app-send"]], viewQuery: function SendComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.recipientInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.passphraseInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sendAmountInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.messageTextarea = _t.first);
    } }, decls: 69, vars: 33, consts: [[3, "data"], [1, "main", "centerer", "py-5", "px-3"], [1, "container-small"], [1, "bg-lightalpha", "rounded-alot", "shadow-lg"], [1, "align-items-center", "d-flex", "p-3"], [1, "flex-grow-1"], [1, "bi", "bi-box"], [1, "text-muted"], ["href", "#", 1, "btn", "btn-lg", 3, "routerLink"], [1, "bi", "bi-clock-history"], [1, "d-flex", "flex-column", "p-3"], [1, "p-3", "bg-eboxdark", "mb-3", "rounded-alot", "text-white"], ["for", "recipient-input", 1, "w-100"], [1, "d-flex"], ["id", "recipient-input", "type", "text", "placeholder", "Insert recipient address", 1, "flex-grow-1", "me-3", "input-nostyle", 3, "disabled", "input"], ["recipientInput", ""], [3, "onAddressSelected"], ["for", "password-input", 1, "w-100"], ["id", "password-input", "type", "password", "placeholder", "Choose a passphrase", 1, "flex-grow-1", "me-3", "input-nostyle", 3, "disabled", "input"], ["passwordInput", ""], [1, "btn", "text-white", 3, "disabled", "mousedown", "mouseup"], [1, "bi", "bi-eye"], [1, "d-flex", "gap-1"], [1, "pass-rect-strength", "d-none", 2, "background-color", "red", "width", "15px", "height", "5px"], [1, "pass-rect-strength", "d-none", 2, "background-color", "orange", "width", "15px", "height", "5px"], [1, "pass-rect-strength", "d-none", 2, "background-color", "yellow", "width", "15px", "height", "5px"], [1, "pass-rect-strength", "d-none", 2, "background-color", "greenyellow", "width", "15px", "height", "5px"], [1, "pass-rect-strength", "d-none", 2, "background-color", "green", "width", "15px", "height", "5px"], ["for", "send-amount-input", 1, "w-100"], [1, "d-flex", "flex-column", "flex-lg-row", "my-2", "my-lg-0", "gap-2"], ["id", "send-amount-input", "type", "text", "placeholder", "0.0", 1, "input-nostyle", "flex-grow-1", 3, "disabled", "input"], ["sendValueInput", ""], [3, "onTokenSelected", "onTokenBalanceUpdated"], ["class", "p-3 bg-eboxdark mb-3 rounded-alot text-white", 4, "ngIf"], [1, "text-end"], ["data-bs-toggle", "collapse", "href", "#advanced-options", 1, "btn", "btn-outline-eboxprimary", "rounded-alot", 3, "click"], [1, "bi", "bi-three-dots-vertical"], ["id", "advanced-options", 1, "collapse"], [1, "d-flex", "flex-column", "gap-3", "border", "p-3", "mt-3", "rounded-alot"], [1, "bg-eboxdark", "p-3", "rounded-alot", "text-white"], ["type", "checkbox", "id", "privacy-checkbox", 1, "form-check-input", "me-3", 3, "checked", "change"], ["for", "privacy-checkbox", 1, "form-check-label"], ["type", "checkbox", "id", "keep-inputs", 1, "form-check-input", "me-3", 3, "checked", "change"], ["keepInputsCheckbox", ""], ["for", "keep-inputs", 1, "form-check-label"], [1, "btn", "btn-eboxprimary", "rounded-alot", "p-3", "mt-3", 3, "disabled", "click"], ["for", "message-textarea", 1, "w-100"], ["id", "message-textarea", "placeholder", "An optional message", 1, "input-nostyle", "flex-grow-1", 3, "disabled", "input"], ["messageTextarea", ""]], template: function SendComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-password-strength-visualizer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Safely send ETH and ERC-20 tokens through ethbox. Only the recipient will be able to retrieve the funds using the correct passphrase.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Recipient ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function SendComponent_Template_input_input_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19); ctx.recipient = _r0.value; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "app-address-book", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onAddressSelected", function SendComponent_Template_app_address_book_onAddressSelected_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19); ctx.recipient = $event.address; _r0.value = $event.address; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " Passphrase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function SendComponent_Template_input_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29); ctx.password = _r1.value; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mousedown", function SendComponent_Template_button_mousedown_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29); return _r1.setAttribute("type", "text"); })("mouseup", function SendComponent_Template_button_mouseup_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29); return _r1.setAttribute("type", "password"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "small", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Send amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function SendComponent_Template_input_input_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](45); ctx.sendValue = _r2.value; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "app-token-selector", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onTokenSelected", function SendComponent_Template_app_token_selector_onTokenSelected_47_listener($event) { ctx.sendTokenSelected = $event; return ctx.syncButtonFunctionality(); })("onTokenBalanceUpdated", function SendComponent_Template_app_token_selector_onTokenBalanceUpdated_47_listener($event) { ctx.sendTokenBalance = $event; return ctx.syncButtonFunctionality(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, SendComponent_div_50_Template, 7, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SendComponent_Template_a_click_52_listener() { return ctx.setAdvancedUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " Advanced options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SendComponent_Template_input_change_58_listener() { return ctx.isPrivacyEnabled = !ctx.isPrivacyEnabled; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, " Enable privacy mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "input", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function SendComponent_Template_input_change_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](63); return ctx.setKeepInputs(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, " Keep inputs after sending ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SendComponent_Template_button_click_66_listener() { return ctx.buttonFunction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](67, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](31, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](32, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 21, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.recipientInputColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.recipientInputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](30, 23, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 25, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.isAppReady || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](46, 27, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.sendValueInputColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.sendValueInputText);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.contractServ.isTestnet());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("show", ctx.isAdvancedUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.isPrivacyEnabled ? "checked" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx.keepInputs ? "checked" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isButtonDisabled || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](67, 29, ctx.loadingIndicatorServ.isLoading$) ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.buttonMessage, " ");
    } }, directives: [_password_strength_visualizer_password_strength_visualizer_component__WEBPACK_IMPORTED_MODULE_4__.PasswordStrengthVisualizerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _address_book_address_book_component__WEBPACK_IMPORTED_MODULE_5__.AddressBookComponent, _token_selector_token_selector_component__WEBPACK_IMPORTED_MODULE_6__.TokenSelectorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZW5kLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 40852:
/*!*********************************************************!*\
  !*** ./src/app/components/staking/staking.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StakingComponent": () => (/* binding */ StakingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/contract.service */ 36569);
/* harmony import */ var src_app_services_staking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/staking.service */ 10928);
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/toaster.service */ 13786);
/* harmony import */ var _bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bg-changer/bg-changer.component */ 46567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/to-fixed.pipe */ 35893);








function StakingComponent_div_12_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function StakingComponent_div_12_div_12_Template_input_input_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r5.rewardsToChain(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r3.selectedNetwork);
} }
function StakingComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Use the switch to choose where to claim your staking rewards: either ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Binance Smart Chain");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Ethereum");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "(Default in case of no choice: Binance Smart Chain)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, StakingComponent_div_12_div_12_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.selectedNetwork !== null);
} }
function StakingComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.message);
} }
function StakingComponent_div_14_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.message);
} }
function StakingComponent_div_14_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Staking rewards are shown as if payday was on the selected day.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StakingComponent_div_14_div_14_Template_a_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); $event.preventDefault(); return ctx_r9.onPaginationPreviousClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StakingComponent_div_14_div_14_Template_a_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); $event.preventDefault(); return ctx_r11.onPaginationNextClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Balance in EBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Reward in EBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Payout in EBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "APY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "DuckDAO Bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Liquidity Provider Bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Long-term Holder Months");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", ctx_r8.monthsNames[ctx_r8.pageMonth], " ", ctx_r8.pageDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](21, 9, ctx_r8.userRewardObjAPI.balance, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](28, 12, ctx_r8.userRewardObjAPI.reward, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](35, 15, ctx_r8.userPayoutReward, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](42, 18, ctx_r8.userRewardObjAPI.apy, 2), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.userRewardObjAPI.bonus_duck === "1" ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.userRewardObjAPI.bonus_lp === "1" ? "Yes" : "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.userRewardObjAPI.bonus_long_term_months);
} }
function StakingComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function StakingComponent_div_14_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.claimRewards(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, StakingComponent_div_14_div_13_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, StakingComponent_div_14_div_14_Template, 62, 21, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Hello ", ctx_r2.selectedAccount, "!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.userRewardContract || ctx_r2.userRewardContract < 1 ? "disabled" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 5, ctx_r2.userRewardContract, 2), " EBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.message && !ctx_r2.userRewardObjAPI);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.userRewardObjAPI);
} }
class StakingComponent {
    constructor(contractServ, stakingServ, toasterServ) {
        this.contractServ = contractServ;
        this.stakingServ = stakingServ;
        this.toasterServ = toasterServ;
        this.monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.today = new Date();
        this.selectedNetwork = null; // false Ethereum, true BSC
        this.numberOfDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.subscriptions = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.pageMonth = this.today.getMonth();
            this.pageDate = this.today.getDate();
            // Setting up the reactive code to load the reward
            [
                this.contractServ.chainId$,
                this.contractServ.selectedAccount$,
                this.contractServ.isStakingReady$,
                this.contractServ.stakingInteraction$
            ].forEach(obs => this.subscriptions.push(obs.subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                // Resetting the component
                this.selectedAccount = null;
                this.userRewardObjAPI = null;
                this.userRewardContract = null;
                // Updating local variables
                this.chainId = this.contractServ.chainId$.getValue();
                this.selectedAccount = this.contractServ.selectedAccount$.getValue();
                this.isStakingReady = this.contractServ.isStakingReady$.getValue();
                // Calculating a message for the user
                if (!this.chainId || !this.selectedAccount) {
                    this.message = 'Please connect your wallet first!';
                    return;
                }
                if (!this.contractServ.isEthereumMainnet() && !this.contractServ.isBinanceMainnet()) {
                    this.message = 'Please connect to Ethereum mainnet or BSC mainnet.';
                    return;
                }
                if (!this.isStakingReady) {
                    this.message = 'Initializing ethbox smart contract...';
                    return;
                }
                yield this.setSelectedNetwork();
                // Loading message displayed to the user
                this.message = 'Loading your reward...';
                let dateLimits = yield this.stakingServ.getDateLimits();
                this.minMonth = dateLimits.min_month - 1;
                this.minDate = +dateLimits.min_day;
                this.maxMonth = dateLimits.max_month - 1;
                this.maxDate = +dateLimits.max_day;
                this.pageMonth = this.maxMonth;
                this.pageDate = this.maxDate;
                this.userRewardContract = yield this.contractServ.getReward();
                this.updateUserPayoutReward();
                yield this.fetchRewards();
                if (!this.userRewardObjAPI) {
                    this.message = 'Reward not found';
                    return;
                }
                // Selected reward is available
                this.message = null;
            }))));
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    setSelectedNetwork() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let endpoint = "https://www.ethbox.org/app/set_chain.php";
            let selectedAccount = this.contractServ.selectedAccount$.getValue();
            // Send the signed message to the backend
            let formData = new FormData();
            formData.append("action", "get_chain");
            formData.append("address", selectedAccount);
            let response = yield fetch(endpoint, { method: 'POST', body: formData });
            let status = yield response.json();
            console.log("Status of the request is", status);
            // If error, then return error?
            this.selectedNetwork = !!!status.result;
        });
    }
    rewardsToChain(checkbox) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // There's a bit of confusion here because I want Ethereum on the left and to do that I need to check when the result is 0 (inverted)
            let chainIndex = checkbox.checked ? '0' : '1';
            let endpoint = "https://www.ethbox.org/app/set_chain.php";
            let selectedAccount = this.contractServ.selectedAccount$.getValue();
            let newNetwork = ["Ethereum", "Binance Smart Chain"][chainIndex];
            // Build a magic string as message
            let msg = `ethbox Staking - Set default chain:\r\n${newNetwork}`;
            let signature;
            try {
                // Sign the message
                signature = yield this.contractServ.signMessage(msg);
            }
            catch (e) {
                // If sign is refused then revert the checkbox
                checkbox.checked = !checkbox.checked;
                return;
            }
            console.log("Signed message is", signature);
            // Send the signed message to the backend
            let formData = new FormData();
            formData.append("action", "set_chain");
            formData.append("address", selectedAccount);
            formData.append("signed_msg", signature);
            formData.append("chain", chainIndex);
            let response = yield fetch(endpoint, { method: 'POST', body: formData });
            let status = yield response.json();
            console.log("Status of the request is", status);
            // Notify, via toaster, the fact that the server has switched the network
            if ("error" in status && status.error === 0) {
                this.toasterServ.toastMessage$.next({
                    type: "success",
                    message: `Staking rewards have successfully switched to ${newNetwork}!`,
                    duration: "medium"
                });
            }
            else {
                this.toasterServ.toastMessage$.next({
                    type: "error",
                    message: "Something went wrong.",
                    duration: "medium"
                });
                // If there's any problem with the API then revert the checkbox
                checkbox.checked = !checkbox.checked;
            }
        });
    }
    onPaginationPreviousClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.pageDate <= this.minDate && this.pageMonth <= this.minMonth) {
                return;
            }
            if (this.pageDate < 2) {
                if (this.pageMonth == 0) {
                    this.pageMonth = this.monthsNames.length - 1;
                }
                else {
                    this.pageMonth--;
                }
                this.pageDate = this.numberOfDaysInMonths[this.pageMonth];
            }
            else {
                this.pageDate--;
            }
            yield this.fetchRewards();
        });
    }
    onPaginationNextClick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.pageDate >= this.maxDate && this.pageMonth >= this.maxMonth) {
                return;
            }
            if (this.pageDate == this.numberOfDaysInMonths[this.pageMonth]) {
                if (this.pageMonth == this.monthsNames.length - 1) {
                    this.pageMonth = 0;
                }
                else {
                    this.pageMonth++;
                }
                this.pageDate = 1;
            }
            else {
                this.pageDate++;
            }
            yield this.fetchRewards();
        });
    }
    fetchRewards() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let results = yield this.stakingServ.getData(this.pageMonth, this.pageDate);
            this.fetchedRewards = results
                .map(result => (Object.assign(Object.assign({}, result), { apy: 100 * (Math.pow((1 + result.reward / result.balance), 12) - 1) })));
            this.userRewardObjAPI = this.fetchedRewards
                .find(item => item.address.toLowerCase() == this.selectedAccount.toLowerCase());
            console.log(this.userRewardObjAPI);
        });
    }
    updateUserPayoutReward() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let getPayoutRewardResponse = yield this.stakingServ
                .getPayoutReward(this.selectedAccount);
            if (getPayoutRewardResponse.result) {
                this.userPayoutReward = getPayoutRewardResponse.result;
            }
        });
    }
    claimRewards() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                yield this.contractServ.claimReward();
            }
            catch (e) {
                return;
            }
            yield this.stakingServ.setPayoutReward(this.selectedAccount);
            yield this.updateUserPayoutReward();
        });
    }
}
StakingComponent.ɵfac = function StakingComponent_Factory(t) { return new (t || StakingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_staking_service__WEBPACK_IMPORTED_MODULE_1__.StakingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__.ToasterService)); };
StakingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: StakingComponent, selectors: [["app-staking"]], decls: 15, vars: 4, consts: [[3, "imgSrc"], [1, "main", "py-5", "px-3"], [1, "container-medium", "text-center", "mb-5"], [1, "lead"], ["href", "https://ethbox.medium.com/introducing-ebox-staking-rewards-4c65c07fc89d", "target", "_blank", 1, "text-reset"], ["class", " py-3 fw-lighter", 4, "ngIf"], ["class", "container-medium text-center", 4, "ngIf"], ["class", "container-medium", 4, "ngIf"], [1, "py-3", "fw-lighter"], [4, "ngIf"], ["type", "checkbox", "name", "checkbox", 1, "switch", 3, "checked", "input"], ["selectNetworkCheckbox", ""], [1, "container-medium", "text-center"], [1, "container-medium"], [1, "box-wrapper", "position-relative"], [1, "highlight"], [1, "bg-lightalpha", "rounded-alot", "p-3"], [1, "d-grid", "gap-2", "text-center", "d-md-flex", "align-items-md-center", "justify-content-md-between", "mb-3"], [1, "fs-4", "text-truncate", "p-3"], [1, "btn", "bgn-lg", "btn-eboxprimary", "rounded-alot", "text-uppercase", 3, "disabled", "click"], ["class", "bg-eboxdark text-white p-3 rounded-alot shadow", 4, "ngIf"], [1, "bg-eboxdark", "text-white", "p-3", "rounded-alot", "shadow"], [1, "pagination", "justify-content-center", "mb-0"], [1, "page-item"], ["href", "#", 1, "bg-light", "page-link", "rounded-alot-start", 3, "click"], [1, "page-item", "disabled"], ["href", "#", "tabindex", "-1", 1, "bg-lightalpha", "page-link"], ["href", "#", 1, "bg-light", "rounded-alot-end", "page-link", 3, "click"], [1, "row", "row-cols-1", "row-cols-md-4", "g-3", "mb-3"], [1, "col"], [1, "d-flex", "flex-column", "justify-content-between", "h-100", "p-3", "border", "border-secondary", "rounded-alot"], [1, "fs-5"], [1, "row", "row-cols-1", "row-cols-md-3", "g-3"]], template: function StakingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-bg-changer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Staking rewards");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " To support those who support us, ethbox offers staking rewards for the first 4 years after the token generation event for everyone holding EBOX tokens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " For details, find our staking model explained in this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Medium article");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, StakingComponent_div_12_Template, 13, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, StakingComponent_div_13_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, StakingComponent_div_14_Template, 15, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("imgSrc", "assets/img/staking.jpg");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.message && !ctx.selectedAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedAccount);
    } }, directives: [_bg_changer_bg_changer_component__WEBPACK_IMPORTED_MODULE_3__.BgChangerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], pipes: [_pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_4__.ToFixedPipe], styles: [".switch[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 130px;\r\n  height: 50px;\r\n  margin: 0px;\r\n  -moz-appearance: none;\r\n       appearance: none;\r\n  -webkit-appearance: none;\r\n\r\n  background-image: url('binance-switch.png');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  border-radius: 25px;\r\n  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 0.7);\r\n  transition: background-image 0.7s ease-in-out;\r\n  outline: none;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n\r\n.switch[_ngcontent-%COMP%]:checked {\r\n  background-image: url('ethereum-switch.png');\r\n  background-size: cover;\r\n  transition: background-image 1s ease-in-out;\r\n}\r\n\r\n.switch[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  width: 46px;\r\n  height: 46px;\r\n  border-radius: 50%;\r\n  background-color: #fff;\r\n  position: absolute;\r\n  left: 2px;\r\n  top: 2px;\r\n  transform: translateX(0px);\r\n  animation: off 0.7s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);\r\n  box-shadow: inset 5px -5px 4px rgba(0,0,0,.3);\r\n}\r\n\r\n@keyframes off {\r\n  0% {\r\n    transform: translateX(80px);\r\n    width: 46px;\r\n  }\r\n  50% {\r\n    width: 75px;\r\n    border-radius: 25px;\r\n  }\r\n  100% {\r\n    transform: translateX(0px);\r\n    width: 46px;\r\n  }\r\n}\r\n\r\n.switch[_ngcontent-%COMP%]:checked:after {\r\n  animation: on 0.7s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);\r\n  box-shadow: inset -5px -5px 4px rgba(0,0,0,.3);\r\n}\r\n\r\n@keyframes on {\r\n  0% {\r\n    transform: translateX(0px);\r\n    width: 46px;\r\n  }\r\n  50% {\r\n    width: 75px;\r\n    border-radius: 25px;\r\n  }\r\n  100% {\r\n    transform: translateX(80px);\r\n    width: 46px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWtpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBZ0I7T0FBaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3Qjs7RUFFeEIsMkNBQTBEO0VBQzFELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLHNEQUFzRDtFQUN0RCw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0Q0FBMkQ7RUFDM0Qsc0JBQXNCO0VBQ3RCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsMEJBQTBCO0VBQzFCLDZEQUE2RDtFQUM3RCw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFLDREQUE0RDtFQUM1RCw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzdGFraW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWcvYmluYW5jZS1zd2l0Y2gucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN3aXRjaDpjaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9ldGhlcmV1bS1zd2l0Y2gucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnN3aXRjaDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogNDZweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDJweDtcclxuICB0b3A6IDJweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICBhbmltYXRpb246IG9mZiAwLjdzIGZvcndhcmRzIGN1YmljLWJlemllcigwLjgsIDAuNSwgMC4yLCAxLjQpO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCAtNXB4IDRweCByZ2JhKDAsMCwwLC4zKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBvZmYge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KTtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgd2lkdGg6IDQ2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3dpdGNoOmNoZWNrZWQ6YWZ0ZXIge1xyXG4gIGFuaW1hdGlvbjogb24gMC43cyBmb3J3YXJkcyBjdWJpYy1iZXppZXIoMC44LCAwLjUsIDAuMiwgMS40KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAtNXB4IC01cHggNHB4IHJnYmEoMCwwLDAsLjMpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG9uIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4MHB4KTtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 34566:
/*!***************************************************************************!*\
  !*** ./src/app/components/toaster-notifier/toaster-notifier.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToasterNotifierComponent": () => (/* binding */ ToasterNotifierComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/contract.service */ 36569);
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/toaster.service */ 13786);



class ToasterNotifierComponent {
    constructor(contractServ, toasterServ) {
        this.contractServ = contractServ;
        this.toasterServ = toasterServ;
        this.toasterId = `toaster_${Math.random().toString(36).substring(2)}`;
        this.defaultType = 'primary';
        this.typeList = ['primary', 'secondary', 'danger', 'warning', 'success', 'info'];
        this.colorMap = {
            primary: 'white',
            secondary: 'white',
            danger: 'white',
            warning: 'dark',
            info: 'dark'
        };
        this.defaultDuration = 'short';
        this.durationMap = {
            short: 5e3,
            medium: 8e3,
            long: 14e3
        };
    }
    ngOnInit() {
        this.toasterServ.toastMessage$
            .subscribe(({ type, message, duration }) => {
            if (!this.typeList.includes(type)) {
                type = this.defaultType;
            }
            if (!this.durationMap[duration]) {
                duration = 'short';
            }
            let toastId = this.addToast(type, message);
            setTimeout(() => this.removeToast(toastId), this.durationMap[this.defaultDuration]);
        });
    }
    addToast(type, message) {
        let toastId = `toast_${Math.random().toString(36).substring(2)}`;
        let html = `
        <div id="${toastId}" class="toast show align-items-center text-${this.colorMap[type]} bg-${type} border-0" style="opacity: 0; transition: all 1s ease-out">
            <div class="d-flex">
                <div class="toast-body lead text-break">${message}</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" onclick="this.parentElement.parentElement.classList.remove('show'); this.parentElement.parentElement.classList.add('hide')"></button>
            </div>
        </div>`;
        let newEl = document.createElement('div');
        newEl.innerHTML = html;
        let toastEl = newEl.firstElementChild;
        let toasterEl = document.getElementById(this.toasterId);
        toasterEl.prepend(toastEl);
        setTimeout(() => toastEl.style.opacity = '1', 25);
        return toastId;
    }
    removeToast(id) {
        let toastEl = document.getElementById(id);
        toastEl.style.opacity = '0';
        setTimeout(() => toastEl.remove(), 900);
    }
}
ToasterNotifierComponent.ɵfac = function ToasterNotifierComponent_Factory(t) { return new (t || ToasterNotifierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__.ToasterService)); };
ToasterNotifierComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ToasterNotifierComponent, selectors: [["app-toaster-notifier"]], decls: 1, vars: 1, consts: [[1, "toast-container", "position-fixed", "bottom-0", "start-50", "translate-middle-x", "lead", "text-white", "p-3", 2, "z-index", "999999999", 3, "id"]], template: function ToasterNotifierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.toasterId);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdGVyLW5vdGlmaWVyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 75473:
/*!***********************************************************************!*\
  !*** ./src/app/components/token-selector/token-selector.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenSelectorComponent": () => (/* binding */ TokenSelectorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/loading-indicator.service */ 4762);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contract.service */ 36569);
/* harmony import */ var src_app_services_prompt_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/prompt-dialog.service */ 18510);
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toaster.service */ 13786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/to-fixed.pipe */ 35893);









function TokenSelectorComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TokenSelectorComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TokenSelectorComponent_ng_container_0_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isBalanceEnabled);
} }
function TokenSelectorComponent_ng_template_1_button_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TokenSelectorComponent_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TokenSelectorComponent_ng_template_1_button_0_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Choose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-bs-target", "#" + ctx_r7.randomId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.isBalanceEnabled);
} }
function TokenSelectorComponent_ng_template_1_button_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TokenSelectorComponent_ng_template_1_button_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r12.selectedTokenBalance.decimalValue, 3), " ");
} }
function TokenSelectorComponent_ng_template_1_button_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TokenSelectorComponent_ng_template_1_button_1_ng_container_2_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TokenSelectorComponent_ng_template_1_button_1_ng_container_2_div_2_Template, 3, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.isBalanceLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r10.isBalanceLoading);
} }
function TokenSelectorComponent_ng_template_1_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TokenSelectorComponent_ng_template_1_button_1_ng_container_2_Template, 3, 2, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 5, ctx_r8.loadingIndicatorServ.isLoading$) ? "disabled" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-bs-target", "#" + ctx_r8.randomId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.isBalanceEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r8.selectedToken.symbol, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r8.selectedToken.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function TokenSelectorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TokenSelectorComponent_ng_template_1_button_0_Template, 4, 2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TokenSelectorComponent_ng_template_1_button_1_Template, 7, 7, "button", 24);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.selectedToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.selectedToken);
} }
function TokenSelectorComponent_div_24_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Network base token");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function TokenSelectorComponent_div_24_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const token_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](token_r13.address);
} }
function TokenSelectorComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TokenSelectorComponent_div_24_Template_a_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const token_r13 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.selectToken(token_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TokenSelectorComponent_div_24_ng_container_8_Template, 3, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TokenSelectorComponent_div_24_ng_template_9_Template, 2, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const token_r13 = ctx.$implicit;
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", token_r13.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", token_r13.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](token_r13.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", token_r13.address === "0x0000000000000000000000000000000000000000")("ngIfElse", _r15);
} }
function TokenSelectorComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Use the search to find more coins");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
let SmartInterval = __webpack_require__(/*! smartinterval */ 2270);
class TokenSelectorComponent {
    constructor(loadingIndicatorServ, contractServ, ngZone, promptDialogServ, toasterServ) {
        this.loadingIndicatorServ = loadingIndicatorServ;
        this.contractServ = contractServ;
        this.ngZone = ngZone;
        this.promptDialogServ = promptDialogServ;
        this.toasterServ = toasterServ;
        this.isBalanceEnabled = true;
        this.onTokenSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.onTokenBalanceUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.randomId = `modal_${Math.random().toString(36).substring(2)}`;
        this.maxToShow = 60;
        this.isBalanceLoading = false;
        this.balancePollingCycleDelay = 6e3;
        this.balancePollingStartDelay = 0;
    }
    ngOnInit() {
        // This loop calls getTokenBalance(), waits for the result and then repeats
        // This polling loop never starts if isBalanceEnabled is set to false by the host component
        this.balancePollingLoop = new SmartInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let balance = yield this.contractServ
                .getTokenBalance(this.selectedToken.address);
            this.ngZone.run(() => {
                this.selectedTokenBalance = balance;
                this.onTokenBalanceUpdated.emit(balance);
                console.log('Selected token balance', balance);
                this.isBalanceLoading = false;
            });
        }), this.balancePollingCycleDelay, this.balancePollingStartDelay);
        this.subscription = this.contractServ.tokens$
            .subscribe(tokens => {
            this.tokens = tokens;
            this.filteredTokens = null;
            this.selectedToken = null;
            this.onTokenSelected.emit(null);
            this.balancePollingLoop.stop();
            this.selectedTokenBalance = null;
            this.onTokenBalanceUpdated.emit(null);
            if (tokens) {
                this.filteredTokens = tokens.slice(0, this.maxToShow);
            }
        });
    }
    ngAfterViewInit() {
        // Moves the modal to the body (backdrop hackfix)
        let modal = document.getElementById(this.randomId);
        document.body.appendChild(modal);
    }
    ngOnDestroy() {
        // Removes the modal from the body (backdrop hackfix)
        document.getElementById(this.randomId).remove();
        this.subscription.unsubscribe();
        this.balancePollingLoop.stop();
    }
    selectToken(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedToken = token;
            this.onTokenSelected.emit(token);
            console.log('Selected token', token);
            if (this.isBalanceEnabled) {
                this.selectedTokenBalance = null;
                this.onTokenBalanceUpdated.emit(null);
                this.isBalanceLoading = true;
                this.balancePollingLoop.stop();
                this.balancePollingLoop.start();
            }
        });
    }
    filterTokens(search) {
        this.filteredTokens = this.tokens
            .filter(token => {
            let trimmed = search.trim();
            let lcSearch = trimmed.toLowerCase();
            let lcName = token.name.toLowerCase();
            let lcSymbol = token.symbol.toLowerCase();
            let lcAddress = token.address.toLowerCase();
            return !search || lcName.includes(lcSearch) || lcSymbol.includes(lcSearch) || lcAddress.includes(lcSearch);
        })
            .slice(0, this.maxToShow);
    }
    identifier(index, token) {
        return token.address;
    }
    customTokenPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let response = yield this.promptDialogServ.spawn({
                dialogName: 'Add a new custom token',
                message: 'Specify a valid token contract to add the new token',
                inputs: {
                    address: {
                        label: 'Insert token address'
                    }
                },
                submitButtonName: 'Add',
                cancelButtonName: 'Cancel'
            });
            // While token address is set but invalid or already present keep spawning
            while (response !== null
                && (!this.contractServ.isValidAddress(response.address.value)
                    || this.contractServ.tokensMap[response.address.value])) {
                response = yield this.promptDialogServ.spawn({
                    dialogName: 'Add a new custom token',
                    message: 'Specified token address ' +
                        ((this.contractServ.tokensMap[response.address.value])
                            ? 'is already present, try another'
                            : 'was invalid, try again'),
                    messageColor: 'danger',
                    inputs: {
                        address: {
                            label: 'Insert token address'
                        }
                    },
                    submitButtonName: 'Add',
                    cancelButtonName: 'Cancel'
                });
            }
            if (response === null) {
                return;
            }
            let tokenData = yield this.contractServ.getTokenData(response.address.value);
            if (!tokenData.decimals || !tokenData.name || !tokenData.symbol) {
                this.toasterServ.toastMessage$.next({
                    type: 'danger',
                    message: 'Some important information of the token is missing!',
                    duration: 'long'
                });
                return;
            }
            let LSKey = `customTokens${this.contractServ.chainId$.getValue()}`;
            let customTokens = [];
            let customTokensLS = localStorage.getItem(LSKey);
            if (customTokensLS) {
                customTokens = JSON.parse(customTokensLS);
            }
            customTokens.push({
                address: tokenData.address,
                name: tokenData.name,
                symbol: tokenData.symbol,
                decimals: tokenData.decimals
            });
            localStorage.setItem(LSKey, JSON.stringify(customTokens));
            this.contractServ.loadTokens();
            this.toasterServ.toastMessage$.next({
                type: 'success',
                message: 'The new token has been added successfully!',
                duration: 'long'
            });
        });
    }
}
TokenSelectorComponent.ɵfac = function TokenSelectorComponent_Factory(t) { return new (t || TokenSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_loading_indicator_service__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_1__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_prompt_dialog_service__WEBPACK_IMPORTED_MODULE_2__.PromptDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService)); };
TokenSelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TokenSelectorComponent, selectors: [["app-token-selector"]], inputs: { isBalanceEnabled: "isBalanceEnabled" }, outputs: { onTokenSelected: "onTokenSelected", onTokenBalanceUpdated: "onTokenBalanceUpdated" }, decls: 27, vars: 7, consts: [[4, "ngIf", "ngIfElse"], ["selectorReady", ""], [1, "modal", 3, "id"], [1, "modal-dialog", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content", "rounded-alot", 2, "height", "90vh"], [1, "modal-header"], [1, "flex-grow-1"], [1, "d-flex", "justify-content-between", "mb-3"], [1, "modal-title"], ["data-bs-dismiss", "modal", 1, "btn-close"], ["type", "text", "placeholder", "Search in the list", 1, "form-control", "rounded-alot", 3, "input"], ["searchInput", ""], [1, "modal-body"], [1, "d-flex", "flex-column", "justify-content-center", "align-items-center", "gap-3", "mb-3"], [1, "btn", "btn-outline-eboxprimary", "rounded-alot", 3, "click"], [1, "bi", "bi-plus-circle"], [1, "text-muted"], ["class", "align-items-center btn-outline-eboxprimary border rounded-alot d-flex mb-3 p-3 position-relative", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-center"], ["class", "text-muted", 4, "ngIf"], ["disabled", "", 1, "btn", "btn-eboxprimary", "rounded-alot", "w-100"], [4, "ngIf"], [1, "bi", "bi-chevron-expand"], ["data-bs-toggle", "modal", "class", "btn btn-eboxprimary rounded-alot w-100", 4, "ngIf"], ["data-bs-toggle", "modal", "class", "btn btn-eboxprimary rounded-alot w-100", 3, "disabled", 4, "ngIf"], ["data-bs-toggle", "modal", 1, "btn", "btn-eboxprimary", "rounded-alot", "w-100"], ["data-bs-toggle", "modal", 1, "btn", "btn-eboxprimary", "rounded-alot", "w-100", 3, "disabled"], [1, "d-flex", "align-items-center", "justify-content-center", "gap-1", "text-uppercase"], [2, "width", "1.5rem", "height", "1.5rem", 3, "src"], [1, "spinner-border", "spinner-border-sm"], [1, "align-items-center", "btn-outline-eboxprimary", "border", "rounded-alot", "d-flex", "mb-3", "p-3", "position-relative"], [1, "flex-shrink-0", "me-2", 2, "width", "2rem", "height", "2rem", 3, "src"], [1, "text-truncate"], ["href", "#", "data-bs-dismiss", "modal", 1, "stretched-link", "text-reset", "text-decoration-none", 3, "click"], [1, "text-uppercase"], ["showTokenAddress", ""]], template: function TokenSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TokenSelectorComponent_ng_container_0_Template, 5, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TokenSelectorComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function TokenSelectorComponent_Template_input_input_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16); return ctx.filterTokens(_r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TokenSelectorComponent_Template_button_click_19_listener() { return ctx.customTokenPrompt(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Add new token ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Select a token to show your balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TokenSelectorComponent_div_24_Template, 11, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, TokenSelectorComponent_small_26_Template, 2, 0, "small", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.tokens)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", ctx.randomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("There are ", ctx.tokens == null ? null : ctx.tokens.length, " tokens, please use the search.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filteredTokens)("ngForTrackBy", ctx.identifier);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.tokens && ctx.tokens.length > 20);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_4__.ToFixedPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2tlbi1zZWxlY3Rvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 24406:
/*!*********************************************************!*\
  !*** ./src/app/components/top-bar/top-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopBarComponent": () => (/* binding */ TopBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/contract.service */ 36569);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/to-fixed.pipe */ 35893);





function TopBarComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopBarComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.contractServ.connect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Connect ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TopBarComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopBarComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.contractServ.disconnect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.contractServ.networkInfo(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r1.contractServ.connection.chainId$)).baseTokenThumb, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx_r1.contractServ.selectedAccount$), 0, 6), "... ");
} }
function TopBarComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Network:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Account:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Balance:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "toFixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.contractServ.networkInfo(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, ctx_r2.contractServ.connection.chainId$)).name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, ctx_r2.contractServ.connection.selectedAccount$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 11, ctx_r2.contractServ.connection.baseTokenBalance$), 2), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.contractServ.networkInfo(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 13, ctx_r2.contractServ.connection.chainId$)).baseTokenThumb, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
const _c0 = function () { return { exact: true }; };
class TopBarComponent {
    constructor(contractServ) {
        this.contractServ = contractServ;
        this.areThereIncomingBoxes = false;
        this.wasIncomingTouched = false;
        this.contractServ.incomingBoxes$
            .subscribe(boxes => {
            // This piece of code lights up a red dot on the button "Incoming" if there are incoming boxes that are not yet taken
            if (!boxes || boxes.length == 0 || boxes.every(box => box.taken)) {
                this.areThereIncomingBoxes = false;
                return;
            }
            this.areThereIncomingBoxes = true;
        });
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService)); };
TopBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 28, vars: 15, consts: [[1, "align-items-center", "bar-height", "bg-lightalpha", "d-flex", "justify-content-between", "fixed-top", "px-3", "shadow"], ["href", "#", "routerLink", "/", 2, "margin-left", "56px"], ["src", "assets/img/logo.png", 1, "d-inline-block", "d-lg-none", "taptarget-height"], ["src", "assets/img/logo-text.png", 1, "d-none", "d-lg-inline-block", "taptarget-height"], [1, "d-none", "d-lg-flex", "gap-3", "align-items-center", "position-absolute", "start-50", "translate-middle-x"], ["routerLinkActive", "tab-active", 1, "btn", "btn-eboxprimary", "btn-skewed", "position-relative", "shadow", 3, "routerLinkActiveOptions"], ["href", "#", "routerLink", "/", 1, "stretched-link", "text-decoration-none", "text-uppercase", "text-reset"], [1, "bi", "bi-box"], ["routerLinkActive", "tab-active", 1, "btn", "btn-eboxprimary", "btn-skewed", "position-relative", "shadow"], ["href", "#", "routerLink", "/over-the-counter", 1, "stretched-link", "text-decoration-none", "text-uppercase", "text-reset"], [1, "bi", "bi-shuffle"], ["routerLinkActive", "tab-active", 1, "btn", "btn-eboxprimary", "btn-skewed", "position-relative", 3, "click"], ["href", "#", "routerLink", "/boxes/received", 1, "stretched-link", "text-decoration-none", "text-uppercase", "text-reset"], [1, "bi", "bi-box-arrow-in-right"], ["href", "#", "routerLink", "/boxes/sent", 1, "stretched-link", "text-decoration-none", "text-uppercase", "text-reset"], [1, "bi", "bi-box-arrow-right"], ["class", "btn btn-eboxprimary rounded-alot", 3, "click", 4, "ngIf"], ["class", "connection-status", 4, "ngIf"], [1, "btn", "btn-eboxprimary", "rounded-alot", 3, "click"], [2, "height", "21px", 3, "src"], [1, "bi", "bi-x-circle"], [1, "connection-status"], [1, "connection-status-heading"], [1, "d-flex", "align-items-center"], ["alt", "Base token thumb", 2, "height", "1rem", "margin-left", ".5rem", 3, "src"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " OTC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopBarComponent_Template_div_click_14_listener() { return ctx.wasIncomingTouched = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Incoming ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Outgoing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TopBarComponent_button_22_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TopBarComponent_button_24_Template, 7, 10, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, TopBarComponent_div_26_Template, 19, 15, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("shadow", !ctx.areThereIncomingBoxes || ctx.wasIncomingTouched)("btn-eboxpulser", ctx.areThereIncomingBoxes && !ctx.wasIncomingTouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 8, ctx.contractServ.selectedAccount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 10, ctx.contractServ.selectedAccount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 12, ctx.contractServ.connection.isConnected$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe, _pipes_to_fixed_pipe__WEBPACK_IMPORTED_MODULE_1__.ToFixedPipe], styles: [".tab-active[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background: linear-gradient(to bottom right, #7990b0, #8f0d72);\r\n  border-color: #7990b0;\r\n  box-shadow: 0 0.2rem 0.3rem rgba(0, 0, 0, 0.25) !important;\r\n}\r\n\r\n.connection-status[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 100%;\r\n  right: 0;\r\n  display: grid;\r\n  grid-template-columns: auto auto;\r\n  align-items: center;\r\n  grid-gap: .5rem .75rem;\r\n  max-width: 100%;\r\n  padding: 1rem;\r\n  border-top: 1px solid #ddd;\r\n  border-bottom-left-radius: 1.5rem;\r\n  word-break: break-all;\r\n  background-color: rgba(255, 255, 255, 0.9);\r\n  box-shadow: -5px 5px 10px #0001;\r\n}\r\n\r\n.connection-status-heading[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .connection-status[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    grid-gap: .5rem;\r\n    gap: .5rem;\r\n    width: 100%;\r\n    padding: .25rem 1rem;\r\n    border-bottom-left-radius: 0;\r\n    white-space: nowrap;\r\n    overflow: auto;\r\n  }\r\n  .connection-status[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:nth-child(2n) {\r\n    margin-right: .75rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWiw4REFBOEQ7RUFDOUQscUJBQXFCO0VBQ3JCLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMscUJBQXFCO0VBQ3JCLDBDQUEwQztFQUMxQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsZUFBVTtJQUFWLFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjNzk5MGIwLCAjOGYwZDcyKTtcclxuICBib3JkZXItY29sb3I6ICM3OTkwYjA7XHJcbiAgYm94LXNoYWRvdzogMCAwLjJyZW0gMC4zcmVtIHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbm5lY3Rpb24tc3RhdHVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBncmlkLWdhcDogLjVyZW0gLjc1cmVtO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEuNXJlbTtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIGJveC1zaGFkb3c6IC01cHggNXB4IDEwcHggIzAwMDE7XHJcbn1cclxuXHJcbi5jb25uZWN0aW9uLXN0YXR1cy1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb25uZWN0aW9uLXN0YXR1cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGdhcDogLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4yNXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgLmNvbm5lY3Rpb24tc3RhdHVzICo6bnRoLWNoaWxkKDJuKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 80660:
/*!*******************************************************************!*\
  !*** ./src/app/components/view-console/view-console.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewConsoleComponent": () => (/* binding */ ViewConsoleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_view_console_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/view-console.service */ 21328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);



const _c0 = ["consoleOpeningCheckbox"];
function ViewConsoleComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-warning", m_r2.type === "warn")("text-danger", m_r2.type === "err");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, m_r2.timestamp, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", m_r2.message, " ");
} }
class ViewConsoleComponent {
    constructor(viewConsoleServ) {
        this.viewConsoleServ = viewConsoleServ;
        this.consoleShowState = JSON.parse(localStorage.getItem("consoleShowState")) || false;
    }
    ngOnInit() {
        this.messages = this.viewConsoleServ.messages;
        // setInterval(() => this.viewConsoleServ.log("I like ice cream"), 1000);
    }
    ngAfterViewInit() {
        // Show the console if the consoleShowState is true
        if (this.consoleShowState) {
            this.consoleOpeningCheckbox.nativeElement.checked = true;
        }
    }
    setConsoleShowState(checkbox) {
        localStorage.setItem("consoleShowState", JSON.stringify(checkbox.checked));
    }
}
ViewConsoleComponent.ɵfac = function ViewConsoleComponent_Factory(t) { return new (t || ViewConsoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_view_console_service__WEBPACK_IMPORTED_MODULE_0__.ViewConsoleService)); };
ViewConsoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewConsoleComponent, selectors: [["app-view-console"]], viewQuery: function ViewConsoleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.consoleOpeningCheckbox = _t.first);
    } }, decls: 8, vars: 1, consts: [["hidden", "", "id", "console-opening-trigger", "type", "checkbox", 3, "input"], ["consoleOpeningCheckbox", ""], ["id", "view-console-wrapper"], ["for", "console-opening-trigger", "id", "view-console-handle", 1, "rounded-alot-top"], ["id", "view-console", 1, "px-3", "pt-3", "overflow-auto", "font-monospace", "text-break"], [1, "list-unstyled", "d-grid", "gap-2"], [3, "text-warning", "text-danger", 4, "ngFor", "ngForOf"], [1, "text-info"]], template: function ViewConsoleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ViewConsoleComponent_Template_input_input_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx.setConsoleShowState(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Console ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ViewConsoleComponent_li_7_Template, 6, 9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["#view-console-wrapper[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 100%;\r\n  width: 432px;\r\n  max-width: 75vw;\r\n  height: 100%;\r\n  transform: translateX(-100%);\r\n  box-shadow: -10px 0 20px #0004;\r\n  transition: transform .3s ease, box-shadow .6s ease .3s;\r\n}\r\n#console-opening-trigger[_ngcontent-%COMP%]:not(:checked)    + #view-console-wrapper[_ngcontent-%COMP%] {\r\n  transform: translateX(0);\r\n  z-index: 10;\r\n  box-shadow: -5px 0 10px #0002;\r\n}\r\n#view-console-handle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: calc(100vh - 128px);\r\n  right: calc(100% - 32px);\r\n  transform: translate(28px, -50%) rotateZ(-90deg);\r\n  height: 100px;\r\n  padding: 4px 15px;\r\n  border-top: 1px solid #bbb;\r\n  background-color: #fff;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer;\r\n}\r\n#view-console[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #fff;\r\n  height: 100%;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctY29uc29sZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qix1REFBdUQ7QUFDekQ7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixnREFBZ0Q7RUFDaEQsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2IiLCJmaWxlIjoidmlldy1jb25zb2xlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmlldy1jb25zb2xlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMTAwJTtcclxuICB3aWR0aDogNDMycHg7XHJcbiAgbWF4LXdpZHRoOiA3NXZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IC0xMHB4IDAgMjBweCAjMDAwNDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UsIGJveC1zaGFkb3cgLjZzIGVhc2UgLjNzO1xyXG59XHJcbiNjb25zb2xlLW9wZW5pbmctdHJpZ2dlcjpub3QoOmNoZWNrZWQpICsgI3ZpZXctY29uc29sZS13cmFwcGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYm94LXNoYWRvdzogLTVweCAwIDEwcHggIzAwMDI7XHJcbn1cclxuI3ZpZXctY29uc29sZS1oYW5kbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoMTAwdmggLSAxMjhweCk7XHJcbiAgcmlnaHQ6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI4cHgsIC01MCUpIHJvdGF0ZVooLTkwZGVnKTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmJiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiN2aWV3LWNvbnNvbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 35893:
/*!****************************************!*\
  !*** ./src/app/pipes/to-fixed.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToFixedPipe": () => (/* binding */ ToFixedPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ToFixedPipe {
    transform(value, fractionLimit) {
        if (isNaN(value) || value === undefined || value === null) {
            return null;
        }
        let _value = value.toString();
        let whole = '', fraction = '';
        if (_value.indexOf('.') > -1) {
            [whole, fraction] = _value.split('.');
        }
        else {
            whole = _value;
        }
        let usFormat = '';
        let count = 0;
        for (let c = whole.length - 1; c >= 0; c--) {
            if (count === 3) {
                usFormat = ',' + usFormat;
                count = 0;
            }
            usFormat = whole[c] + usFormat;
            count++;
        }
        let trimmedFraction = '';
        if (fractionLimit > 0) {
            trimmedFraction = '.' + fraction.slice(0, fractionLimit);
            trimmedFraction = trimmedFraction.padEnd(fractionLimit + 1, '0');
        }
        return usFormat + trimmedFraction;
    }
}
ToFixedPipe.ɵfac = function ToFixedPipe_Factory(t) { return new (t || ToFixedPipe)(); };
ToFixedPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toFixed", type: ToFixedPipe, pure: true });


/***/ }),

/***/ 76383:
/*!**************************************************!*\
  !*** ./src/app/services/address-book.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressBookService": () => (/* binding */ AddressBookService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract.service */ 36569);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toaster.service */ 13786);



class AddressBookService {
    constructor(contractServ, toasterServ) {
        this.contractServ = contractServ;
        this.toasterServ = toasterServ;
        this.collectionKey = 'address-book';
    }
    getAddressesFromLS() {
        let addresses = localStorage.getItem(this.collectionKey);
        if (addresses) {
            return JSON.parse(addresses);
        }
        return [];
    }
    getAddressesMap() {
        let addresses = this.getAddressesFromLS();
        return addresses.reduce((o, e) => (o[e.address] = e.label, o), {});
    }
    addAddress(name, address) {
        let addresses = this.getAddressesFromLS();
        if (!this.checkName(addresses, name) || !this.checkAddress(addresses, address)) {
            return false;
        }
        addresses.push({
            label: name,
            address: address,
            timestamp: Date.now()
        });
        localStorage.setItem(this.collectionKey, JSON.stringify(addresses));
        return addresses;
    }
    removeAddress(address) {
        let addresses = this.getAddressesFromLS();
        let foundId = addresses.findIndex(addr => addr.address == address);
        if (foundId < 0) {
            return false;
        }
        addresses.splice(foundId, 1);
        localStorage.setItem(this.collectionKey, JSON.stringify(addresses));
        return addresses;
    }
    checkName(addresses, name) {
        if (!/^[a-zA-Z0-9 ]{2,32}$/.test(name)) {
            this.toasterServ.toastMessage$.next({
                type: 'danger',
                message: 'Name must be alphanumeric (spaces allowed), between 2 and 40 characters long',
                duration: 'long'
            });
            return false;
        }
        let found = addresses.find(addr => addr.label == name);
        if (found) {
            this.toasterServ.toastMessage$.next({
                type: 'danger',
                message: `Name already in the list. Please provide a new one.`,
                duration: 'long'
            });
            return false;
        }
        return true;
    }
    checkAddress(addresses, address) {
        if (!this.contractServ.isValidAddress(address)) {
            this.toasterServ.toastMessage$.next({
                type: 'danger',
                message: 'Address provided is invalid, please retry.',
                duration: 'long'
            });
            return false;
        }
        let found = addresses.find(addr => addr.address == address);
        if (found) {
            this.toasterServ.toastMessage$.next({
                type: 'danger',
                message: `Address already in the list. Please provide a new one.`,
                duration: 'long'
            });
            return false;
        }
        return true;
    }
}
AddressBookService.ɵfac = function AddressBookService_Factory(t) { return new (t || AddressBookService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_toaster_service__WEBPACK_IMPORTED_MODULE_1__.ToasterService)); };
AddressBookService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AddressBookService, factory: AddressBookService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5882:
/*!****************************************************!*\
  !*** ./src/app/services/confirm-dialog.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogService": () => (/* binding */ ConfirmDialogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ConfirmDialogService {
    constructor() {
        this.transitionDelay = 250;
    }
    spawn({ dialogName, message, confirmButtonName, cancelButtonName }) {
        if (!message) {
            throw new Error('Message is required.');
        }
        // Some defaults
        dialogName = dialogName || 'Are you sure?';
        confirmButtonName = confirmButtonName || 'Proceed';
        cancelButtonName = cancelButtonName || 'Cancel';
        // The id is used to generate a unique dialog and to retrieve it during the removal
        let randomId = Math.random().toString(36).substring(2);
        // Making the dialog
        let newEl = document.createElement('div');
        newEl.innerHTML = this.getTemplate(randomId, dialogName, message, confirmButtonName, cancelButtonName);
        let dialogWrapper = newEl.firstElementChild;
        let dialog = dialogWrapper.firstElementChild;
        // This is so I can code the click-outside-to-close feature
        dialog.addEventListener('click', evt => evt.stopPropagation());
        // Appending the dialog
        document.body.appendChild(dialogWrapper);
        setTimeout(() => {
            dialogWrapper.style.opacity = '1';
            dialog.style.opacity = '1';
            document.body.style.overflow = 'hidden';
        }, 25);
        // Making a promise that will resolve on button clicked
        let resolve;
        let closePromise = new Promise(_resolve => {
            // Saving the reference so it can be used outside
            resolve = _resolve;
        });
        // Attaching to the window the callback for the buttons
        window[`onConfirm${randomId}`] = isConfirmed => {
            resolve(isConfirmed);
            // Deleting the resolve function from the window
            delete window[`onConfirm${randomId}`];
            // Removing the dialog
            let dialogWrapper = document.querySelector(`#confirm_${randomId}`);
            let dialog = dialogWrapper.firstElementChild;
            dialogWrapper.style.opacity = '0';
            dialog.style.opacity = '0';
            setTimeout(() => {
                dialogWrapper.remove();
                document.body.style.overflow = 'visible';
            }, this.transitionDelay);
        };
        return closePromise;
    }
    getTemplate(id, dialogName, message, confirmButtonName, cancelButtonName) {
        return `
        <div id="confirm_${id}" class="d-flex align-items-center justify-content-center position-fixed p-3" style="opacity: 0; top: 0; left: 0; bottom: 0; right: 0; background-color: rgba(0, 0, 0, .5); z-index: 1669; transition: all ${this.transitionDelay}ms ease-out" onclick="onConfirm${id}(false)">
            <div class="bg-white container-small rounded-alot" style="opacity: 0; z-index: 1670; transition: all ${this.transitionDelay}ms ease-out">
                <header class="d-flex align-items-center p-3 border-bottom">
                    <div class="fs-5 me-auto">${dialogName}</div>
                    <button onclick="onConfirm${id}(false)" class="btn-close"></button>
                </header>
                <div class="p-3 pb-0">
                    <p>${message}</p>
                </div>
                <footer class="p-3 border-top text-end">
                    <button onclick="onConfirm${id}(false)" class="btn btn-outline-eboxprimary rounded-alot me-2">${cancelButtonName}</button>
                    <button onclick="onConfirm${id}(true)" class="btn btn-eboxprimary rounded-alot">${confirmButtonName}</button>
                </footer>
            </div>
        </div>`;
    }
}
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(); };
ConfirmDialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 36569:
/*!**********************************************!*\
  !*** ./src/app/services/contract.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractService": () => (/* binding */ ContractService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _constants_various__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/various */ 34084);
/* harmony import */ var _constants_abis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/abis */ 16065);
/* harmony import */ var _constants_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/tokens */ 51011);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ 84098);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var walletlink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! walletlink */ 89098);
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fortmatic */ 56272);
/* harmony import */ var fortmatic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fortmatic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @walletconnect/web3-provider */ 5924);
/* harmony import */ var _polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polkadot/extension-dapp */ 13593);
/* harmony import */ var _reef_defi_evm_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reef-defi/evm-provider */ 60158);
/* harmony import */ var _reef_defi_evm_provider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reef_defi_evm_provider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _polkadot_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polkadot/api */ 68300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _loading_indicator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading-indicator.service */ 4762);
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toaster.service */ 13786);
/* harmony import */ var _confirm_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-dialog.service */ 5882);
/* harmony import */ var _view_console_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view-console.service */ 21328);





// For Coinbase Wallet

// For Fortmatic

// For WalletConnect

// For Polkadot Wallet








// Web3Utils is used exclusively for soliditySha3 function
let Web3Utils = __webpack_require__(/*! web3-utils */ 5447);
let { ObsEmitter, ObsCacher } = __webpack_require__(/*! bada55asyncutils */ 42376);
let SmartInterval = __webpack_require__(/*! smartinterval */ 2270);
let EthersModal = __webpack_require__(/*! ethersmodal */ 9268);
class ContractService {
    constructor(ngZone, loadingIndicatorServ, toasterServ, confirmDialogServ, viewConsoleServ) {
        this.ngZone = ngZone;
        this.loadingIndicatorServ = loadingIndicatorServ;
        this.toasterServ = toasterServ;
        this.confirmDialogServ = confirmDialogServ;
        this.viewConsoleServ = viewConsoleServ;
        this.APP_NAME = "ethbox";
        this.INFURA_API_KEY = "b5b51030cf3e451bb523a3f2ca10e3ff";
        this.FORTMATIC_API_KEY = "pk_test_ADCE42E053643A95";
        // To know more about ObsEmitter, ObsCacher and ObsReplayer see https://github.com/4skinSkywalker/AsyncUtils
        this.tokens$ = new ObsCacher(null);
        this.chainId$ = new ObsCacher(null);
        this.selectedAccount$ = new ObsCacher(null);
        this.incomingBoxes$ = new ObsCacher(null);
        this.outgoingBoxes$ = new ObsCacher(null);
        this.isChainSupported$ = new ObsCacher(false);
        this.isReefMainnet$ = new ObsCacher(false);
        this.isEthereumMainnet$ = new ObsCacher(false);
        this.isBinanceMainnet$ = new ObsCacher(false);
        this.isMaticMainnet$ = new ObsCacher(false);
        this.isAppReady$ = new ObsCacher(false);
        this.isStakingReady$ = new ObsCacher(false);
        this.approvalInteraction$ = new ObsEmitter();
        this.boxInteraction$ = new ObsEmitter();
        this.stakingInteraction$ = new ObsEmitter();
        this.tokenDispenserInteraction$ = new ObsEmitter();
        // These variables are just for the boxes loop, it uses SmartInterval under the hood, to know more see https://github.com/4skinSkywalker/SmartInterval
        this.boxesIntervalCycleDelay = 2e3;
        this.init();
    }
    ; // This is a relayer for connection.chainId$
    ; // This is a relayer for connection.selectedAccount$
    // Connect the user to the dapp
    // Run on user interaction
    connect() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.loadingIndicatorServ.on();
            try {
                yield this.em.connect();
            }
            catch (err) {
                this.loadingIndicatorServ.off();
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: err,
                    duration: "long"
                });
                throw err;
            }
            this.loadingIndicatorServ.off();
        });
    }
    // Disconnect the user from the dapp
    // Run on user interaction
    disconnect() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            this.em.disconnect();
            this.reset();
        });
    }
    // Setup EthersModal and launch the box interval
    init() {
        let myWallets = EthersModal.providers.array;
        // Setup of Coinbase configurations
        let coinbaseCfg = EthersModal.providers.dictionary.CoinbaseCfg;
        coinbaseCfg.options.appName = this.APP_NAME;
        coinbaseCfg.options.infuraApiKey = this.INFURA_API_KEY;
        coinbaseCfg.package = walletlink__WEBPACK_IMPORTED_MODULE_4__["default"];
        myWallets.push(coinbaseCfg);
        // Setup of Fortmatic configurations
        let fortmaticCfg = EthersModal.providers.dictionary.FortmaticCfg;
        fortmaticCfg.options.fortmaticApiKey = this.FORTMATIC_API_KEY;
        fortmaticCfg.options.infuraApiKey = this.INFURA_API_KEY;
        fortmaticCfg.package = (fortmatic__WEBPACK_IMPORTED_MODULE_5___default());
        myWallets.push(fortmaticCfg);
        // Setup of WalletConnect configurations
        let walletConnectCfg = EthersModal.providers.dictionary.WalletConnectCfg;
        walletConnectCfg.options.infuraApiKey = this.INFURA_API_KEY;
        walletConnectCfg.package = _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6__["default"];
        myWallets.push(walletConnectCfg);
        // Setup of Polkadot configurations
        let polkadotCfg = EthersModal.providers.dictionary.PolkadotCfg;
        polkadotCfg.options.appName = this.APP_NAME;
        polkadotCfg.package = [
            _polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_13__,
            _reef_defi_evm_provider__WEBPACK_IMPORTED_MODULE_7__,
            _polkadot_api__WEBPACK_IMPORTED_MODULE_14__
        ];
        myWallets.push(polkadotCfg);
        // Instantiate EthersModal and get the connection
        this.em = new EthersModal({
            providerOpts: myWallets,
            cacheProvider: true
        });
        this.connection = this.em.connection;
        // The following code is to setup relayers for retro-compatibility
        this.connection.chainId$
            .subscribe(newChainId => this.chainId$.next(newChainId));
        this.connection.selectedAccount$
            .subscribe(newSelectedAccount => this.selectedAccount$.next(newSelectedAccount));
        // Instantiate SmartInterval for fetching boxes at regular intervals
        this.boxesInterval = new SmartInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            yield new Promise((resolve) => {
                this.ngZone.run(() => (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
                    // "try" is used here because it's expected to see boxes getters to fail from time to time due to network changes
                    try {
                        this.incomingBoxes$.next(yield this.getIncomingBoxes());
                        this.outgoingBoxes$.next(yield this.getOutgoingBoxes());
                    }
                    catch (err) {
                        console.warn("Box getters failed.");
                    }
                    resolve(1);
                }));
            });
        }), this.boxesIntervalCycleDelay);
        // Force boxes to be fetched on boxInteraction$
        this.boxInteraction$.subscribe(() => this.boxesInterval.forceExecution());
        // Setup automatic fetching of boxes and setting of variables
        [
            this.connection.isConnected$,
            this.connection.networkChangeNotification$
        ].forEach(obs => obs.subscribe(() => {
            this.boxesInterval.forceExecution();
            this.setVariables();
        }));
        // Automatically connect if there's a cached provider
        // Must defer this because it could run before the provider is injected into the page
        setTimeout(() => {
            if (localStorage.getItem("ETHERS_MODAL_CACHED_PROVIDER")) {
                this.connect();
            }
        }, 1500);
    }
    // Load supported tokens, instantiate contracts and start boxes fetching
    setVariables() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.connection.isConnected$.getValue()) {
                this.reset();
                return;
            }
            // The following code sets contracts depending on the current chain
            let chainId = this.connection.chainId$.getValue();
            switch ((chainId || {}).toString()) {
                case "reef-mainnet": // Reef Mainnet
                    this.isReefMainnet$.next(true);
                    this.ethboxAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ADDRESSES.REEF;
                    break;
                case "reef-testnet": // Reef Testnet
                    this.ethboxAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ADDRESSES.REEF_TESTNET;
                    this.tokenDispenserAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.TOKEN_DISPENSER.ADDRESSES.REEF_TESTNET;
                    break;
                case "1": // Ethereum Mainnet
                    this.isEthereumMainnet$.next(true);
                    this.ethboxAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ADDRESSES.ETHEREUM;
                    this.stakingAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.STAKING.ADDRESSES.ETHEREUM;
                    break;
                case "4": // Ethereum Testnet
                    this.ethboxAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ADDRESSES.ETHEREUM_TESTNET;
                    this.tokenDispenserAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.TOKEN_DISPENSER.ADDRESSES.ETHEREUM_TESTNET;
                    break;
                case "56": // Binance Mainnet
                    this.isBinanceMainnet$.next(true);
                    this.ethboxAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ADDRESSES.BINANCE;
                    this.stakingAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.STAKING.ADDRESSES.BINANCE;
                    break;
                case "97": // Binance Testnet
                    this.ethboxAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ADDRESSES.BINANCE_TESTNET;
                    this.tokenDispenserAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.TOKEN_DISPENSER.ADDRESSES.BINANCE_TESTNET;
                    break;
                case "137": // Matic Mainnet
                    this.isMaticMainnet$.next(true);
                    this.ethboxAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ADDRESSES.MATIC;
                    break;
                case "80001": // Matic Testnet
                    this.ethboxAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ADDRESSES.MATIC_TESTNET;
                    this.tokenDispenserAddress = _constants_abis__WEBPACK_IMPORTED_MODULE_1__.TOKEN_DISPENSER.ADDRESSES.MATIC_TESTNET;
                    break;
                default:
                    this.reset();
                    throw new Error("Network not recognized.");
            }
            this.ethboxContract = new this.connection.ethers.Contract(this.ethboxAddress, _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ETHBOX.ABI, this.connection.signer$.getValue());
            if (this.stakingAddress) {
                this.stakingContract = new this.connection.ethers.Contract(this.stakingAddress, _constants_abis__WEBPACK_IMPORTED_MODULE_1__.STAKING.ABI, this.connection.signer$.getValue());
                this.isStakingReady$.next(true);
            }
            if (this.tokenDispenserAddress) {
                this.tokenDispenserContract = new this.connection.ethers.Contract(this.tokenDispenserAddress, _constants_abis__WEBPACK_IMPORTED_MODULE_1__.TOKEN_DISPENSER.ABI, this.connection.signer$.getValue());
            }
            this.isChainSupported$.next(true);
            this.isAppReady$.next(true);
            this.viewConsoleServ.log(`Ethbox contract: ${this.ethboxAddress}`);
            this.viewConsoleServ.log(`Staking contract: ${this.stakingAddress}`);
            this.loadTokens();
            // Start the newly created SmartInterval instance
            this.boxesInterval.start();
        });
    }
    // Get custom tokens from LS and merge them with curated ones
    loadTokens() {
        let LSKey = `customTokens${this.connection.chainId$.getValue()}`;
        let customTokens = [], curatedTokens = [];
        // Take custom tokens from localStorage and give them the unknown icon
        let customTokensLS = localStorage.getItem(LSKey);
        if (customTokensLS) {
            customTokens = JSON.parse(customTokensLS);
            customTokens.forEach(token => token.thumb = 'assets/img/unknown-icon.png');
        }
        // Take tokens from curated lists for the current network
        let currentChainTokens = _constants_tokens__WEBPACK_IMPORTED_MODULE_2__.chainTokenDictionary[this.connection.chainId$.getValue()];
        if (currentChainTokens) {
            curatedTokens = currentChainTokens;
        }
        let mergedResults = [...customTokens, ...curatedTokens];
        this.tokensMap = mergedResults.reduce((a, b) => (a[b.address] = b, a), {});
        ;
        this.tokens$.next(mergedResults);
    }
    reset() {
        this.isAppReady$.next(false);
        this.isChainSupported$.next(false);
        this.boxesInterval.stop();
        this.incomingBoxes$.next(null);
        this.outgoingBoxes$.next(null);
        this.tokens$.next(null);
        this.tokenDispenserContract = null;
        this.isStakingReady$.next(false);
        this.stakingContract = null;
        this.ethboxContract = null;
        this.isMaticMainnet$.next(false);
        this.isBinanceMainnet$.next(false);
        this.isEthereumMainnet$.next(false);
    }
    networkInfo(chainId) {
        switch ((chainId || {}).toString()) {
            case "reef-mainnet":
                return {
                    name: "Reef Testnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
                    accountScannerUrl: (address) => `https://reefscan.com/account/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "reef-testnet":
                return {
                    name: "Reef Testnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
                    accountScannerUrl: (address) => `https://testnet.reefscan.com/account/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "1":
                return {
                    name: "Ethereum Mainnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
                    accountScannerUrl: (address) => `https://etherscan.io/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "4":
                return {
                    name: "Ethereum Testnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
                    accountScannerUrl: (address) => `https://rinkeby.etherscan.io/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "56":
                return {
                    name: "Binance Mainnet",
                    baseTokenThumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
                    accountScannerUrl: (address) => `https://bscscan.com/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "97":
                return {
                    name: "Binance Testnet",
                    baseTokenThumb: "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
                    accountScannerUrl: (address) => `https://testnet.bscscan.com/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "137":
                return {
                    name: "Matic Mainnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
                    accountScannerUrl: (address) => `https://polygonscan.com/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            case "80001":
                return {
                    name: "Matic Testnet",
                    baseTokenThumb: "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
                    accountScannerUrl: (address) => `https://mumbai.polygonscan.com/address/${address}`,
                    transactionScannerUrl: (hash) => ``
                };
            default:
                return {
                    name: "Not supported",
                    baseTokenThumb: null,
                    accountScannerUrl: () => ``,
                    transactionScannerUrl: () => ``
                };
        }
    }
    isEthereum() {
        return [1, 4].includes(this.connection.chainId$.getValue());
    }
    isBinance() {
        return [56, 97].includes(this.connection.chainId$.getValue());
    }
    isMatic() {
        return [137, 80001].includes(this.connection.chainId$.getValue());
    }
    isReef() {
        return ["reef-testnet", "reef-mainnet"].includes(this.connection.chainId$.getValue());
    }
    isReefMainnet() {
        return this.connection.chainId$.getValue() === "reef-mainnet";
    }
    isEthereumMainnet() {
        return this.connection.chainId$.getValue() == 1;
    }
    isBinanceMainnet() {
        return this.connection.chainId$.getValue() == 56;
    }
    isMaticMainnet() {
        return this.connection.chainId$.getValue() == 137;
    }
    isReefTestnet() {
        return this.connection.chainId$.getValue() === "reef-testnet";
    }
    isEthereumTestnet() {
        return this.connection.chainId$.getValue() == 4;
    }
    isBinanceTestnet() {
        return this.connection.chainId$.getValue() == 97;
    }
    isMaticTestnet() {
        return this.connection.chainId$.getValue() == 80001;
    }
    isTestnet() {
        return this.isReefTestnet() ||
            this.isEthereumTestnet() ||
            this.isBinanceTestnet() ||
            this.isMaticTestnet();
    }
    // Give the user 100 of the selected test token
    // State changing operation
    give100TestToken(testTokenIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Start loading
            this.loadingIndicatorServ.on();
            // I decided to refactor the code below and have just the code that can throw exception inside the try/catch block, and to use throw to stop the execution in catch
            // Making of the transaction
            let tx;
            try {
                tx = yield this.tokenDispenserContract.giveToken(testTokenIndex, this.connection.ethers.utils.parseUnits("100", 18));
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Token dispending aborted by user.",
                    duration: "long"
                });
                this.viewConsoleServ.error("Token dispensing aborted");
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "You have received 100 test tokens!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Received 100 test tokens (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.tokenDispenserInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    // Check if the given address is syntatically valid
    isValidAddress(address) {
        return this.connection.ethers.utils.isAddress(address);
    }
    hash(string) {
        return Web3Utils.soliditySha3(string);
    }
    doubleHash(string) {
        return this.hash(this.hash(string));
    }
    // Check if the password provided fits the one that encrypted the box
    isValidPassword(box, password) {
        return box.passHashHash === this.doubleHash(password);
    }
    // What about using ethers.utils.formatEthers() instead?
    weiToDecimal(wei, decimals) {
        let multiplier = "1" + _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO.repeat(Number(decimals));
        let _wei = new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(wei);
        return _wei.dividedBy(multiplier).toFixed();
    }
    // What about using ethers.utils.parseUnits() instead?
    decimalToWei(decimalValue, decimals) {
        let multiplier = "1" + _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO.repeat(Number(decimals));
        let _decimal = new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(decimalValue);
        return _decimal.multipliedBy(multiplier).toFixed();
    }
    // Read only query
    getWeiAllowance(tokenAddress) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let tokenContract = new this.connection.ethers.Contract(tokenAddress, _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ERC20_ABI, this.connection.provider$.getValue());
            let allowance = yield tokenContract.allowance(this.connection.selectedAccount$.getValue(), this.ethboxAddress);
            return allowance.toString();
        });
    }
    // Read only query
    getTokenData(tokenAddress) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let name, symbol, decimals;
            let thumb = "assets/img/unknown-icon.png";
            // If the token resides in the curated list, then take the data from there
            if (this.tokensMap[tokenAddress]) {
                name = this.tokensMap[tokenAddress].name;
                symbol = this.tokensMap[tokenAddress].symbol;
                decimals = this.tokensMap[tokenAddress].decimals;
                thumb = this.tokensMap[tokenAddress].thumb;
            }
            // Otherwise take the data from the blockchain
            else {
                let tokenContract = new this.connection.ethers.Contract(tokenAddress, _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ERC20_ABI, this.connection.provider$.getValue());
                decimals = yield tokenContract.decimals();
                name = yield tokenContract.name();
                symbol = yield tokenContract.symbol();
            }
            return {
                address: tokenAddress,
                name,
                symbol,
                decimals,
                thumb
            };
        });
    }
    // Read only query
    getTokenBalance(tokenAddress) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let tokenData = yield this.getTokenData(tokenAddress);
            let selectedAccount = this.connection.selectedAccount$.getValue();
            let wei, weiAllowance;
            // If it's the base token, then mocks the allowance as unlimited (MAX_VALUE)
            if (tokenAddress == _constants_various__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_ZERO) {
                wei = (yield this.connection.provider$.getValue().getBalance(selectedAccount)).toString();
                weiAllowance = _constants_various__WEBPACK_IMPORTED_MODULE_0__.MAX_VALUE;
            }
            else {
                let tokenContract = new this.connection.ethers.Contract(tokenAddress, _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ERC20_ABI, this.connection.provider$.getValue());
                wei = (yield tokenContract.balanceOf(selectedAccount)).toString();
                weiAllowance = yield this.getWeiAllowance(tokenAddress);
            }
            return {
                address: tokenAddress,
                wei,
                weiAllowance,
                decimalValue: this.weiToDecimal(wei, tokenData.decimals),
                decimalAllowance: this.weiToDecimal(weiAllowance, tokenData.decimals)
            };
        });
    }
    // Approve unlimited spending for the given address
    // State changing operation
    approveMax(tokenAddress) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let tokenContract = new this.connection.ethers.Contract(tokenAddress, _constants_abis__WEBPACK_IMPORTED_MODULE_1__.ERC20_ABI, this.connection.signer$.getValue());
            // Start loading
            this.loadingIndicatorServ.on();
            // Making of the transaction
            let tx;
            try {
                tx = yield tokenContract.approve(this.ethboxAddress, _constants_various__WEBPACK_IMPORTED_MODULE_0__.MAX_VALUE);
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Token approval aborted by user.",
                    duration: "long"
                });
                this.viewConsoleServ.error(`Approval for unlimited allowance of ${tokenAddress} aborted`);
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "Approval successful – You can now send / trade this token!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Successfully approved unlimited allowance of ${tokenAddress} (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.approvalInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    // It takes the backend data and adapt it to the frontend needs
    // bcBox stands for "blockchain box" while appBox stands for "application box"
    bcBox2appBox(bcBox, override) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let appBox = {}; // I should make a type here
            for (let key in bcBox) {
                if (bcBox.hasOwnProperty(key)) {
                    // Filter out numeric keys (why those are there?)
                    if (!isNaN(Number(key))) {
                        continue;
                    }
                    // Evaluate BigNumber(s) to numeric strings in base-10
                    // This is just to implement this feature faster as the code migrated from web3 to this.connection.ethers, in future should be refactored to work with BigNumber at all times
                    if (bcBox[key]._isBigNumber) {
                        appBox[key] = bcBox[key].toString();
                        continue;
                    }
                    appBox[key] = bcBox[key];
                }
            }
            Object.assign(appBox, override);
            appBox.readableTimestamp = new Date(appBox.timestamp * 1e3)
                .toLocaleDateString(undefined, // Fallbacks to the user's locale
            {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            appBox.sendTokenInfo = yield this.getTokenData(appBox.sendToken);
            appBox.sendDecimalValue = this.weiToDecimal(appBox.sendValue, appBox.sendTokenInfo.decimals);
            if (appBox.requestToken) {
                appBox.requestTokenInfo = yield this.getTokenData(appBox.requestToken);
                appBox.requestDecimalValue = this.weiToDecimal(appBox.requestValue, appBox.requestTokenInfo.decimals);
            }
            else {
                appBox.requestValue = "0";
            }
            return appBox;
        });
    }
    // Fetch the outgoing boxes (both privacy and non)
    // Read only query
    getIncomingBoxes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let boxes = [];
            let normalBoxes = yield this.ethboxContract.getBoxesIncoming();
            for (let index of normalBoxes) {
                let appBox = yield this.bcBox2appBox(yield this.ethboxContract.getBox(index), {
                    index: index.toString(),
                    hasPrivacy: false,
                    recipientHash: null,
                    senderHash: null
                });
                if (appBox.sender == this.connection.selectedAccount$.getValue()) {
                    continue;
                }
                boxes.push(appBox);
            }
            let privacyBoxes = yield this.ethboxContract.getBoxesIncomingWithPrivacy();
            for (let index of privacyBoxes) {
                let appBox = yield this.bcBox2appBox(yield this.ethboxContract.getBoxWithPrivacy(index), {
                    index: index.toString(),
                    hasPrivacy: true,
                    requestToken: null,
                    requestValue: null
                });
                if (appBox.senderHash == this.hash(this.connection.selectedAccount$.getValue())) {
                    continue;
                }
                boxes.push(appBox);
            }
            // Sort boxes by date from newest to oldest
            boxes.sort((a, b) => b.timestamp - a.timestamp);
            window["_incBox"] = boxes;
            // console.log("Incoming boxes", boxes);
            return boxes;
        });
    }
    // Fetch the outgoing boxes (both privacy and non)
    // Read only query
    getOutgoingBoxes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let boxes = [];
            let normalBoxes = yield this.ethboxContract.getBoxesOutgoing();
            for (let index of normalBoxes) {
                let appBox = yield this.bcBox2appBox(yield this.ethboxContract.getBox(index), {
                    index: index.toString(),
                    isPrivacy: false,
                    recipientHash: null,
                    senderHash: null
                });
                boxes.push(appBox);
            }
            let privacyBoxes = yield this.ethboxContract.getBoxesOutgoingWithPrivacy();
            for (let index of privacyBoxes) {
                let appBox = yield this.bcBox2appBox(yield this.ethboxContract.getBoxWithPrivacy(index), {
                    index: index.toString(),
                    hasPrivacy: true,
                    requestToken: null,
                    requestValue: null
                });
                boxes.push(appBox);
            }
            // Sort boxes by date from newest to oldest
            boxes.sort((a, b) => b.timestamp - a.timestamp);
            window["_outBox"] = boxes;
            // console.log("Outgoing boxes", boxes);
            return boxes;
        });
    }
    // Make a box
    // State changing operation
    createBox(boxInputs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Double hash the password
            let passHashHash = this.doubleHash(boxInputs.password);
            // Get send token details
            let sendTokenData = yield this.getTokenData(boxInputs.sendTokenAddress);
            let sendWei = this.decimalToWei(boxInputs.sendDecimalValue, sendTokenData.decimals);
            // Get request token details
            let requestTokenData = yield this.getTokenData(boxInputs.requestTokenAddress);
            let requestWei = this.decimalToWei(boxInputs.requestDecimalValue, requestTokenData.decimals);
            // If box is one-way, then baseTokenWei is defined
            // Conversely if box is OTC, then baseTokenWei is ZERO
            let baseTokenWei = _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO;
            if (boxInputs.sendTokenAddress == _constants_various__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_ZERO) {
                baseTokenWei = sendWei;
            }
            // Overrides in ethers are similar to .send({ value: ethValue }) in web3
            let overrides = {
                value: baseTokenWei
            };
            // Start loading
            this.loadingIndicatorServ.on();
            // Making of the transaction
            let tx;
            try {
                tx = yield this.ethboxContract.createBox(boxInputs.recipient, boxInputs.sendTokenAddress, sendWei, boxInputs.requestTokenAddress, requestWei, passHashHash, overrides);
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Sending aborted.",
                    duration: "long"
                });
                this.viewConsoleServ.error("Box creation aborted");
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Monitor box via Telegram
            this.sendBoxToPipedream(tx.hash, boxInputs);
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "Your outgoing transaction has been confirmed!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Box creation confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.boxInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    // Make a privacy-preserving box
    // State changing operation
    createBoxWithPrivacy(boxInputs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Hash the recipient for privacy
            let recipientHash = this.hash(boxInputs.recipient);
            // Double hash the password
            let passHashHash = this.doubleHash(boxInputs.password);
            // Get send token details
            let sendTokenData = yield this.getTokenData(boxInputs.sendTokenAddress);
            let sendWei = this.decimalToWei(boxInputs.sendDecimalValue, sendTokenData.decimals);
            // If box is one-way, then baseTokenWei is defined
            // Conversely if box is OTC, then baseTokenWei is ZERO
            let baseTokenWei = _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO;
            if (boxInputs.sendTokenAddress == _constants_various__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_ZERO) {
                baseTokenWei = sendWei;
            }
            // Overrides in ethers are similar to .send({ value: ethValue }) in web3
            let overrides = {
                value: baseTokenWei
            };
            // Start loading
            this.loadingIndicatorServ.on();
            // Making of the transaction
            let tx;
            try {
                tx = yield this.ethboxContract.createBoxWithPrivacy(recipientHash, boxInputs.sendTokenAddress, sendWei, passHashHash, overrides);
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Sending aborted.",
                    duration: "long"
                });
                this.viewConsoleServ.error("Box creation aborted");
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Monitor box via Telegram
            this.sendBoxToPipedream(tx.hash, boxInputs);
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "Your outgoing transaction has been confirmed!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Box creation confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.boxInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    // Cancel a box
    // State changing operation
    cancelBox(boxIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Overrides in ethers are similar to .send({ value: ethValue }) in web3
            let overrides = {
                value: _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO // Do I really need this?
            };
            // Start loading
            this.loadingIndicatorServ.on();
            // Making of the transaction
            let tx;
            try {
                tx = yield this.ethboxContract.cancelBox(boxIndex, overrides);
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Sending aborted.",
                    duration: "long"
                });
                this.viewConsoleServ.error("Box creation aborted");
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "Cancelling transaction successful!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Box cancellation confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.boxInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    // Cancel a privacy-preserving box
    // State changing operation
    cancelBoxWithPrivacy(boxIndex) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Overrides in ethers are similar to .send({ value: ethValue }) in web3
            let overrides = {
                value: _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO // Do I really need this?
            };
            // Start loading
            this.loadingIndicatorServ.on();
            // Making of the transaction
            let tx;
            try {
                tx = yield this.ethboxContract.cancelBoxWithPrivacy(boxIndex, overrides);
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Sending aborted.",
                    duration: "long"
                });
                this.viewConsoleServ.error("Box creation aborted");
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "Cancelling transaction successful!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Box cancellation confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.boxInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    // Accept a box
    // State changing operation
    acceptBox(box, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Hash the password to check if the user has unlocked the box
            let passHash = this.hash(password);
            // If the requestedToken is the base token, then there's no need to approve
            let baseTokenWei = _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO;
            if (box.requestToken == _constants_various__WEBPACK_IMPORTED_MODULE_0__.ADDRESS_ZERO) {
                baseTokenWei = box.requestValue;
            }
            else {
                // Getting the user balance of the requestedToken
                let tokenBalance = yield this.getTokenBalance(box.requestToken);
                // If the balance is not enough, then reject the operation
                if ((new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(box.requestValue)).gt(tokenBalance.wei)) {
                    this.toasterServ.toastMessage$.next({
                        type: "danger",
                        message: `Your have ${tokenBalance.decimalValue} ${box.requestTokenInfo.symbol}, not enough for the exchange.`,
                        duration: "long"
                    });
                    return;
                }
                // If the allowance is not enough, then ask for the approval
                if ((new (bignumber_js__WEBPACK_IMPORTED_MODULE_3___default())(box.requestValue)).gt(tokenBalance.weiAllowance)) {
                    // Spawn a dialog
                    let isConfirmed = yield this.confirmDialogServ.spawn({
                        dialogName: "Do you want to approve?",
                        message: 'To accept the exchange you need to approve the requested token first. The approval is required only once per token.<br><span class="fw-bold">Do you want to approve?<span>',
                        confirmButtonName: "Approve"
                    });
                    // Confirm dialog dismissed
                    if (!isConfirmed)
                        return;
                    yield this.approveMax(box.requestToken);
                    // Stopping here, the user has to click again (clearer from UX perspective)
                    return;
                }
            }
            // Overrides in ethers are similar to .send({ value: ethValue }) in web3
            let overrides = {
                value: baseTokenWei
            };
            // Start loading
            this.loadingIndicatorServ.on();
            // Making of the transaction
            let tx;
            try {
                tx = yield this.ethboxContract.clearBox(box.index, passHash, overrides);
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Box approval aborted. Details in the console.",
                    duration: "long"
                });
                this.viewConsoleServ.error("Box approval aborted");
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "The box has been accepted!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Box approval confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.boxInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    // Accept a privacy-preserving box
    // State changing operation
    acceptBoxWithPrivacy(box, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Hash the password to check if the user has unlocked the box
            let passHash = this.hash(password);
            // Overrides in ethers are similar to .send({ value: ethValue }) in web3
            let overrides = {
                value: _constants_various__WEBPACK_IMPORTED_MODULE_0__.ZERO // Do I really need this?
            };
            // Start loading
            this.loadingIndicatorServ.on();
            // Making of the transaction
            let tx;
            try {
                tx = yield this.ethboxContract.clearBoxWithPrivacy(box.index, passHash, overrides);
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Box approval aborted. Details in the console.",
                    duration: "long"
                });
                this.viewConsoleServ.error("Box approval aborted");
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "The box has been accepted!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Box approval confirmed (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.boxInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    signMessage(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let signature;
            try {
                signature = yield this.connection.signer$.getValue().signMessage(message);
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Sign of message aborted. Details in the console",
                    duration: "long"
                });
                this.viewConsoleServ.error("Sign of message aborted");
            }
            this.viewConsoleServ.log(`A message was signed successfully (message: ${message}, sign: ${signature})`);
            // Return the signature to the consumer
            return signature;
        });
    }
    // Return the decimal value for the staking rewards the user can claim
    // Read only query
    getReward() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            let bn = yield this.stakingContract.getUnclaimedReward();
            return this.weiToDecimal(bn.toString(), 18);
        });
    }
    // State changing operation
    claimReward() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Start loading
            this.loadingIndicatorServ.on();
            // Making of the transaction
            let tx;
            try {
                tx = yield this.stakingContract.claimReward();
            }
            catch (err) {
                this.toasterServ.toastMessage$.next({
                    type: "danger",
                    message: "Reward claiming aborted. Details in the console.",
                    duration: "long"
                });
                this.viewConsoleServ.error("Reward claiming aborted");
                this.loadingIndicatorServ.off();
                throw err;
            }
            // Waiting for transaction confirmation
            this.toasterServ.toastMessage$.next({
                type: "secondary",
                message: "Waiting for transaction to confirm (may take a while, depending on network load)...",
                duration: "short"
            });
            this.viewConsoleServ.warning(`Waiting for transaction to confirm (tx hash: ${tx.hash})`);
            let receipt = yield tx.wait();
            // Transaction confirmed
            this.toasterServ.toastMessage$.next({
                type: "success",
                message: "Reward has been claimed!",
                duration: "long"
            });
            this.viewConsoleServ.log(`Rewards claimed successfully (gas used: ${receipt.gasUsed}, tx hash: ${receipt.transactionHash})`);
            // Stop loading
            this.stakingInteraction$.next(true);
            this.loadingIndicatorServ.off();
            // Return receipt to the consumer
            return receipt;
        });
    }
    sendBoxToPipedream(hash, boxInputs) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Make a deep copy
            let copy = JSON.parse(JSON.stringify(boxInputs));
            // Delete password
            delete copy.password;
            delete copy.sender;
            delete copy.recipient;
            // Create props
            copy.senderHash = this.hash(boxInputs.sender);
            ;
            copy.recipientHash = this.hash(boxInputs.recipient);
            ;
            copy.hash = hash;
            copy.chainId = this.connection.chainId$.getValue();
            copy.timestamp = Date.now() / 1000;
            // Ping lambda on Pipedream to record box
            yield fetch("https://enfi7jzu8p3znh.m.pipedream.net", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(copy)
            });
        });
    }
    receiveBoxFromPipedream(box) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function* () {
            // Ping lambda on Pipedream to retrieve box
            let response = yield fetch("https://enyh65xizxc4ohf.m.pipedream.net", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chainId: this.connection.chainId$.getValue(),
                    senderHash: box.senderHash || this.hash(box.sender),
                    recipientHash: box.recipientHash || this.hash(box.recipient),
                    timestamp: box.timestamp
                })
            });
            return yield response.json();
        });
    }
}
ContractService.ɵfac = function ContractService_Factory(t) { return new (t || ContractService)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_loading_indicator_service__WEBPACK_IMPORTED_MODULE_8__.LoadingIndicatorService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_toaster_service__WEBPACK_IMPORTED_MODULE_9__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_view_console_service__WEBPACK_IMPORTED_MODULE_11__.ViewConsoleService)); };
ContractService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({ token: ContractService, factory: ContractService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81747:
/*!************************************************!*\
  !*** ./src/app/services/governance.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GovernanceService": () => (/* binding */ GovernanceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contract.service */ 36569);



class GovernanceService {
    constructor(contractServ) {
        this.contractServ = contractServ;
        this.endpoint = 'https://www.ethbox.org/gov/voting.php';
    }
    getVotings(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append('action', 'get_votings');
            if (options.isCommunity) {
                formData.append('community', '1');
            }
            let response = yield fetch(this.endpoint, { method: 'POST', body: formData });
            let { data: proposals } = yield response.json();
            // Parsing answers from string to array
            proposals.forEach(proposal => proposal.answers = JSON.parse(proposal.answers));
            return proposals;
        });
    }
    isEligible(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append('action', 'is_eligible');
            formData.append('voting', options.votingNumber);
            formData.append('address', this.contractServ.selectedAccount$.getValue());
            if (options.isCommunity) {
                formData.append('community', '1');
            }
            let response = yield fetch(this.endpoint, { method: 'POST', body: formData });
            let { result: isEligible } = yield response.json();
            return isEligible;
        });
    }
    hasVoted(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append('action', 'has_voted');
            formData.append('voting', options.votingNumber);
            formData.append('address', this.contractServ.selectedAccount$.getValue());
            if (options.isCommunity) {
                formData.append('community', '1');
            }
            let response = yield fetch(this.endpoint, { method: 'POST', body: formData });
            let { result: hasVoted } = yield response.json();
            return hasVoted;
        });
    }
    getVotes(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append('action', 'get_votes');
            formData.append('voting', options.votingNumber);
            if (options.isCommunity) {
                formData.append('community', '1');
            }
            // I can't standardize the response into a type unless we standardize our BE API, therefore I have to cheat with : "any" in order to access it's properties without TS complaining about it
            let response = yield fetch(this.endpoint, { method: 'POST', body: formData });
            let json = yield response.json();
            // Be careful, those votings that haven't yet started have a the following payload: {"error":"Results not verified yet"}
            if (json.error === "Results not verified yet") {
                return { sum: null, votes: null };
            }
            let votes = json.data;
            return {
                sum: votes.reduce((a, b) => a + b.answer, 0),
                votes
            };
        });
    }
    getVoters(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append('action', 'get_voters');
            formData.append('voting', options.votingNumber);
            if (options.isCommunity) {
                formData.append('community', '1');
            }
            let response = yield fetch(this.endpoint, { method: 'POST', body: formData });
            let { data: eligibleUsers } = yield response.json();
            return eligibleUsers
                .sort((a, b) => b.voting_power - a.voting_power);
        });
    }
    getVotesDetails(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append('action', 'get_votes_detail');
            formData.append('voting', options.votingNumber);
            if (options.isCommunity) {
                formData.append('community', '1');
            }
            let response = yield fetch(this.endpoint, { method: 'POST', body: formData });
            let { data: votesDetail } = yield response.json();
            return votesDetail;
        });
    }
    vote(proposal, selectedChoice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let selectedAccount = this.contractServ.selectedAccount$.getValue();
            let response = yield this.contractServ
                .signMessage(`ethbox Vote #${proposal.n}`);
            let signedMessage = response.result;
            console.log('Signed message is', signedMessage);
            this.castVote(proposal, selectedChoice, selectedAccount, signedMessage);
        });
    }
    castVote(proposal, vote, account, signedMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Proposal is', proposal);
            console.log('Choosen vote is', vote);
            console.log('Connected account is', account);
            console.log('Signed message is', signedMessage);
            let formData = new FormData();
            formData.append('action', 'cast_vote');
            formData.append('voting', proposal.n);
            formData.append('address', account);
            formData.append('signed_msg', signedMessage);
            formData.append('vote', vote);
            // I have no idea what's the response looks like (json or text or both depending on the execution?)
            let response = yield fetch(this.endpoint, { method: 'POST', body: formData });
            return response;
        });
    }
}
GovernanceService.ɵfac = function GovernanceService_Factory(t) { return new (t || GovernanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_contract_service__WEBPACK_IMPORTED_MODULE_0__.ContractService)); };
GovernanceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: GovernanceService, factory: GovernanceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4762:
/*!*******************************************************!*\
  !*** ./src/app/services/loading-indicator.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingIndicatorService": () => (/* binding */ LoadingIndicatorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class LoadingIndicatorService {
    constructor() {
        this.counter = 0;
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    on() {
        // Turning it on as long as it's untouched
        if (this.counter < 1) {
            this.isLoading$.next(true);
        }
        this.counter++;
    }
    off() {
        if (this.counter > 0) {
            this.counter--;
        }
        // Turning it off as soon as all offs as been called
        if (this.counter < 1) {
            this.isLoading$.next(false);
        }
    }
}
LoadingIndicatorService.ɵfac = function LoadingIndicatorService_Factory(t) { return new (t || LoadingIndicatorService)(); };
LoadingIndicatorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingIndicatorService, factory: LoadingIndicatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 18510:
/*!***************************************************!*\
  !*** ./src/app/services/prompt-dialog.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PromptDialogService": () => (/* binding */ PromptDialogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PromptDialogService {
    constructor() {
        this.transitionDelay = 250;
    }
    spawn({ dialogName, message, messageColor, inputs, submitButtonName, cancelButtonName }) {
        if (!message) {
            throw new Error('Message is required.');
        }
        if (!inputs || Object.keys(inputs).length < 1) {
            throw new Error('At least an input is required.');
        }
        // Some defaults
        dialogName = dialogName || 'Please enter the values';
        submitButtonName = submitButtonName || 'Submit';
        cancelButtonName = 'Cancel';
        // The id is used to generate a unique dialog and to retrieve it during the removal
        let randomId = Math.random().toString(36).substring(2);
        // Making the dialog
        let newEl = document.createElement('div');
        newEl.innerHTML = this.getTemplate(randomId, dialogName, message, messageColor, inputs, submitButtonName, cancelButtonName);
        let dialogWrapper = newEl.firstElementChild;
        let dialog = dialogWrapper.firstElementChild;
        // This is so I can code the click-outside-to-close feature
        dialog.addEventListener('click', evt => evt.stopPropagation());
        // Appending the dialog
        document.body.appendChild(dialogWrapper);
        setTimeout(() => {
            dialogWrapper.style.opacity = '1';
            dialog.style.opacity = '1';
            document.body.style.overflow = 'hidden';
        }, 25);
        // Making a promise that will resolve on button clicked
        let resolve;
        let closePromise = new Promise(_resolve => {
            // Saving the reference so it can be used outside
            resolve = _resolve;
        });
        // Attaching to the window the callback for the buttons
        window[`promptInputs${randomId}`] = inputs;
        window[`onPrompt${randomId}`] = data => {
            resolve(data);
            // Deleting the prompt related stuff from the window
            delete window[`promptInputs${randomId}`];
            delete window[`onPrompt${randomId}`];
            // Removing the dialog
            let dialogWrapper = document.querySelector(`#prompt_${randomId}`);
            let dialog = dialogWrapper.firstElementChild;
            dialogWrapper.style.opacity = '0';
            dialog.style.opacity = '0';
            setTimeout(() => {
                dialogWrapper.remove();
                document.body.style.overflow = 'visible';
            }, this.transitionDelay);
        };
        return closePromise;
    }
    getTemplate(id, dialogName, message, messageColor = 'dark', inputs, submitButtonName, cancelButtonName) {
        let inputsTemplate = Object.entries(inputs)
            .reduce((result, [fieldName, { type, label, value }]) => {
            result += this.getInputTemplate(id, type, fieldName, label, value);
            return result;
        }, '');
        return `
        <div id="prompt_${id}" class="d-flex align-items-center justify-content-center position-fixed p-3" style="opacity: 0; top: 0; left: 0; bottom: 0; right: 0; background-color: rgba(0, 0, 0, .5); z-index: 1669; transition: all ${this.transitionDelay}ms ease-out" onclick="onPrompt${id}(null)">
            <div class="bg-white container-small rounded-alot" style="opacity: 0; z-index: 1670; transition: all ${this.transitionDelay}ms ease-out">
                <header class="d-flex align-items-center p-3 border-bottom">
                    <div class="fs-5 me-auto">${dialogName}</div>
                    <button onclick="onPrompt${id}(null)" class="btn-close"></button>
                </header>
                <div class="p-3 pb-0">
                    <p class="text-${messageColor}">${message}</p>
                    ${inputsTemplate}
                </div>
                <footer class="p-3 border-top text-end">
                    <button onclick="onPrompt${id}(null)" class="btn btn-outline-eboxprimary rounded-alot me-2">${cancelButtonName}</button>
                    <button onclick="onPrompt${id}(window.promptInputs${id})" class="btn btn-eboxprimary rounded-alot">${submitButtonName}</button>
                </footer>
            </div>
        </div>`;
    }
    getInputTemplate(id, type = 'text', fieldName, label, value = '') {
        return `
            <div class="form-floating mb-3">
                <input type="${type}" class="form-control rounded-alot" value="${value}" placeholder="${label}" oninput="promptInputs${id}['${fieldName}'].value = this.value">
                <label>${label}</label>
            </div>`;
    }
}
PromptDialogService.ɵfac = function PromptDialogService_Factory(t) { return new (t || PromptDialogService)(); };
PromptDialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PromptDialogService, factory: PromptDialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10928:
/*!*********************************************!*\
  !*** ./src/app/services/staking.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StakingService": () => (/* binding */ StakingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class StakingService {
    constructor() { }
    getDateLimits() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let endpoint = 'https://www.ethbox.org/staking/fetch_data.php';
            let formData = new FormData();
            formData.append('action', 'get_date_limits');
            let response = yield fetch(endpoint, { method: 'POST', body: formData });
            let { data: result } = yield response.json();
            return result;
        });
    }
    getData(pageMonth, pageDate) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let endpoint = 'https://www.ethbox.org/staking/fetch_data.php';
            let formData = new FormData();
            formData.append('action', 'get_data');
            formData.append('month', pageMonth + 1);
            formData.append('day', pageDate);
            let response = yield fetch(endpoint, { method: 'POST', body: formData });
            let { data: result } = yield response.json();
            return result;
        });
    }
    getPayoutReward(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let endpoint = 'https://www.ethbox.org/api/payout.php';
            let formData = new FormData();
            formData.append('action', 'payout_get_unclaimed');
            formData.append('address', address);
            let response = yield fetch(endpoint, { method: 'POST', body: formData });
            let result = yield response.json();
            return result;
        });
    }
    setPayoutReward(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let endpoint = 'https://www.ethbox.org/api/payout.php';
            let formData = new FormData();
            formData.append('action', 'payout_set_claimed');
            formData.append('address', address);
            let response = yield fetch(endpoint, { method: 'POST', body: formData });
            let result = yield response.json();
            return result;
        });
    }
}
StakingService.ɵfac = function StakingService_Factory(t) { return new (t || StakingService)(); };
StakingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StakingService, factory: StakingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13786:
/*!*********************************************!*\
  !*** ./src/app/services/toaster.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToasterService": () => (/* binding */ ToasterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class ToasterService {
    constructor() {
        this.toastMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(); };
ToasterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21328:
/*!**************************************************!*\
  !*** ./src/app/services/view-console.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewConsoleService": () => (/* binding */ ViewConsoleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ViewConsoleService {
    constructor() {
        this.messages = [];
    }
    log(message) {
        this.messages.unshift({ type: "info", timestamp: Date.now(), message });
    }
    warning(message) {
        this.messages.unshift({ type: "warn", timestamp: Date.now(), message });
    }
    error(message) {
        this.messages.unshift({ type: "err", timestamp: Date.now(), message });
    }
}
ViewConsoleService.ɵfac = function ViewConsoleService_Factory(t) { return new (t || ViewConsoleService)(); };
ViewConsoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ViewConsoleService, factory: ViewConsoleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 36563:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 89214:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 22263:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 5536:
/*!************************!*\
  !*** assert (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 16978:
/*!************************!*\
  !*** assert (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 69386:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 31616:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 29120:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46586:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 60224:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 55024:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 42602:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 89455:
/*!************************!*\
  !*** assert (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 33557:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8370:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 84701:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 27966:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46479:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map