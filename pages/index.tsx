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
import useDarkMode from "@fisch0920/use-dark-mode";

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
  const darkMode = useDarkMode(false);
  const isDarkModeActive = darkMode.value;
  
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
        bg={isDarkModeActive ? '#000000' : '#FFFFFF'}
      />
      <CardBullets 
        contents={pageContent.standardContainer2}
        bg={isDarkModeActive ? '#000000' : '#FAFAFA'}
      />
      <TextBullets
        contents={pageContent.standardContainer3}
        section={'IdentityDesign'}
        bg={isDarkModeActive ? '#000000' : '#F4F4F4'}
      />
      <TextBullets
        contents={pageContent.standardContainer4}
        section={'DesignThinking'}
        bg={isDarkModeActive ? '#000000' : '#FAFAFA'}
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
