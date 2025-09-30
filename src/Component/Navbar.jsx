import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSyncAlt, FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="Topbar container">
        <div className="logo">
          <h1>CAMARO</h1>
        </div>

        <div className="actions">
          <div className="icon-container">
            <FaSyncAlt className="icon" />
            <span className="badge">0</span>
          </div>

          <div className="icon-container">
            <FaHeart className="icon" />
            <span className="badge">0</span>
          </div>

          <div className="cart">
            <div className="cart-icon">
              <FaShoppingCart className="icon" />
              <span className="badge">0</span>
            </div>
            <div className="cart-text">
              <span>Your Cart</span>
              <span className="price">$0.00</span>
            </div>
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`Menubar${menuOpen ? ' open' : ''}`}>
        <div className="container">
          <div className="menu-scroll">
            <ul className="menu">
              <li>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
              </li>
              <li>
                <Link to="/pages" onClick={() => setMenuOpen(false)}>Pages</Link>
              </li>
              <li>
                <Link to="/lookbook" onClick={() => setMenuOpen(false)}>Lookbook</Link>
              </li>
              <li>
                <Link to="/brands" onClick={() => setMenuOpen(false)}>Brands</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
  };