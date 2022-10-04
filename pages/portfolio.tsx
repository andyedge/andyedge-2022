import type { NextPage, GetStaticProps } from 'next'

import Layout from '../src/components/layout/Layout'
import Portfolio from '../src/models/entities/portfolio.model'
import { getPortfolio, getHeader, getFooter } from '../src/services/fetch'
import LayoutModel from '../src/models/generic/layout.model'
import PortfolioContainer from '../src/components/portfolioContainer/PortfolioContainer'

export const getStaticProps: GetStaticProps = async () => {
    const portfolio = await getPortfolio()
    const header = await getHeader()
    const footer = await getFooter()
    return {
        props: {
            pageContent: portfolio,
            header,
            footer
        }
    }
}

declare interface PortfolioProps extends LayoutModel {
    pageContent: Portfolio
}

const PortfolioPage: NextPage<PortfolioProps> = ({ pageContent, header, footer } : PortfolioProps) => {
    return (
        <Layout header={header} seoContent={pageContent.seo} footer={footer}>
            <PortfolioContainer contents={pageContent}/>
        </Layout>
    )
}

export default PortfolioPage