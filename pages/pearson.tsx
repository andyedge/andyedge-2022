import { useRef } from 'react'
import type { NextPage } from 'next'
import PearsonHero from '../src/components/pearson/pearsonHero/PearsonHero'
import Banner from '../src/components/banner/Banner'
import Layout from '../src/components/layout/Layout'
import Pearson from '../src/models/entities/pearson.model'
import Contact from '../src/components/contact/Contact'
import Header from '../src/models/entities/header.model'
import { getPearson, getHeader } from '../src/services/fetch'
import TitleShare from '../src/components/titleShare/TitleShare'
import TextSlider from '../src/components/textSlider/TextSlider'
import TextBullets from '../src/components/textBullets/TextBullets'
import RowComponent from '../src/components/rowComponent/RowComponent'
import CardsContainer from '../src/components/cardsContainer/CardsContainer'
import BomouIdGuide from '../src/components/bomouPage/bomouIdGuide/BomouIdGuide'
import BomouBrandId from '../src/components/bomouPage/bomouBrandId/BomouBrandId'
import BigCaseStudyPageText from '../src/components/ecampPageText/BigCaseStudyPageText'
import BomouImgSection from '../src/components/bomouPage/bomouImgSection/BomouImgSection'
import BomouDualBanner from '../src/components/bomouPage/bomouDualBanner/BomouDualBanner'
import BomouSocialOutreach from '../src/components/bomouPage/bomouSocialOutreach/BomouSocialOutreach'
import BulletPointsContainer from '../src/components/pearson/bulletPointsContainer/BulletPointsContainer'
import PearsonInfo from '../src/components/pearson/pearsonInfo/PearsonInfo'

export const getStaticProps = async () => {
    const bomou = await getPearson()
    const header = await getHeader()
    return {
        props: {
            pageContent: bomou,
            header
        }
    }
}

declare interface PearsonProps {
    pageContent: Pearson
    header: Header
}

const BomouPage: NextPage<PearsonProps> = ({ pageContent, header }: PearsonProps) => {
    const scrollToRef = useRef(null)
    return (
        <Layout header={header}>
            <PearsonHero
                contents={pageContent.hero}
                scrollToRef={scrollToRef}
                scroll={true}
            />
            <CardsContainer
                contents={pageContent.cards}
                scrollToRef={scrollToRef}
            />
            <BulletPointsContainer contents={pageContent.standardContainer1} />
            <PearsonInfo contents={pageContent} />
            <TextSlider
                contents={[pageContent.testimonial]}
                className={'section'}
            />
            <Contact
                contents={pageContent.bottomSection}
            />
        </Layout>
    )
}

export default BomouPage