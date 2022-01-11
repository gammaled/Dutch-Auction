// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestERCToken is ERC721 {

    string private _name;
    string private _symbol;

    constructor() public ERC721 ("Test","TST") {
        _name = name_;
        _symbol = symbol_;
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;
}