import { ContractInterface } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import * as AzulCompiled from '../artifacts/contracts/AzulNFT.sol/AzulNFT.json'
import { AzulNFT } from '../typechain-types'

const address = () => '0xC28Cab11C0D7b25ae70cD6Ed88D32af6797a077B'

const NAMES = ['Aurora', 'Rainbow Bridge', 'Lisboa']
const IMAGE_NAMES = ['aurora.jpeg', 'rainbow-bridge.jpeg', 'lisboa.jpeg']
const PASSCODE_FILES = ['aurora.txt', 'rainbow-bridge.txt', 'lisboa.txt']
const IPFS_FOLDER =
    'ipfs://bafybeiebz2goc342lsjjzlyriterkufeypjxoykpddgazhw63wmc2ancvi/'

const edition_info = (editionId: number) => {
    return {
        name: NAMES[editionId],
        imageUri: IPFS_FOLDER + IMAGE_NAMES[editionId],
        passcodesFile: 'passcodes/' + PASSCODE_FILES[editionId],
    }
}

const abi = () => AzulCompiled.abi as ContractInterface

const contract = (provider: ethers.Signer | ethers.providers.BaseProvider) => {
    return new ethers.Contract(address(), abi(), provider) as AzulNFT
}

export type { AzulNFT }
export default { address, abi, contract, edition_info }
