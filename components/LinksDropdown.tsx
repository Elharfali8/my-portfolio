
import { links } from '@/utils/links'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

type NavbarProps = {
    navIsOpen: boolean;
    handleNavToggle: () => void;
}

const LinksDropdown = ({navIsOpen, handleNavToggle}:NavbarProps) => {
  return (
    <div className={`lg:hidden absolute w-full max-w-[180px] p-3 bg-white dark:bg-sky-950 border rounded-lg right-2 top-[110%]  shadow ${navIsOpen ? 'translate-y-0 opacity-100 z-[99]' : 'translate-y-[-20px] opacity-0 z-[0]'} transition-all duration-300 ease-in-out`}>
          <ul className='flex flex-col gap-y-2'>
          {links.map((link) => {
                    const { id, title, path } = link
                    
                    return (
                        <li key={id} className='border pl-1 rounded-lg py-1'>
                            <Link href={path} className=' capitalize ' onClick={handleNavToggle} >
                                {title}
                            </Link>
                        </li>
                    )
                })}
          </ul>
          <div className='border-t mt-2 pt-2'>
              <Button className='w-full cursor-pointer'>
                    Download CV
              </Button>
          </div>
    </div>
  )
}

export default LinksDropdown