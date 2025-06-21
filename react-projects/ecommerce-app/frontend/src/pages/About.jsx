import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            We are a team of passionate individuals committed to delivering the best e-commerce experience.
            With years of expertise in the industry, we strive to make online shopping seamless and enjoyable for everyone.
            Our platform is designed to offer a wide range of products, secure transactions, and fast delivery.
          </p>
          <p>
            Our mission is to provide high-quality products at competitive prices, while ensuring excellent customer service.
            We believe in building lasting relationships with our customers through transparency, reliability, and continuous improvement.
            Thank you for choosing us as your trusted shopping destination.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to provide high-quality products at competitive prices, while ensuring excellent customer service.
            We believe in building lasting relationships with our customers through transparency, reliability, and continuous improvement.
            Thank you for choosing us as your trusted shopping destination.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p>We ensure that all our products meet the highest quality standards, providing you with the best value for your money.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Customer Focus:</b>
            <p>We prioritize our customers' needs and feedback, continuously improving our services to enhance your shopping experience.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Innovation:</b>
            <p>We embrace change and continuously seek new ways to improve our platform and offerings.</p>
          </div>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About;