# Dutch Auction

## Project Summary
---

* To write a smart contract that performs a dutch auction of digital assets, which in the case of this project will be NFTs (non-fungible tokens) which are tokens in the [ERC-721 standard](https://eips.ethereum.org/EIPS/eip-721).

    ### What is a dutch auction?
    * It is an auction where the auctioneer starts with a high asking price and it decreases until a participant accepts the price or it reaches a predetermined reserve price.<br>
<br>

* As soon as the bidder accepts the price, the asset should be immediately transferred to avoid a flash loan attack.<br>

* The smart contract should be covered by unit tests to ensure that it works as intended before deployment to the Rinkeby Ethereum testnet. I will not be deploying it to mainnet as gas fees are high and this is project is mostly for educational purposes.

* It will be initiated with:
    * ERC721 contract address
    * Token ID
    * End date
    * Start price
    * Reserve prices

## Technologies Used
---
* [Solidity](https://docs.soliditylang.org/en/v0.8.11/): language used to write smart contracts
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): language used to write scripts that deploy and interact with smart contract after it is deployed
* [Node.js](https://nodejs.org/en/docs/): used for installing and managing packages.
* [Truffle](https://github.com/trufflesuite): a smart contract development framework.
* [Mocha](https://mochajs.org/): a JavaScript unit testing framework.
* [Chai](https://github.com/chaijs/chai#:~:text=Chai%20is%20a%20BDD%20%2F%20TDD,with%20any%20javascript%20testing%20framework.): a TDD assertion library paired with Mocha.
* [Ganache](https://github.com/trufflesuite/ganache): a tool for creating a local blockchain for fast Ethereum development.

## Testing
---
### Unit Tests
I am unit testing the smart contract with Mocha during development before deployment to Rinkeby testnet.

* **Owner of the dutch auction should be the seller that initialised it** <br>
I tested this by calling ```owner()``` function and asserted that the returned address is equal to the address of the seller, the address putting that initiated the auction.

* **The auction start time is equal to time of contract deployment**<br>
The ```startTime``` variable is initialised with ```block.timestamp``` at deployment and then asserted that it was equal to timestamp in test script using ```Date.now()```. This test was run while taking into account that it takes a while to confirm a block in the blockchain.

* **Contract deployment should revert if the following condition is not met: ```startTime < endTime```**<br>
I used a require statement that asserts this condition in constructor of the contract and deployment is reverted if it is not met. I asserted that the variables ```startTime``` and ```endTime``` are only defined if the condition is met.

* **Contract deployment should revert if the following condition is not met: ```startPrice > reservePrice```**<br>
I used a require statement that asserts this condition in constructor of the contract and deployment is reverted if it is not met. I asserted that the variables ```startPrice``` and ```reservePrice``` are only defined if the condition is met.

* **Bid can only be made if not bid has been made previously**<br>
I used a require statement that asserts in the ```bid()``` function that the address of ```bidder == address(0)``` (```0x0000000000000000000000000000000000000000```) which is the default address of undefined variable of type address. Only once this condition is met is the ```bidder``` variable defined with the address calling the ```bid()``` function.

* **Bid can only be made from an address that has start price or more as a requirement to enter auction**<br>
I used an assertion to check if the balance of the bidder is equal to or more than the start price which required capital needed to make a bid.

* **Ownership should be transferred to bidder after all conditions are met**<br>
I have used an assertion to check that the address returned after calling ```owner()``` function is equal to the address of the bidder after the ```bid()``` function has been successfully called after meeting all conditions.


## Bugs
---


## Deployment
---

## References
---


