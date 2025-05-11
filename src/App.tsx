import { Provider } from "react-redux";
import "./App.css";
import { store } from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

export default App;
