import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../slices/cartSlice";
import "./CartComponent.css";
import { PRODUCTS } from "../../data/products";
import Navbar from "../Navbar/Navbar";

function CartComponent() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAdd = (id, name, image) => {
    dispatch(addItem({ id, name, image }));
  };

  const grouped = Object.values(
    items.reduce((acc, it) => {
      const prod = PRODUCTS.find((p) => p.id === it.id) || {};
      if (!acc[it.id]) {
        acc[it.id] = {
          id: it.id,
          name: it.name,
          image: it.image,
          price: Number(prod.price) || 0,
          qty: 0,
        };
      }
      acc[it.id].qty += 1;
      return acc;
    }, {})
  );

  const subtotal = grouped.reduce((s, g) => s + g.price * g.qty, 0);
  const shipping = grouped.length ? 15 : 0;
  const orderTotal = subtotal + shipping;

  const handleInc = (row) => handleAdd(row.id, row.name, row.image);
  const handleRemoveRow = (id) => handleRemove(id);

  const handleRemove = (id) => {
    dispatch({
      type: removeItem.type,
      payload: id,
    });
  };

  return (
    <>
      <Navbar />
      {
    <div className="cart-container">
      <div className="product-action">
        {PRODUCTS.map((product) => (
          <button
            key={product.id}
            className="cart-add-btn"
            onClick={() => handleAdd(product.id, product.name, product.image)}
          >
            Add {product.name}
          </button>
        ))}
      </div>

      <div className="cart-header">
        <div className="cart-breadcrumb">
          <a href="/" className="breadcrumb-link">
            Home
          </a>
          <span>/</span>
          <span>Shopping Cart</span>
        </div>
        <h1 className="cart-title">Shopping Cart</h1>
      </div>

      <div className="cart-grid">
        <div className="cart-table-card">
          <table className="cart-table">
            <thead className="cart-thead">
              <tr className="cart-tr">
                <th className="th product-col">Product Name</th>
                <th className="th price-col">Price</th>
                <th className="th qty-col">Quantity</th>
                <th className="th total-col">Total</th>
              </tr>
            </thead>

            <tbody className="cart-tbody">
              {grouped.length === 0 && (
                <tr className="cart-tr empty-row">
                  <td className="td" colSpan={4}>
                    Your cart is empty.
                  </td>
                </tr>
              )}

              {grouped.map((row) => (
                <tr className="cart-tr" key={row.id}>
                  <td className="td product-cell">
                    <img
                      src={row.image}
                      alt={row.name}
                      className="cart-thumb"
                    />
                    <div className="cart-name-wrap">
                      <span className="cart-name">{row.name}</span>
                      <button
                        type="button"
                        className="cart-remove"
                        onClick={() => handleRemoveRow(row.id)}
                        aria-label="remove item"
                      >
                        ×
                      </button>
                    </div>
                  </td>

                  <td className="td price-cell">${row.price.toFixed(2)}</td>

                  <td className="td qty-cell">
                    <div
                      className="qty"
                      role="group"
                      aria-label="Choose quantity"
                    >
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => handleInc(row)}
                        aria-label="increase"
                      >
                        +
                      </button>
                      <input
                        className="qty-input"
                        type="number"
                        readOnly
                        value={row.qty}
                      />
                      <button
                        type="button"
                        className="qty-btn danger"
                        onClick={() => handleRemoveRow(row.id)}
                        aria-label="remove row"
                        title="Remove item"
                      >
                        ×
                      </button>
                    </div>
                  </td>

                  <td className="td total-cell">
                    ${(row.price * row.qty).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="cart-summary">
          <div className="summary-card">
            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">
                Shipping (Flat Rate - Fixed)
              </span>
              <span className="summary-value">${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row grand">
              <span className="summary-label">Order Total</span>
              <span className="summary-value">${orderTotal.toFixed(2)}</span>
            </div>{" "}
            <button className="checkout-btn" type="button">
              {" "}
              GO TO CHECKOUT
            </button>
            <button className="checkout-multi-btn" type="button">
              Check Out with Multiple Addresses
            </button>
          </div>
        </aside>
      </div>

      <section className="newsletter">
        <h2 className="newsletter-title">Newsletter</h2>
        <p className="newsletter-desc">
          Subscribe to receive coupons and gift cards
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input className="newsletter-input" placeholder="Email address" />
          <button className="newsletter-btn" type="submit">
            SUBSCRIBE
          </button>
        </form>
      </section>
    </div>
}
</>
);

}


export default CartComponent;
