const solanaWallets = [
  { name: "isPhantom", flag: "isPhantom" },
  { name: "isSolflare", flag: "isSolflare" },
  { name: "isBackpack", flag: "isBackpack" },
  { name: "isGlow", flag: "isGlow" },
  { name: "isSlope", flag: "isSlope" },
  { name: "isCoin98", flag: "isCoin98" },
  { name: "isBitKeep", flag: "isBitKeep" },
  { name: "isMathWallet", flag: "isMathWallet" },
  { name: "isTokenPocket", flag: "isTokenPocket" },
  { name: "isBraveWallet", flag: "isBraveWallet" },
  { name: "isTorus", flag: "isTorus" },
  { name: "isExodus", flag: "isExodus" },
  { name: "isLedger", flag: "isLedger" },
  { name: "isSollet", flag: "isSollet" },
  { name: "isSolong", flag: "isSolong" },
  { name: "isSafePal", flag: "isSafePal" },
  { name: "isTrust", flag: "isTrust" },
  { name: "isZelcore", flag: "isZelcore" },
  { name: "isCoinbaseWallet", flag: "isCoinbaseWallet" },
];

export const detectSolanaWallets = async () => {
  const solana = (window as any)?.solana;

  console.log("solana is connected", solana);

  const isSolanaWalletAvailable = solana;

  const walletFlags = solanaWallets.reduce((acc, { name, flag }) => {
    acc[name] = solana?.[flag];
    return acc;
  }, {} as Record<string, boolean>);

  return {
    isSolanaWalletAvailable,
    ...walletFlags,
  };
};
