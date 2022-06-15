import { useRef } from 'react'
import type { NextPage } from 'next'
import Bomou from '../src/models/bomou.model'
import Hero from '../src/components/hero/Hero'
import Header from '../src/models/header.model'
import Layout from '../src/components/layout/Layout'
import Contact from '../src/components/contact/Contact'
import { getBomou, getHeader } from '../src/services/fetch'
import TitleShare from '../src/components/titleShare/TitleShare'
import TextSlider from '../src/components/textSlider/TextSlider'
import TextBullets from '../src/components/textBullets/TextBullets'
import RowComponent from '../src/components/rowComponent/RowComponent'
import EcampPageText from '../src/components/ecampPageText/EcampPageText'
import CardsContainer from '../src/components/cardsContainer/CardsContainer'
import EcampStandardContainer from '../src/components/ecampStandardContainer/EcampStandardContainer'
import BomouIdGuide from '../src/components/bomouPage/bomouIdGuide/BomouIdGuide'


export const getStaticProps = async () => {
  const bomou = await getBomou();
  const header = await getHeader();
  return {
    props: {
      pageContent: bomou,
      header
    }
  }
}

declare interface BomouProps {
  pageContent: Bomou
  header: Header
}

const BomouPage : NextPage<BomouProps> = ({ pageContent, header } : BomouProps) => {
  const scrollToRef = useRef(null)

  return (
    <Layout header={header}>  
      <Hero
        contents={pageContent.hero}
        scrollToRef={scrollToRef}
        scroll={true}
      />
      <CardsContainer
        contents={pageContent.cards}
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
      />
      <TitleShare
        title={pageContent.bigTitle3}
        section={'first_title'}
        background={'gray4'}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer4}
        title={false}
        section={'no_title'}
      />
      <EcampPageText
        title={pageContent.imagesBottomTitle}
      />
      <TitleShare
        title={pageContent.bigTitle4}
        section={'first_title'}
        background={''}
      />
      <TextSlider
        contents={[pageContent.textSlider]}
        className={'section'}
      />
      <Contact 
        contents={pageContent.contact}
      />
    </Layout>
  )
}

export default BomouPage;