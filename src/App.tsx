import { Provider } from "react-redux";
import "./App.css";
import { store } from "./Redux/store";
import { detectAvaialableWallets } from "./common/WalletProvider/provider";

function App() {
  detectAvaialableWallets();
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
