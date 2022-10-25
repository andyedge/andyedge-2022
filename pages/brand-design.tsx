import { useRef } from 'react'
import type { NextPage } from 'next'
import Hero from '../src/components/hero/Hero'
import Banner from '../src/components/banner/Banner'
import Layout from '../src/components/layout/Layout'
import Bomou from '../src/models/entities/bomou.model'
import Contact from '../src/components/contact/Contact'
import LayoutModel from '../src/models/generic/layout.model'
import TitleShare from '../src/components/titleShare/TitleShare'
import TextSlider from '../src/components/textSlider/TextSlider'
import TextBullets from '../src/components/textBullets/TextBullets'
import RowComponent from '../src/components/rowComponent/RowComponent'
import { getBomou, getHeader, getFooter } from '../src/services/fetch'
import CardsContainer from '../src/components/cardsContainer/CardsContainer'
import BomouIdGuide from '../src/components/bomouPage/bomouIdGuide/BomouIdGuide'
import BomouBrandId from '../src/components/bomouPage/bomouBrandId/BomouBrandId'
import BigCaseStudyPageText from '../src/components/ecampPageText/BigCaseStudyPageText'
import BomouImgSection from '../src/components/bomouPage/bomouImgSection/BomouImgSection'
import BomouDualBanner from '../src/components/bomouPage/bomouDualBanner/BomouDualBanner'
import BomouSocialOutreach from '../src/components/bomouPage/bomouSocialOutreach/BomouSocialOutreach'
import Button from '../src/components/button/Button'

export const getStaticProps = async () => {
  const bomou = await getBomou();
  const header = await getHeader();
  const footer = await getFooter();
  return {
    props: {
      pageContent: bomou,
      header,
      footer
    }
  }
}

declare interface BomouProps extends LayoutModel {
  pageContent: Bomou
}

const BomouPage : NextPage<BomouProps> = ({ pageContent, header, footer } : BomouProps) => {
  const scrollToRef = useRef(null)

  return (
    <Layout header={header} seoContent={pageContent.seo} footer={footer}>  
      <Hero
        contents={pageContent.hero}
        functionType={'video'}
        scrollToRef={scrollToRef}
        scroll={true}
      />
      <CardsContainer
        contents={pageContent.cards}
        modals={pageContent.cardsModalContainer}
        scrollToRef={scrollToRef}
      />
      <TitleShare
        title={pageContent.bigTitle1}
        section={'first_title'}
        background={''}
      />
      <BomouIdGuide
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
        isTitle={true}
        hasSection={true}
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
      <RowComponent
        headContent={pageContent.standardContainer6}
        items={pageContent.design}
        hasSection={false}
      />
      <Banner
        images={[pageContent.image6]}
        page={'bomou'}
      />
      <TextSlider
        contents={pageContent.textSlider}
        className={'section'}
      />
      <Contact 
        contents={pageContent.contact}
      />
      <div className={'next-case-container'}>
        <Button link={pageContent.nextCase} size='big'/>
      </div>
    </Layout>
  )
}

export default BomouPage;