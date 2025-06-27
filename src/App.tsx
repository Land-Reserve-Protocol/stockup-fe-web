import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import "./App.css";
import Authentication from "./pages/auth/user-auth";
import Navbar from "./components/Navbar/navbar";
import Landing from "./pages/landing/landing";
// import WalletLists from "./components/walletListComponent/walletLists";

const Login = lazy(() => import("./components/auth/user-login"));
const Register = lazy(() => import("./components/auth/user-register"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="auth" element={<Authentication />}>
            <Route index element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
