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

    constructor(
        address _assetContract,
        uint _tokenId,
        uint _startPrice,
        uint _reservePrice,
        uint _endTime
    ) {
        require(_startPrice > _reservePrice, "Start price MUST be higher than reserve price!");
        startTime = block.timestamp;
        require(_endTime > startTime, "The date of the end of auction MUST come after the start of the auction!");
        assetContract = _assetContract;
        tokenId = _tokenId;
        startPrice = _startPrice;
        endTime = _endTime;
    }

    function bid() payable public returns(bool) {
        //uint currentTime = block.timestamp;
        require(msg.sender.balance >= startPrice);
    }
}