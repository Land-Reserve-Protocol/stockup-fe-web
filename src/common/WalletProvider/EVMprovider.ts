import { useEffect, useState, useRef } from "react";
import { ethereumWallets } from "./providers";

type Wallet = {
  name: string;
  icon: string;
  rdns: string;
  flag: string;
  isAvailable: boolean;
  provider: any;
};

type InjectedProviderDetail = {
  info: {
    name: string;
    icon: string;
    rdns: string;
  };
  provider: any;
};

export const useAvailableWallets = () => {
  const [availableWallets, setAvailableWallets] = useState<Wallet[]>([]);
  const discovered = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const handleAnnounce = (event: Event) => {
      const { provider, info } = (event as CustomEvent<InjectedProviderDetail>)
        ?.detail;

      for (const walletTemplate of ethereumWallets) {
        const flagExists = provider?.[walletTemplate.flag];
        const alreadyDiscovered = discovered.current[info.rdns];

        if (flagExists && !alreadyDiscovered) {
          discovered.current[info.rdns] = true;

          const wallet: Wallet = {
            ...walletTemplate,
            name: info.name,
            icon: info.icon,
            rdns: info.rdns,
            isAvailable: true,
            provider,
          };

          setAvailableWallets((prev) => [...prev, wallet]);
        }
      }
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
