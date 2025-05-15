/// <reference types="vite/client" />

/// <reference types="vite/client" />

interface InjectedProviderDetail {
  info: {
    uuid: string;
    name: string;
    icon: string;
    rdns: string;
  };
  provider: EthereumProvider; // likely from `@web3-react/types` or similar
}

interface EIP1193Provider {
  request(request: {
    method: string;
    params?: Array<any> | Record<string, any>;
  }): Promise<any>;
}
