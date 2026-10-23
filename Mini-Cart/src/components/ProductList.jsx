function ProductList({ products, onAdd, favourites, onToggleFavourite }) {
  return (
    <section>
      <h2>Products</h2>

      <div className="products">
        {products.map((product) => (
          <article className="product" key={product.id}>
            <h3>{product.name}</h3>

            <p>₦{product.price.toLocaleString()}</p>

            <button onClick={() => onAdd(product)}>
              Add to Cart
            </button>

            <button onClick={() => onToggleFavourite(product.id)}>
              {favourites.includes(product.id)
                ? "♥ Favourite"
                : "♡ Favourite"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductList;