import { useEffect, useState } from "react";
import { detectAvaialableWallets } from "../../common/WalletProvider/EVMprovider";
import { detectCardanoWallets } from "../../common/WalletProvider/cardanowalletsProviders";
import { detectSolanaWallets } from "../../common/WalletProvider/solanaWallets";

function WalletLists() {
  const walletsToSelect: Record<string, () => any> = {
    cardano: detectCardanoWallets,
    ethereum: detectAvaialableWallets,
    solana: detectSolanaWallets,
  };

  const [selectedNetwork, setSelectedNetwork] = useState<string>("cardano");

  const [availableWallets, setAvailableWallets] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const wallets = await walletsToSelect[selectedNetwork]();
      setAvailableWallets(wallets);
    })();
  }, []);

  return <div></div>;
}

export default WalletLists;
