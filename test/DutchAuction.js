const DutchAuction = artifacts.require("DutchAuction");
contract("DutchAuction", (accounts) => {
    let [seller, bidder] = accounts;
    let contractInstance;
    beforeEach(async () => {
        contractInstance = await DutchAuction.new();
    })
})