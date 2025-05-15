import { cardanoWallets } from "./providers";

export const detectCardanoWallets = async () => {
  const cardano = (window as any)?.cardano;

  const isAvailable = !!cardano;

  const avaiilableWallets = cardanoWallets.map((wallet) => {
    wallet.isAvailable = !!cardano?.[wallet.flag];
    return wallet;
  });

  return {
    isAvailable,
    wallets: avaiilableWallets,
  };
};
