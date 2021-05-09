import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-white px-8 md:px-16 lg:px-28 py-16'>
      <div className='bg-heroEllipse text-2xl rounded-full h-20 w-20 flex items-center justify-center mb-6'>
        🎉
      </div>
      <h2 className='text-black lg:text-medium font-bold text-base mb-6 text-center'>
        Thank you for sharing your story!
      </h2>
      <p className='text-success text-sm text-center lg:text-base my-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className='flex justify-end'>
        <Link href='/'>
          <a className='group relative py-2 px-8 border-transparent text-tiny lg:text-xs text-white bg-btn focus:outline-none  border-2 border-solid font-medium transition duration-500 ease-in-out capitalize md:text-base'>
            close
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Success
