import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

const ProductDetails = () => {
    const params = useParams()
    const productId = params.id;
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                console.log("Product Details:", data);
                setProduct(data.title);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };
        fetchProductDetails();
    }, [])
    
  return (
    <div>ProductDetails: {product}</div>
  )
}

export default ProductDetails;