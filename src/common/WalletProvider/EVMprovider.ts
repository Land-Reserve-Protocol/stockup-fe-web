import { ethereumWallets } from "./providers";
export const detectAvaialableWallets = async () => {
  const eth = (window as any)?.ethereum;

  const isAvailable = !!eth;

  const walletFlags = ethereumWallets.map((wallet) => {
    wallet.isAvailable = eth?.[wallet?.flag];
    return wallet;
  });

  return {
    isAvailable,
    wallets: walletFlags,
  };
};
