// Imports the DutchAuction contract for testing
const DutchAuction = artifacts.require("DutchAuction");
// Imports expect module from chai
const { expect } = require("chai");
// Imports helper function to test fetching a promise 
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
    context("DutchAuction constructor", async () => {
        xit("should have the owner as the address that initialised it", async () => {
            let result = await contractInstance.owner();
            expect(result).to.equal(contractInstance.seller());
        })
        xit("should set value of startTime to the time of contract deployment", async () => {
            let blockTime = await contractInstance.startTime();
            // Converts the returned timestamp from milliseconds --> seconds
            let currentTime = Date.now() / 1000;
            let timeCheck = (blockTime >= currentTime - 15 && blockTime <= currentTime + 15);

            expect(timeCheck).to.equal(true);
        })
        xit("should have an assertion that checks if startPrice greater than reservePrice", async () => {
            // Assertion should leave startPrice and reservePrice undefined if the statement above is not true
            let result = await contractInstance.startPrice();
            // Checks if startPrice is neither undefined nor null
            let checkValue = result == !(undefined || null);
            expect(checkValue).to.equal(true);
        })
        xit("should have an assertion that checks if endTime is greater than startTime", async () => {
            // Assertion should leave endTime and startTime undefined if the statement above is not true
            let result = await contractInstance.endTime();
            // Checks if endTime is neither undefined nor null
            let checkValue = result == !(undefined || null);
            expect(checkValue).to.equal(true);
        })
    })
    context("bid() function", async () => {
        it("should only work if there has been no bid made", async () => {
            // Bid() function will only be called if no bid has been made and returns true in this case.
            let bidder = await contractInstance.bidder();
            let result = await contractInstance.bid();
            // True is returned if there has been no previous bidder
            function ifPreviousBidMade(bidder) {
                if (bidder == (undefined || null)) {
                    return true;
                } else {
                    return false;
                }
            }
            // The result of the bid() function returns "true"
            expect(ifPreviousBidMade(bidder)).to.equal(result);
        })
        //xit("should only allow a caller (bidder) that has the startPrice in their wallet", async () => {
            //TODO: Test to check balance of msg.sender (bidder) has the required capital to enter bid

       // })
        xit("should have a currentPrice is equal to or less than startPrice", async () => {
            //TODO: Test that ownership transfer to msg.sender(bidder) works
        })
        xit("should transfer ownership from seller to bidder", async () => {
            //TODO: Test that bidder is new owner
        })
    })
})