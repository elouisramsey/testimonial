import React, { useState } from 'react'
import { ImAttachment } from 'react-icons/im'
import Success from './Success'

const Form = (props) => {
  const hiddenFileInput = React.useRef(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  let image = null

  const handleClick = (event) => {
    event.preventDefault()
    hiddenFileInput.current.click()
  }

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    image = fileUploaded
  }

  const handleSubmit = (e) => {
    const data = new FormData()
    data.append('image', image)
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className='bg-white px-8 md:px-16 lg:px-28'>
      {isSubmitted ? (
        <Success />
      ) : (
        <form
          onSubmit={handleSubmit}
          className='flex flex-col bg-white overflow-hidden w-full py-8'
        >
          <h2 className='text-black lg:text-medium font-bold text-base mb-6'>
            Share your amazing story!
          </h2>
          <div className='mb-4 flex flex-col'>
            <label
              htmlFor='image'
              className='block text-sm font-normal text-input mb-4'
            >
              Upload your picture
            </label>
            <button
              onClick={handleClick}
              className='flex p-2 text-sm justify-between border w-full items-center rounded-md text-black border-solid'
            >
              <p>Choose image</p>
              <ImAttachment />
            </button>
            <input
              ref={hiddenFileInput}
              onChange={handleChange}
              type='file'
              name='image'
              style={{ display: 'none' }}
              className='block w-full md:text-sm text-tiny h-full bg-red focus:outline-none px-2 focus:ring-transparent '
            />
          </div>
          <div className='lg:grid-cols-2 grid gap-5 mt-4'>
            <div className='mb-4 flex flex-col'>
              <label
                htmlFor='firstName'
                className='block text-sm font-normal text-input mb-4 capitalize'
              >
                first name
              </label>
              <div className='flex p-2 text-sm justify-betwen border items-center rounded-md text-black border-solid'>
                {' '}
                <input
                  id='firstName'
                  autoComplete='off'
                  type='text'
                  name='firstName'
                  className='block w-full md:text-sm text-tiny bg-red focus:outline-none px-2 focus:ring-transparent text-black'
                />
              </div>
            </div>
            <div className='mb-4 flex flex-col'>
              <label
                htmlFor='lastName'
                className='block text-sm font-normal text-input mb-4 capitalize'
              >
                last name
              </label>
              <div className='flex p-2 text-sm justify-betwen border items-center rounded-md text-black border-solid'>
                <input
                  id='lastName'
                  autoComplete='off'
                  type='text'
                  name='lastName'
                  className='block w-full md:text-sm text-tiny bg-red focus:outline-none px-2 focus:ring-transparent text-black'
                />
              </div>
            </div>
          </div>
          <div className='mb-4 flex flex-col'>
            <label
              htmlFor='story'
              className='block text-sm font-normal text-input mb-4 capitalize'
            >
              Share your story
            </label>
            <div className='flex p-2 text-sm justify-betwen border items-center rounded-md text-black border-solid'>
              <textarea
                name='story'
                id='story'
                className='block w-full focus:ring-black md:text-sm text-tiny px-2 h-40 focus:outline-none resize-none text-tiny focus:ring-transparent text-black'
              />
            </div>
          </div>
          <div className='mb-4 flex flex-col'>
            <p className='block text-sm font-normal text-input mb-4'>
              What did you interact with Vasiti as?
            </p>
            <div className='flex items-center'>
              <input
                type='radio'
                id='customer'
                name='tag'
                value='customer'
                className='bg-btn'
              />
              <label
                htmlFor='customer'
                className='block text-sm font-normal text-input capitalize mx-2'
              >
                customer
              </label>
              <input
                type='radio'
                id='vendor'
                name='tag'
                value='vendor'
                className='bg-btn'
              />
              <label
                htmlFor='vendor'
                className='block text-sm font-normal text-input capitalize mx-2'
              >
                vendor
              </label>
            </div>
          </div>
          <div className='mb-4 flex flex-col'>
            <label
              htmlFor='city'
              className='block text-sm font-normal text-input mb-4 capitalize'
            >
              City or Higher Institution (for Students)
            </label>
            <div className='flex p-2 text-sm justify-betwen border items-center rounded-md text-black border-solid'>
              {' '}
              <input
                id='city'
                autoComplete='off'
                type='text'
                name='city'
                className='block w-full md:text-sm text-tiny focus:outline-none px-2 focus:ring-transparent text-black'
              />
            </div>
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='group relative py-2 px-8 border-transparent text-tiny lg:text-xs text-white bg-btn focus:outline-none  border-2 border-solid font-medium transition duration-500 ease-in-out capitalize md:text-base'
            >
              Share your story!
            </button>
          </div>
        </form>
      )}
    </section>
  )
}

export default Form
