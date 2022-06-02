import { useRef } from 'react';
import type { NextPage } from 'next';
import Ecamp from '../src/models/ecamp.model';
import Hero from '../src/components/hero/Hero';
import { getEcamp } from '../src/services/fetch';
import Contact from '../src/components/contact/Contact';
import TextSlider from '../src/components/textSlider/TextSlider';
import CardsContainer from '../src/components/cardsContainer/CardsContainer';
import EcampStandardContainer from '../src/components/ecampStandardContainer/EcampStandardContainer';

export const getStaticProps = async () => {
  const res = await getEcamp();

  return {
    props: {
      pageContent: res
    }
  }
}

declare interface EcampProps {
  pageContent: Ecamp
}

const Ecamp: NextPage<EcampProps> = ({ pageContent }: EcampProps) => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero
        contents={pageContent.hero}
        scrollToRef={scrollToRef}
        scroll={true}
      />
      <CardsContainer
        contents={pageContent.cardsContainer}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer2}
        title={true}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer3}
        title={true}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer4}
        title={true}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer5}
        title={true}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer6}
        title={true}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer7}
        title={false}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer8}
        title={false}
      />
      <EcampStandardContainer
        contents={pageContent.standardContainer9}
        title={false}
      />
      <TextSlider
        contents={pageContent.textSliderItems}
        className={'section'}
      />
      <Contact 
        contents={pageContent.contactContainer}
      />
    </>
  )
}

export default Ecamp;