
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Contact from "./components/Contact";
import NavToggle from "./components/Nav";
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header sticky="top" />
        <div className="main">
          <NavToggle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
