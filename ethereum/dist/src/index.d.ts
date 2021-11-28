import { ContractInterface } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import { AzulNFT } from '../typechain-types'
export type { AzulNFT }
declare const _default: {
    address: () => string
    abi: () => ContractInterface
    contract: (provider: ethers.providers.BaseProvider) => AzulNFT
}
export default _default
