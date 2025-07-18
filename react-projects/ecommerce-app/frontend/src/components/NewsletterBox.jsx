import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe to our Newsletter</p>
        <p className='text-gray-600'>Get the latest updates and offers.</p>
        <form onSubmit={onSubmitHandler} action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='enter your email' required/>
            <button type='submit' className='bg-black text-white px-10 py-4 text-xs'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox;