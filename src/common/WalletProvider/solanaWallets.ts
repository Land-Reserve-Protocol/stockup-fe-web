import { solanaWallets } from "./providers";

export const detectSolanaWallets = async () => {
  const solana = (window as any)?.solana;

  const isSolanaWalletAvailable = !!solana;

  const walletFlags = solanaWallets.reduce((acc, { name, flag }) => {
    acc[name] = solana?.[flag];
    return acc;
  }, {} as Record<string, boolean>);

  return {
    isSolanaWalletAvailable,
    ...walletFlags,
  };
};
