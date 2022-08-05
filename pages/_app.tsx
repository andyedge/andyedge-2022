import '../styles/globals.scss'
import '../styles/app.sass'
import type { AppProps } from 'next/app'
import { useRouter }  from 'next/router'
import Loader from '../src/components/loader/Loader'
import { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps } : AppProps ) => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const handleStartLoading = () => {
    setIsLoading(true)
  }

  const handleFinishLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleFinishLoading()
    }
  }, [])

  useEffect(() => {
    router.events.on('routeChangeStart', handleStartLoading)
    router.events.on('routeChangeComplete', handleFinishLoading)
    router.events.on('routeChangeError', handleFinishLoading)

    return () => {
      router.events.off('routeChangeStart', handleStartLoading)
      router.events.off('routeChangeComplete', handleFinishLoading)
      router.events.off('routeChangeError', handleFinishLoading)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      {isLoading && <Loader />}
    </>
  )
}

export default MyApp
