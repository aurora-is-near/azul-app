//SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.7;

import "../AzulNFT.sol";

contract V1 is AzulNFT {
    function __version() virtual public pure returns (uint) {
        return 1;
    }
}
