import React, { useState } from 'react'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Section - Delivery Information */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={"INFORMATION"}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <input type="email" placeholder='Email Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <input type="text" placeholder='Address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <input type="text" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>
      {/* Right Section - Order Summary */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={"METHOD"}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            {/* Payment Method Options */}
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-black' : 'bg-transparent'}`}></p>
              <img src={assets.stripe_logo} alt="" className='h-5 mx-4'/>
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-black' : 'bg-transparent'}`}></p>
              <img src={assets.razorpay_logo} alt="" className='h-5 mx-4'/>
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-black' : 'bg-transparent'}`}></p>
              <p className='text-gray-500'>CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder;