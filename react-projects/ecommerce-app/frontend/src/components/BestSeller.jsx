import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = React.useState([]);
    

    React.useEffect(() => {
        const bestSellers = products.filter(product => product.bestseller);
        
        setBestSeller(bestSellers.slice(0,5));
    }, [products]);

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our best-selling products that have captured the hearts of our customers. These items are not only popular but also highly rated for their quality and performance. Explore our top picks and find out why they are loved by many!
            </p>
        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {bestSeller.map((product, index) => (
                <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />
            ))}
        </div>
    </div>
  )
}

export default BestSeller;