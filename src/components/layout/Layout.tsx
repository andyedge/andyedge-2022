import{ FC } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LayoutModel from '../../models/generic/layout.model'
import Head from 'next/head'

const Layout: FC<LayoutModel> = (props: LayoutModel) => (
  <>
    <Head>
      <title>Andyedge</title>
    </Head>
    <Header data={props.header}/>
    {props.children}
    <Footer data={props.footer}/>
  </>
)

export default Layout