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
            {/* <BomouIdGuide
                contents={pageContent.standardContainer1}
            />
            <TitleShare
                title={pageContent.bigTitle2}
                section={'first_title'}
                background={'white'}
            />
            <TextBullets
                contents={pageContent.standardContainer2}
                section={'bomou'}
            />
            <RowComponent
                headContent={pageContent.standardContainer3}
                items={pageContent.consistencyItems}
            />
            <TitleShare
                title={pageContent.bigTitle3}
                section={'first_title'}
                background={'gray4'}
            />
            <BomouBrandId
                contents={pageContent.standardContainer4}
            />
            <BigCaseStudyPageText
                title={pageContent.imagesTitle}
                size={'size2'}
                textAlign={'center'}
            />
            <BomouImgSection
                image1={pageContent.image1}
                image2={pageContent.image2}
                image3={pageContent.image3}
                image4={pageContent.image4}
                image5={pageContent.image5}
            />
            <BigCaseStudyPageText
                title={pageContent.imagesBottomTitle}
                size={'size3'}
                textAlign={'center'}
            />
            <BomouDualBanner
                images={pageContent.bannerImages}
            />
            <TitleShare
                title={pageContent.bigTitle4}
                section={'first_title'}
                background={''}
            />
            <BomouSocialOutreach
                contents={pageContent.standardContainer5}
            />
            <Banner
                src={pageContent.image6}
                page={'bomou'}
            /> */}
            <TextSlider
                contents={[pageContent.testimonial]}
                className={'section'}
            />
            {/* <Contact
                contents={pageContent.contact}
            /> */}
        </Layout>
    )
}

export default BomouPage