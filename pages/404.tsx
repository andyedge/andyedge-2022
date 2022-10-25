import { useRef } from 'react';
import type { NextPage } from 'next';
import Layout from '../src/components/layout/Layout';
import Hero404 from '../src/components/hero404/hero404';
import Page404 from '../src/models/entities/page404.model';
import LayoutModel from '../src/models/generic/layout.model';
import { getHeader, getFooter, getPage404 } from '../src/services/fetch';

export const getStaticProps = async () => {  
  const page404 = await getPage404();
  const header = await getHeader();
  const footer = await getFooter();
  return {
    props: {
      pageContent: page404,
      header,
      footer
    }
  }
}

declare interface Page404Props extends LayoutModel {
  pageContent: Page404
}

const Home: NextPage<Page404Props> = ({ pageContent, header, footer } : Page404Props ) => {
  return (
    <Layout header={header} seoContent={pageContent.seoContent} footer={footer}>
      <Hero404
        contents={pageContent.hero}
      />
    </Layout>
  )
}

export default Home
