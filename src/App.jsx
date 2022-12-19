import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import CartProvider from "../CartContext";
import Cart from "./pages/Cart";
import Product from "./pages/Product";


function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/property" element={<Product />} />
        <Route path="/property/:id" element={<Product />} />
        <Route path="/properties/property/:id" element={<Product />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
