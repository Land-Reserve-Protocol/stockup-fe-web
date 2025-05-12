export const detectAvaialableWallets = async () => {
  const eth = (window as any)?.ethereum;

  console.log("eth is connected", eth);

  const isEthereumWalletAvailable = eth;
  const isMetaMask = eth?.isMetaMask;
  const isCoinbaseWallet = eth?.isCoinbaseWallet;
  const isTrustWallet = eth?.isTrust;
  const isBinanceWallet = eth?.isBinanceWallet;
  const isTokenPocket = eth?.isTokenPocket;
  const isSafePal = eth?.isSafePal;
  const isMathWallet = eth?.isMathWallet;
  const isNiftyWallet = eth?.isNiftyWallet;
  const isDapperWallet = eth?.isDapper;
  const isBraveWallet = eth?.isBraveWallet;
  const isTallyHo = eth?.isTally;
  const isRabbyWallet = eth?.isRabby;
  const isFrameWallet = eth?.isFrame;
  const isXDEFIWallet = eth?.isXDEFI;
  const isOKXWallet = eth?.isOkxWallet;
  const isBitKeepWallet = eth?.isBitKeep || eth?.isBitget;
  const isZerionWallet = eth?.isZerion;
  const isPhantomWallet = eth?.isPhantom;
  const isGlowWallet = eth?.isGlow;

  if (eth) {
    console.log(eth.isMetaMask);
  }

  return {
    isEthereumWalletAvailable,
    isMetaMask,
    isCoinbaseWallet,
    isTrustWallet,
    isBinanceWallet,
    isTokenPocket,
    isSafePal,
    isMathWallet,
    isNiftyWallet,
    isDapperWallet,
    isBraveWallet,
    isTallyHo,
    isRabbyWallet,
    isFrameWallet,
    isXDEFIWallet,
    isOKXWallet,
    isBitKeepWallet,
    isZerionWallet,
    isPhantomWallet,
    isGlowWallet,
  };
};
