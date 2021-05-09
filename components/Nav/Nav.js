import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <header>
      <nav className='px-8 md:px-16 lg:px-28 flex items-center justify-between py-3 border-b border-solid border-borderColor'>
        <div className=''>
          <Image
            src='/Vasiti-Logo-black 1.png'
            alt='Vasiti Logo'
            width={100}
            height={50}
          />
        </div>
        <div className='ml-auto md:hidden'>
          <button
            className='flex items-center h-6 w-6 outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaTimes
              className={navbarOpen ? 'block text-2xl text-black' : 'hidden'}
            />
            <GiHamburgerMenu
              className={navbarOpen ? 'hidden' : 'block text-2xl text-black'}
            />
          </button>
        </div>
        <div
          className={
            'w-full md:w-auto md:flex-grow md:flex md:items-center h-screen md:h-full  ' +
            (navbarOpen ? 'block' : ' hidden')
          }
        >
          <ul className='flex flex-col mt-4 md:flex-row md:items-center md:mt-0 md:pt-0 md:ml-auto justify-between lg:w-1/7 md:w-8/12 w-full h-1/3 md:h-full px-8 md:px-0'>
            <li>
              <Link href='/'>
                <a
                  href=''
                  className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
                >
                  about us
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a
                  href=''
                  className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
                >
                  stories
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a
                  href=''
                  className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
                >
                  contact
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a
                  href=''
                  className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
                >
                  login
                </a>
              </Link>
            </li>
            <li className='border border-transparent bg-btn flex items-center justify-center px-4 py-2 border-solid rounded-sm'>
              <Link href='/'>
                <a
                  href=''
                  className='text-white uppercase transition duration-150 ease-in-out hover:text-link text-sm'
                >
                  sign up
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className='px-8 md:px-16 lg:px-28 hidden w-full lg:block py-3 border-b border-solid border-borderColor shadow-sm '>
        <ul className='hidden lg:flex justify-between items-center pl-12 lg:w-4/5'>
          <li>
            <Link href='/'>
              <a
                href=''
                className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
              >
                marketplace
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a
                href=''
                className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
              >
                WHOLESALE CENTER
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a
                href=''
                className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
              >
                SELLER CENTER
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a
                href=''
                className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
              >
                SERVICES
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a
                href=''
                className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
              >
                INTERNSHIPS
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a
                href=''
                className='text-smaller text-link uppercase transition duration-150 ease-in-out hover:text-btn font-normal'
              >
                EVENTS
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </header>
  )
}

export default Nav
