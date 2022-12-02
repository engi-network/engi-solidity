# engi-solidity
Solidity examples for engi EVM.

## Running an example
From an example dir, deploy to local setup:
`npx hardhat run --network frontier scripts/deploy.ts`

The deploy script will give you a contract address that it deployed at.
There is an example of interacting with the contract in `test.js`, paste the contract address in there.

`node test.js` will perform a few interactions with the contracts and print the results.

## Keys for things
You may want to supply your credentials for a different account, by default a test account has been added to `hardhat.config.ts`.
