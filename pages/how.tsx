import type { NextPage } from 'next'

import Layout from '../src/components/layout/Layout'
import How from '../src/models/entities/how.model'
import { getHow, getHeader, getFooter } from '../src/services/fetch'
import LayoutModel from '../src/models/generic/layout.model'
import HowHero from '../src/components/how/hero/Hero'
import HowGrid from '../src/components/how/howGrid/HowGrid'

export const getStaticProps = async () => {
    const how = await getHow()
    const header = await getHeader()
    const footer = await getFooter()
    return {
        props: {
            pageContent: how,
            header,
            footer
        }
    }
}

declare interface HowProps extends LayoutModel {
    pageContent: How
}

const HowPage: NextPage<HowProps> = ({ pageContent, header, footer } : HowProps) => {
    return (
        <Layout header={header} seoContent={pageContent.seo} footer={footer}>
            <div className='container'>
                <HowHero contents={pageContent.hero} />
                <HowGrid contents={pageContent} />
            </div>
        </Layout>
    )
}

export default HowPage