import { useRef } from 'react';
import type { NextPage } from 'next';
import Hero from '../src/components/hero/Hero';
import Layout from '../src/components/layout/Layout';
import Ecamp from '../src/models/entities/ecamp.model';
import Contact from '../src/components/contact/Contact';
import LayoutModel from '../src/models/generic/layout.model';
import TextSlider from '../src/components/textSlider/TextSlider';
import TitleShare from '../src/components/titleShare/TitleShare';
import { getEcamp, getHeader, getFooter } from '../src/services/fetch';
import EcampImgSlider from '../src/components/ecampImgSlider/EcampImgSlider';
import CardsContainer from '../src/components/cardsContainer/CardsContainer';
import EcampImgSection from '../src/components/ecampImgSection/EcampImgSection';
import EcampImgTextComp from '../src/components/ecampImgTextComp/EcampImgTextComp';
import BigCaseStudyPageText from '../src/components/ecampPageText/BigCaseStudyPageText';
import EcampStandardContainer from '../src/components/ecampStandardContainer/EcampStandardContainer';

export const getStaticProps = async () => {
  const ecampPage = await getEcamp();
  const header = await getHeader();
  const footer = await getFooter();
  return {
    props: {
      pageContent: ecampPage,
      header,
      footer
    }
  }
}

declare interface EcampProps extends LayoutModel {
  pageContent: Ecamp
}

const Ecamp: NextPage<EcampProps> = ({ pageContent, header, footer } : EcampProps) => {
  const scrollToRef = useRef(null);

  return (
    <Layout header={header} seoContent={pageContent.seo} footer={footer}>
      <Hero
        contents={pageContent.hero}
        functionType={'video'}
        scrollToRef={scrollToRef}
        scroll={true}
      />
      <CardsContainer
        contents={pageContent.cardsContainer}
        modals={pageContent.cardsModalContainer}
        scrollToRef={scrollToRef}
      />
      <TitleShare
        title={pageContent.bigTitle1}
        section={'first_title'}
        background={''}
      />
      <EcampImgTextComp
        contents={pageContent.standardContainer1}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer2}
        title={true}
        section={'standard'}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer3}
        title={true}
        section={'standard'}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer4}
        title={true}
        section={'standard'}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer5}
        title={true}
        section={'prototype'}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer6}
        title={true}
        section={'test'}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer7}
        title={true}
        section={'no_title'}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer8}
        title={false}
        section={'no_title'}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer9}
        title={false}
        section={'no_title'}
      />
      <TitleShare
        title={pageContent.bigTitle2}
        section={'second_title'}
        background={'white_alt'}
      />
      <EcampImgSection
        images={pageContent.pageImages}
        page='ecamp'
      />
      <BigCaseStudyPageText
        title={pageContent.pageSubtitle}
        info={pageContent.pageText}
        size={'size1'}
        textAlign={'left'}
      />
      <EcampImgSlider
        sliderImages={pageContent.sliderImages}
      />
      <TextSlider
        contents={pageContent.textSliderItems}
        className={'section'}
      />
      <Contact 
        contents={pageContent.contactContainer}
      />
    </Layout>
  )
}

export default Ecamp;