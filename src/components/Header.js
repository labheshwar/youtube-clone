import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faMagnifyingGlass,
  faMicrophone,
  faUser,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='grid grid-flow-col p-3 m-2 items-center shadow-md'>
      <div className='logo flex items-center col-span-1'>
        <FontAwesomeIcon icon={faBars} className='h-6' />
        <img
          src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg'
          alt='YouTube'
          className='h-16 mx-6'
        />
      </div>
      <div className='search col-span-10 text-center'>
        <input
          type='text'
          placeholder='Search'
          className='border border-gray-400 rounded-l-full p-1 px-3 w-1/2 h-10'
        />
        <button className='p-2 h-10 px-4 rounded-r-full  bg-black hover:bg-gray-700'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' />
        </button>
        <button className='rounded-full p-2 h-10 w-10 ml-1 bg-black hover:bg-gray-700'>
          <FontAwesomeIcon icon={faMicrophone} className='text-white' />
        </button>
      </div>
      <div className='header-icons col-span-1 flex justify-between mr-2'>
        <button className='rounded-full p-2 h-10 w-10 ml-1 bg-black hover:bg-gray-700'>
          <FontAwesomeIcon icon={faVideoCamera} className='text-white' />
        </button>
        <button className='rounded-full p-2 h-10 w-10 ml-1 bg-black hover:bg-gray-700'>
          <FontAwesomeIcon icon={faBell} className='text-white' />
        </button>
        <button className='rounded-full p-2 h-10 w-10 ml-1 bg-black hover:bg-gray-700'>
          <FontAwesomeIcon icon={faUser} className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default Header;
