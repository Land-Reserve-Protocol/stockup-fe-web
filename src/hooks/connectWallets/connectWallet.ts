import Web3 from "web3";
export const useConnectWallets = () => {
  const connectEthereumWallets = async (provider: EIP1193Provider) => {
    const web3 = new Web3(provider);

    const accounts = await provider.request({ method: "eth_requestAccounts" });

    console.log("accounts", accounts);
  };

  return { connectEthereumWallets };
};
