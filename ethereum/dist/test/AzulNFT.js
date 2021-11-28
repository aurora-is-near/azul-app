"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sha2_1 = require("@ethersproject/sha2");
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
const index_1 = __importDefault(require("../src/index"));
const getUri = require("get-uri");
describe('Azul', () => {
    it('Contract is upgradeable', async () => {
        const Azul = await hardhat_1.ethers.getContractFactory('V1');
        const azul = (await hardhat_1.upgrades.deployProxy(Azul, [hardhat_1.ethers.constants.AddressZero], {
            kind: 'uups',
        }));
        let result = await azul.__version();
        (0, chai_1.expect)(result.toNumber()).to.be.equal(1);
        const Azul2 = await hardhat_1.ethers.getContractFactory('V2');
        await hardhat_1.upgrades.upgradeProxy(azul, Azul2);
        result = await azul.__version();
        (0, chai_1.expect)(result.toNumber()).to.be.equal(2);
    });
    it('Happy path', async () => {
        const [_owner, alice] = await hardhat_1.ethers.getSigners();
        // Step 1: Deploy contract
        const Azul = await hardhat_1.ethers.getContractFactory('AzulNFT');
        const azul = (await hardhat_1.upgrades.deployProxy(Azul, [hardhat_1.ethers.constants.AddressZero], {
            kind: 'uups',
        }));
        // Step 2: Upload edition information
        for (let i = 0; i < 3; i++) {
            let res = index_1.default.edition_info(i);
            await azul.setEditionMetadata(i, res.name, res.imageUri);
        }
        // Step 3: Generate and upload passphrases
        const passphrases = [];
        for (let i = 0; i < 3; i++) {
            const hashed = [];
            for (let j = 0; j < 5; ++j) {
                const passphrase = `azul-edition-${i}-${j}`;
                const hash = (0, sha2_1.sha256)(Buffer.from(passphrase, 'utf8'));
                passphrases.push({ passphrase, hash });
                hashed.push(hash);
            }
            await azul.uploadPasscodeBatch(hashed, i);
        }
        // Step 4: Claim token with passphrase
        await azul.connect(alice).claim(passphrases[0].passphrase);
        await azul.connect(alice).claim(passphrases[12].passphrase);
        await azul.connect(alice).claim(passphrases[1].passphrase);
        // Step 5: Check Token URI
        const uri = await azul.tokenURI(3);
        const metadata = JSON.parse((await getUri(uri)).read().toString());
        (0, chai_1.expect)(metadata).to.be.eql({
            name: 'AZUL - 3',
            description: 'Aurora Edition - 2',
            image: 'ipfs://bafybeiebz2goc342lsjjzlyriterkufeypjxoykpddgazhw63wmc2ancvi/aurora.jpeg',
        });
    });
});
