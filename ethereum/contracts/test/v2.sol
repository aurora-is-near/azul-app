//SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.7;

import "./v1.sol";

contract V2 is V1 {
    function __version() override public pure returns (uint) {
        return 2;
    }
}
