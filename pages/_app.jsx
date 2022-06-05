import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='text-white'>
      <Component {...pageProps} />
    </div>

  )
  
  
}

export default MyApp
