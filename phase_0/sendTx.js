import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  console.log("Wallet address:", wallet.address);

  const tx = await wallet.sendTransaction({
    to: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    value: ethers.parseEther("0.001"),
  });

  console.log("📦 Sent! Hash:", tx.hash);

  const receipt = await tx.wait();
  console.log("✅ Confirmed in block:", receipt.blockNumber);
}

main().catch(console.error);
