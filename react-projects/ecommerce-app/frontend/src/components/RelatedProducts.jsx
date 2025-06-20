import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subcategory}) => {
    const {products} = React.useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = React.useState([]);
    useEffect(() => {
        if(products.length > 0) {
            let relatedProds = products.filter(product => product.subCategory === subcategory && product.category === category);
            setRelatedProducts(relatedProds);
        }
    }, [products, category, subcategory])


  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {relatedProducts.slice(0,5).map((prod, index) => (
                <ProductItem key={index} product={prod} id={prod._id} name={prod.name} price={prod.price} image={prod.image}/>
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts;