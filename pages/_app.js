import Head from '../components/Head'
import Nav from '../components/Nav/Nav'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
