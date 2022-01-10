pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestERCToken is ERC721 {

    string private _name;
    string private _symbol;

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    function _transferAsset(address to, uint256 tokenId) internal virtual {
        _safeMint(to, tokenId, "");
    }

}