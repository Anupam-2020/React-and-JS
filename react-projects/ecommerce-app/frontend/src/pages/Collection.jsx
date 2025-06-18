import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(false);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [subCategory, setSubCategory] = React.useState([]);
  const [sortType, setSortType] = useState('relevant');


  const sortProducts = (sortType) => {
    switch(sortType) {
      case 'high-low': setFilteredProducts(filteredProducts.sort((a,b) => a.price - b.price))
      break;
      case 'low-high': setFilteredProducts(filteredProducts.sort((a,b) => b.price - a.price))
      break;
      default:
        applyFilter();
        break;
    }
  }
  
  const toggleCategory = (e) => {
    let value = e.target.value;
    if(category.includes(value)) {
      setCategory(prev => prev.filter(cat => cat !== value));
    } else {
      setCategory(prev => [...prev, value]);
    }
  }

  const toggleSubCategory = (e) => {
    let value =e.target.value;
    if(subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(cat => cat !== value));
    } else {
      setSubCategory(prev => [...prev, value]);
    }
  }

  const applyFilter = () => {
    let updatedProducts =[...products];
    if(category.length > 0) {
      updatedProducts = updatedProducts.filter((product) => category.includes(product.category));
      setFilteredProducts(updatedProducts);
    }

    if(showSearch && search) {
      updatedProducts = updatedProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.subCategory.toLowerCase().includes(search.toLowerCase()))
    }

    if(subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((product) => subCategory.includes(product.subCategory));
      setFilteredProducts(updatedProducts);
    }
    setFilteredProducts(updatedProducts);
  }



  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch])


  useEffect(() => {
    sortProducts(sortType);
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <div className='flex'></div>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={(e) => toggleCategory(e)}/>
              <span>Men</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={(e) => toggleCategory(e)}/>
              <span>Women</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={(e) => toggleCategory(e)}/>
              <span>Kids</span>
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={(e) => toggleSubCategory(e)}/>
              <span>Topwear</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={(e) => toggleSubCategory(e)}/>
              <span>Bottomwear</span>
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={(e) => toggleSubCategory(e)}/>
              <span>Winterwear</span>
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Sort Options */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 outline-none'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Price (Low to High)</option>
            <option value="high-low">Sort by: Price (High to Low)</option>
          </select>
        </div>
        {/* Products List */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filteredProducts.map((product, index) => (
            <ProductItem key={index}  image={product.image} name={product.name} price={product.price} id={product._id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection;