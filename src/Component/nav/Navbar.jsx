import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

          <div className="cart">
            <div className="cart-icon">
              <ShoppingCartOutlinedIcon className="icon" />
              <span className="badge">0</span>
            </div>
            <div className="cart-text">
              <span className="cart-title">Your Cart</span>
              <span className="cart-price">$0.00</span>
            </div>
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={`Menubar${menuOpen ? ' open' : ''}`}>
        <div className="wrap menubar-row">
          <div className="menu-scroll">
            <ul className="menu">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" onClick={() => setMenuOpen(false)}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/pages" onClick={() => setMenuOpen(false)}>
                  Pages
                </Link>
              </li>
              <li>
                <Link to="/lookbook" onClick={() => setMenuOpen(false)}>
                  Lookbook
                </Link>
              </li>
              <li>
                <Link to="/brands" onClick={() => setMenuOpen(false)}>
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
