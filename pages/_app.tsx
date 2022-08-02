import '../styles/globals.scss'
import '../styles/app.sass'
import type { AppProps } from 'next/app'
import { useRouter }  from 'next/router'
import Loader from '../src/components/loader/Loader'
import { useEffect, useState } from 'react'


const MyApp = ({ Component, pageProps } : AppProps ) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true))
    router.events.on('routeChangeComplete', () => setIsLoading(false))
    router.events.on('routeChangeError', () => setIsLoading(false))
  }, [router])

  return (
    <>
      <Component {...pageProps} />
      <Loader showLoader={isLoading}/>
    </>
  )
}

export default MyApp
