import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import Products from "./components/Products/Products";
import DataProvider from "./context/Context";

function App() {
    return (
        <DataProvider>
            <div className="App">
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Products />} exact />
                  <Route path="/signup" element={<Signup />} exact />
                  <Route path="/cart" element={<Cart />} exact />
                </Routes>
              </BrowserRouter>
            </div>
        </DataProvider>
    );
}

export default App;
