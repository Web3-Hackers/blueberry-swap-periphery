const Router = artifacts.require("BakerySwapRouter.sol");
const WFTM = artifacts.require("WrapFantom.sol");

module.exports = async function (deployer, _network, address) {
  let wftm;
  const FACTORY_ADDRESS = "0x1b2745d04d1c25c72fca4c0da4c751bf185f1ca7";

  if (_network === "mainnet") {
    weth = await WFTM.at("wbnbaddress");
  } else {
    await deployer.deploy(WFTM);
    wftm = await WFTM.deployed();
  }

  await deployer.deploy(Router, FACTORY_ADDRESS, wftm.address);
};
