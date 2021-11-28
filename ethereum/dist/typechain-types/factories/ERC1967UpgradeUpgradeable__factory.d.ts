import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import type { ERC1967UpgradeUpgradeable, ERC1967UpgradeUpgradeableInterface } from "../ERC1967UpgradeUpgradeable";
export declare class ERC1967UpgradeUpgradeable__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ERC1967UpgradeUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1967UpgradeUpgradeable;
}
