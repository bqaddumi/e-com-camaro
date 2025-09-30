import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./AudioSection.css";


import a1 from "./Audio&Soundpic/a1.jpeg";
import a2 from "./Audio&Soundpic/a2.jpeg";
import a3 from "./Audio&Soundpic/a3.jpeg";
import a4 from "./Audio&Soundpic/a4.jpeg";
import a5 from "./Audio&Soundpic/a5.jpeg";
import a6 from "./Audio&Soundpic/a6.jpeg";
import a7 from "./Audio&Soundpic/a7.jpeg";
import banner from "./Audio&Soundpic/banner.png";

const AUDIO_PRODUCTS = [
  { id: 1, name: "Nest Cam Outdoor Security Camera 2 pack", price: 297.90, img: a1 },
  { id: 2, name: "Wansview HD IP Camera",                    price: 34.99,  img: a2 },
  { id: 3, name: "Foscam Outdoor PTZ HD 1080P WiFi",         price: 229.99, img: a3 },
  { id: 4, name: "Chevron Truly Wireless Bluetooth v4.2",    price: 99.00,  img: a4 },
  { id: 5, name: "Compact Bluetooth Speaker",                price: 49.00,  img: a5 },
  { id: 6, name: "Studio Headphones Pro",                    price: 149.00, img: a6 },
  { id: 7, name: "Noise Cancelling Earbuds",                 price: 89.00,  img: a7 },
];

const PER_PAGE = 6;

export const AudioSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(AUDIO_PRODUCTS.length / PER_PAGE);

  const visible = useMemo(() => {
    const start = page * PER_PAGE;
    return AUDIO_PRODUCTS.slice(start, start + PER_PAGE);
  }, [page]);

  const nextPage = () => setPage(p => (p < totalPages - 1 ? p + 1 : 0));

  return (
    <section className="audio-section">
      <div className="container">
        <div className="audio-row">
          <div className="col-left">
            <div className="product-panel">
              <div className="product-header">
                <h2 className="product-title">Audio &amp; Sound</h2>
                <Link to="/shop" className="view-all">View All</Link>
              </div>

              <div className="products-grid">
                {visible.map(p => (
                  <div className="product-card" key={p.id}>
                    <img src={p.img} alt={p.name} loading="lazy" />
                    <h3 className="product-name">{p.name}</h3>
                    <p className="product-price">${p.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="product-footer">
                <div className="pager" role="tablist" aria-label="Audio pages">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      className={`pager-dot ${i === page ? "active" : ""}`}
                      aria-label={`Page ${i + 1}`}
                      aria-selected={i === page}
                      onClick={() => setPage(i)}
                    />
                  ))}
                </div>

                
              </div>
            </div>
          </div>

          <aside className="col-right">
            <div className="promo-card">
              <button className="promo-btn"><img src={banner} alt="Bluetooth Speaker" /></button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
