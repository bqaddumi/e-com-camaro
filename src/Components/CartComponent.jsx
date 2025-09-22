import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../slices/cartSlice";
import "../css/CartComponent.css";

function CartComponent() {
  const products = [
    { id: 1, name: "CAMARO Hat" },
    { id: 2, name: "CAMARO T-Shirt" },
    { id: 3, name: "CAMARO Mug" },
  ];
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAdd = (id, name) => {
    dispatch(addItem({ id, name }));
  };
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cart-container">
      <div className=" product-action">
        {products.map((p) => (
          <button className="cart-add-btn"key={p.id} onClick={() => handleAdd(p.id, p.name)}>
            {" "}
            Add item{" "}
          </button>
        ))}
      </div>

      {items.length === 0 ? "cart is empty " : `there are ${items.length} items in the cart`}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button className="cart-remove-btn" onClick={() => handleRemove(item.id)}>remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CartComponent;
