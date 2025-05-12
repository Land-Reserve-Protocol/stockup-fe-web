import { ethereumWallets } from "./providers";
export const detectAvaialableWallets = async () => {
  const eth = (window as any)?.ethereum;

  console.log("eth is connected", eth);
  const isEthereumWalletAvailable = !!eth;

  const walletFlags = ethereumWallets.reduce((acc, { name, flag }) => {
    acc[name] = eth?.[flag];
    return acc;
  }, {} as Record<string, boolean>);

  if (eth) {
    console.log(walletFlags);
  }

  return {
    isEthereumWalletAvailable,
    ...walletFlags,
  };
};
