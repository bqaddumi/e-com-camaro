import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductSection.css";

const PRODUCTS = [
  { id: 1, name: "MSI GF62 7RE-1818XVN", price: 499, img: "src/Component/labtoobpicture/p1.jpg" },
  { id: 2, name: "Asus TUF FX504GE-E4059T", price: 399, img: "src/Component/labtoobpicture/p2.jpg" },
  { id: 3, name: "HP 15-bs080na 15.6-Inch Full HD", price: 699, img: "src/Component/labtoobpicture/p3.jpeg" },
  { id: 4, name: "HP Pavilion x360 14-ba062TU", price: 599, img: "src/Component/labtoobpicture/p4.jpeg" },
  { id: 5, name: "HP Pavilion 15-cs0016TU", price: 679, img: "src/Component/labtoobpicture/p5.jpeg" },
  { id: 6, name: "Dell Inspiron N3567C", price: 800, img: "src/Component/labtoobpicture/p6.jpeg" },
  { id: 7, name: "Lenovo IdeaPad 3", price: 429, img: "src/Component/labtoobpicture/p7.jpeg" },
  { id: 8, name: "Acer Aspire 5", price: 459, img: "src/Component/labtoobpicture/p8.jpeg" },
];

const ITEMS_PER_PAGE = 6;

export const ProductSection = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE);

  const visibleProducts = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return PRODUCTS.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  const handleShowMore = () => {
    setPage((p) => (p < totalPages - 1 ? p + 1 : 0));
  };

  return (
    <section className="product-section">
      <div className="container">
        <div className="product-panel">
          {/* Header */}
          <div className="product-header">
            <h2 className="product-title">Smartphone &amp; Tablet</h2>
            <Link to="/shop" className="view-all">View All</Link>
          </div>

          {/* Grid just6 */}
          <div className="products-grid">
            {visibleProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <img src={p.img} alt={p.name} />
                <h3 className="product-name">{p.name}</h3>
                <p className="product-price">${p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          {/* Footer*/}
          <div className="product-footer">
            <div className="pager" role="tablist" aria-label="Products pages">
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
    </section>
  );
};
