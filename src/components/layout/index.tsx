import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = (props: any) => (
  <>
    <Header />
      {props.children}
    <Footer />
  </>
)

export default Layout