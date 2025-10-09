import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 1) لو ما كان في items، خليه مصفوفة فاضية
  const items = useSelector((state) => state.cart?.items ?? []);

  // 2) عدّاد القطع
  const totalQty = items.reduce((sum, item) => sum + (item.qty ?? 1), 0);

  // 3) مجموع السعر (اختياري)
  const totalPrice = items.reduce(
    (sum, item) => sum + (item.price ?? 0) * (item.qty ?? 1),
    0
  );

  return (
    <nav>
      <div className="Topbar wrap">
        <div>
          <h1 className="logo-title">CAMARO</h1>
        </div>

        <div className="actions">
          <div className="icon-container">
            <RefreshIcon className="icon" />
            
            <span className="badge">0</span>
          </div>

          <div className="icon-container">
            <FavoriteBorderIcon className="icon" />
            <span className="badge">0</span>
          </div>

      
          <Link to="/cart" className="cart" onClick={() => setMenuOpen(false)}>
            <div className="cart-icon">
              <ShoppingCartOutlinedIcon className="icon" />
              <span className="badge">{totalQty}</span>
            </div>
            <div className="cart-text">
              <span className="cart-title">Your Cart</span>
              <span className="cart-price">${totalPrice.toFixed(2)}</span>
            </div>
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={`Menubar${menuOpen ? " open" : ""}`}>
        <div className="wrap menubar-row">
          <div className="menu-scroll">
            <ul className="menu">
            
              <li>
                <Link to="/product/2" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" onClick={() => setMenuOpen(false)}>
                  Cart
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
