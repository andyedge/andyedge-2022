//import type { NextPage } from 'next';
import Hero from '../src/components/hero/Hero';
import { createClient } from 'contentful';
import { useRef } from 'react';

export const getStaticProps = async () => {

  const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await contentfulClient.getEntries({
    content_type: 'whatPage'
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
    </>
  )
}

export default Home
