import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../slices/cartSlice";
import "../css/CartComponent.css";
import { PRODUCTS } from "../data/products";

function CartComponent() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAdd = (id, name, image) => {
    dispatch(addItem({ id, name, image }));
  };
  const handleRemove = (id) => {
  dispatch({
    type: removeItem.type,
    payload: id,
  });
};

  return (
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

      {items.length === 0
        ? "cart is empty "
        : `there are ${items.length} items in the cart`}
      <ul>
        {items.map((item) => (
          <li key={item.id} className=" cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
           <span className="cart-item-name">{item.name} </span> 
            <button
              className="cart-remove-btn"
              onClick={() => handleRemove(item.id)}
            >
              remove Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CartComponent;
