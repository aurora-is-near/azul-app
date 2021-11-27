//SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.7;

import './v1.sol';

contract V2 is V1 {
    function __version() public pure override returns (uint256) {
        return 2;
    }
}
