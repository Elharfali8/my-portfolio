'use client'
import Navbar from './Navbar'
import LinksDropdown from '../LinksDropdown'
import { useState } from 'react'

const Header = () => {
    const [navIsOpen, setNavIsOpen] = useState<boolean>(false)

    const handleNavToggle = () => {
        setNavIsOpen(!navIsOpen)
    }

  return (
      <header className='p-2 sticky top-0 left-0 right-0 bg-[#F9FAFB] dark:bg-[#0F172A] z-[99]'>
          <div className='relative container mx-auto'>
              <Navbar navIsOpen={navIsOpen} handleNavToggle={handleNavToggle} />
              <LinksDropdown navIsOpen={navIsOpen} handleNavToggle={handleNavToggle} />
          </div>
    </header>
  )
}

export default Header