import { useState } from "react";
import "./ShoppingTotal.css";

const products = [
  { id: 1, name: "Headphones", price: 25000 },
  { id: 2, name: "Keyboard", price: 40000 },
  { id: 3, name: "Mouse", price: 10000 },
];

function ShoppingTotal() {
  const [cart, setCart] = useState([]);

  function addProduct(product) {
    setCart([...cart, product]);
  }

  function removeProduct(indexToRemove) {
    setCart(
      cart.filter((item, index) => index !== indexToRemove)
    );
  }

  const total = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  const quantity = cart.length;

  return (
    <div className="shopping">
      <h1>Mini Shop</h1>

      <h2>Available Products</h2>

      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>

            <p>₦{product.price.toLocaleString()}</p>

            <button onClick={() => addProduct(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>

            <span>₦{item.price.toLocaleString()}</span>

            <button onClick={() => removeProduct(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      <div className="summary">
        <p>Quantity: {quantity}</p>

        <h2>Total: ₦{total.toLocaleString()}</h2>
      </div>
    </div>
  );
}

export default ShoppingTotal;
