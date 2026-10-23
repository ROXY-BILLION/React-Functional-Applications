import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="page">
      <h1>Your Cart</h1>
      <p>Your shopping cart is currently empty.</p>

      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default Cart;