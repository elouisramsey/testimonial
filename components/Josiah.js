import Image from 'next/image'
import React from 'react'

const Josiah = () => {
  return (
    <section className='bg-heroEllipse px-8 md:px-16 lg:px-28'>
      <div className='md:grid flex flex-col-reverse grid-cols-2 pt-28 lg:gap-12'>
        <div className='pt-8 flex flex-col lg:pl-16'>
          <h2 className='text-link lg:text-medium font-bold text-xl'>
            Josiah’s Experience
          </h2>
          <div className='border border-otherBorder bg-josBg text-btn uppercase flex items-center justify-center px-4 py-2 border-solid rounded-sm w-2/5 text-smaller mt-1 mb-12'>
            vendor
          </div>
          <p className='text-sm lg:text-lg text-link mb-12'>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <div className='w-4/5 lg:w-3/5 mb-8 lg:mb-0'>
            <p className='uppercase lg:text-base text-sm text-btn'>
              Share your own story!
            </p>
            <Image
              src='/wave.png'
              alt='Vasiti Customers'
              width={220}
              height={12}
            />
          </div>
        </div>
        <div className=' flex items-center justify-center relative overflow-hidden'>
          <div className='heroBg bg-josBg -bottom-20' />
          <Image
            src='https://res.cloudinary.com/walking-voice-limited/image/upload/f_auto,q_auto/v1620475234/vasiti/woman-shoppingbag-card_1_mtwa2u.png'
            alt='Vasiti Customers'
            width={622}
            height={538}
            className='z-5'
          />
        </div>
      </div>
    </section>
  )
}

export default Josiah
