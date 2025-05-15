import { useEffect, useState } from "react";

type Wallet = {
  name: string;
  icon: string;
  rdns: string;
  flag: string;
  isAvailable: boolean;
  provider: any;
};

import { ethereumWallets } from "./providers"; // Presumed to be a static list

export const useAvailableWallets = () => {
  const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);

  useEffect(() => {
    const discovered: Record<string, Wallet> = {}; // Use object to avoid duplicates

    const handleAnnounce = (event: Event) => {
      const { detail } = event as CustomEvent<InjectedProviderDetail>;
      const { provider, info } = detail;

      ethereumWallets.forEach((walletTemplate) => {
        const flagExists = provider?.[walletTemplate.flag];
        if (flagExists && !discovered[info.rdns]) {
          const wallet: Wallet = {
            ...walletTemplate,
            name: info.name,
            icon: info.icon,
            rdns: info.rdns,
            isAvailable: true,
            provider,
          };
          discovered[info.rdns] = wallet;
          setAvailableWallets((prev) => [...prev, wallet]);
          console.log("Wallet available:", wallet);
        }
      });
    };

    window.addEventListener("eip6963:announceProvider", handleAnnounce);
    window.dispatchEvent(new Event("eip6963:requestProvider"));

    return () => {
      window.removeEventListener("eip6963:announceProvider", handleAnnounce);
    };
  }, []);

  return {
    wallets: availableWallets,
    isAvailable: availableWallets.length > 0,
  };
};
