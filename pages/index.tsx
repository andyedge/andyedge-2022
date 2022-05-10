//import type { NextPage } from 'next';
import { useRef } from 'react';
import { createClient } from 'contentful';
import Hero from '../src/components/hero/Hero';
import Steps from '../src/components/steps/Steps';
import CardBullets from '../src/components/cardBullets/CardBullets';


export const getStaticProps = async () => {

  const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await contentfulClient.getEntries({
    content_type: 'whatPage',
    include: 10
  });

  return {
    props: {
      pageContent: res.items[0].fields
    }
  }
}

const Home = ({ pageContent }: any) => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero
        pageProps={pageContent.heroContainer.fields}
        scrollToRef={scrollToRef}
      />
      <Steps
        stepsTitle={pageContent.stepsContainerTitle}
        stepsText={pageContent.stepsContainerText}
        stepsArray={pageContent.stepsSection}
        scrollToRef={scrollToRef}
      />
      <CardBullets 
        contents={pageContent.standardContainer1}
      />
    </>
  )
}

export default Home
