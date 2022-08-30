import Layout from '../src/components/layout/Layout';
import Whypage from '../src/models/entities/whypage.model';
import LayoutModel from '../src/models/generic/layout.model';
import { getWhypage, getHeader, getFooter } from '../src/services/fetch';
import WhyComponent from '../src/components/why/Why';

export const getStaticProps = async () => {  
  const whyPage = await getWhypage();
  const header = await getHeader();
  const footer = await getFooter();
  return {
    props: {
      pageContent: whyPage,
      header,
      footer
    }
  }
}

declare interface WhyPageProps extends LayoutModel {
  pageContent: Whypage
}

const Why = ({ pageContent, header, footer } : WhyPageProps) => (
  <Layout header={header} seoContent={pageContent.seo} footer={footer}>
    <WhyComponent pageContent={pageContent} />
  </Layout>    
)

export default Why;

