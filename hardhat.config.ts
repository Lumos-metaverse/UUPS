import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });

const ACCOUNT_PRIVATE_KEY = process.env.SECRET;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    mumbai: {
      url : process.env.ALCHEMY_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: {
            polygonMumbai: process.env.POLYGONSCAN_API
          }
  },
};