import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

// const cartItems = (
//   <ul className={classes["cart-items"]}>
//     {[{ id: "c1", name: "Shusi", amount: 2, price: 12.99 }].map((item) => (
//       <li>{item.name}</li>
//     ))}
//   </ul>
// );
const Cart = (props) => {
  const cartCtx = useContext(CartContext);


  // const totalAmount = `$${cartCtx.totalamount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        {/* <span>{totalAmount}</span> */}
        <span>43</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
