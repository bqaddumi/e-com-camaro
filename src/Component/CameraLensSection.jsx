import React from "react";
import { Link } from "react-router-dom";
import "./CameraLensSection.css";


const products = [
  { id: 1, name: "Virtual Product", price: 20.0, oldPrice: 34.99, img: "src/Component/Camera&Lenspic/k1.jpeg", badge: "-43%" },
  { id: 2, name: "Grouped Product", price: 34.99, img: "src/Component/Camera&Lenspic/k2.jpeg" },
  { id: 3, name: "LeFun Wireless Surveillance Camera IP", price: 44.99, img: "src/Component/Camera&Lenspic/k3.jpeg" },
  { id: 4, name: "Nest Cam Outdoor Security Camera 2 pack", price: 297.90, img: "src/Component/Camera&Lenspic/k4.jpeg" },
  { id: 5, name: "HD Outdoor Cam 2 Pack", price: 79.99, img: "src/Component/Camera&Lenspic/k5.jpg" },
  { id: 6, name: "Wansview HD IP Camera", price: 34.99, img: "src/Component/Camera&Lenspic/k6.jpeg" },
];

const brands = [
  "src/Component/brandslogopic/startuplogo.png",
  "src/Component/brandslogopic/swahh.jpeg",
  "src/Component/brandslogopic/swatch.png",
  "src/Component/brandslogopic/garden.png",
  "src/Component/brandslogopic/toshipa.png",
  "src/Component/brandslogopic/yody.png",
];

export const CameraLensSection = () => {
  return (
    <section className="camera-section">
      <div className="container">
        <div className="camera-panel">
          <div className="camera-header">
            <h2 className="section-title">Camera &amp; Lens</h2>
            <Link to="/shop" className="view-all">View All</Link>
          </div>

          <div className="camera-grid">
            {products.map((p, i) => (
              <div className="camera-card" key={p.id}>
                {p.badge && <span className="sale-badge">{p.badge}</span>}
                <div className="img-wrap">
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="meta">
                  <h3 className="name">{p.name}</h3>
                  <div className="prices">
                    <span className="price">${p.price.toFixed(2)}</span>
                    {p.oldPrice && <span className="old">${p.oldPrice.toFixed(2)}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="brands-strip">
            {brands.map((src, idx) => (
              <img className="brand" src={src} alt={`brand-${idx}`} key={idx} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraLensSection;
