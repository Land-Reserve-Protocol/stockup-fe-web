import { cardanoWallets } from "./providers";

export const detectCardanoWallets = async () => {
  const cardano = (window as any)?.cardano;

  const isCardanoWalletAvailable = !!cardano;

  const walletFlags = cardanoWallets.reduce((acc, { flag }) => {
    acc[flag] = !!cardano?.[flag];
    return acc;
  }, {} as Record<string, boolean>);

  return {
    isCardanoWalletAvailable,
    ...walletFlags,
  };
};
