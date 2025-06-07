'use client'
import { Logo } from '../Logo'
import { links } from '@/utils/links'
import Link from 'next/link'
import { DarkMode } from '../DarkMode'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'

type NavbarProps = {
    navIsOpen: boolean;
    handleNavToggle: () => void;
}

const Navbar = ({navIsOpen, handleNavToggle}:NavbarProps) => {
    const pathname = usePathname()

  return (
      <nav className=' border-[2px] rounded-2xl border-[#3B82F6] py-3  flex items-center justify-between px-2'>
          {/*  */}
          <Logo />
          {/*  */}
          <ul className='hidden lg:flex items-center gap-x-2'>
                {links.map((link) => {
                    const { id, title, path } = link
                    
                    return (
                        <li key={id}>
                            <Link href={path} className={`capitalize text-lg px-2  poppins-semibold ${pathname === path && 'text-[#3B82F6]'}`}>
                                {title}
                            </Link>
                        </li>
                    )
                })}
          </ul>
          {/*  */}
          <div className='flex items-center gap-x-2'>
              <DarkMode />
              <Button className='text-lg hidden lg:flex cursor-pointer'>
                  Download CV
              </Button>
              <div className='lg:hidden'>
                  <Button size='icon' onClick={handleNavToggle} className='cursor-pointer'>
                      {navIsOpen ? <X /> : <Menu />}
                </Button>
              </div>
              </div>
    </nav>
  )
}

export default Navbar