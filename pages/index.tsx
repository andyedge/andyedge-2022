import type { NextPage } from 'next';
import { useRef } from 'react';
import Hero from '../src/components/hero/Hero';
import Steps from '../src/components/steps/Steps';
import { getWhatpage } from '../src/services/fetch';
import Contact from '../src/components/contact/Contact';
import Solution from '../src/components/solution/Solution';
import CardBullets from '../src/components/cardBullets/CardBullets';
import TextBullets from '../src/components/textBullets/TextBullets';
import Whatpage from '../src/models/whatpage.model';

export const getStaticProps = async () => {  
  const res = await getWhatpage();

  return {
    props: {
      pageContent: res
    }
  }
}

declare interface WhatPageProps {
  pageContent: Whatpage
}

const Home: NextPage<WhatPageProps> = ({ pageContent } : WhatPageProps ) => {
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
        bg={'#FFFFFF'}
      />
      <CardBullets 
        contents={pageContent.standardContainer2}
        bg={'#FAFAFA'}
      />
      <TextBullets
        contents={pageContent.standardContainer3}
        section={'IdentityDesign'}
        bg={'#F4F4F4'}
      />
      <TextBullets
        contents={pageContent.standardContainer4}
        section={'DesignThinking'}
        bg={'#FAFAFA'}
      />
      <Solution
        solutionTitle={pageContent.solutionTitle}
        solutionText={pageContent.solutionText}
        solutionSubtitle={pageContent.solutionSubtitle}
        solutionSteps={pageContent.solutionSteps}
        solutionImages={pageContent.solutionImages}
        solutionBackgroundImage={pageContent.solutionBackgroundImage1}
      />
      <Contact 
        contents={pageContent.contactContainer}
      />
    </>
  )
}

export default Home
