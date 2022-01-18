# Dutch Auction

## Project Goal
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
    * Reserve price
* 

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
* I am unit testing the smart contract with Mocha during development before deployment to Rinkeby testnet and eventually Ethereum mainnet.

### Unit Tests


## Bugs
---


## Deployment
---

## References
---


