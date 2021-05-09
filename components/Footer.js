import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmail({ [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email
    }
    console.log(userData)
  }

  return (
    <footer className='bg-footerBg px-8 md:px-16 lg:px-28'>
      <section className='flex flex-col-reverse lg:flex-row items-center justify-between'>
        <div className='lg:-mt-16'>
          <Image
            src='https://res.cloudinary.com/walking-voice-limited/image/upload/c_scale,f_auto,q_auto,w_437/v1620475233/vasiti/subscribe-banner_1_sr33gd.png'
            alt='Vasiti Customers'
            width={437}
            height={406}
            className='z-5'
          />
        </div>
        <div className='flex flex-col my-8'>
          <h3 className='text-base lg:text-4xl text-white mb-3'>
            Be a member <br />
            of our community 🎉
          </h3>
          <p className='text-sm text-white mb-8 lg:w-3/5'>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <div className=''>
            <form
              noValidate
              className='flex bg-form p-1 justify-between lg:w-3/5 items-center'
              onSubmit={handleSubmit}
            >
              <div className='flex flex-col'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-black'
                />
                <input
                  id='email'
                  autoComplete='off'
                  type='email'
                  placeholder='Enter your email address'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  className='block w-full md:text-sm text-tiny text-white bg-transparent focus:outline-none px-2 focus:ring-transparent h-full'
                />
              </div>
              <button
                type='submit'
                className='group relative py-2 px-8 border-black text-tiny lg:text-xs text-black bg-white focus:outline-none border-transparent border font-medium transition duration-500 ease-in-out uppercase md:text-base btn h-full'
              >
                subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className='md:grid-cols-5 grid-cols-2 grid gap-8 py-28'>
        <div className='flex flex-col'>
          <h1 className='text-white font-bold text-sm lg:text-base capitalize mb-4'>
            Company
          </h1>{' '}
          <ul className='flex flex-col'>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>About us</a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>Terms of Use</a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>
                  Privacy Policy
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>
                  Press & Media
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-white font-bold text-sm lg:text-base capitalize mb-4'>
            Products
          </h1>{' '}
          <ul className='flex flex-col'>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>Marketplace</a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>Magazine</a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>Seller</a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>Wholesale</a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>Services</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-white font-bold text-sm lg:text-base capitalize mb-4'>
            Careers
          </h1>{' '}
          <ul className='flex flex-col'>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>
                  Become a Campus Rep
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>
                  Become a Vasiti Influencer
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>
                  Become a Campus writer
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>
                  Become an Affiliate
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-white font-bold text-sm lg:text-base capitalize mb-4'>
            Get in touch
          </h1>{' '}
          <ul className='flex flex-col'>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>Contact us</a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>
                  Partner with us
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>
                  Advertise with us
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-white  text-tiny lg:text-sm'>Help/FAQs</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col col-span-2 lg:col-span-1'>
          <h1 className='text-white font-bold text-sm lg:text-base capitalize mb-4'>
            Join our community
          </h1>{' '}
          <ul className='flex justify-between w-1/2 lg:w-3/5'>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-footerBg bg-white text-xs rounded-full h-6 w-6 flex items-center justify-center'>
                  <FaFacebookF className='text-footerBg' />
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-footerBg bg-white text-xs rounded-full h-6 w-6 flex items-center justify-center'>
                  <FaInstagram className='text-footerBg' />
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-footerBg bg-white text-xs rounded-full h-6 w-6 flex items-center justify-center'>
                  <FaTwitter className='text-footerBg' />
                </a>
              </Link>
            </li>
            <li className='font-light h-full flex items-center py-2'>
              <Link href='/'>
                <a className='text-footerBg bg-white text-xs rounded-full h-6 w-6 flex items-center justify-center'>
                  <FaLinkedinIn className='text-footerBg' />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer
