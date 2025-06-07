import React from 'react'
import SectionTitle from './SectionTitle'
import { skillsIcons } from '@/utils/skillsIcons'
import Image from 'next/image'

const Skills = () => {
  return (
    <section id='skills' className='py-10 lg:py-16'>
          <SectionTitle title='skills' />
          <div className='container main-container  mt-6 lg:mt-12'>
              <div className='flex flex-wrap gap-14 items-center justify-center max-w-5xl mx-auto'>
              {skillsIcons.map((skill) => {
                  const { id, name, icon } = skill
                  return (
                      <div className='grid place-items-center rounded-lg bg-muted shadow-lg p-2 dark:bg-[#15223d]  gap-2' key={id}>
                          <Image
                          src={icon}
                          alt={name}
                          key={id}
                          width={64}
                          height={64}
                          className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform duration-300 ease-in-out hover:scale-110'
                          />
                            <p className='text-sm md:text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-200'>
                              {name}
                              </p>
                      </div>
                  )
              })}
              </div>
              
          </div>
    </section>
  )
}

export default Skills