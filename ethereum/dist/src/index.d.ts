import { ContractInterface } from '@ethersproject/contracts';
import { ethers } from 'ethers';
import { AzulNFT } from '../typechain-types';
export type { AzulNFT };
declare const _default: {
    address: () => string;
    abi: () => ContractInterface;
    contract: (provider: ethers.Signer | ethers.providers.BaseProvider) => AzulNFT;
    edition_info: (editionId: number) => {
        name: string;
        imageUri: string;
        passcodesFile: string;
    };
};
export default _default;
