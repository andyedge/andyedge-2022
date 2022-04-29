import Header from '../header/Header'

const Layout = (props: any) => (
    <>
        <Header />
        {props.children}
        {/* <Footer /> */}
    </>
)

export default Layout