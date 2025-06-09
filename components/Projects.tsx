import React from 'react'
import SectionTitle from './SectionTitle'
import { projects } from '@/lib/projects'
import MainCard from './MainCard'

const Projects = () => {
  return (
    <section className='py-10 lg:py-16  bg-muted dark:bg-[#15223d]'>
          <SectionTitle title='projects' />
          <div className='container main-container mt-6 lg:mt-12 grid md:grid-cols-2 lg:grid-cols-3  gap-6'>
              {projects.map((project) => {
                  const { id} = project
                  return (
                      <MainCard key={id} {...project} />
                  )
              }
              )}  
          </div>
          </section>
  )
}

export default Projects