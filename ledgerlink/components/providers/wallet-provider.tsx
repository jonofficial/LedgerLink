'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { connectWallet } from '@/lib/web3';
import { useToast } from '@/components/ui/use-toast';

interface WalletContextType {
  address: string | null;
  balance: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType>({} as WalletContextType);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const { toast } = useToast();

  const connect = async () => {
    try {
      const signer = await connectWallet();
      const address = await signer.getAddress();
      const balance = await signer.provider.getBalance(address);
      setAddress(address);
      setBalance(balance.toString());
      toast({
        title: 'Wallet Connected',
        description: 'Successfully connected to MetaMask',
      });
    } catch (error) {
      toast({
        title: 'Connection Failed',
        description: 'Please install MetaMask or try again',
        variant: 'destructive',
      });
    }
  };

  const disconnect = () => {
    setAddress(null);
    setBalance(null);
  };

  return (
    <WalletContext.Provider value={{ address, balance, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);