import{ FC } from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import HeaderModel from '../../models/header.model'

declare interface LayoutProps {
  header: HeaderModel,
  children: JSX.Element | JSX.Element[]
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => (
  <>
    <Header data={props.header}/>
      {props.children}
    <Footer />
  </>
)

export default Layout