import { useRef } from 'react';
import type { NextPage } from 'next';
import Ecamp from '../src/models/ecamp.model';
import Hero from '../src/components/hero/Hero';
import { getEcamp } from '../src/services/fetch';
import Steps from '../src/components/steps/Steps';
import Contact from '../src/components/contact/Contact';
import CardsContainer from '../src/components/cardsContainer/CardsContainer';
import TextSlider from '../src/components/textSlider/TextSlider';

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