import '@nomiclabs/hardhat-ethers'
import '@openzeppelin/hardhat-upgrades'
import '@typechain/hardhat'
import * as dotenv from 'dotenv'
import { toWei } from 'web3-utils'
import './tasks/deploy'

dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY

const AURORA_TOKEN = process.env.AURORA_TOKEN || ''
const INFURA_TOKEN = process.env.INFURA_TOKEN || ''

const argv = require('yargs/yargs')()
    .env('')
    .options({
        coverage: {
            type: 'boolean',
            default: false,
        },
    }).argv

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: 'aurora',
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
            gas: 3_000_000_000,
            blockGasLimit: 3_000_000_000,
        },
        auroraTunnel: {
            url: `http://127.0.0.1:5432/`,
            accounts: [`0x${PRIVATE_KEY}`],
            chainId: 1313161554,
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
            asPrice: toWei('105', 'gwei'),
        },
        goerli: {
            url: `https://goerli.infura.io/v3/${INFURA_TOKEN}`,
            accounts: [`0x${PRIVATE_KEY}`],
            chainId: 5,
            live: true,
            gasMultiplier: 2,
            gas: 2 * 1000000,
            asPrice: toWei('105', 'gwei'),
        },
    },
}

if (argv.coverage) {
    require('solidity-coverage')
}
