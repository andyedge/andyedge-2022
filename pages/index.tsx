//import type { NextPage } from 'next';
import { useRef } from 'react';
import { getWhatpage } from '../src/services/fetch';
import Hero from '../src/components/hero/Hero';
import Steps from '../src/components/steps/Steps';
import CardBullets from '../src/components/cardBullets/CardBullets';
import TextBullets from '../src/components/textBullets/TextBullets';


export const getStaticProps = async () => {  
  const res = await getWhatpage();

  return {
    props: {
      pageContent: res
    }
  }
}

const Home = ({ pageContent }: any) => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero
        contents={pageContent.hero}
        scrollToRef={scrollToRef}
        scroll={true}
      />
      <Steps
        stepsTitle={pageContent.stepsTitle}
        stepsText={pageContent.stepsText}
        stepsArray={pageContent.stepsSection}
        scrollToRef={scrollToRef}
      />
      <CardBullets 
        contents={pageContent.standardContainer1}
      />
      <CardBullets 
        contents={pageContent.standardContainer2}
      />
      <Hero
        contents={pageContent.standardContainer3}
        scrollToRef={scrollToRef}
        scroll={false}
      />
      <TextBullets
        contents={pageContent.standardContainer4}
      />
    </>
  )
}

export default Home
