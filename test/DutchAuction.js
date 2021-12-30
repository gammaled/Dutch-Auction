const DutchAuction = artifacts.require("DutchAuction");
const utils = require("./helpers/utils");
contract("DutchAuction", (accounts) => {
    let [seller, bidder] = accounts;
    let contractInstance;
    beforeEach(async () => {
        contractInstance = await DutchAuction.new();
    });
    context("when initialised", async () => {
        it("should have the startPrice variable not be equal to or lower than reservePrice variable", async () => {
            // TODO: Test if startPrice > reservePrice
        })
        it("should have the endTime variable greater than startTime variable", async () => {
            // TODO: Test endTime > startTime
        })
        it("should have the owner as the address that initialised it", async () => {
            // TODO: Test if msg.sender == the address that initialised contract
        })
    })
    context("has a bid function that", async () => {
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