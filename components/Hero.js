import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='px-8 md:px-16 lg:px-28'>
      <div className='md:grid grid-cols-2'>
        <div className='pt-12 lg:pt-40'>
          <h1 className='lg:text-5xl text-lg font-bold text-black leading-relaxed'>
            Amazing
            <br /> Experiences from Our Wonderful Customers
          </h1>
          <p className='sm text-summary my-6 w-11/12'>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className=' flex items-center justify-center relative overflow-hidden'>
          <div className='heroBg bg-heroEllipse lg:-bottom-20' />
          <Image
            src='https://res.cloudinary.com/walking-voice-limited/image/upload/f_auto,q_auto/v1620475242/vasiti/Testimonial_image_1_ykasrl.png'
            alt='Vasiti Customers'
            width={536}
            height={538}
            className='z-5'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
