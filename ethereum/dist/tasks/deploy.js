"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sha2_1 = require("@ethersproject/sha2");
const fs_1 = require("fs");
const config_1 = require("hardhat/config");
const index_1 = __importDefault(require("../src/index"));
const AuroraToken = '0x8bec47865ade3b172a928df8f990bc7f2a3b9f79';
(0, config_1.task)('deploy', 'Deploy AzulNFT')
    .addOptionalParam('address', 'Use deployed contract', '')
    .addOptionalParam('edition', 'Start from specified edition', '0')
    .addOptionalParam('start', 'Start from passcode at specified index', '0')
    .addOptionalParam('batch', 'Use batches of specified size', '10')
    .setAction(async (args, hre) => {
    const startEdition = parseInt(args.edition);
    const start = parseInt(args.start);
    const batchSize = parseInt(args.batch);
    const azulFactory = await hre.ethers.getContractFactory('AzulNFT');
    let azul;
    /// Deploy contract
    if (args.address === '') {
        console.log('Deploying AZUL contract');
        azul = (await hre.upgrades.deployProxy(azulFactory, [AuroraToken], {
            kind: 'uups',
        }));
        console.log('Address:', azul.address);
    }
    else {
        console.log('Using contract at address:', args.address);
        azul = azulFactory.attach(args.address);
    }
    /// Upload editions info
    for (let i = startEdition; i < 3; i++) {
        const value = index_1.default.edition_info(i);
        console.log('Setting metadata for', value);
        await azul.setEditionMetadata(i, value.name, value.imageUri);
        const passcodes = (0, fs_1.readFileSync)(value.passcodesFile, 'utf-8')
            .split('\n')
            .filter((passcode) => passcode !== '')
            .map((passcode) => (0, sha2_1.sha256)(Buffer.from(passcode, 'utf8')));
        for (let j = start; j < passcodes.length; j += batchSize) {
            const batch = passcodes.slice(j, j + batchSize);
            console.log(`Edition ${i}. Uploading batch [${j}, ${j + batchSize})`);
            await azul.uploadPasscodeBatch(batch, i);
        }
    }
});
