//SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.7;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import '@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol';

uint256 constant NIL = 0;

string constant TOKEN_URI_PART_0 = 'data:application/json;charset=UTF-8,%7B%22name%22%3A%22AZUL - ';
string constant TOKEN_URI_PART_1 = '%22,%22description%22%3A%22';
string constant TOKEN_URI_PART_2 = ' Edition - ';
string constant TOKEN_URI_PART_3 = '%22,%22image%22%3A%22';
string constant TOKEN_URI_PART_4 = '%22%7D';

contract AzulNFT is
    Initializable,
    ERC721EnumerableUpgradeable,
    UUPSUpgradeable,
    OwnableUpgradeable
{
    struct NFTData {
        bool exist;
        bool claimed;
        uint256 editionId;
        /// This fields are populated after the token is claimed.
        uint256 tokenId;
        uint256 editionTokenId;
        uint256 airdropAmount;
        address originalOwner;
    }

    struct EditionInfo {
        string name;
        string imageUri;
        uint256 totalClaimed;
    }

    /// Mapping from the hash of each passcode to the data of the associated NFT
    mapping(bytes32 => NFTData) reversePasscode;
    /// Total NFTs claimed
    uint256 public totalClaimed;
    /// Information per edition
    EditionInfo[3] editions;
    /// Mapping from tokenId to passcode Hash. Useful to fetch metadata from a minted NFT.
    mapping(uint256 => bytes32) tokenId2PasscodeHash;
    /// Address for Aurora contract
    IERC20Upgradeable public aurora;

    /// Equivalent to constructor in upgradable contracts
    function initialize(IERC20Upgradeable aurora_) public initializer {
        aurora = aurora_;

        __ERC721_init('Azul', 'AZUL');
        __ERC721Enumerable_init();
        __UUPSUpgradeable_init();
        __Ownable_init();
    }

    /// Required by UUPS Upgrade patter.
    /// Determines if current address is authorized to upgrade the contract.
    function _authorizeUpgrade(address) internal override onlyOwner {}

    function setEditionMetadata(
        uint256 editionId,
        string memory name,
        string memory imageUri
    ) public onlyOwner {
        editions[editionId].name = name;
        editions[editionId].imageUri = imageUri;
    }

    function uploadPasscodeBatch(
        bytes32[] memory passcodesHashed,
        uint256 editionId
    ) public onlyOwner {
        require(editionId < editions.length);

        for (uint256 i = 0; i < passcodesHashed.length; i++) {
            bytes32 passcodeHash = passcodesHashed[i];
            reversePasscode[passcodeHash] = NFTData({
                exist: true,
                claimed: false,
                editionId: editionId,
                tokenId: NIL,
                editionTokenId: NIL,
                airdropAmount: NIL,
                originalOwner: address(0)
            });
        }
    }

    function airdropAmount(NFTData memory) internal pure returns (uint256) {
        // TODO: Determine the amount of tokens to for the airdrop
        return 0;
    }

    /// Copied from: https://etherscan.io/address/0x621a6d60c7c16a1ac9bba9cc61464a16b43cac51#code
    function itoa(uint256 n) internal pure returns (string memory) {
        if (n == 0) {
            return '0';
        }
        bytes memory reversed = new bytes(100);
        uint256 len = 0;
        while (n != 0) {
            uint256 r = n % 10;
            n = n / 10;
            reversed[len++] = bytes1(uint8(48 + r));
        }
        bytes memory buf = new bytes(len);
        for (uint256 i = 0; i < len; i++) {
            buf[i] = reversed[len - i - 1];
        }
        return string(buf);
    }

    /// Public functions

    function rawDataFromPasscodeHash(bytes32 passcodeHash)
        public
        view
        returns (NFTData memory)
    {
        return reversePasscode[passcodeHash];
    }

    function rawDataFromTokenId(uint256 tokenId)
        public
        view
        returns (NFTData memory)
    {
        return rawDataFromPasscodeHash(tokenId2PasscodeHash[tokenId]);
    }

    function claim(string memory passcode) public returns (uint256) {
        bytes memory passcodeBytes = abi.encodePacked(passcode);
        bytes32 passcodeHash = sha256(passcodeBytes);

        NFTData memory data = reversePasscode[passcodeHash];

        require(data.exist, 'Invalid passcode');
        require(!data.claimed, 'NFT claimed for this passcode');

        data.claimed = true;

        EditionInfo memory edition = editions[data.editionId];

        totalClaimed += 1;
        data.tokenId = totalClaimed;

        edition.totalClaimed += 1;
        data.editionTokenId = edition.totalClaimed;

        uint256 amount = airdropAmount(data);
        data.airdropAmount = amount;

        if (amount > 0) {
            aurora.transfer(_msgSender(), amount);
        }

        data.originalOwner = _msgSender();

        reversePasscode[passcodeHash] = data;
        editions[data.editionId] = edition;
        tokenId2PasscodeHash[data.tokenId] = passcodeHash;

        _safeMint(_msgSender(), data.tokenId);

        return data.tokenId;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            'ERC721Metadata: URI query for nonexistent token'
        );

        NFTData memory data = rawDataFromTokenId(tokenId);
        EditionInfo memory edition = editions[data.editionId];

        return
            string(
                abi.encodePacked(
                    TOKEN_URI_PART_0,
                    itoa(data.tokenId),
                    TOKEN_URI_PART_1,
                    edition.name,
                    TOKEN_URI_PART_2,
                    itoa(data.editionTokenId),
                    TOKEN_URI_PART_3,
                    edition.imageUri,
                    TOKEN_URI_PART_4
                )
            );
    }
}
