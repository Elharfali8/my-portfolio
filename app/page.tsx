import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import React from 'react'

const HomePage = () => {
  return (
    <main className='bg-[#F9FAFB] dark:bg-[#0F172A]'>
      <Hero />
      <AboutMe />
      <Skills />
      <ContactMe />
    </main>
  )
}

export default HomePage