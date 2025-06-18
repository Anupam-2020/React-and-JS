import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';

const Product = () => {
  const {productId} = useParams();
  
  return (
    <div>Product</div>
  )
}

export default Product;