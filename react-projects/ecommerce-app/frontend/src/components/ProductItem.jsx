import React from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({id, image, name, price}) => {
    const {currency} = React.useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden'>
            <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out'/>
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-gray-500'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;