import { sha256 } from '@ethersproject/sha2'
import { expect } from 'chai'
import { ethers, upgrades } from 'hardhat'
import info from '../src/index'
import { AzulNFT, V1 } from '../typechain-types'
import getUri = require('get-uri')

describe('Azul', () => {
    it('Contract is upgradeable', async () => {
        const Azul = await ethers.getContractFactory('V1')
        const azul = (await upgrades.deployProxy(
            Azul,
            [ethers.constants.AddressZero],
            {
                kind: 'uups',
            }
        )) as V1

        let result = await azul.__version()
        expect(result.toNumber()).to.be.equal(1)

        const Azul2 = await ethers.getContractFactory('V2')
        await upgrades.upgradeProxy(azul, Azul2)

        result = await azul.__version()
        expect(result.toNumber()).to.be.equal(2)
    })

    it('Happy path', async () => {
        const [_owner, alice] = await ethers.getSigners()

        // Step 1: Deploy contract
        const Azul = await ethers.getContractFactory('AzulNFT')

        const azul = (await upgrades.deployProxy(
            Azul,
            [ethers.constants.AddressZero],
            {
                kind: 'uups',
            }
        )) as AzulNFT

        // Step 2: Upload edition information
        for (let i = 0; i < 3; i++) {
            let res = info.edition_info(i)
            await azul.setEditionMetadata(i, res.name, res.imageUri)
        }

        // Step 3: Generate and upload passphrases
        const passphrases = []

        for (let i = 0; i < 3; i++) {
            const hashed = []

            for (let j = 0; j < 5; ++j) {
                const passphrase = `azul-edition-${i}-${j}`
                const hash = sha256(Buffer.from(passphrase, 'utf8'))

                passphrases.push({ passphrase, hash })
                hashed.push(hash)
            }

            await azul.uploadPasscodeBatch(hashed, i)
        }

        // Step 4: Claim token with passphrase
        await azul.connect(alice).claim(passphrases[0].passphrase)
        await azul.connect(alice).claim(passphrases[12].passphrase)
        await azul.connect(alice).claim(passphrases[1].passphrase)

        // Step 5: Check Token URI
        const uri = await azul.tokenURI(3)
        const metadata = JSON.parse(
            ((await getUri(uri)).read() as Buffer).toString()
        )

        expect(metadata).to.be.eql({
            name: 'AZUL - 3',
            description: 'Aurora Edition - 2',
            image: 'ipfs://bafybeiebz2goc342lsjjzlyriterkufeypjxoykpddgazhw63wmc2ancvi/aurora.jpeg',
        })
    })
})
