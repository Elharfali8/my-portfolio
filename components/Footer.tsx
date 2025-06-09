import React from 'react'

const Footer = () => {
  return (
      <footer className='bg-muted dark:bg-[#15223d] py-2 lg:py-6'>
          <div className="container main-container">
    <div className='py-4 text-center text-sm lg:text-lg text-gray-500 dark:text-gray-400'>
                  &copy; {new Date().getFullYear()} <span className='poppins-semibold dark:text-white  text-gray-800'>Youssef El Harfali</span>. All rights reserved.      
                  </div>
          </div>
    </footer>
  )
}

export default Footer