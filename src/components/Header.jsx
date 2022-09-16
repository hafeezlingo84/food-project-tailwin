import React from 'react';
import logo from '../images/food-logo.png';
import { MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';
import { motion } from 'framer-motion';

 const Header = () => {
  return (

    <header className='fixed z-50 w-screen p-6 px-16'>

        {/* {desktop & mobile} */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>

                <Link to={"/"} className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-10 object-cover'  />
                    <p className='text-headingColor text-xl font-bold'>Food Resturent</p>
                </Link>

            <div className='flex items-center gap-8'>
            <ul className='flex items-center gap-8'>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                  <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </ul>
                <div className='relative flex items-center justify-center'>
                  <MdShoppingBasket className='text-textColor text-2xl   cursor-pointer' />
                  <div className=' absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                    <p className='text-xs text-textWhite font-semibold'>2</p>
                  </div>
                </div>
                <motion.img whileTap={{ scale:0.6 }} src={avatar} className="w-10 min-w-[40px] min-h-[40px] cursor-pointer" alt="userProfile" />
            </div>
          </div>

        {/* {mobile} */}
        <div className='flex md:hidden w-full h-full bg-blue-500 p-4'></div>

    </header>
  );
};

export default Header;