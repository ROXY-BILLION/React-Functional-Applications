import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Mini Shop</h1>
      <p>Discover our featured product.</p>

      <Link to="/products/1">
        View Product
      </Link>
    </div>
  );
}

export default Home;