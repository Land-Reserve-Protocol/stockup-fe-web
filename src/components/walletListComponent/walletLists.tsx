import { useEffect, useState } from "react";
import { detectAvaialableWallets } from "../../common/WalletProvider/EVMprovider";
import { detectCardanoWallets } from "../../common/WalletProvider/cardanowalletsProviders";
import { detectSolanaWallets } from "../../common/WalletProvider/solanaWallets";
import Dropdown from "../Dropdown/dropdown";
import { FaEthereum } from "react-icons/fa6";
import { SiSolana, SiCardano } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";

function WalletLists() {
  const walletsToSelect: Record<string, () => any> = {
    cardano: detectCardanoWallets,
    ethereum: detectAvaialableWallets,
    solana: detectSolanaWallets,
  };

  const networkOptions = [
    {
      value: "Ethereuem",
      label: "Ethereum",
      icon: <FaEthereum className="inline mr-[10px]" />,
    },
    {
      value: "Solana",
      label: "Solana",
      icon: <SiSolana className="inline mr-[10px]" />,
    },
    {
      value: "Cardano",
      label: "Cardano",
      icon: <SiCardano className="inline mr-[10px]" />,
    },
  ];

  const [selectedNetwork, setSelectedNetwork] = useState<string>("cardano");

  const [_availableWallets, setAvailableWallets] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const wallets = await walletsToSelect[selectedNetwork]();
      setAvailableWallets(wallets);
    })();
  }, []);

  return (
    <div className="w-[650px] h-[650px] bg-[black] p-[20px] backdrop-blur-md bg-white/30 rounded-[8px]"></div>
  );
}

export default WalletLists;
