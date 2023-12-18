import { ethers } from "hardhat";

async function main() {

  //DEPLOY THE NEW IMPLEMENTATION CONTRACT
  const walletUpgrade = await ethers.deployContract("WalletUpgrade");

  await walletUpgrade.waitForDeployment();

  console.log(
    ` Wallet upgrade contract is deployed to ${walletUpgrade.target}`
  );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

