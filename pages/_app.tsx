import '../styles/globals.scss'
import '../styles/app.sass'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps } : AppProps ) => (
  <Component {...pageProps} />
)

export default MyApp
