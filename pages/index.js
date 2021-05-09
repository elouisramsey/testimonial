import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Josiah from '../components/Josiah'
import Story from '../components/Story'
import Testimonalsagain from '../components/TestimonalsAgain'
import Testimonials from '../components/Testimonials'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'vasitiVendors',
    order: 'sys.createdAt'
  })

  return {
    props: {
      data: data.items
    }
  }
}

const index = ({ data }) => {
  return (
    <main className='h-screen'>
      <Hero />
      <Story />
      <Testimonials data={data} />
      <Josiah />
      <Testimonalsagain data={data} />
      <Footer />
    </main>
  )
}

export default index
