import { useRef } from 'react';
import type { NextPage } from 'next';
import Hero from '../src/components/hero/Hero';
import useDarkMode from "@fisch0920/use-dark-mode";
import Layout from '../src/components/layout/Layout';
import Ecamp from '../src/models/entities/ecamp.model';
import Contact from '../src/components/contact/Contact';
import Header from '../src/models/entities/header.model';
import { getEcamp, getHeader } from '../src/services/fetch';
import TextSlider from '../src/components/textSlider/TextSlider';
import TitleShare from '../src/components/titleShare/TitleShare';
import CardsContainer from '../src/components/cardsContainer/CardsContainer';
import EcampImgSection from '../src/components/ecampImgSection/EcampImgSection';
import EcampImgTextComp from '../src/components/ecampImgTextComp/EcampImgTextComp';
import BigCaseStudyPageText from '../src/components/ecampPageText/BigCaseStudyPageText';
import EcampStandardContainer from '../src/components/ecampStandardContainer/EcampStandardContainer';

export const getStaticProps = async () => {
  const ecampPage = await getEcamp();
  const header = await getHeader();
  return {
    props: {
      pageContent: ecampPage,
      header
    }
  }
}

declare interface EcampProps {
  pageContent: Ecamp
  header: Header
}

const Ecamp: NextPage<EcampProps> = ({ pageContent, header } : EcampProps) => {
  const scrollToRef = useRef(null);
  const darkMode = useDarkMode(false);

  return (
    <Layout header={header}>
      <Hero
        contents={pageContent.hero}
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
        background={'white'}
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