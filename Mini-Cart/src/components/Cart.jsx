function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <article className="cart-item" key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>₦{(item.price * item.quantity).toLocaleString()}</p>
            </div>

            <div className="quantity-controls">
              <button onClick={() => onDecrease(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onIncrease(item.id)}>+</button>
              <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          </article>
        ))
      )}

      <hr />

      <p>Total items: {totalItems}</p>
      <h3>Total: ₦{totalPrice.toLocaleString()}</h3>
    </section>
  );
}

export default Cart;