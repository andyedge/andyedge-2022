import Footer from '../entities/footer.model'
import Header from '../entities/header.model'

export default interface Layout {
    header: Header
    footer: Footer
    children: JSX.Element | JSX.Element[]
}