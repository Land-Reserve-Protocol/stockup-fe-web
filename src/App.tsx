import { Provider } from "react-redux";
import "./App.css";
import { store } from "./Redux/store";
import WalletLists from "./components/walletListComponent/walletLists";

function App() {
  return (
    <Provider store={store}>
      <WalletLists />
    </Provider>
  );
}

export default App;
