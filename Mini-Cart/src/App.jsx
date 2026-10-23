import { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [favourites, setFavourites] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  function toggleFavourite(id) {
    setFavourites((currentFavourites) =>
      currentFavourites.includes(id)
        ? currentFavourites.filter((itemId) => itemId !== id)
        : [...currentFavourites, id]
    );
  }

  return (
    <main className="shop">
      <h1>Mini Shop</h1>

      <ProductList
        products={products}
        onAdd={addToCart}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
      />

      <Cart
        cart={cart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
      />
    </main>
  );
}

export default App;