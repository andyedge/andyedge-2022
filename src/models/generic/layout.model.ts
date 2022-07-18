import Footer from '../entities/footer.model'
import Header from '../entities/header.model'
import SeoContent from './seoContent.model'

export default interface Layout {
    header: Header
    seoContent?: SeoContent
    footer: Footer
    children: JSX.Element | JSX.Element[]
}