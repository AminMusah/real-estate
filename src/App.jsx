import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home'
import Service from './pages/Service'
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
