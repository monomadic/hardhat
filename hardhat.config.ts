import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";

let { TESTNET, MAINNET, BSCSCAN_API_KEY } = require("./secret");

module.exports = {
  solidity: "0.8.4",
  networks: {
    testnet: {
      url: TESTNET.ENDPOINT,
      accounts: [TESTNET.PRIVATE_KEY],
    },
    mainnet: {
      url: MAINNET.ENDPOINT,
      accounts: [MAINNET.PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: BSCSCAN_API_KEY,
  },

  namedAccounts: {
    deployer: 0,
  },
};
