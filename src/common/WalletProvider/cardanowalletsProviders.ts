import { cardanoWallets } from "./providers";

export const detectCardanoWallets = async () => {
  const cardano = (window as any)?.cardano;

  console.log("cardano is connected", cardano);

  const isCardanoWalletAvailable = !!cardano;

  const walletFlags = cardanoWallets.reduce((acc, { name, flag }) => {
    acc[name] = !!cardano?.[flag];
    return acc;
  }, {} as Record<string, boolean>);

  return {
    isCardanoWalletAvailable,
    ...walletFlags,
  };
};
