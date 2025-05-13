import { ethereumWallets } from "./providers";
export const detectAvaialableWallets = async () => {
  const eth = (window as any)?.ethereum;

  const isEthereumWalletAvailable = !!eth;

  const walletFlags = ethereumWallets.reduce((acc, { flag }) => {
    acc[flag] = eth?.[flag];
    return acc;
  }, {} as Record<string, boolean>);

  return {
    isEthereumWalletAvailable,
    ...walletFlags,
  };
};
