import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CartComponent from "./Component/CartComponent/CartComponent";
import ProductPage from "./Component/ProductPage/ProductPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/product/2" replace />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartComponent />} />
      <Route path="*" element={<div style={{ padding: 16 }}>Not Found</div>} />
    </Routes>
  );
}
