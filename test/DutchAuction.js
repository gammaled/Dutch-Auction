// Imports the DutchAuction contract for testing
const DutchAuction = artifacts.require("DutchAuction");
const TestCollectible = artifacts.require("TestCollectible");
// Imports expect module from chai
const { expect } = require("chai");
// Imports helper function to test fetching a promise 
const utils = require("./helpers/utils");

// Testing smart contract
contract("DutchAuction", (accounts) => {

    let dutchAuction;

    // Variables used as parameters for constructor function
    let [seller, bidder] = accounts;
    let tokenId;
    let startPrice = web3.utils.toWei("0.01");
    let reservePrice = web3.utils.toWei("0.005");
    let endTime = 1649755731;
    let currentTime = Date.now() / 1000;

    beforeEach(async () => {
        // Creating new contract instance before every individual test
        //Sort out the two variables below
        let testCollectible = await TestCollectible.new();
        let collectibleAddress = testCollectible.address;
        tokenId = 1;
        dutchAuction = await DutchAuction.new(collectibleAddress, tokenId, startPrice, reservePrice, endTime, {from: seller});
    });
    context("DutchAuction constructor", async () => {
        it("should have the owner as the address that initialised it", async () => {
            let owner = await dutchAuction.owner();
            expect(owner).to.equal(seller);
        })
        it("should set value of startTime dutchAuction the time of contract deployment", async () => {
            let blockTime = await dutchAuction.startTime();
            // Converts the returned timestamp from milliseconds --> seconds
            let timeCheck = (blockTime >= currentTime - 15 && blockTime <= currentTime + 15);

            expect(timeCheck).to.equal(true);
        })
        it("should have an assertion that checks if startPrice greater than reservePrice", async () => {
            // Assertion should leave startPrice and reservePrice undefined if the statement above is not true
            let startPriceResult = await dutchAuction.startPrice();
            let reservePriceResult = await dutchAuction.reservePrice();
            //TODO: Need to improve logic of asserting the test
            if (startPrice > reservePrice) {
                return expect(startPriceResult && reservePriceResult).to.equal(!undefined);
            };
        })
        it("should have an assertion that checks if endTime is greater than startTime", async () => {
            // Assertion should leave endTime and startTime undefined if the statement above is not true
            let endTimeResult = await dutchAuction.endTime();
            // Checks if endTime is neither undefined nor null
            if (endTime <= currentTime) {
                return expect(endTimeResult).to.equal(undefined);
            };
        })
    })
    context("bid() function", async () => {
        it("should only work if there has been no bid made", async () => {
            // Bid() function will only be called if no bid has been made and returns true in this case.
            let bidder = await dutchAuction.bidder();
            let result = await dutchAuction.bid();
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
        it("should only allow a caller (bidder) that has the startPrice in their wallet", async () => {
            //TODO: Test to check balance of msg.sender (bidder) has the required capital to enter bid
            let bidderBalance = parseInt(await web3.utils.fromWei(await web3.eth.getBalance(bidder)));
            if (bidderBalance >= startPrice) {
                expect(dutchAuction.bid()).to.equal(true);
            } else {
                expect(dutchAuction.bid()).to.equal(!true);
            }

        })
        it("should have condition that asserts that reservePrice < startPrice", async () => {
            // If it is reverted, then these variables should be left undefined so this check would check for this.
            let startPrice = await dutchAuction.startPrice();
            let reservePrice = await dutchAuction.reservePrice();

            expect(startPrice && reservePrice).to.be.a("number");
            expect(startPrice > reservePrice).to.equal(true);

            if (startPrice > reservePrice) {
                expect(dutchAuction).to.equal(!undefined);
            } else {
                expect(dutchAuction).to.equal(undefined);
            }

        })
        it("should transfer ownership from seller to bidder", async () => {
            // This test should check that owner == bidder, so ownership was transferred from seller --> bidder
            let bidMade = await dutchAuction.bid();
            let owner = await dutchAuction.owner();
            console.log(owner);

            if(bidMade == true) {
                expect(owner).to.equal(bidder);
            } else {
                expect(owner).to.equal(seller);
            }
        })
    })
})