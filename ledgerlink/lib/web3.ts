import { ethers } from 'ethers';

export async function connectWallet() {
  if (typeof window.ethereum !== 'undefined') {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      return signer;
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      throw error;
    }
  } else {
    throw new Error('Please install MetaMask or another Web3 wallet');
  }
}

export async function verifyInsurance(policyNumber: string) {
  // Implement smart contract interaction here
  // This is a placeholder for the actual blockchain verification logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        valid: true,
        policyHolder: '0x1234...5678',
        expirationDate: new Date(2024, 11, 31),
        coverage: 'Comprehensive',
      });
    }, 2000);
  });
}