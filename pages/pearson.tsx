import { useRef } from 'react'
import type { NextPage } from 'next'
import PearsonHero from '../src/components/pearson/pearsonHero/PearsonHero'
import Layout from '../src/components/layout/Layout'
import Pearson from '../src/models/entities/pearson.model'
import Contact from '../src/components/contact/Contact'
import { getPearson, getHeader, getFooter } from '../src/services/fetch'
import TextSlider from '../src/components/textSlider/TextSlider'
import CardsContainer from '../src/components/cardsContainer/CardsContainer'
import BulletPointsContainer from '../src/components/pearson/bulletPointsContainer/BulletPointsContainer'
import PearsonInfo from '../src/components/pearson/pearsonInfo/PearsonInfo'
import LayoutModel from '../src/models/generic/layout.model'

export const getStaticProps = async () => {
    const bomou = await getPearson()
    const header = await getHeader()
    const footer = await getFooter()
    return {
        props: {
            pageContent: bomou,
            header,
            footer
        }
    }
}

declare interface PearsonProps extends LayoutModel {
    pageContent: Pearson
}

const BomouPage: NextPage<PearsonProps> = ({ pageContent, header, footer } : PearsonProps) => {
    const scrollToRef = useRef(null)
    return (
        <Layout header={header} seoContent={pageContent.seo} footer={footer}>
            <PearsonHero
                contents={pageContent.hero}
                scrollToRef={scrollToRef}
                scroll={true}
            />
            <CardsContainer
                contents={pageContent.cards}
                modals={pageContent.cardsModalContainer}
                scrollToRef={scrollToRef}
            />
            <BulletPointsContainer contents={pageContent.standardContainer1} />
            <PearsonInfo contents={pageContent} />
            <TextSlider
                contents={pageContent.testimonial}
                className={'section'}
            />
            <Contact
                contents={pageContent.bottomSection}
            />
        </Layout>
    )
}

export default BomouPage