import Image from 'next/image'

const Story = () => {
  return (
    <section className='bg-story md:px-16 lg:px-28 px-8'>
      <div className='md:grid flex flex-col-reverse grid-cols-2 pt-28 overflow-hidden'>
        <div className=' flex items-center justify-center relative overflow-hidden'>
          <div className='heroBg bg-elipse -bottom-20' />
          <Image
            src='https://res.cloudinary.com/walking-voice-limited/image/upload/f_auto,q_auto/v1620475234/vasiti/black-beautiful-ladies-smiling_1_aiunoe.png'
            alt='Vasiti Customers'
            width={536}
            height={538}
            className='z-5'
          />
        </div>
        <div className='pt-8 flex flex-col lg:pl-16'>
          <h2 className='text-white lg:text-medium font-bold text-xl'>
            Tolu & Joy’s Experience
          </h2>
          <div className='border border-otherBorder bg-transparent text-white uppercase flex items-center justify-center px-1 lg:px-4 py-2 border-solid rounded-sm w-2/5 lg:w-1/5 text-tiny lg:text-smaller mt-1 mb-12'>
            customer
          </div>
          <p className='text-sm lg:text-lg text-white mb-12'>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <div className='w-4/5 lg:w-3/5'>
            <p className='uppercase text-sm lg:text-base text-white'>
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
      </div>
    </section>
  )
}

export default Story
