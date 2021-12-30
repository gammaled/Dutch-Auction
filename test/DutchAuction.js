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
})