// Pricefeed addresses can be obtained at https://docs.chain.link/docs/reference-contracts

const networkConfig = {
    31337: {
      name: "localhost",
    },
    42: {
      name: "kovan",
      ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331", // Default one is ETH/USD contract on Kovan
    },
  }

  const INITIAL_SUPPLY = "1000000000000000000000000"
  const developmentChains = ["hardhat", "localhost"]
  
  module.exports = {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY,
  }
