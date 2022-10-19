import '../src/styles/globals.scss'
import '../src/styles/app.sass'
import type { AppProps } from 'next/app'
import { useRouter }  from 'next/router'
import Loader from '../src/components/loader/Loader'
import { useEffect, useState } from 'react'
import Script from 'next/script'

const MyApp = ({ Component, pageProps } : AppProps ) => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const handleStartLoading = () => {
    setIsLoading(true)
  }

  const handleFinishLoading = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        strategy='afterInteractive'
      />
      <Script strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_TRACKING_ID}');
        `}
      </Script>
      <Component {...pageProps} />
      {isLoading && <Loader />}
    </>
  )
}

export default MyApp
