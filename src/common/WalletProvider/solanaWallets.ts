import { solanaWallets } from "./providers";

export const detectSolanaWallets = async () => {
  const solana = (window as any)?.solana;

  console.log("solana", solana);

  const isAvailable = !!solana;

  const avaiilableWallets = solanaWallets.map((wallet) => {
    wallet.isAvailable =
      solana?.[wallet.flag] ||
      window?.[wallet?.name.toLowerCase() as any]?.[wallet?.flag as any];
    return wallet;
  });

  return {
    isAvailable,
    wallets: avaiilableWallets,
  };
};
