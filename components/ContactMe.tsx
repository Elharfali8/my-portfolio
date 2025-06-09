'use client'

import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import CopyToClipboard from './CopyToClipboard'
import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

const ContactMe = () => {
  return (
    <section id='contact-me' className='py-10 lg:py-16 '>
        <SectionTitle title='contact me' />
        <div className="container main-container grid place-items-center">
            
                <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="my-4 text-lg text-[#6B7280] dark:text-[#94A3B8] max-w-2xl text-center"
          >
            Feel free to reach out if you’re looking for a developer, have a question, or just want to connect.
          </motion.p>
          <div className='grid gap-y-3 place-items-center mb-4'>
                <CopyToClipboard mail={true} text='elharfali.youssef.20@gmail.com' />
                <CopyToClipboard mail={false} text='+212 611 76 56 59' />
          </div>
          <div className='grid place-items-center'>
            <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="my-4 text-lg text-[#6B7280] dark:text-[#94A3B8] max-w-2xl text-center"
          >
                You may also find me on these platforms!
          </motion.p>
                <div className='flex items-center gap-3'>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className='p-1 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all ease-in-out duration-150 hover:scale-105'
                    href={'/'}>
                        <Github />
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className='p-1 rounded-lg bg-gray-200 dark:bg-gray-800 transition-all ease-in-out duration-150 hover:scale-105'
                    href={'/'}>
                        <Linkedin />
                    </motion.a>
                </div>
          </div>
        </div>
    </section>
  )
}

export default ContactMe