import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../slices/cartSlice";
import '../css/CartComponent.css';


function CartComponent (){
    const items= useSelector ((state) => state.cart.items)  ;
    const dispatch=useDispatch ();
const handleAdd=()=>{
    dispatch( addItem({id :Date.now() , name: "mohammad"}))
    dispatch ( addItem ({id:Date.now()+1, name :" ali "}))
};
    const handleremove=(id)=>{
       dispatch(removeItem(id))
    };
return (
   
    <div className="cart-container">
      <button onClick={handleAdd}>add Item</button>

        

         {items.length===0? "cart is empty ":"there are items in the cart" }
         <ul>
            {items.map((item)=>(
            <li key={item.id}>
                {item.name}
                <button onClick={() =>handleremove(item.id)}>remove Item</button>
            </li>
        ))} 
       </ul>


    </div>
)
}
 export default CartComponent; 

