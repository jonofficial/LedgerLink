// require("dotenv").config();
import { ethers } from "ethers";

const provider = new ethers.BrowserProvider(window.ethereum);  // Updated for Ethers v6

const contractABI = require("../contract-abi.json");
const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

export const weatherInsuranceContract = new ethers.Contract(
  contractAddress,
  contractABI,
  provider
);

export const buyInsurance = async (address, premiumInEthers) => {
  // input error handling
  if (!window.ethereum || address === null) {
    return {
      status: "💡 Connect your Metamask wallet to update the message on the blockchain.",
    };
  }

  // sign the transaction
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const premium = ethers.parseUnits(premiumInEthers, "ether");  // Updated for Ethers v6

    const signer = provider.getSigner();
    const contractAlice = weatherInsuranceContract.connect(signer);
    const tx = await contractAlice.buyInsurance({ value: premium });
    const result = await tx.wait();

    console.log(result);

    return {
      status: (
        <span>
          ✅ Sent successfully!
          <p>Transaction hash: {result.transactionHash}</p>
        </span>
      ),
    };
  } catch (error) {
    return {
      status: "⛔ " + error.message, // Updated error message format
    };
  }
};

export const updateTemperature = async (address, newTemperature) => {
  // input error handling
  if (!window.ethereum || address === null) {
    return {
      status: "💡 Connect your Metamask wallet to update the message on the blockchain.",
    };
  }

  if (newTemperature.trim() === "") {
    return {
      status: "❌ Your temperature cannot be an empty string.",
    };
  }

  // sign the transaction
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const signer = provider.getSigner();
    const contractAlice = weatherInsuranceContract.connect(signer);
    const tx = await contractAlice.updateTemperature(newTemperature);
    const result = await tx.wait();

    console.log(result);

    return {
      status: (
        <span>
          ✅ Sent successfully!
          <p>Transaction hash: {result.transactionHash}</p>
        </span>
      ),
    };
  } catch (error) {
    return {
      status: "⛔ " + error.message, // Updated error message format
    };
  }
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "⛔ " + err.message,  // Updated error message format
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};
