import { expect } from 'chai'
import { ethers, upgrades } from 'hardhat'
import { V1 } from '../typechain-types'

describe('Azul', () => {
    it('Contract is upgradeable', async () => {
        const Azul = await ethers.getContractFactory('V1')
        const azul = (await upgrades.deployProxy(Azul, {
            kind: 'uups',
        })) as V1

        let result = await azul.__version()
        expect(result.toNumber()).to.be.equal(1)

        const Azul2 = await ethers.getContractFactory('V2')
        await upgrades.upgradeProxy(azul, Azul2)

        result = await azul.__version()
        expect(result.toNumber()).to.be.equal(2)
    })
})
