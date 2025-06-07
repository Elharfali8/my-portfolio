'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import pic from '@/public/assets/pic.jpeg'

const Hero = () => {
  return (
      <section className='h-[calc(100vh-80px)] grid place-items-center'>
          <div className='container main-container grid lg:grid-cols-2 h-full '>
            
              {/* ------- */}
              <div className='grid place-items-center'>
                  <div>
                  <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-bold text-[#111827] dark:text-[#F8FAFC]"
                        >
                          Hey, I'm <span className="text-[#3B82F6]">Youssef Elharfali</span>  👋
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mt-4 text-lg text-[#6B7280] dark:text-[#94A3B8] max-w-2xl mx-auto"
                        >
                        I'm a frontend developer specialized in React.js, focused on building fast, accessible, and visually engaging user interfaces. I love transforming ideas into responsive and interactive web experiences.
                        </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 flex flex-col sm:flex-row  gap-4"
                        >
                        <Link href='#contact-me' className="px-6 py-2 rounded-xl bg-[#3B82F6] text-white hover:bg-[#2563EB] transition-colors cursor-pointer poppins-semibold lg:text-lg">
                            Contact Me
                        </Link>
                        <Link href='#projects' className="px-6 py-2 rounded-xl border border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-colors cursor-pointer poppins-semibold lg:text-lg">
                            See Projects
                        </Link>
                        </motion.div>
                  </div>
                  
              </div>
              
              {/* ------- */}

              <div className='hidden lg:grid place-items-center'>
                  <Image
                    src={pic}
                    alt='Youssef Elharfali'
                    className='lg:w-[300px] lg:h-[300px] 2xl:w-[450px] 2xl:h-[450px] rounded-full object-cover shadow-lg dark:shadow-[#3B82F6]/20'
                    width={300}
                    height={300}
                    priority
                  />
              </div>
              
          </div>
    </section>
  )
}

export default Hero