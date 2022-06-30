import{ FC } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LayoutModel from '../../models/generic/layout.model'

const Layout: FC<LayoutModel> = (props: LayoutModel) => (
  <>
    <Header data={props.header}/>
    {props.children}
    <Footer data={props.footer}/>
  </>
)

export default Layout