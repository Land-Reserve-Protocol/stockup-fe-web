import { solanaWallets } from "./providers";

export const detectSolanaWallets = async () => {
  const solana = (window as any)?.solana;

  const isAvailable = !!solana;

  const walletFlags = solanaWallets.reduce((wallet) => {
    wallet.isAvailable = solana?.[wallet.flag];
    return wallet;
  });

  return {
    isAvailable,
    wallets: walletFlags,
  };
};
