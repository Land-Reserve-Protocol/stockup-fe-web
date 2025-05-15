import { useEffect, useState } from "react";
import { useAvailableWallets } from "../../common/WalletProvider/EVMprovider";
import { detectCardanoWallets } from "../../common/WalletProvider/cardanowalletsProviders";
import { detectSolanaWallets } from "../../common/WalletProvider/solanaWallets";
import { MdCancel } from "react-icons/md";
import Cardano from "../../assets/Cardano.png";
import Ethereum from "../../assets/ethereum.svg";
import Solana from "../../assets/Solana.png";
import Web3 from "web3";
import Button from "../Button/button";

function WalletLists() {
  const { isAvailable, wallets } = useAvailableWallets();

  const walletsToSelect: Record<string, () => any> = {
    cardano: detectCardanoWallets,
    ethereum: () => {
      return { isAvailable, wallets };
    },
    solana: detectSolanaWallets,
  };

  const networkOptions = [
    {
      value: "ethereum",
      label: "Ethereum",
      icon: Ethereum,
    },
    {
      value: "solana",
      label: "Solana",
      icon: Solana,
    },
    {
      value: "cardano",
      label: "Cardano",
      icon: Cardano,
    },
  ];

  const [selectedNetwork, setSelectedNetwork] = useState<string>("cardano");

  const [availableWallets, setAvailableWallets] = useState<{
    [key: string]: any;
    wallets: { [key: string]: any }[];
  }>();

  const [selectedWallet, _setSelectedWallet] = useState<string>("");

  useEffect(() => {
    console.log("selectedNetwork", selectedNetwork);
    (async () => {
      const wallets = await walletsToSelect[selectedNetwork]();
      console.log("selected network wallets", wallets);
      setAvailableWallets(wallets);
    })();
  }, [selectedNetwork]);

  const connectWallet = async () => {};

  useEffect(() => {}, []);

  return (
    <div className="w-[650px] min-h-[650px] bg-[black] px-[30px] py-[30px] backdrop-blur-md bg-white rounded-[8px] text-[#1e1e1e]">
      <div className="flex justify-between items-center content-center">
        <div>
          <div className="text-[24px] font-[500]">Connect your wallet</div>
          <p className="text-[14px]">
            Select your network and corresponding wallet
          </p>
        </div>
        <div>
          <MdCancel className="h-[24px] w-[24px] bg-[rgba(128,128,128,0.2]" />
        </div>
      </div>
      <div className="absolute bg-white/40 w-full h-full right-0 top-0"></div>
      <div className="mt-[50px]">
        <div className="text-[18px] font-medium">Choose Network</div>
        <div className="grid grid-cols-3 gap-[20px] mt-[16px]">
          {networkOptions.map((option) => {
            return (
              <button
                key={option?.value}
                onClick={() => setSelectedNetwork(option?.value)}
                className=" relative bg-none w-full h-[100px] flex flex-col justify-center items-center content-center ring ring-[#80808060] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 rounded-[8px]"
              >
                <div>
                  <img src={option?.icon} className="h-[24px] w-[24px]" />
                </div>
                <div className="mt-[10px]">{option.label}</div>
                {selectedNetwork !== option?.value ? (
                  <div className="absolute bg-white/40 w-full h-full right-0 top-0"></div>
                ) : (
                  <></>
                )}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[50px]  w-full ">
        <div className="text-[18px] font-medium">Choose Wallet</div>
        <div className="grid grid-cols-3 gap-[20px] mt-[16px]">
          {availableWallets?.isAvailable ? (
            availableWallets?.wallets
              ?.filter((wallet) => wallet.isAvailable)
              ?.map((wallet) => {
                return (
                  <button
                    key={wallet?.flag}
                    onClick={() => _setSelectedWallet(wallet?.flag)}
                    className=" relative bg-none w-full h-[100px] flex flex-col justify-center items-center content-center ring ring-[#80808060] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 rounded-[8px]"
                  >
                    <div>
                      <img src={wallet?.icon} className="h-[24px] w-[24px]" />
                    </div>
                    <div className="mt-[10px]">{wallet.name}</div>
                    {selectedWallet !== wallet?.flag ? (
                      <div className="absolute bg-white/40 w-full h-full right-0 top-0"></div>
                    ) : (
                      <></>
                    )}
                  </button>
                );
              })
          ) : (
            <></>
          )}
        </div>
      </div>
      <div></div>

      <Button
        style={""}
        onClick={() => connectWallet()}
        text={"Connect"}
        loading={false}
        isDisabled={false}
      />
    </div>
  );
}

export default WalletLists;
