import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>123 E-commerce St.</p>
          <p className='text-gray-500'>Shop City, SC 12345</p>
          <p className='text-gray-500'>Phone: (123) 456-7890</p>
          <p className='text-gray-500'>Email: support@example.com</p>
          <p className='text-gray-800'>Careers at Forever</p>
          <button className='border border-black px-8 py-4 hover:bg-black hover:text-white transition duration-300 ease-in-out cursor-pointer'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact;