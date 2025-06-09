import { Provider } from "react-redux";
import "./App.css";
import { store } from "./Redux/store";
import Navbar from "./components/Navbar/navbar";
import Landing from "./pages/landing/landing";
// import WalletLists from "./components/walletListComponent/walletLists";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Landing />
    </Provider>
  );
}

export default App;
