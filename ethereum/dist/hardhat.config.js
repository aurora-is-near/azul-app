"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@typechain/hardhat");
const dotenv = __importStar(require("dotenv"));
const ethers_1 = require("ethers");
const web3_utils_1 = require("web3-utils");
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY || ethers_1.ethers.Wallet.createRandom().privateKey.slice(2);
const AURORA_TOKEN = process.env.AURORA_TOKEN || '';
const INFURA_TOKEN = process.env.INFURA_TOKEN || '';
const argv = require('yargs/yargs')()
    .env('')
    .options({
    coverage: {
        type: 'boolean',
        default: false,
    },
}).argv;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        version: '0.8.7',
        settings: {
            optimizer: {
                enabled: true,
                runs: 1,
            },
        },
    },
    networks: {
        hardhat: {
            gas: 3000000000,
            blockGasLimit: 3000000000,
        },
        aurora: {
            url: `https://mainnet.aurora.dev/${AURORA_TOKEN}`,
            accounts: [`0x${PRIVATE_KEY}`],
            chainId: 1313161554,
        },
        auroraTestnet: {
            url: 'https://testnet.aurora.dev',
            accounts: [`0x${PRIVATE_KEY}`],
            chainId: 1313161555,
        },
        local: {
            url: 'http://localhost:8545',
            accounts: [`0x${PRIVATE_KEY}`],
            chainId: 1337,
            gasPrice: 120 * 1000000000,
        },
        ropsten: {
            url: `https://ropsten.infura.io/v3/${INFURA_TOKEN}`,
            accounts: [`0x${PRIVATE_KEY}`],
            chainId: 3,
            live: true,
            gasPrice: 50000000000,
            gasMultiplier: 2,
        },
        mainnet: {
            url: `https://mainnet.infura.io/v3/${INFURA_TOKEN}`,
            accounts: [`0x${PRIVATE_KEY}`],
            chainId: 1,
            live: true,
            gasMultiplier: 2,
            gas: 2 * 1000000,
            asPrice: (0, web3_utils_1.toWei)('105', 'gwei'),
        },
        goerli: {
            url: `https://goerli.infura.io/v3/${INFURA_TOKEN}`,
            accounts: [`0x${PRIVATE_KEY}`],
            chainId: 5,
            live: true,
            gasMultiplier: 2,
            gas: 2 * 1000000,
            asPrice: (0, web3_utils_1.toWei)('105', 'gwei'),
        },
    },
};
if (argv.coverage) {
    require('solidity-coverage');
}
