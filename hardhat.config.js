require('@nomicfoundation/hardhat-ethers');
require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-verify'); // add this at the top


require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.25",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    agung: {
      url: process.env.BASE_URL_AGUNG,
      accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`],
      chainId: 9990,
      ens:null
    },
    // peaq: {
    //   url: process.env.BASE_URL_PEAQ,
    //   accounts: [`${process.env.DEPLOYER_PRIVATE_KEY}`],
    //   chainId: 3338,
    // },
  },
  etherscan: {
    apiKey: {
      agung: process.env.ETHERSCAN_API_KEY || "",
    },
    customChains: [
      {
        network: "agung",
        chainId: 9990,
        ens:null,
        urls: {
          apiURL: "https://blockscout-agung.peaq.network/api",
          browserURL: "https://blockscout-agung.peaq.network",
        }
      }
    ]
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  // etherscan: {
  //   // Blockscout ignores the API key, but the plugin requires one to be present
  //   apiKey: {
  //     peaq: "",
  //   },
  //   customChains: [
  //     {
  //       network: "peaq",
  //       chainId: 3338,
  //       urls: {
  //         apiURL: "https://scout.peaq.xyz/api",
  //         browserURL: "https://scout.peaq.xyz",
  //       },
  //     },
  //   ],
  // },
};