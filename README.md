# ERC20 Token - Hardhat:

# Getting Started

## Quickstart

*Note: `url` refers to the repo's, `path` refers to the path of the cloned repo in your local directory*

```
git clone `url`
cd `path`
yarn
yarn dev
```

### TypeScript (Optional)

```
git checkout typescript
```

# Usage

Deploy:

```
yarn hardhat deploy
```

# Deployment to a testnet or mainnet

1. Setup environment variabltes

You'll want to set your `KOVAN_RPC_URL` and `PRIVATE_KEY` as environment variables. You can add them to a `.env` file, similar to what you see in `.env.example`.

- `PRIVATE_KEY`: The private key of your account (like from [MetaMask](https://metamask.io/)). **NOTE:** FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
  - You can [learn how to export it here](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
- `KOVAN_RPC_URL`: This is url of the kovan testnet node you're working with. You can get setup with one for free from [Alchemy](https://alchemy.com/?a=673c802981)

2. Get testnet ETH

Head over to [faucets.chain.link](https://faucets.chain.link/) and get some tesnet ETH. You should see the ETH show up in your MetaMask.

3. Deploy

```
yarn hardhat deploy --network kovan
```

## Verify on Etherscan

If you deploy to a testnet or mainnet, you can verify it if you get an [API Key](https://etherscan.io/myapikey) from Etherscan and set it as an environment variable named `ETHERSCAN_API_KEY`. You can pop it into your `.env` file as seen in the `.env.example`.

In its current state, if you have your API key set, it will auto-verify Kovan contracts!

However, you can manual verify with:

```
yarn hardhat verify --constructor-args arguments DEPLOYED_CONTRACT_ADDRESS
```

# Thank you!


