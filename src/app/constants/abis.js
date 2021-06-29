export let STAKING = {
    ADDRESSES: {
        ETHEREUM: '0x37c82a143a9fafc2df10e774f1e4b8b96fd41559'
    },
    ABI: [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUnclaimedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"other","type":"address"}],"name":"getUnclaimedRewardFor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"recoverRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"pause","type":"bool"}],"name":"setContractPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"staker","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"internalType":"struct ethboxStaking.staking_reward[]","name":"_rewards","type":"tuple[]"}],"name":"setRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}]
};

export let ETHBOX = {
    ADDRESSES: {
        RINKEBY: '0xFEDD37c7BDa828A3AA0ac473C74DC376285943f6',
        BSC_TESTNET: '0x944Ed8ddeD19Ad37e3d5C79B4a67b6b688b1AA5F'
    },
    ABI: [{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"cancelBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"cancelBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"},{"internalType":"bytes32","name":"_passHash","type":"bytes32"}],"name":"clearBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"},{"internalType":"bytes32","name":"_passHash","type":"bytes32"}],"name":"clearBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"contract ERC20Interface","name":"_sendToken","type":"address"},{"internalType":"uint256","name":"_sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"_requestToken","type":"address"},{"internalType":"uint256","name":"_requestValue","type":"uint256"},{"internalType":"bytes32","name":"_passHashHash","type":"bytes32"}],"name":"createBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_recipientHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"_sendToken","type":"address"},{"internalType":"uint256","name":"_sendValue","type":"uint256"},{"internalType":"bytes32","name":"_passHashHash","type":"bytes32"}],"name":"createBoxWithPrivacy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundAllBoxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"setStopDeposits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"getBox","outputs":[{"components":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"requestToken","type":"address"},{"internalType":"uint256","name":"requestValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.Box","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesAll","outputs":[{"components":[{"internalType":"address payable","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"contract ERC20Interface","name":"requestToken","type":"address"},{"internalType":"uint256","name":"requestValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.Box[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesAllWithPrivacy","outputs":[{"components":[{"internalType":"bytes32","name":"senderHash","type":"bytes32"},{"internalType":"bytes32","name":"recipientHash","type":"bytes32"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.BoxWithPrivacy[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesIncoming","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesIncomingWithPrivacy","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesOutgoing","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBoxesOutgoingWithPrivacy","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_boxIndex","type":"uint256"}],"name":"getBoxWithPrivacy","outputs":[{"components":[{"internalType":"bytes32","name":"senderHash","type":"bytes32"},{"internalType":"bytes32","name":"recipientHash","type":"bytes32"},{"internalType":"bytes32","name":"passHashHash","type":"bytes32"},{"internalType":"contract ERC20Interface","name":"sendToken","type":"address"},{"internalType":"uint256","name":"sendValue","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"taken","type":"bool"}],"internalType":"struct ethbox.BoxWithPrivacy","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumBoxes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumBoxesWithPrivacy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
};

export let TOKEN_DISPENSER = {
    ADDRESSES: {
        RINKEBY: '0x54678DF558664F0e45543Bee9dcbcE9D9C1fD351',
        BSC_TESTNET: '0x446B34aDE32E3A8FD9f73246740173b6a929aee6'
    },
    ABI: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "stateMutability": "payable", "type": "fallback" }, { "inputs": [{ "internalType": "contract ERC20Interface", "name": "_token", "type": "address" }, { "internalType": "address", "name": "_who", "type": "address" }], "name": "get_token_balance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }, { "internalType": "contract ERC20Interface", "name": "_token", "type": "address" }], "name": "give_token", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "token1", "outputs": [{ "internalType": "contract ERC20Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token2", "outputs": [{ "internalType": "contract ERC20Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token3", "outputs": [{ "internalType": "contract ERC20Interface", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]
};

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
