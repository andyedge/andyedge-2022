import Whypage from "../src/models/entities/whypage.model";
import { getWhypage, getHeader, getFooter } from "../src/services/fetch";
import Platform from "../src/components/platform/Platform";
import ImageTextComp from "../src/components/imageText/ImageTextComp";
import WhyMainSection from "../src/components/whyMainSection/WhyMainSection";
import PortfolioContainer from "../src/components/portfolioContainer/PortfolioContainer";
import WhySecondSection from "../src/components/whySecondSection/WhySecondSection";
import Layout from '../src/components/layout/Layout';
import LayoutModel from '../src/models/generic/layout.model';

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

const Why = ({ pageContent, header, footer } : WhyPageProps) => {

  return (
    <Layout header={header} seoContent={pageContent.seo} footer={footer}>
      <div className="container-fluid">
        <WhyMainSection
          contents={pageContent.standardContainers}
        />
        <WhySecondSection
          content={pageContent.standardContainer1}
        />
        <Platform
          title1={pageContent.title1}
          stepsContainer={pageContent.stepsContainer}
        />
        <PortfolioContainer />
      </div>
    </Layout>    
  );
}

export default Why;

