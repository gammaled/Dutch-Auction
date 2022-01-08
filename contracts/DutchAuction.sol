// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract DutchAuction is Ownable {
    event bidMade(address _bidder, uint _amount);

    address public assetContract;
    uint public tokenId;
    address public seller;
    address public bidder;
    uint public startPrice;
    uint public reservePrice;
    uint public startTime;
    uint public endTime;
}