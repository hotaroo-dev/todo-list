const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "";
const infura_key = "";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000,
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://sepolia.infura.io/v3/${infura_key}`,
        ),
      network_id: 11155111, // Sepolia's network ID
      gas: 4000000, // Adjust the gas limit as per your requirements
      gasPrice: 10000000000, // Set the gas price to an appropriate value
      confirmations: 2, // Set the number of confirmations needed for a transaction
      timeoutBlocks: 5000, // Set the timeout for transactions
      skipDryRun: true, // Skip the dry run option
    },
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};
