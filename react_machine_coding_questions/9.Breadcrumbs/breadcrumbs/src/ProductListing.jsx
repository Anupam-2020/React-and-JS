import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router';

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=25")
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error("Error fetching products:", error));
    }, [])

  return (
    <div>
      <h1>Product Listing</h1>
      <ul>
        {products && products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductListing;