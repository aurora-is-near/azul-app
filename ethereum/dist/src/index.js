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
const ethers_1 = require("ethers");
const AzulCompiled = __importStar(require("../artifacts/contracts/AzulNFT.sol/AzulNFT.json"));
const address = () => '0xcf44B3bF0923BA93754b883a42043B9C0291cbc7';
const NAMES = ['Aurora', 'Rainbow Bridge', 'Lisboa'];
const IMAGE_NAMES = ['aurora.jpeg', 'rainbow-bridge.jpeg', 'lisboa.jpeg'];
const PASSCODE_FILES = ['aurora.txt', 'rainbow-bridge.txt', 'lisboa.txt'];
const IPFS_FOLDER = 'ipfs://bafybeiebz2goc342lsjjzlyriterkufeypjxoykpddgazhw63wmc2ancvi/';
const edition_info = (editionId) => {
    return {
        name: NAMES[editionId],
        imageUri: IPFS_FOLDER + IMAGE_NAMES[editionId],
        passcodesFile: 'passcodes/' + PASSCODE_FILES[editionId],
    };
};
const abi = () => AzulCompiled.abi;
const contract = (provider) => {
    return new ethers_1.ethers.Contract(address(), abi(), provider);
};
exports.default = { address, abi, contract, edition_info };
