import React from "react";
import { Navbar } from "./Component/Navbar";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Component/Home";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import CartComponent from './Component/CartComponent';
import ProductPage from "./Component/ProductPage";


export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
};
export default App;
