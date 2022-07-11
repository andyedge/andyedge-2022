import { useRef } from 'react';
import type { NextPage } from 'next';
import Hero from '../src/components/hero/Hero';
import Steps from '../src/components/steps/Steps';
import Layout from '../src/components/layout/Layout';
import Contact from '../src/components/contact/Contact';
import Solution from '../src/components/solution/Solution';
import Whatpage from '../src/models/entities/whatpage.model';
import LayoutModel from '../src/models/generic/layout.model';
import CardBullets from '../src/components/cardBullets/CardBullets';
import TextBullets from '../src/components/textBullets/TextBullets';
import { getWhatpage, getHeader, getFooter } from '../src/services/fetch';

export const getStaticProps = async () => {  
  const whatPage = await getWhatpage();
  const header = await getHeader();
  const footer = await getFooter();
  return {
    props: {
      pageContent: whatPage,
      header,
      footer
    }
  }
}

declare interface WhatPageProps extends LayoutModel {
  pageContent: Whatpage
}

const Home: NextPage<WhatPageProps> = ({ pageContent, header, footer } : WhatPageProps ) => {
  const scrollToRef = useRef(null);
  return (
    <Layout header={header} footer={footer}>
      <Hero
        contents={pageContent.hero}
        functionType={''}
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
        section={'design_system'}
      />
      <CardBullets 
        contents={pageContent.standardContainer2}
        section={'visual_language'}
      />
      <TextBullets
        contents={pageContent.standardContainer3}
        section={'identity_design'}
      />
      <TextBullets
        contents={pageContent.standardContainer4}
        section={'design_thinking'}
      />
      <Solution 
        data={pageContent.solution}
      />
      <Contact 
        contents={pageContent.contactContainer}
      />
    </Layout>
  )
}

export default Home
