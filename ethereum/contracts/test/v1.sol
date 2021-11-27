//SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.7;

import '../AzulNFT.sol';

contract V1 is AzulNFT {
    function __version() public pure virtual returns (uint256) {
        return 1;
    }
}
