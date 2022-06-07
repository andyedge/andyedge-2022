import { useRef } from 'react';
import type { NextPage } from 'next';
import Ecamp from '../src/models/ecamp.model';
import Hero from '../src/components/hero/Hero';
import Header from '../src/models/header.model';
import useDarkMode from "@fisch0920/use-dark-mode";
import Layout from '../src/components/layout/Layout';
import Contact from '../src/components/contact/Contact';
import { getEcamp, getHeader } from '../src/services/fetch';
import TextSlider from '../src/components/textSlider/TextSlider';
import EcampPageText from '../src/components/ecampPageText/EcampPageText';
import CardsContainer from '../src/components/cardsContainer/CardsContainer';
import EcampImgTextComp from '../src/components/ecampImgTextComp/EcampImgTextComp';
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
  const isDarkModeActive = darkMode.value;

  return (
    <Layout header={header}>
      <Hero
        contents={pageContent.hero}
        scrollToRef={scrollToRef}
        scroll={true}
      />
      <CardsContainer
        contents={pageContent.cardsContainer}
        scrollToRef={scrollToRef}
      />
      <EcampImgTextComp
        contents={pageContent.standardContainer1}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer2}
        title={true}
        bg={isDarkModeActive ? '#161616' : '#FFFFFF'}
        isNewSection={false}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer3}
        title={true}
        bg={isDarkModeActive ? '#161616' : '#FFFFFF'}
        isNewSection={false}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer4}
        title={true}
        bg={isDarkModeActive ? '#161616' : '#FFFFFF'}
        isNewSection={false}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer5}
        title={true}
        bg={isDarkModeActive ? '#161616' : '#FFFFFF'}
        isNewSection={false}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer6}
        title={true}
        bg={isDarkModeActive ? '#161616' : '#FAFAFA'}
        isNewSection={true}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer7}
        title={false}
        bg={isDarkModeActive ? '#161616' : '#F4F4F4'}
        isNewSection={true}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer8}
        title={false}
        bg={isDarkModeActive ? '#161616' : '#F4F4F4'}
        isNewSection={false}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer9}
        title={false}
        bg={isDarkModeActive ? '#161616' : '#F4F4F4'}
        isNewSection={false}
      />
      <EcampPageText
        title={pageContent.pageSubtitle}
        info={pageContent.pageText}
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