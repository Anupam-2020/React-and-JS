import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    // const [latestProducts, setLatestProducts] = React.useState(products.slice(0, 10));

    // useEffect(() => {
    //     setLatestProducts(products.slice(0, 10));
    // },[])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Discover the latest additions to our collection, featuring cutting-edge designs and innovative features. Stay ahead of the trends with these must-have items!</p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {products.slice(0,15).map((product, index) => (
                <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />
            ))}
        </div>
    </div>
  )
}

export default LatestCollection;