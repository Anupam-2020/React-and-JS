import React, { useEffect } from "react";
import { Link, NavLink } from "react-router";

const HomePage = () => {
  const [trendingProducts, setTrendingProducts] = React.useState([]);
  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        const data = await response.json();
        setTrendingProducts(data);
      } catch (error) {
        console.error("Error fetching trending products:", error);
      }
    };
    fetchTrendingProducts();
  }, []);

  return (
    <div>
      <h2>Trending Products</h2>
      <ul>
        {trendingProducts.map((product) => (
          <li key={product.id}>
            <NavLink to={`/products/${product.id}`}>{product.title}</NavLink>
          </li>
        ))}
      </ul>
      <p>
        <Link to="/products">View All Products</Link>
      </p>
    </div>
  );
};

export default HomePage;
