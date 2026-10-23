import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: Wireless Headphones</p>
      <p>Price: ₦25,000</p>

      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default ProductDetails;