// import Web3 from "web3";
export const useConnectWallets = () => {
  const connectEthereumWallets = async (provider: EIP1193Provider) => {
    // const web3 = new Web3(provider);

    const accounts = await provider.request({ method: "eth_requestAccounts" });

    console.log("accounts", accounts);
  };

  const connectSolanaWallets = async (provider: any) => {
    // const web3 = new Web3(provider);

    console.log("provider", provider);

    const accounts =
      provider?.name !== "Phantom"
        ? await (window as any)?.[provider?.name?.toLowerCase()]?.connect()
        : await (window as any)?.[
            provider?.name?.toLowerCase()
          ]?.solana?.connect();

    console.log("accounts", accounts);
  };

  return { connectEthereumWallets, connectSolanaWallets };
};
