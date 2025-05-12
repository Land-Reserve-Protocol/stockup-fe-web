export const detectCardanoWallets = async () => {
  const cardano = (window as any)?.cardano;

  console.log("cardano is connected", cardano);

  const isCardanoWalletAvailable = cardano;

  const walletFlags = cardanoWallets.reduce((acc, { name, flag }) => {
    acc[name] = cardano?.[flag];
    return acc;
  }, {} as Record<string, boolean>);

  return {
    isCardanoWalletAvailable,
    ...walletFlags,
  };
};
const cardanoWallets = [
  { name: "isNami", flag: "isNami" },
  { name: "isFlint", flag: "isFlint" },
  { name: "isGeroWallet", flag: "isGeroWallet" },
  { name: "isTyphonWallet", flag: "isTyphonWallet" },
  { name: "isEternl", flag: "isEternl" },
  { name: "isCardWallet", flag: "isCardWallet" },
  { name: "isLace", flag: "isLace" },
  { name: "isNufi", flag: "isNufi" },
];
