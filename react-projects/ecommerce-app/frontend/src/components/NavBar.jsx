import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
    const [visible, setVisible] = React.useState(false);
    const {setShowSearch, showSearch, getCartItems} = useContext(ShopContext);
    const params = useLocation().pathname;
    
  return (
    <div className='flex justify-between items-center py-4 font-medium'>
        <Link to='/'><img src={assets.logo} alt="Logo" className='w-36'/></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink className='flex flex-col items-center gap-1' to='/'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to='/collection'>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to='/about'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to='/contact'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            {params === '/collection' && <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className='w-6 h-6 cursor-pointer' alt=''/>}
            <div className='group relative'>
                <Link to={'/login'}>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt=''/>
                </Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>Profile</p>
                        <p className='cursor-pointer hover:text-black'>Settings</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 cursor-pointer min-w-5' alt=''/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartItems()}</p>
            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=''/>
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar;