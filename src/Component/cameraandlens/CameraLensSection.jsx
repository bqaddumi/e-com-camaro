import React from 'react';
import { Link } from 'react-router-dom';
import './CameraLensSection.css';

const products = [
  {
    id: 1,
    name: 'Virtual Product',
    price: 20.0,
    oldPrice: 34.99,
    img: 'src/Component/cameraandlens/Camera&Lenspic/Virtual Product.jpeg',
    badge: '-43%',
  },
  {
    id: 2,
    name: 'Grouped Product',
    price: 34.99,
    img: 'src/Component/cameraandlens/Camera&Lenspic/Grouped Product.jpeg',
  },
  {
    id: 3,
    name: 'LeFun Wireless Surveillance Camera IP',
    price: 44.99,
    img: 'src/Component/cameraandlens/Camera&Lenspic/LeFun Wireless Surveillance Camera IP.jpeg',
  },
  {
    id: 4,
    name: 'Nest Cam Outdoor Security Camera 2 pack',
    price: 297.9,
    img: 'src/Component/cameraandlens/Camera&Lenspic/Nest Cam Outdoor Security Camera 2 pack.jpeg',
  },
  {
    id: 5,
    name: 'HD Outdoor Cam 2 Pack',
    price: 79.99,
    img: 'src/Component/cameraandlens/Camera&Lenspic/HD Outdoor Cam 2 Pack.jpg',
  },
  {
    id: 6,
    name: 'Wansview HD IP Camera',
    price: 34.99,
    img: 'src/Component/cameraandlens/Camera&Lenspic/Wansview HD IP Camera.jpeg',
  },
];

const brands = [
  'src/Component/cameraandlens/brandslogopic/startuplogo.png',
  'src/Component/cameraandlens/brandslogopic/swahh.jpeg',
  'src/Component/cameraandlens/brandslogopic/swatch.png',
  'src/Component/cameraandlens/brandslogopic/garden.png',
  'src/Component/cameraandlens/brandslogopic/toshipa.png',
  'src/Component/cameraandlens/brandslogopic/yody.png',
];

export const CameraLensSection = () => {
  return (
    <section className="camera-section">
      <div className="wrap">
        <div className="camera-panel">
          <div className="camera-header">
            <h2 className="section-title">
              Camera &amp; Lens
              <span className="title-underline" aria-hidden="true"></span>
            </h2>
            <Link to="/shop" className="view-all">
              View All
            </Link>
          </div>

          <div className="camera-grid">
            {products.map((p, i) => (
              <div className="camera-card" key={p.id}>
                {p.badge && <span className="sale-badge">{p.badge}</span>}
                <div className="img-wrap">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="camera-img"
                  />
                </div>
                <div className="meta">
                  <h3 className="name">{p.name}</h3>
                  <div className="prices">
                    <span className="price">${p.price.toFixed(2)}</span>
                    {p.oldPrice && (
                      <span className="old">${p.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="brands-strip">
            {brands.map((src, idx) => (
              <img
                className="brand"
                src={src}
                alt={`brand-${idx}`}
                key={idx}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraLensSection;
