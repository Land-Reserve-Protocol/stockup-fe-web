import { Provider } from "react-redux";
import "./App.css";
import { store } from "./Redux/store";
import Navbar from "./components/Navbar/navbar";
// import WalletLists from "./components/walletListComponent/walletLists";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

export default App;
