import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './AudioSection.css';

import Nest from './Audio&Soundpic/Nest Cam Outdoor Security Camera 2 pack.jpeg';
import Wansview from './Audio&Soundpic/Wansview HD IP Camera.jpeg';
import Foscam from './Audio&Soundpic/Foscam Outdoor PTZ HD 1080P WiFi.jpeg';
import Chevron from './Audio&Soundpic/Chevron Truly Wireless Bluetooth v4.2.jpeg';
import Compact from './Audio&Soundpic/Compact Bluetooth Speaker.jpeg';
import Studio from './Audio&Soundpic/Studio Headphones Pro.jpeg';
import Noise from './Audio&Soundpic/Noise Cancelling Earbuds.jpeg';
import banner from './Audio&Soundpic/banner.png';

const AUDIO_PRODUCTS = [
  {
    id: 1,
    name: 'Nest Cam Outdoor Security Camera 2 pack',
    price: 297.9,
    img: Nest,
  },
  {
    id: 2,
    name: 'Wansview HD IP Camera',
    price: 34.99,
    img: Wansview,
  },
  {
    id: 3,
    name: 'Foscam Outdoor PTZ HD 1080P WiFi',
    price: 229.99,
    img: Foscam,
  },
  {
    id: 4,
    name: 'Chevron Truly Wireless Bluetooth v4.2',
    price: 99.0,
    img: Chevron,
  },
  { id: 5, name: 'Compact Bluetooth Speaker', price: 49.0, img: Compact },
  { id: 6, name: 'Studio Headphones Pro', price: 149.0, img: Studio },
  { id: 7, name: 'Noise Cancelling Earbuds', price: 89.0, img: Noise },
];

export const AUDIO_PER_PAGE = 6;

export const AudioSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(AUDIO_PRODUCTS.length / AUDIO_PER_PAGE);

  const visible = useMemo(() => {
    const start = page * AUDIO_PER_PAGE;
    return AUDIO_PRODUCTS.slice(start, start + AUDIO_PER_PAGE);
  }, [page]);

  const nextPage = () => setPage((p) => (p < totalPages - 1 ? p + 1 : 0));

  return (
    <section className="audio-section">
      <div className="container">
        <div className="audio-row">
          <div className="col-left">
            <div className="product-panel">
              <div className="product-header">
                <h2 className="product-title">Audio &amp; Sound</h2>
                <Link to="/shop" className="view-all">
                  View All
                </Link>
              </div>

              <div className="products-grid">
                {visible.map((p) => (
                  <div className="product-card" key={p.id}>
                    <img
                      className="product-img"
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                    />
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
                      className={`pager-dot ${i === page ? 'active' : ''}`}
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
              <button className="promo-btn">
                <img
                  className="promo-img"
                  src={banner}
                  alt="Bluetooth Speaker"
                />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
