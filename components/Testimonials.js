import Image from 'next/image'

const Testimonials = ({ data }) => {
  return (
    <section className='bg-white px-8 md:px-16 lg:px-28 py-20'>
      <div className='md:grid grid-cols-3 gap-6 md:gap-12'>
        {data.length > 1 ? (
          data.slice(0, 6).map((data) => (
            <div className='flex flex-col mb-12 lg:mb-0' key={data.sys.id}>
              <div className=''>
                {' '}
                <img
                  src={data.fields.image.fields.file.url}
                  alt={data.fields.name}
                  width={200}
                  height={200}
                />
              </div>
              <div className='flex flex-col my-4'>
                <p className='text-vendors text-base lg:text-2xl font-semibold capitalize'>
                  {data.fields.name}
                </p>
                <div className='flex items-center'>
                  <p className='text-venTest lg:text-lg text-sm my-2 capitalize mr-4'>
                    in {data.fields.location}
                  </p>
                  <div
                    className={
                      'border uppercase flex items-center justify-center px-4 py-1 border-solid rounded-sm text-tiny font-medium ' +
                      (data.fields.tag === 'customer'
                        ? ' text-cusText bg-cusBg'
                        : ' text-vendText bg-vendBg')
                    }
                  >
                    {data.fields.tag}
                  </div>
                </div>
              </div>
              <p className='text-sm lg:text-base text-vendors'>
                {data.fields.testimonial}
              </p>
            </div>
          ))
        ) : (
          <p className='text-base lg:text-lg text-white mb-12'>
            Loading testimonials
          </p>
        )}
      </div>
    </section>
  )
}

export default Testimonials
