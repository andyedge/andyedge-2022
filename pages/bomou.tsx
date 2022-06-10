import { useRef } from 'react'
import type { NextPage } from 'next'
import Bomou from '../src/models/bomou.model'
import Hero from '../src/components/hero/Hero'
import { getBomou, getHeader } from '../src/services/fetch'
import Contact from '../src/components/contact/Contact'
import TextSlider from '../src/components/textSlider/TextSlider'
import CardsContainer from '../src/components/cardsContainer/CardsContainer'
import EcampStandardContainer from '../src/components/ecampStandardContainer/EcampStandardContainer'
import Layout from '../src/components/layout/Layout'
import Header from '../src/models/header.model'

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
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer2}
        title={true}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer3}
        title={true}
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