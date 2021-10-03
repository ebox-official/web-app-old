export let STAKING = {
    ADDRESSES: {
        ETHEREUM: '0x37c82a143a9fafc2df10e774f1e4b8b96fd41559',
        BINANCE: '0xbD1E729074A14348c78E39b56992f54f0b5d37Ec'
    },
    ABI: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUnclaimedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"other","type":"address"}],"name":"getUnclaimedRewardFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"pause","type":"bool"}],"name":"setContractPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"staker","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ethboxStaking.staking_reward[]","name":"_rewards","type":"tuple[]"}],"name":"setRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}]
};

export let ETHBOX = {
    ADDRESSES: {
        ETHEREUM: '0x501AC1D6103fB2643f2cB93985baAac6f81d1Bc9',
        ETHEREUM_TESTNET: '0xAAa491Cf3cA23D59a77eB56Ab487169F4B49e4e2',
        BINANCE: '0x98F8E39032B4dBEC2235B68Bd7CC2505D3793161',
        BINANCE_TESTNET: '0xF559344bF9A51bF778fB0Ff38cc690bAF7E61081',
        MATIC: '0xbD1E729074A14348c78E39b56992f54f0b5d37Ec',
        MATIC_TESTNET: '0x6c1cd6434B5Ee4A75605981387cBb3cdDc5596d0'
    },
    ABI: [{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"cancelBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"cancelBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"},{"internalType":"bytes32","name":"_passHash","type":"bytes32"}],"name":"clearBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"},{"internalType":"bytes32","name":"_passHash","type":"bytes32"}],"name":"clearBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"contract ERC20Interface","name":"_sendToken","type":"address"},{"internalType":"uint256","name":"_sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"_requestToken","type":"address"},{"internalType":"uint256","name":"_requestValue","type":"uint256"},{"internalType":"bytes32","name":"_passHashHash","type":"bytes32"}],"name":"createBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_recipientHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"_sendToken","type":"address"},{"internalType":"uint256","name":"_sendValue","type":"uint256"},{"internalType":"bytes32","name":"_passHashHash","type":"bytes32"}],"name":"createBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundAllBoxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setStopDeposits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"getBox","outputs":[{"components":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"requestToken","type":"address"},{"internalType":"uint256","name":"requestValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.Box","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesAll","outputs":[{"components":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"requestToken","type":"address"},{"internalType":"uint256","name":"requestValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.Box[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesAllWithPrivacy","outputs":[{"components":[{"internalType":"bytes32","name":"senderHash","type":"bytes32"},{"internalType":"bytes32","name":"recipientHash","type":"bytes32"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.BoxWithPrivacy[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesIncoming","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesIncomingWithPrivacy","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesOutgoing","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesOutgoingWithPrivacy","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"getBoxWithPrivacy","outputs":[{"components":[{"internalType":"bytes32","name":"senderHash","type":"bytes32"},{"internalType":"bytes32","name":"recipientHash","type":"bytes32"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.BoxWithPrivacy","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumBoxes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumBoxesWithPrivacy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
};

export let TOKEN_DISPENSER = {
    ADDRESSES: {
        ETHEREUM_TESTNET: '0x919fff8bD2888602FfaeE77E656F42E5741Cdb9A',
        BINANCE_TESTNET: '0x0D4f413f643E23C5Cae7b3D5E9E80FE97e4fd392',
        MATIC_TESTNET: '0x963e8acF143eD9638376923Ad14b28D39D8FbF2D'
    },
    ABI: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint8","name":"_token","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"giveToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenA","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenB","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenC","outputs":[{"internalType":"contract ERC20Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
};

// This is uncompressed so that's is clear to my eyes what's available and what is not
export let ERC20_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "tokenOwner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "remaining", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "tokenOwner", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "tokens", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];
