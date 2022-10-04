import type { NextPage } from 'next'

import Layout from '../src/components/layout/Layout'
import PrivacyModel from '../src/models/entities/privacy.model'
import { getPrivacy, getHeader, getFooter } from '../src/services/fetch'
import LayoutModel from '../src/models/generic/layout.model'
import Privacy from '../src/components/privacy/Privacy'

export const getStaticProps = async () => {
    const privacy = await getPrivacy()
    const header = await getHeader()
    const footer = await getFooter()
    return {
        props: {
            pageContent: privacy,
            header,
            footer
        }
    }
}

declare interface PrivacyProps extends LayoutModel {
    pageContent: PrivacyModel
}

const PrivacyPage: NextPage<PrivacyProps> = ({ pageContent, header, footer } : PrivacyProps) => {
    return (
        <Layout header={header} footer={footer} seoContent={pageContent.seo}>
            <Privacy contents={pageContent}/>
        </Layout>
    )
}

export default PrivacyPage