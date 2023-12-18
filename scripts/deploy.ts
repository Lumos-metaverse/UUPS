import { ethers } from "hardhat";

async function main() {
  const ABI = [
    "function init(address _addr)"
  ];

  const iProxy = new ethers.Interface(ABI);

  const constructData = iProxy.encodeFunctionData("init", ["0x7439e532F9847bf734E88D52c1B37878e88A2073"]);

  console.log(constructData, "construct data")

  //DEPLOY IMPLEMENTATION CONTRACT
  const wallet = await ethers.deployContract("Wallet");

  await wallet.waitForDeployment();

  console.log(
    ` Wallet contract is deployed to ${wallet.target}`
  );

  //DEPLOY PROXY CONTRACT
  const proxy = await ethers.deployContract("Proxy", [wallet.target]);

  await proxy.waitForDeployment();

  console.log(
    ` Proxy contract is deployed to ${proxy.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

