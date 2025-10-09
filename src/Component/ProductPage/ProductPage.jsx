import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import { addItem } from "../../slices/cartSlice";
import { PRODUCTS } from "../../data/products";
import "./ProductPage.css";
import Navbar from "../Navbar/Navbar";
export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const dispatch = useDispatch();

 if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: 16, color: "#222" }}>
          Product not found for id: <b>{id}</b>
        </div>
      </>
    );
  }

 const images = useMemo(() => {
  const raw = [
    ...(Array.isArray(product.images) ? product.images : []),
    ...(product.image ? [product.image] : []),
  ].filter(Boolean);
  return Array.from(new Set(raw));
}, [product.id]);


  const [activeImg, setActiveImg] = useState(images[0] || "");
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("details");

  const handleImageChange = (src) => setActiveImg(src);
  const handleTabChange = (t) => setTab(t);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(product.stock ?? 99, q + 1));

  useEffect(() => {
    setActiveImg(images[0] || "");
  }, [product.id]);

  const handleAdd = () => {
    if ((product.stock ?? 0) <= 0) return;
    dispatch({
      type: addItem.type,
      payload: {
        id: product.id,
        name: product.name,
        image: activeImg || images[0] || "",
        qty,
      },
    });
  };

  return (
    <>
      <Navbar />
      {
    <div className="product-page">
     
      <div className="product-media">
        <div className="product-thumbs">
          {images.map((src) => (
            <button
              key={src}
              type="button"
              className={`thumb-btn ${activeImg === src ? "is-active" : ""}`}
              onClick={() => handleImageChange(src)}
              aria-label="Switch product image"
            >
              <img src={src} alt={product.name} className="thumb-img" />
            </button>
          ))}
        </div>

        <div className="product-main-img-wrap">
          <img
            src={activeImg || images[0] || ""}
            alt={product.name}
            className="product-main-img"
          />
        </div>
      </div>

      {/* RIGHT: info */}
      <div className="product-info">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <h1 className="product-title">{product.name}</h1>

        <div className="product-price">${product.price}</div>

        <div className="meta">
          <div className={`stock ${product.stock > 0 ? "in" : "out"}`}>
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </div>
          <div className="sku">
            SKU: <span>{product.sku || product.id}</span>
          </div>
        </div>

        <p className="product-desc">
          {product.desc ?? product.description ?? ""}
        </p>

        {/* Qty + Add to Cart */}
        <div className="cta-row">
          <div className="qty" role="group" aria-label="Choose quantity">
            <button
              type="button"
              className="qty-btn"
              onClick={dec}
              aria-label="decrease"
            >
              −
            </button>

            <input
              className="qty-input"
              type="number"
              min="1"
              max={product.stock ?? 99}
              value={qty}
              onChange={(e) => {
                const v = Math.max(
                  1,
                  Math.min(Number(e.target.value) || 1, product.stock ?? 99)
                );
                setQty(v);
              }}
            />

            <button
              type="button"
              className="qty-btn"
              onClick={inc}
              aria-label="increase"
            >
              +
            </button>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={handleAdd}
            disabled={product.stock <= 0}
          >
            Add to Cart
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {["details", "more", "reviews"].map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => handleTabChange(t)}
              className={`tab-btn ${tab === t ? "active" : ""}`}
            >
              {t === "details"
                ? "DETAILS"
                : t === "more"
                ? "MORE INFORMATION"
                : "REVIEWS"}
            </button>
          ))}
        </div>

        <div className="tab-panel">
          {tab === "details" && (
            <ul className="detail-list">
              {(product.specs || [
                "Intel Core i5 10th Gen Processor",
                "8GB DDR4 RAM, 512GB SSD",
                "15.6'' FHD Display",
                "NVIDIA GTX 1650",
                "Wi-Fi 6, BT 5.0",
              ]).map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          )}

          {tab === "more" && (
            <div className="more-info">
              {product.more ?? "Available to buy in installments of 1."}
            </div>
          )}

          {tab === "reviews" && (
            <div className="reviews-empty">No reviews yet.</div>
          )}
        </div>
      </div>
    </div>
}
    </>
  );
}
