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
const address = () => {
    // TODO: Get this address from deployment
    return '0x370ae746090f84d3ac6120007bda91bce7e2b469';
};
const abi = () => {
    return AzulCompiled.abi;
};
const contract = (provider) => {
    return new ethers_1.ethers.Contract(address(), abi(), provider);
};
exports.default = { address, abi, contract };
