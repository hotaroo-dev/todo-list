import { Eip1193Provider } from "ethers";

interface ExtendedEthereumProvider extends Eip1193Provider {
  on: (req: string, fn: (...arg) => void) => Promise<any>;
  removeAllListeners: () => void;
  // Include other missing properties here...
}

declare global {
  interface Window {
    ethereum: ExtendedEthereumProvider;
  }
}

interface Storage {
  hasOwnProperty<K extends PropertyKey>(key: K): this is Record<K, unknown>;
}
