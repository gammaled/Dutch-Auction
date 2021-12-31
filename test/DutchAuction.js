// Importing the DutchAuction contract for testing
const DutchAuction = artifacts.require("DutchAuction");

const { expect } = require("chai");
// Importing helper function to test fetching a promise 
const utils = require("./helpers/utils");

// Testing smart contract
contract("DutchAuction", (accounts) => {
    let contractInstance;
    // Variables used as parameters for constructor function
    let [seller, bidder] = accounts;
    let asset;
    let tokenId;
    let startPrice;
    let reservePrice;
    let endTime;
    // Variable defined when constructor is called
    let startTime;
    beforeEach(async () => {
        // Creating new contract instance before every individual test
        contractInstance = await DutchAuction.new(asset, tokenId, startPrice, reservePrice, endTime, {from: seller});
    });
    context("constructor", async () => {
        it("should have the owner as the address that initialised it", async () => {
            let result = await contractInstance.owner();
            expect(result).to.equal(seller);
        })
        it("should define startTime variable with the value of the timestamp of contract deployment", async () => {
            // TODO: Fix logic to check if (NOW <= blockTime <= NOW + 15 sec)
            console.log(Date.now());
            let blockTime = await contractInstance.startTime;
            let blockTimeRange = Date.now()
            expect(blockTime).to.equal(Date.now());
        })
        it("should return error if startPrice is not greater than reservePrice", async () => {
            // TODO: Test if startPrice > reservePrice
        })
        it("should return error if endTime is not greater than startTime", async () => {
            // TODO: Test endTime > startTime
        })
    })
    context("has a function bid() that", async () => {
        it("should only work if there has been no bid made", async () => {
            //TODO: Test that the value of bidder variable is a address(0) (zero address)
        })
        it("should only allow a caller (bidder) that has the startPrice in their wallet", async () => {
            //TODO: Test to check balance of msg.sender (bidder) has the required capital to enter bid
        })
        it("should have a currentPrice is equal to or less than startPrice", async () => {
            //TODO: Test that ownership transfer to msg.sender(bidder) works
        })
    })
})