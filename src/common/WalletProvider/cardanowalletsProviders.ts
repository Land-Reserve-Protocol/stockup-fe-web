import { cardanoWallets } from "./providers";

export const detectCardanoWallets = async () => {
  const cardano = (window as any)?.cardano;

  const isAvailable = !!cardano;

  const walletFlags = cardanoWallets.map((wallet) => {
    wallet.isAvailable = !!cardano?.[wallet.flag];
    return wallet;
  });

  return {
    isAvailable,
    wallets: walletFlags,
  };
};
