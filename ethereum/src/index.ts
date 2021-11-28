import { ContractInterface } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import * as AzulCompiled from '../artifacts/contracts/AzulNFT.sol/AzulNFT.json'
import { AzulNFT } from '../typechain-types'

const address = () => {
    // TODO: Get this address from deployment
    return '0x370ae746090f84d3ac6120007bda91bce7e2b469'
}

const abi = () => {
    return AzulCompiled.abi as ContractInterface
}

const contract = (provider: ethers.providers.BaseProvider) => {
    return new ethers.Contract(address(), abi(), provider) as AzulNFT
}

export type { AzulNFT }
export default { address, abi, contract }
