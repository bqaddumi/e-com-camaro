import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addItem } from "../slices/cartSlice";
import { PRODUCTS } from "../data/products";
import "../css/ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => String(p.id) === String(id));
  const dispatch = useDispatch();

  if (!product)
    return <div className="product-not-found">Product not found.</div>;

  const imagesRaw = [
    ...(Array.isArray(product.images) ? product.images : []),
    ...(product.image ? [product.image] : []),
  ].filter(Boolean);
  const images = Array.from(new Set(imagesRaw));

  const [activeImg, setActiveImg] = useState(images[0]);
  useEffect(() => {
    setActiveImg(images[0]);
  }, [product.id]); 

  const handleAdd = () => {
    dispatch({
      type: addItem.type,
      payload: { id: product.id, name: product.name, image: activeImg },
    });
  };

  return (
    <div className="product-page">
      <div className="product-media">
        <div className="product-thumbs">
          {images.map((src) => (
            <button
              key={src}
              className={`thumb-btn ${activeImg === src ? "is-active" : ""}`}
              onClick={() => setActiveImg(src)}
              aria-label="Switch product image"
            >
              <img src={src} alt={product.name} className="thumb-img" />
            </button>
          ))}
        </div>

        <div className="product-main-img-wrap">
          <img
            src={activeImg || images[0]}
            alt={product.name}
            className="product-main-img"
          />
        </div>
      </div>

      <div className="product-info">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <h1 className="product-title">{product.name}</h1>
        <div className="product-price">${product.price}</div>
        <p className="product-desc">
          {product.desc ?? product.description ?? ""}
        </p>
        <div className={`stock ${product.stock > 0 ? "in" : "out"}`}>
          {product.stock > 0 ? "In stock" : "Out of stock"}
        </div>

        <div className="cta-row">
          <button
            className="add-to-cart-btn"
            onClick={handleAdd}
            disabled={product.stock <= 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
