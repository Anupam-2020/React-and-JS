import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const submitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {currentState === 'Login' ? <p>Forgot your password?</p> : <span></span>}
        {currentState === 'Login' 
        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:text-black'>Create Account</p> 
        : <div onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-black flex justify-end'><p>Login Here</p></div>}
      </div>
      <button className='bg-black text-white px-5 py-2 cursor-pointer'>{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>
    </form>
  )
}

export default Login;