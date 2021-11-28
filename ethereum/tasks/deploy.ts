import { sha256 } from '@ethersproject/sha2'
import { readFileSync } from 'fs'
import { task } from 'hardhat/config'
import info from '../src/index'
import { AzulNFT } from '../typechain-types'

const AuroraToken = '0x8bec47865ade3b172a928df8f990bc7f2a3b9f79'

task('deploy', 'Deploy AzulNFT')
    .addOptionalParam('address', 'Use deployed contract', '')
    .addOptionalParam('edition', 'Start from specified edition', '0')
    .addOptionalParam('start', 'Start from passcode at specified index', '0')
    .addOptionalParam('batch', 'Use batches of specified size', '10')
    .setAction(async (args, hre) => {
        const startEdition = parseInt(args.edition)
        const start = parseInt(args.start)
        const batchSize = parseInt(args.batch)

        const azulFactory = await hre.ethers.getContractFactory('AzulNFT')
        let azul

        /// Deploy contract
        if (args.address === '') {
            console.log('Deploying AZUL contract')
            azul = (await hre.upgrades.deployProxy(azulFactory, [AuroraToken], {
                kind: 'uups',
            })) as AzulNFT
            console.log('Address:', azul.address)
        } else {
            console.log('Using contract at address:', args.address)
            azul = azulFactory.attach(args.address)
        }

        /// Upload editions info
        for (let i = startEdition; i < 3; i++) {
            const value = info.edition_info(i)

            if (i === startEdition && start !== 0) {
                /// Skip metadata initialization
            } else {
                console.log('Setting metadata for', value)
                await azul.setEditionMetadata(i, value.name, value.imageUri)
            }

            const passcodes = readFileSync(value.passcodesFile, 'utf-8')
                .split('\n')
                .filter((passcode) => passcode !== '')
                .map((passcode) => sha256(Buffer.from(passcode, 'utf8')))

            for (
                let j = i === startEdition ? start : 0;
                j < passcodes.length;
                j += batchSize
            ) {
                const batch = passcodes.slice(j, j + batchSize)
                console.log(
                    `Edition ${i}. Uploading batch [${j}, ${j + batchSize})`
                )
                await azul.uploadPasscodeBatch(batch, i)
            }
        }
    })
