import { Provider } from "react-redux";
import "./App.css";
import { store } from "./Redux/store";
import { detectAvaialableWallets } from "./common/WalletProvider/EVMprovider";
import WalletLists from "./components/walletListComponent/walletLists";

function App() {
  detectAvaialableWallets();
  return (
    <Provider store={store}>
      <WalletLists />
    </Provider>
  );
}

export default App;
