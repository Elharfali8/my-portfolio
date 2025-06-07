'use client'

import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

import pic from '@/public/assets/pic.jpeg'


const AboutMe = () => {
  return (
      <section className='pt-10 pb-14 lg:pb-20 lg:pt-16  bg-muted dark:bg-[#15223d]'>
          <SectionTitle title='about me' />
      <div className='container main-container grid lg:grid-cols-2 gap-8 items-center '>
        {/*  */}
              <div className='grid place-items-center relative z-[10]'>
                  <Image 
                      src={pic}
                      alt='About Me'
                      className='rounded-lg shadow-lg object-cover w-[400px] '
          />
          <div className='absolute top-[5%] md:top-[10%] left-1 sm:left-[5%] lg:left-[10%] w-[400px] h-full rounded-lg shadow-lg bg-gradient-to-r from-[#F9FAFB] to-[#F3F4F6] dark:from-[#1E293B] dark:to-[#111827] opacity-50 z-[-1]'></div>

        </div>
        {/*  */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl lg:text-3xl font-bold text-[#111827] dark:text-[#F8FAFC]"
          >Curious about me? Here you have it:</motion.h2>
          <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-4 text-lg text-[#6B7280] dark:text-[#94A3B8] max-w-2xl"
          >
            <span className='block '>
              I’m a passionate, self-taught frontend developer specializing in building sleek, responsive, and accessible web interfaces with React.js and modern tools like Next.js, TypeScript, TailwindCSS, and Framer Motion.
            </span>
            <br />
            <span className='block '>
              I care deeply about user experience, pixel-perfect design, and writing clean, maintainable code that performs well. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
              </span>
            <br />
            <span >
              My journey began a few years ago, and since then, I've continued to grow, learn, and take on new challenges. I'm constantly pushing myself to stay up-to-date with the latest in frontend development and build real-world projects that I'm proud to share.
              </span>
                        </motion.p>
        </div>
          </div>
    </section>
  )
}

export default AboutMe