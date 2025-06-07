import React from 'react'

const SectionTitle = ({ title }: { title: string }) => {
    
  return (
      <div className='grid place-items-center mb-8'>
          <h2 className='text-3xl lg:text-4xl poppins-bold text-center text-gray-800 dark:text-gray-200 capitalize'>
              {title}
          </h2>
    </div>
  )
}

export default SectionTitle